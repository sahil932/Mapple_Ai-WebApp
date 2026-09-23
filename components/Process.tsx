import { processSteps } from "@/lib/site";
import { Icon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const stepIcons = ["search", "pencil", "blocks", "rocket"];

export default function Process() {
  return (
    <section id="process" className="section-space bg-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="How we work"
          title="From one bottleneck to a working solution"
          subtitle="A clear four-step process keeps the project focused and gives you visibility before anything reaches your customers."
        />

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-brand-100 via-brand-300 to-violet-200 lg:block"
          />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 65}>
                <li className="relative flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:block sm:p-6">
                  <div className="relative z-10 flex shrink-0 items-center gap-3 sm:justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 font-display text-sm font-extrabold text-white shadow-[0_12px_30px_-16px_rgba(15,23,42,0.65)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 sm:grid">
                      <Icon name={stepIcons[index]} className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="min-w-0 sm:mt-5">
                    <h3 className="font-display text-lg font-extrabold text-navy-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
