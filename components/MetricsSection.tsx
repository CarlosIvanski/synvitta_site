"use client";

import { useEffect, useState } from "react";
import { FadeInSection } from "./FadeInSection";

type MetricProps = {
  label: string;
  suffix?: string;
  target: number;
  decimals?: number;
};

function useCountUp(target: number, durationMs: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, durationMs]);

  return value;
}

function MetricCard({ label, suffix, target, decimals = 1 }: MetricProps) {
  const value = useCountUp(target, 1600);
  const formatted = value.toFixed(decimals);

  return (
    <div className="glass-surface flex flex-col justify-between border-white/15 p-5">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold text-slate-50">
        {formatted}
        {suffix}
      </p>
    </div>
  );
}

export function MetricsSection() {
  return (
    <FadeInSection delay={0.1}>
      <section
        id="metrics"
        className="section-max-width min-h-screen py-24"
        aria-labelledby="metrics-heading"
      >
        <div className="glass-surface border-white/20 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="pill mb-3">Diagnostic Performance</div>
              <h2
                id="metrics-heading"
                className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
              >
                Numbers that reflect{" "}
                <span className="gradient-text">laboratory performance</span>.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-200">
                Representative performance metrics of Synvitta&apos;s assay
                design principles. These figures illustrate the focus on rapid
                turnaround and analytical robustness.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard label="Analytical specificity" target={99.5} suffix="%" />
            <MetricCard label="Assay time" target={75} suffix=" min" decimals={0} />
            <MetricCard label="Throughput-ready design" target={96} suffix=" wells" decimals={0} />
            <MetricCard label="Scalable platform" target={4} suffix="+ panels" decimals={0} />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

