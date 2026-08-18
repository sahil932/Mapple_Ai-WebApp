"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./Logo";
import {
  ChatIcon,
  CalendarIcon,
  UsersIcon,
  TargetIcon,
  GearIcon,
  WebIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "./Icons";

/* Count-up that runs once the element is on screen */
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

const nav = [
  { label: "Dashboard", icon: TargetIcon, active: true },
  { label: "Conversations", icon: ChatIcon },
  { label: "Appointments", icon: CalendarIcon },
  { label: "Leads", icon: UsersIcon },
  { label: "Customers", icon: UsersIcon },
  { label: "Analytics", icon: WebIcon },
  { label: "Settings", icon: GearIcon },
];

const activity = [
  { label: "New lead captured", time: "2 min ago", tone: "text-brand-600 bg-brand-50" },
  { label: "Appointment booked", time: "15 min ago", tone: "text-violet-600 bg-violet-100" },
  { label: "Follow-up completed", time: "1 hr ago", tone: "text-emerald-600 bg-emerald-50" },
  { label: "Task automated", time: "2 hr ago", tone: "text-amber-600 bg-amber-50" },
];

// upward-trending points for the mini chart (viewBox 320 x 120)
const pts = [
  [8, 96], [38, 86], [68, 98], [98, 76], [128, 82],
  [158, 64], [188, 70], [218, 50], [248, 58], [278, 36], [312, 26],
];
const linePath = pts.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join(" ");
const areaPath = `${linePath} L312 118 L8 118 Z`;

export default function DashboardMockup() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const leads = useCountUp(128, active);
  const appts = useCountUp(32, active);
  const tasks = useCountUp(186, active);
  const hours = useCountUp(24, active);

  const stats = [
    { label: "New Leads", value: leads.toString(), delta: "+18%" },
    { label: "Appointments", value: appts.toString(), delta: "+12%" },
    { label: "Tasks Automated", value: tasks.toString(), delta: "+24%" },
    { label: "Time Saved", value: `${hours}h`, delta: "+30%" },
  ];

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[600px]">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(79,110,242,0.35),transparent_70%)] blur-2xl"
      />

      {/* main dashboard card */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_30px_80px_-30px_rgba(2,6,23,0.7)] ring-1 ring-black/5">
        <div className="flex">
          {/* sidebar */}
          <aside className="hidden w-[148px] shrink-0 flex-col gap-1 bg-navy-900 p-3 sm:flex">
            <div className="mb-3 flex items-center gap-2 px-1.5 pt-1">
              <LogoMark className="h-6 w-6" />
              <span className="text-[11px] font-bold text-white">Mapple AI</span>
            </div>
            {nav.map((item) => {
              const I = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium ${
                    item.active
                      ? "bg-brand-600 text-white shadow-sm"
                      : "text-slate-300/80"
                  }`}
                >
                  <I className="h-3.5 w-3.5" />
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </aside>

          {/* main panel */}
          <div className="min-w-0 flex-1 bg-slate-50/60 p-3.5 sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[13px] font-bold text-navy-900">Dashboard</p>
                <p className="text-[10px] text-slate-400">Welcome back — here&apos;s today</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-medium text-slate-500">Live</span>
              </div>
            </div>

            {/* stat cards */}
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm"
                >
                  <p className="truncate text-[9px] font-medium text-slate-400">{s.label}</p>
                  <p className="mt-0.5 font-display text-lg font-extrabold text-navy-900">
                    {s.value}
                  </p>
                  <p className="text-[9px] font-semibold text-emerald-600">{s.delta} this week</p>
                </div>
              ))}
            </div>

            {/* chart + activity */}
            <div className="mt-2.5 grid gap-2.5 lg:grid-cols-5">
              {/* chart */}
              <div className="rounded-xl border border-slate-100 bg-white p-3 lg:col-span-3">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-[11px] font-bold text-navy-900">Lead Trend</p>
                  <span className="rounded-md bg-brand-50 px-1.5 py-0.5 text-[9px] font-semibold text-brand-600">
                    This Week
                  </span>
                </div>
                <svg viewBox="0 0 320 120" className="h-[92px] w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#4f6ef2" stopOpacity="0.28" />
                      <stop offset="1" stopColor="#4f6ef2" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="line-stroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#2563eb" />
                      <stop offset="1" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  {[26, 56, 86].map((y) => (
                    <line key={y} x1="8" y1={y} x2="312" y2={y} stroke="#eef2f7" strokeWidth="1" />
                  ))}
                  <path
                    d={areaPath}
                    fill="url(#area-fill)"
                    style={{ opacity: active ? 1 : 0, transition: "opacity 1.2s ease 0.4s" }}
                  />
                  <path
                    d={linePath}
                    fill="none"
                    stroke="url(#line-stroke)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: 1000,
                      strokeDashoffset: active ? 0 : 1000,
                      transition: "stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />
                  <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3.5" fill="#7c3aed" />
                  <circle
                    cx={pts[pts.length - 1][0]}
                    cy={pts[pts.length - 1][1]}
                    r="6"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    style={{ transformOrigin: "center", animation: active ? "pulse-ring 2s ease-out infinite" : "none" }}
                  />
                </svg>
              </div>

              {/* activity */}
              <div className="rounded-xl border border-slate-100 bg-white p-3 lg:col-span-2">
                <p className="mb-2 text-[11px] font-bold text-navy-900">Recent Activity</p>
                <ul className="space-y-2">
                  {activity.map((a) => (
                    <li key={a.label} className="flex items-center gap-2">
                      <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-md ${a.tone}`}>
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[10px] font-medium text-navy-900">{a.label}</span>
                        <span className="block text-[9px] text-slate-400">{a.time}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating AI receptionist phone */}
      <div
        className="animate-floaty-sm absolute -bottom-10 -right-3 hidden w-[168px] rounded-[1.6rem] border border-slate-200 bg-white p-2.5 shadow-[0_24px_60px_-20px_rgba(2,6,23,0.55)] sm:block"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="rounded-[1.2rem] bg-navy-900 p-3 text-center">
          <div className="mb-2 flex items-center justify-between text-slate-300">
            <ArrowRightIcon className="h-3 w-3 rotate-180" />
            <span className="text-[10px] font-semibold text-white">AI Receptionist</span>
            <span className="h-3 w-3" />
          </div>
          <p className="text-[9px] text-slate-400">How can I help you today?</p>

          {/* voice orb */}
          <div className="mx-auto my-3 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 shadow-[0_8px_24px_-6px_rgba(79,110,242,0.8)]">
            <div className="flex items-end gap-[3px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-white"
                  style={{
                    height: "16px",
                    transformOrigin: "bottom",
                    animation: `voice 1s ease-in-out ${i * 0.12}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            {["Book Appointment", "Get Information", "Speak to a Human"].map((b, i) => (
              <div
                key={b}
                className={`rounded-lg px-2 py-1.5 text-[9px] font-semibold ${
                  i === 0 ? "bg-brand-600 text-white" : "bg-white/5 text-slate-200 ring-1 ring-white/10"
                }`}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating accent chip */}
      <div
        className="animate-floaty-sm absolute -left-4 top-10 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-lg md:flex"
      >
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
          <PhoneIcon className="h-3.5 w-3.5" />
        </span>
        <span className="leading-tight">
          <span className="block text-[10px] font-bold text-navy-900">Call answered</span>
          <span className="block text-[9px] text-slate-400">in 2 seconds</span>
        </span>
      </div>
    </div>
  );
}
