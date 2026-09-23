import { site } from "@/lib/site";
import {
  CalendarIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  PhoneIcon,
} from "./Icons";
import DashboardMockup from "./DashboardMockup";

const benefits = [
  "Answer customers 24/7",
  "Capture and qualify leads",
  "Connect with your current tools",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-48 top-4 h-[32rem] w-[32rem] rounded-full bg-brand-600/18 blur-[120px]" />
        <div className="absolute -right-44 top-32 h-[34rem] w-[34rem] rounded-full bg-violet-600/17 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
      </div>

      <div className="site-container relative grid gap-14 pb-16 pt-14 sm:pb-20 sm:pt-18 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="max-w-[39rem]">
          <span className="eyebrow rounded-full border border-brand-300/15 bg-brand-400/8 px-3 py-2 !text-brand-200">
            <SparklesIcon className="h-3.5 w-3.5" />
            AI systems for service businesses
          </span>

          <h1 className="font-display mt-6 text-[clamp(2.65rem,12vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-white lg:text-[4.5rem]">
            Every call answered.
            <span className="text-gradient mt-2 block">Every lead followed up.</span>
          </h1>

          <p className="mt-6 max-w-[36rem] text-[1.04rem] leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Mapple AI builds practical AI receptionists, connected automations, and custom
            web systems that help busy service teams respond faster and grow without adding
            more manual work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary w-full sm:w-auto">
              <CalendarIcon className="h-4 w-4" />
              Request a free consultation
            </a>
            <a href="#services" className="btn btn-ghost-light w-full sm:w-auto">
              Explore solutions
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <a
            href={site.phone.href}
            className="mt-5 inline-flex min-h-11 max-w-full items-center gap-2.5 rounded-xl px-1 text-sm font-bold text-brand-200 transition-colors hover:text-white"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-200">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span className="truncate">{site.phone.display}</span>
            <span className="font-medium text-slate-500">· Call us directly</span>
          </a>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm font-semibold leading-5 text-slate-300">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/12 text-emerald-300">
                  <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 lg:pl-2">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
