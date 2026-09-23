import { whyUs } from "@/lib/site";
import { Icon, SparklesIcon, CheckIcon } from "./Icons";
import Reveal from "./Reveal";

const promises = [
  "Plain-language recommendations",
  "Clear scope before work begins",
  "Human review and fallback planning",
];

export default function WhyUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-600/18 blur-[125px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/16 blur-[125px]" />
      </div>

      <div className="site-container section-space relative grid gap-12 lg:grid-cols-[0.83fr_1.17fr] lg:items-center lg:gap-16">
        <Reveal>
          <span className="eyebrow !text-brand-200">
            <SparklesIcon className="h-3.5 w-3.5" />
            Why Mapple AI
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Technology shaped around your business—not the other way around
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            We start with the customer journey and the work your team repeats every day. Then we
            choose the smallest, clearest solution that can make a measurable operational difference.
          </p>

          <ul className="mt-7 grid gap-3">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-400/12 text-emerald-300">
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {promise}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary mt-8 w-full sm:w-auto">
            Start with a conversation
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 70}>
              <article className="glass-panel h-full rounded-2xl p-5 sm:p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-400/12 text-brand-200">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-4 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
