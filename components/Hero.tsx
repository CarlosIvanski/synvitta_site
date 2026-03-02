"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-max-width flex min-h-screen flex-col items-center gap-12 py-20 md:flex-row md:items-center"
    >
      <div className="relative z-10 flex-1 space-y-8">
        <div className="pill">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Advancing diagnostic precision</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          High-performance{" "}
          <span className="gradient-text">immunoassays</span> designed for
          modern laboratories.
        </h1>
        <p className="max-w-xl text-balance text-base text-slate-200 sm:text-lg">
          Synvitta Diagnostics is a biotechnology company focused on the
          development of precision-engineered diagnostic assays. Our mission is
          to enhance early detection through optimized biomarker systems and
          scalable assay platforms designed for modern clinical laboratories.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#technology"
            className="rounded-full bg-gradient-to-r from-synBlue to-synGreen px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-synBlue/40 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-synGreen/40"
          >
            Our Technology
          </a>
          <a
            href="#products"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-50 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
          >
            Our Products
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-white"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Contact Us</span>
            <span aria-hidden className="text-lg">
              ↗
            </span>
          </button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-300 sm:text-sm md:max-w-md">
          <div className="glass-surface px-4 py-3">
            <p className="font-semibold text-slate-100">Clinical focus</p>
            <p className="mt-1 text-slate-300">
              Designed for integration with modern clinical laboratory
              workflows.
            </p>
          </div>
          <div className="glass-surface px-4 py-3">
            <p className="font-semibold text-slate-100">Scalable platforms</p>
            <p className="mt-1 text-slate-300">
              From singleplex assays to multiplex diagnostic architectures.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center">
        <motion.div
          className="glass-surface relative h-[320px] w-full max-w-md overflow-hidden border-white/25"
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="pointer-events-none absolute -inset-12 opacity-80"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.25), transparent 55%), radial-gradient(circle at 100% 100%, rgba(52,211,153,0.25), transparent 55%)",
              backgroundSize: "200% 200%"
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-slate-950/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-emerald-300">
                Synthetic Biomarkers
              </span>
              <span className="text-xs text-slate-200">
                Florida · Clinical Dx
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                Precision Immunoassay Panel
              </p>
              <p className="text-lg font-semibold text-slate-50">
                Engineered analyte detection with{" "}
                <span className="gradient-text">high analytical specificity</span>{" "}
                and optimized turnaround time.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs text-slate-100">
              <div className="rounded-2xl bg-slate-950/50 px-3 py-2">
                <p className="text-[11px] text-slate-300">Assay time</p>
                <p className="text-sm font-semibold">≈ 75 min</p>
              </div>
              <div className="rounded-2xl bg-slate-950/50 px-3 py-2">
                <p className="text-[11px] text-slate-300">Specificity</p>
                <p className="text-sm font-semibold">&gt; 99.5%</p>
              </div>
              <div className="rounded-2xl bg-slate-950/50 px-3 py-2">
                <p className="text-[11px] text-slate-300">Format</p>
                <p className="text-sm font-semibold">ELISA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

