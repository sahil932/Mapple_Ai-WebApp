import { services } from "@/lib/site";
import { Icon, ArrowRightIcon, CheckIcon, CalendarIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-4 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to automate and grow"
          subtitle="Five focused services that work on their own or together — matched to the parts of your business that need them most."
        />

        {/* card grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <a
                href={`#service-${s.id}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(2,6,23,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_24px_50px_-24px_rgba(37,99,235,0.4)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  See how it works
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* detailed blocks */}
        <div className="mt-24 space-y-20">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal
                key={s.id}
                id={`service-${s.id}`}
                className="scroll-mt-4"
              >
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  {/* text side */}
                  <div className={reversed ? "lg:order-2" : ""}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-[0_12px_30px_-10px_rgba(79,110,242,0.7)]">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="font-display mt-5 text-2xl font-bold text-navy-900 sm:text-[1.7rem]">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[17px] leading-relaxed text-slate-600">{s.summary}</p>
                    <a
                      href="#contact"
                      className="btn btn-primary mt-6 inline-flex"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      Get a free consultation
                    </a>
                  </div>

                  {/* points side */}
                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 sm:p-8">
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                        What this includes
                      </p>
                      <ul className="grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                              <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
