import { FadeInSection } from "./FadeInSection";

const pipelineItems = [
  {
    name: "SynAuto™",
    label: "Autoimmune panel",
    description:
      "Structured autoimmune diagnostics panel for targeted biomarker detection.",
  },
  {
    name: "SynNeuro™",
    label: "Neurodegenerative",
    description:
      "Biomarker panel focused on neurodegenerative disease signatures.",
  },
];

export function ProductsSection() {
  return (
    <FadeInSection delay={0.1}>
      <section id="products" className="section-max-width min-h-screen space-y-16 py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <div className="pill">SynTREP™ · Rapid Syphilis ELISA</div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              SynTREP™ – Rapid syphilis ELISA with{" "}
              <span className="text-sky-200">optimized workflow</span>.
            </h2>
            <p className="text-base text-slate-200 sm:text-lg">
              SynTREP™ is a high-performance ELISA assay developed for the
              qualitative detection of syphilis markers. Built on Synvitta&apos;s
              precision immunoassay platform, it is engineered to deliver
              analytical performance while maintaining workflow simplicity.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <li className="glass-surface flex items-start gap-3 p-4">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Optimized assay time of approximately{" "}
                  <strong className="font-semibold">1h15</strong>.
                </span>
              </li>
              <li className="glass-surface flex items-start gap-3 p-4">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  High analytical{" "}
                  <strong className="font-semibold">
                    sensitivity and specificity
                  </strong>
                  .
                </span>
              </li>
              <li className="glass-surface flex items-start gap-3 p-4">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>
                  Streamlined workflow aligned with{" "}
                  <strong className="font-semibold">
                    standard ELISA laboratory routines
                  </strong>
                  .
                </span>
              </li>
              <li className="glass-surface flex items-start gap-3 p-4">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>
                  Compatible with{" "}
                  <strong className="font-semibold">
                    standard ELISA laboratory equipment
                  </strong>
                  .
                </span>
              </li>
            </ul>
            <p className="text-sm text-slate-300">
              SynTREP™ represents Synvitta&apos;s first commercial diagnostic
              solution, built as the foundation for a scalable diagnostic
              portfolio.
            </p>
          </div>
          <div className="glass-surface flex flex-col gap-4 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Assay Workflow Snapshot
            </h3>
            <ol className="space-y-3 text-sm text-slate-100">
              <li className="flex items-start gap-3">
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/70 text-[11px]">
                  1
                </span>
                <div>
                  <p className="font-medium">Sample preparation</p>
                  <p className="text-xs text-slate-300">
                    Serum or plasma samples prepared according to laboratory
                    procedures.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/70 text-[11px]">
                  2
                </span>
                <div>
                  <p className="font-medium">Incubation</p>
                  <p className="text-xs text-slate-300">
                    Samples incubated with coated wells for specific marker
                    binding.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/70 text-[11px]">
                  3
                </span>
                <div>
                  <p className="font-medium">Wash &amp; detection</p>
                  <p className="text-xs text-slate-300">
                    Washing steps followed by detection reagent incubation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/70 text-[11px]">
                  4
                </span>
                <div>
                  <p className="font-medium">Readout</p>
                  <p className="text-xs text-slate-300">
                    Optical density measurement using standard ELISA readers.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <FadeInSection delay={0.15}>
          <section
            id="pipeline"
            className="glass-surface border-white/20 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="pill mb-3">Pipeline Development</div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-50">
                  Emerging diagnostic portfolio with{" "}
                  <span className="text-sky-200">scalable assay platforms</span>.
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-slate-200">
                  Synvitta is expanding its diagnostic portfolio through the
                  development of scalable assay platforms. All platforms are
                  designed with scalability and clinical laboratory integration
                  in mind.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {pipelineItems.map((item) => (
                <div
                  key={item.name}
                  className="glass-surface group flex flex-col justify-between border-white/15 p-4"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-slate-50">
                      {item.name}
                    </h4>
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-200">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200">{item.description}</p>
                  <span className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Platform · Multiplex-ready
                  </span>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>
      </section>
    </FadeInSection>
  );
}

