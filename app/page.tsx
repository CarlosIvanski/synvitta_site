import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { TechnologySection } from "../components/TechnologySection";
import { ProductsSection } from "../components/ProductsSection";
import { MetricsSection } from "../components/MetricsSection";
import { ContactSection } from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <TechnologySection />
        <ProductsSection />
        <MetricsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-5 text-xs text-slate-400">
        <div className="section-max-width flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} Synvitta Diagnostics. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-slate-500">Future areas:</span>
            <span className="text-slate-300">News</span>
            <span className="text-slate-300">Publications</span>
            <span className="text-slate-300">Certifications</span>
          </div>
        </div>
      </footer>
    </>
  );
}

