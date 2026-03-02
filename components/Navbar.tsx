import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#technology", label: "Technology" },
  { href: "#products", label: "Products" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#metrics", label: "Metrics" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-white backdrop-blur-xl">
      <nav className="section-max-width flex h-16 items-center justify-between text-slate-900">
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/synvitta.png"
            alt="Synvitta Diagnostics"
            width={160}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-slate-500/30 transition hover:shadow-slate-500/50"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

