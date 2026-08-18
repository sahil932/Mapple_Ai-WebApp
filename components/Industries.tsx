import { industries } from "@/lib/site";
import { Icon, CheckIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-4 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for service-based businesses"
          subtitle="We work closely with the industries below — and our solutions adapt well to many other service businesses too."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_10px_-6px_rgba(2,6,23,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-28px_rgba(37,99,235,0.4)]">
                <div className="flex items-center gap-4 border-b border-slate-50 bg-slate-50/60 p-6">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-[0_10px_24px_-10px_rgba(79,110,242,0.7)]">
                    <Icon name={ind.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy-900">{ind.title}</h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[15px] leading-relaxed text-slate-600">{ind.blurb}</p>
                  <ul className="mt-5 space-y-2.5">
                    {ind.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                          <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
