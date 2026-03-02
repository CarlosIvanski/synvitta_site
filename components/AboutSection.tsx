import { FadeInSection } from "./FadeInSection";

export function AboutSection() {
  return (
    <FadeInSection>
      <section
        id="about"
        className="section-max-width grid min-h-screen items-center gap-10 py-24 md:grid-cols-[1.2fr_minmax(0,1fr)]"
      >
        <div className="space-y-6">
          <div className="pill">About Synvitta Diagnostics</div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Structured, modern biotech focused on diagnostic precision.
          </h2>
          <p className="text-base text-slate-200 sm:text-lg">
            Synvitta Diagnostics is a biotechnology company dedicated to
            advancing modern diagnostic solutions through precision-engineered
            biomarker systems. Founded in Florida, Synvitta combines scientific
            rigor with practical laboratory integration to develop
            high-performance immunoassays designed for clinical use and
            scalable deployment.
          </p>
          <p className="text-base text-slate-200 sm:text-lg">
            Our work focuses on improving analytical specificity, reducing
            assay time, and enabling seamless transition from singleplex to
            multiplex platforms.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-surface p-5">
              <h3 className="text-sm font-semibold text-slate-50">Our Mission</h3>
              <p className="mt-2 text-sm text-slate-200">
                To develop accessible, high-performance diagnostic tools that
                improve detection accuracy and support modern laboratory
                workflows.
              </p>
            </div>
            <div className="glass-surface p-5">
              <h3 className="text-sm font-semibold text-slate-50">Our Vision</h3>
              <p className="mt-2 text-sm text-slate-200">
                To become a reference in precision diagnostics through
                innovative biomarker engineering and scalable assay design.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="glass-surface relative overflow-hidden border-white/20 p-6">
            <div className="mb-6 flex items-center justify-between text-xs text-slate-200">
              <span className="rounded-full bg-slate-950/60 px-3 py-1 font-medium uppercase tracking-wide text-cyan-300">
                Diagnostic Focus
              </span>
              <span>Clinical laboratories</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-100">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Precision immunoassays engineered for{" "}
                  <strong className="font-semibold">
                    analytical specificity and robustness
                  </strong>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Platforms designed for{" "}
                  <strong className="font-semibold">
                    laboratory integration and workflow compatibility
                  </strong>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>
                  Clear roadmap from{" "}
                  <strong className="font-semibold">
                    singleplex to multiplex diagnostic systems
                  </strong>
                  .
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

