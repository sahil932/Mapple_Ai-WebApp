import { whyUs } from "@/lib/site";
import { Icon, SparklesIcon } from "./Icons";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section id="about" className="relative scroll-mt-4 overflow-x-clip border-b-0 bg-navy-950 pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-600/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* about */}
        <Reveal>
          <span className="eyebrow !text-brand-300">
            <span className="h-px w-6 bg-current opacity-60" />
            About Us
          </span>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-[2.4rem]">
            Practical AI, built around your business
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Mapple AI Solution helps small and medium businesses put AI and automation to
            practical use. We design and build web applications, AI agents, an AI receptionist,
            automation, and AI-assisted marketing — always focused on real results.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            The goal is simple: save your team time, capture more of the leads you are already
            earning, and give your business room to grow.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white">
              <SparklesIcon className="h-5 w-5" />
            </span>
            <p className="text-sm leading-snug text-slate-300">
              <span className="font-display block text-xl font-extrabold text-white">100+ customers</span>
              across service-based businesses
            </p>
          </div>
        </Reveal>

        {/* reasons */}
        <div className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.07]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-4 text-lg font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-300">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
