// Splits a heading so its final word can be rendered with the brand
// gradient, matching the treatment every section on the site uses.
// Kept to a single word: the gradient sweeps the full OKLCH hue range,
// so accenting more than one word on long headings reads as a rainbow.
export function splitHeading(title) {
  const words = title.split(" ");
  const splitPoint = Math.max(words.length - 1, 1);
  return {
    lead: words.slice(0, splitPoint).join(" "),
    accent: words.slice(splitPoint).join(" "),
  };
}
