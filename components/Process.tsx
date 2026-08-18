import { process } from "@/lib/site";
import { Icon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const stepIcons = ["search", "pencil", "blocks", "rocket"];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-4 bg-slate-50 pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, proven process"
          subtitle="From first conversation to launch and beyond, we keep every step clear and low-effort on your side."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-200 via-brand-300 to-violet-200 lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="relative flex flex-col items-start">
                  <div className="flex w-full items-center gap-4 lg:block">
                    <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 font-display text-lg font-extrabold text-white shadow-[0_12px_28px_-10px_rgba(79,110,242,0.7)]">
                      {i + 1}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-600 shadow-sm lg:mt-4">
                      <Icon name={stepIcons[i]} className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
