import { FadeInSection } from "./FadeInSection";

const features = [
  {
    title: "High analytical specificity",
    description:
      "Synthetic biomarker engineering and optimized assay chemistry to minimize cross-reactivity.",
  },
  {
    title: "Reduced assay turnaround time",
    description:
      "Assays designed to fit within modern laboratory throughput expectations.",
  },
  {
    title: "Scalable assay architecture",
    description:
      "Platforms engineered to transition from singleplex to multiplex formats.",
  },
  {
    title: "Workflow compatibility",
    description:
      "Built for standard ELISA equipment and clinical laboratory workflows.",
  },
  {
    title: "Future-ready multiplex integration",
    description:
      "Foundational architecture enabling expansion across disease areas.",
  },
  {
    title: "Structured development",
    description:
      "From analytical validation to clinical adoption, with scalability in mind.",
  },
];

export function TechnologySection() {
  return (
    <FadeInSection delay={0.05}>
      <section id="technology" className="section-max-width py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-6">
            <div className="pill">Technology Platform</div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Precision immunoassays built for{" "}
              <span className="gradient-text">speed, specificity and scale</span>.
            </h2>
            <p className="text-base text-slate-200 sm:text-lg">
              Synvitta develops precision immunoassays through proprietary
              synthetic biomarker engineering and optimized detection
              methodologies. Our technology strategy focuses on high analytical
              specificity, reduced assay turnaround time, and scalable assay
              architecture compatible with clinical laboratory workflows.
            </p>
            <p className="text-base text-slate-200 sm:text-lg">
              By designing assays with scalability in mind, Synvitta ensures
              adaptability across evolving diagnostic needs and future-ready
              multiplex integration.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="glass-surface group p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {feature.title}
                  </h3>
                  <span className="text-xs text-synGreen opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

