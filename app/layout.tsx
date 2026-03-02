import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synvitta Diagnostics – Precision Immunoassays",
  description:
    "Synvitta Diagnostics develops precision-engineered immunoassays designed for speed, specificity, and scalability in modern clinical laboratories.",
  metadataBase: new URL("https://www.synvitta.com"),
  openGraph: {
    title: "Synvitta Diagnostics – Advancing Diagnostic Precision",
    description:
      "High-performance immunoassays optimized for analytical specificity, reduced turnaround time, and scalable assay platforms.",
    url: "https://www.synvitta.com",
    siteName: "Synvitta Diagnostics",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-syn-gradient text-slate-50 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.25),transparent_55%)] opacity-70" />
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

