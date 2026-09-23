import { services } from "@/lib/site";
import { Icon, ArrowRightIcon, CheckIcon, CalendarIcon, PhoneIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Services() {
  const featured = services.find((service) => service.id === "receptionist");
  const remaining = services.filter((service) => service.id !== "receptionist");

  if (!featured) return null;

  return (
    <section id="services" className="section-space bg-[#f7f9fd]">
      <div className="site-container">
        <SectionHeading
          eyebrow="What we build"
          title={
            <>
              Practical systems that remove
              <span className="text-gradient-dark"> everyday bottlenecks</span>
            </>
          }
          subtitle="Start with one painful workflow or connect several solutions into one customer-response system."
        />

        <Reveal id="service-receptionist" className="mt-12 sm:mt-14">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-navy-950 px-5 py-7 sm:px-8 sm:py-9 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-12 lg:py-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="bg-grid absolute inset-0 opacity-60" />
              <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-brand-600/25 blur-[100px]" />
              <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-200">
                <PhoneIcon className="h-3.5 w-3.5" />
                High-impact starting point
              </span>
              <div className="mt-5 flex items-center gap-4">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-brand-500 text-white shadow-[0_14px_35px_-14px_rgba(63,111,241,0.8)]">
                  <Icon name={featured.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {featured.title}
                </h3>
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {featured.summary}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                  <CalendarIcon className="h-4 w-4" />
                  Discuss your call flow
                </a>
                <a href="#process" className="btn btn-ghost-light w-full sm:w-auto">
                  See our process
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/[0.055] p-4 sm:p-5 lg:mt-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-brand-200">
                Your receptionist can
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {featured.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-semibold leading-5 text-slate-200">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/12 text-emerald-300">
                      <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-brand-300/15 bg-brand-500/10 px-4 py-3 text-sm leading-6 text-brand-100">
                Designed with clear handoff rules so urgent or sensitive conversations can reach a person.
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {remaining.map((service, index) => (
            <Reveal key={service.id} id={`service-${service.id}`} delay={(index % 2) * 70}>
              <article className="card-shadow group flex h-full min-w-0 flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 transition-colors hover:border-brand-200 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-xl font-extrabold text-navy-900 sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-slate-600">{service.short}</p>

                <ul className="mt-5 grid gap-2.5">
                  {service.points.slice(0, 4).map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm font-semibold leading-5 text-slate-700">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                        <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 self-start text-sm font-extrabold text-brand-700"
                >
                  Talk about this solution
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
