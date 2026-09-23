import { site } from "@/lib/site";

/**
 * Mapple AI mark: an "M" drawn as an upward growth line
 * (peaks like a rising chart) in a blue → violet gradient,
 * with a soft layered shadow for depth.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label={`${site.name} logo`}
    >
      <defs>
        <linearGradient id="mapple-grad" x1="4" y1="34" x2="36" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f6bf0" />
          <stop offset="0.55" stopColor="#4f6ef2" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {/* layered shadow M */}
      <path
        d="M8 33 L12 9 L20 21 L28 9 L32 33"
        fill="none"
        stroke="#a78bfa"
        strokeOpacity="0.45"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1.6 1.8)"
      />
      {/* main M */}
      <path
        d="M8 33 L12 9 L20 21 L28 9 L32 33"
        fill="none"
        stroke="url(#mapple-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* growth arrowhead on the rising right stroke */}
      <path
        d="M28 9 L28 14 M28 9 L23.4 10.6"
        fill="none"
        stroke="url(#mapple-grad)"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.15rem] font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          Mapple AI
        </span>
        <span
          className={`text-[0.72rem] font-semibold tracking-wide ${
            light ? "text-brand-200" : "text-slate-400"
          }`}
        >
          Solution
        </span>
      </span>
    </span>
  );
}
