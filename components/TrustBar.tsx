import { GlobeIcon, HeadsetIcon, LifebuoyIcon, WorkflowIcon } from "./Icons";

const signals = [
  {
    icon: HeadsetIcon,
    title: "24/7 call coverage",
    text: "Help customers even when your team is busy.",
  },
  {
    icon: WorkflowIcon,
    title: "Fits your workflow",
    text: "Built around the tools and process you already use.",
  },
  {
    icon: LifebuoyIcon,
    title: "Human handoff",
    text: "Escalate the conversations that need your team.",
  },
  {
    icon: GlobeIcon,
    title: "Hamilton-based",
    text: "Local understanding with remote delivery across Canada.",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Service highlights" className="border-b border-slate-100 bg-white">
      <div className="site-container grid grid-cols-2 divide-x divide-y divide-slate-100 lg:grid-cols-4 lg:divide-y-0">
        {signals.map((signal) => {
          const SignalIcon = signal.icon;
          return (
            <div key={signal.title} className="min-w-0 px-3 py-6 sm:px-5 lg:px-6 lg:py-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <SignalIcon className="h-[1.1rem] w-[1.1rem]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.82rem] font-extrabold leading-5 text-navy-900 sm:text-sm">
                    {signal.title}
                  </span>
                  <span className="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">
                    {signal.text}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
