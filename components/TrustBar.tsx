import { GlobeIcon, Icon } from "./Icons";

const served = [
  { icon: "automation", label: "Plumbers" },
  { icon: "target", label: "Electricians" },
  { icon: "tooth", label: "Dentists" },
];

export default function TrustBar() {
  return (
    <div className="relative z-10 mx-auto -mt-8 max-w-6xl px-6 lg:-mt-10">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(2,6,23,0.4)] sm:p-7">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <GlobeIcon className="h-6 w-6" />
            </span>
            <p className="max-w-md text-[15px] font-medium text-slate-600">
              AI &amp; automation solutions deployed for{" "}
              <span className="font-display font-extrabold text-navy-900">100+ customers</span> —
              including plumbers, electricians, dentists, and other service-based businesses.
            </p>
          </div>

          <div className="hidden h-12 w-px bg-slate-100 lg:block" />

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {served.map((s) => (
              <li key={s.label} className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Icon name={s.icon} className="h-4 w-4 text-brand-500" />
                {s.label}
              </li>
            ))}
            <li className="text-sm font-medium text-slate-400">and many more</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
