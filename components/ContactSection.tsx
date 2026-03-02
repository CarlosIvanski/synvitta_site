"use client";

import { FormEvent, useState } from "react";
import { FadeInSection } from "./FadeInSection";

const areasOfInterest = [
  "Distribution",
  "Clinical Laboratory",
  "Partnership",
  "General Inquiry",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <FadeInSection delay={0.12}>
      <section
        id="contact"
        className="section-max-width min-h-screen py-24"
        aria-labelledby="contact-heading"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <div className="pill">Contact Us</div>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              Structured collaborations for{" "}
              <span className="gradient-text">clinical diagnostics</span>.
            </h2>
            <p className="text-base text-slate-200 sm:text-lg">
              For distribution inquiries, laboratory partnerships, or
              collaboration opportunities, please contact our team using the
              form. Synvitta is prepared to support structured engagement with
              clinical laboratories and diagnostic partners.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="font-medium text-slate-200">
                Areas of collaboration:
              </p>
              <ul className="flex flex-wrap gap-2">
                {areasOfInterest.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://www.linkedin.com/in/rainara-almeida-a09579119/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-white"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900/80 text-xs font-semibold">
                in
              </span>
              <span>Connect via LinkedIn</span>
            </a>
          </div>
          <div className="glass-surface border-white/20 p-6 sm:p-7">
            <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="h-9 w-full rounded-lg border border-white/15 bg-slate-900/70 px-3 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-synGreen/60 focus:ring-2 focus:ring-synGreen/40"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-medium text-slate-200">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="h-9 w-full rounded-lg border border-white/15 bg-slate-900/70 px-3 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-synGreen/60 focus:ring-2 focus:ring-synGreen/40"
                    placeholder="Organization or laboratory"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="h-9 w-full rounded-lg border border-white/15 bg-slate-900/70 px-3 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-synGreen/60 focus:ring-2 focus:ring-synGreen/40"
                  placeholder="you@organization.com"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="area"
                  className="text-xs font-medium text-slate-200"
                >
                  Area of Interest
                </label>
                <select
                  id="area"
                  name="area"
                  required
                  className="h-9 w-full rounded-lg border border-white/15 bg-slate-900/70 px-3 text-sm text-slate-50 outline-none ring-0 transition focus:border-synGreen/60 focus:ring-2 focus:ring-synGreen/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {areasOfInterest.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-synGreen/60 focus:ring-2 focus:ring-synGreen/40"
                  placeholder="Short description of your inquiry"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-synBlue to-synGreen px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-synBlue/30 transition hover:scale-[1.01] hover:shadow-xl hover:shadow-synGreen/40"
              >
                Submit Inquiry
              </button>
              {submitted && (
                <p className="text-xs text-emerald-300">
                  Thank you. Your inquiry has been recorded locally for this
                  demo experience.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

