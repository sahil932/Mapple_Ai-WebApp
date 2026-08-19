import { site } from "@/lib/site";
import { CalendarIcon, ArrowRightIcon, CheckIcon, SparklesIcon, PhoneIcon } from "./Icons";
import DashboardMockup from "./DashboardMockup";

const features = ["Save Time", "Automate Workflows", "Capture More Leads", "Grow Your Business"];

const stats = [
  { value: "100+", label: "Customers served" },
  { value: "24/7", label: "AI receptionist" },
  { value: "5",    label: "Core AI services" },
  { value: "Free", label: "First consultation" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-clip bg-navy-950 pb-20 pt-14 lg:pb-28 lg:pt-20"
    >
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-0 top-24 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
        {/* copy — centred on mobile, left-aligned on desktop */}
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <span className="glass eyebrow mb-6 rounded-full px-3.5 py-1.5 text-brand-200">
            <SparklesIcon className="h-3.5 w-3.5" />
            AI &amp; Automation for service businesses
          </span>

          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.06] text-white sm:text-5xl lg:text-[3.4rem]">
            Smarter AI Solutions.
            <br />
            <span className="text-gradient">Less Manual Work.</span>
            <br />
            <span className="text-gradient">More Business Growth.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-300 lg:mx-0">
            Mapple AI Solution helps service businesses answer every call, follow up every lead,
            and cut the manual work — using AI built for how your business actually runs.
          </p>

          {/* clickable phone chip */}
          <a
            href={site.phone.href}
            className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-brand-400/30 bg-brand-600/10 px-4 py-2.5 transition-colors hover:bg-brand-600/20"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/20 text-brand-300">
              <PhoneIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-bold text-brand-300">{site.phone.display}</span>
            <span className="text-xs text-slate-500">Call us free anytime</span>
          </a>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#contact" className="btn btn-primary w-full sm:w-auto">
              <CalendarIcon className="h-4 w-4" />
              Book a Free Consultation
            </a>
            <a href="#services" className="btn btn-ghost-light w-full sm:w-auto">
              Explore Our Services
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-9 grid grid-cols-2 justify-items-center gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6 lg:justify-start">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500/20 text-brand-300">
                  <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* stat strip */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/[0.03] px-4 py-4 text-center">
                <p className="font-display text-2xl font-extrabold text-white">{s.value}</p>
                <p className="mt-0.5 text-xs leading-snug text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* dashboard — hidden on mobile, visible lg+ */}
        <div className="mt-14 hidden lg:mt-0 lg:block lg:pl-6">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
