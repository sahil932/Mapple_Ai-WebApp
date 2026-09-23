import { industries } from "@/lib/site";
import { Icon, CheckIcon, ArrowRightIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const useCases = [
  "After-hours calls and service requests",
  "Appointment and estimate follow-up",
  "Frequently asked customer questions",
];

export default function Industries() {
  return (
    <section id="industries" className="section-space bg-[#f7f9fd]">
      <div className="site-container">
        <SectionHeading
          eyebrow="Who we help"
          title="Designed for businesses where every response matters"
          subtitle="Our strongest fit is a service team that handles calls, appointments, estimates, enquiries, or repeat customer follow-up."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 70}>
              <article className="card-shadow flex h-full min-w-0 flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 sm:p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-brand-200">
                  <Icon name={industry.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-xl font-extrabold text-navy-900 sm:text-2xl">
                  {industry.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-7 text-slate-600">{industry.blurb}</p>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                    Examples
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {industry.examples.map((example) => (
                      <li
                        key={example}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="grid gap-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/65 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <p className="font-display text-lg font-extrabold text-navy-900">
                Common workflows we can improve
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-2 text-sm font-semibold leading-5 text-slate-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.4} />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="btn btn-primary w-full lg:w-auto">
              Check your use case
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
