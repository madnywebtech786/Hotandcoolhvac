#!/usr/bin/env node

/**
 * convert-to-webp.mjs
 *
 * Reusable image -> WebP converter. Drop this file into any project's
 * scripts/ folder, `npm i -D sharp`, and run it.
 *
 * Usage:
 *   node scripts/convert-to-webp.mjs <folder> [options]
 *
 * Examples:
 *   node scripts/convert-to-webp.mjs public/images
 *   node scripts/convert-to-webp.mjs public/images/projects --prefix project
 *   node scripts/convert-to-webp.mjs public/images --recursive --quality 90
 *   node scripts/convert-to-webp.mjs public/images --prefix project --delete-original
 *
 * Options:
 *   --prefix <name>       Rename output files to <name>-1.webp, <name>-2.webp, ...
 *                         Numbering follows alphabetical order of the source filenames.
 *                         Omit to keep each file's original name (just swap extension).
 *   --quality <1-100>     WebP quality. Default: 82.
 *   --recursive           Also convert images in subfolders (preserves subfolder structure).
 *   --delete-original     Remove the source file after a successful conversion.
 *   --overwrite           Overwrite an existing .webp output if one is already there.
 *   --dry-run             Print what would happen without writing/deleting anything.
 *   --start <n>           First number used with --prefix. Default: 1.
 *   --help                Show this help text.
 *
 * Notes:
 *   - Only common raster formats are converted: .jpg .jpeg .png .tiff .gif .avif .bmp
 *   - .webp and .svg files are skipped (already web-optimized / vector).
 *   - Without --prefix, name collisions (e.g. photo.jpg and photo.png in the
 *     same folder) are auto-suffixed (photo.webp, photo-2.webp) so nothing is lost.
 */

import { parseArgs } from "node:util";
import { readdir, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const CONVERTIBLE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".tiff",
  ".tif",
  ".gif",
  ".avif",
  ".bmp",
]);

function printHelp() {
  console.log(`
convert-to-webp.mjs — batch-convert images to WebP

Usage:
  node scripts/convert-to-webp.mjs <folder> [options]

Options:
  --prefix <name>       Output as <name>-1.webp, <name>-2.webp, ... (alphabetical order)
  --quality <1-100>     WebP quality (default: 82)
  --recursive           Include subfolders, preserving structure
  --delete-original     Delete the source file after a successful conversion
  --overwrite           Overwrite existing .webp output files
  --dry-run             Preview actions without touching the filesystem
  --start <n>           First number for --prefix numbering (default: 1)
  --help                Show this help text
`);
}

async function parseCliArgs(argv) {
  const { values, positionals } = parseArgs({
    args: argv,
    allowPositionals: true,
    options: {
      prefix: { type: "string" },
      quality: { type: "string", default: "82" },
      recursive: { type: "boolean", default: false },
      "delete-original": { type: "boolean", default: false },
      overwrite: { type: "boolean", default: false },
      "dry-run": { type: "boolean", default: false },
      start: { type: "string", default: "1" },
      help: { type: "boolean", default: false },
    },
  });

  return {
    help: values.help,
    targetDir: positionals[0],
    prefix: values.prefix?.trim() || null,
    quality: clampInt(Number.parseInt(values.quality, 10), 1, 100, 82),
    recursive: values.recursive,
    deleteOriginal: values["delete-original"],
    overwrite: values.overwrite,
    dryRun: values["dry-run"],
    start: clampInt(Number.parseInt(values.start, 10), 0, Number.MAX_SAFE_INTEGER, 1),
  };
}

function clampInt(value, min, max, fallback) {
  if (Number.isNaN(value)) return fallback;
  return Math.min(Math.max(value, min), max);
}

async function collectImageFiles(dir, recursive) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (recursive) {
        files.push(...(await collectImageFiles(fullPath, recursive)));
      }
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (CONVERTIBLE_EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

function buildOutputPath({ filePath, targetDir, prefix, index, usedNames }) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, path.extname(filePath));

  let outputName = prefix ? `${prefix}-${index}` : base;

  // Guard against collisions when files with different extensions share a
  // base name (e.g. photo.jpg + photo.png), or when a prefixed name repeats.
  let candidate = `${outputName}.webp`;
  let suffix = 2;
  while (usedNames.has(path.join(dir, candidate))) {
    candidate = `${outputName}-${suffix}.webp`;
    suffix += 1;
  }
  usedNames.add(path.join(dir, candidate));

  return path.join(dir, candidate);
}

async function convertFile({ filePath, outputPath, quality, dryRun }) {
  if (dryRun) return;
  await mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(filePath).webp({ quality }).toFile(outputPath);
}

async function main() {
  const options = await parseCliArgs(process.argv.slice(2));

  if (options.help || !options.targetDir) {
    printHelp();
    process.exit(options.help ? 0 : 1);
  }

  const targetDir = path.resolve(process.cwd(), options.targetDir);

  const dirStat = await stat(targetDir).catch(() => null);
  if (!dirStat || !dirStat.isDirectory()) {
    console.error(`Error: "${options.targetDir}" is not a valid directory.`);
    process.exit(1);
  }

  const files = (await collectImageFiles(targetDir, options.recursive)).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );

  if (files.length === 0) {
    console.log(`No convertible images found in "${options.targetDir}".`);
    return;
  }

  console.log(
    `Found ${files.length} image${files.length === 1 ? "" : "s"} in "${options.targetDir}"${
      options.recursive ? " (recursive)" : ""
    }.`
  );
  if (options.dryRun) console.log("Dry run — no files will be written or deleted.\n");

  const usedNames = new Set();
  let converted = 0;
  let skipped = 0;
  let deleted = 0;

  for (const [i, filePath] of files.entries()) {
    const index = options.start + i;
    const outputPath = buildOutputPath({
      filePath,
      targetDir,
      prefix: options.prefix,
      index,
      usedNames,
    });

    const relIn = path.relative(process.cwd(), filePath);
    const relOut = path.relative(process.cwd(), outputPath);

    const outputExists = await stat(outputPath).catch(() => null);
    if (outputExists && !options.overwrite) {
      console.log(`SKIP   ${relIn} -> ${relOut} (already exists, use --overwrite)`);
      skipped += 1;
      continue;
    }

    try {
      await convertFile({ filePath, outputPath, quality: options.quality, dryRun: options.dryRun });
      console.log(`${options.dryRun ? "PLAN " : "DONE "}  ${relIn} -> ${relOut}`);
      converted += 1;

      if (options.deleteOriginal && !options.dryRun) {
        await rm(filePath);
        deleted += 1;
      }
    } catch (error) {
      console.error(`FAIL   ${relIn}: ${error.message}`);
    }
  }

  console.log(
    `\n${options.dryRun ? "Would convert" : "Converted"} ${converted}, skipped ${skipped}${
      options.deleteOriginal ? `, deleted ${deleted} original${deleted === 1 ? "" : "s"}` : ""
    }.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
