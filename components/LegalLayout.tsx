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
        <div className="site-container flex min-h-[4.5rem] items-center justify-between gap-4">
          <Link href="/" aria-label="Mapple AI Solution home">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-extrabold text-brand-700 hover:text-brand-800"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            <span className="hidden sm:inline">Back to website</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      <main className="bg-[#f7f9fd] py-10 sm:py-16">
        <article className="site-container max-w-[52rem] rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.42)] sm:p-9 lg:p-12">
          <p className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" />
            Legal
          </p>
          <h1 className="font-display mt-4 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: {updated}</p>

          <div className="legal-content mt-9 space-y-6 text-base leading-7 text-slate-600">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
