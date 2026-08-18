import Link from "next/link";
import { type ReactNode } from "react";
import { Logo } from "./Logo";
import Footer from "./Footer";
import { ArrowRightIcon } from "./Icons";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Mapple AI Solution home">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Back to site
          </Link>
        </div>
      </header>

      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" />
            Legal
          </p>
          <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-navy-900">
            {title}
          </h1>
          <p className="mt-3 text-sm text-slate-400">Last updated: {updated}</p>

          <div className="legal-content mt-10 space-y-6 text-[16px] leading-relaxed text-slate-600">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
