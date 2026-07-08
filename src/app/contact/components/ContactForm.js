"use client";

import { useState } from "react";
import { Phone, User, MapPin, FileText, Send, Loader2, CheckCircle2, ClipboardList } from "lucide-react";
import ServiceMultiSelect from "../../components/ServiceMultiSelect";
import CoverageMap from "./CoverageMap";

const INITIAL_FORM = {
  name: "",
  phone: "",
  address: "",
  notes: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [selectedServices, setSelectedServices] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, services: selectedServices }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
      setSelectedServices([]);
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section id="contact-form" className="relative scroll-mt-28 overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* Left column: coverage map + reassurance */}
          <div className="flex flex-col gap-6">
            <CoverageMap />

            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface-raised px-5 py-4 shadow-soft">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
              </span>
              <span className="font-sans text-sm font-medium text-ink-soft">
                24/7 emergency response across Calgary &amp; surrounding areas
              </span>
            </div>
          </div>

          {/* Right column: form panel styled as a service ticket */}
          <div className="rounded-4xl border border-line bg-surface-raised p-6 shadow-lift sm:p-9">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="bg-gradient-brand flex h-16 w-16 items-center justify-center rounded-2xl shadow-lift">
                  <CheckCircle2 className="h-8 w-8 text-white" strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  Request received
                </h3>
                <p className="mt-2 max-w-xs font-sans text-sm leading-relaxed text-ink-soft">
                  We'll be in touch shortly to schedule your service. For
                  anything urgent, feel free to call us directly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-sans text-sm font-semibold text-arc-600 transition-colors hover:text-ember-600"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between border-b border-line pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line-strong bg-surface-alt text-arc-600">
                      <ClipboardList className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span>
                      <span className="block font-display text-base font-bold text-ink">
                        Service request
                      </span>
                      <span className="block font-sans text-xs text-ink-faint">
                        Takes under a minute
                      </span>
                    </span>
                  </div>
                  <span className="hidden rounded-full border border-line-strong bg-surface-alt px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-faint sm:inline-flex">
                    Free estimate
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="font-sans text-sm font-semibold text-ink">Name</span>
                      <span className="relative">
                        <User
                          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
                          strokeWidth={2}
                        />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange("name")}
                          placeholder="Your full name"
                          className="w-full rounded-2xl border border-line-strong bg-surface py-3.5 pl-11 pr-4 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-arc-500 focus:outline-none"
                        />
                      </span>
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="font-sans text-sm font-semibold text-ink">Phone</span>
                      <span className="relative">
                        <Phone
                          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
                          strokeWidth={2}
                        />
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange("phone")}
                          placeholder="(403) 555-0199"
                          className="w-full rounded-2xl border border-line-strong bg-surface py-3.5 pl-11 pr-4 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-arc-500 focus:outline-none"
                        />
                      </span>
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="font-sans text-sm font-semibold text-ink">
                      Services needed
                    </span>
                    <ServiceMultiSelect value={selectedServices} onChange={setSelectedServices} />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-sans text-sm font-semibold text-ink">Address</span>
                    <span className="relative">
                      <MapPin
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
                        strokeWidth={2}
                      />
                      <input
                        type="text"
                        required
                        value={form.address}
                        onChange={handleChange("address")}
                        placeholder="Street address, Calgary"
                        className="w-full rounded-2xl border border-line-strong bg-surface py-3.5 pl-11 pr-4 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-arc-500 focus:outline-none"
                      />
                    </span>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-sans text-sm font-semibold text-ink">
                      Notes <span className="font-normal text-ink-faint">(optional)</span>
                    </span>
                    <span className="relative">
                      <FileText
                        className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-ink-faint"
                        strokeWidth={2}
                      />
                      <textarea
                        rows={4}
                        value={form.notes}
                        onChange={handleChange("notes")}
                        placeholder="Tell us more about the issue you're having..."
                        className="w-full resize-none rounded-2xl border border-line-strong bg-surface py-3.5 pl-11 pr-4 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-arc-500 focus:outline-none"
                      />
                    </span>
                  </label>

                  {error ? (
                    <p className="font-sans text-sm font-medium text-ember-600">{error}</p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-gradient-brand mt-2 inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.25} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" strokeWidth={2.25} />
                        Request service
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
