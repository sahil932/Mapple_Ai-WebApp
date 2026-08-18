import { problems } from "@/lib/site";
import { Icon, ArrowRightIcon, SparklesIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Problems() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The Challenges"
          title="We help you solve real business challenges"
          subtitle="If a few of these sound familiar, there is almost always a simpler, more automated way to handle them."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.label} delay={(i % 4) * 60}>
              <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-slate-100 bg-white p-5 transition-colors hover:border-brand-200">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <p className="pt-1.5 text-[15px] font-medium leading-snug text-slate-700">{p.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* solution statement */}
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 sm:p-10">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow !text-brand-300">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  The good news
                </span>
                <p className="mt-3 text-lg leading-relaxed text-slate-200">
                  Most of these come down to repetitive work and disconnected tools. Mapple AI
                  Solution brings them together — automating the busywork and connecting your
                  systems, so your team can spend more time on customers and growth.
                </p>
              </div>
              <a href="#process" className="btn btn-primary shrink-0">
                See how it works
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
