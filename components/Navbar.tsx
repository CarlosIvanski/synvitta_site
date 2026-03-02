import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#technology", label: "Technology" },
  { href: "#products", label: "Products" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#metrics", label: "Metrics" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="section-max-width flex h-16 items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              Synvitta
            </span>
            <span className="text-[11px] font-medium uppercase text-slate-300">
              Diagnostics
            </span>
          </div>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-400/40"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

