import { type ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      <span className={`eyebrow ${light ? "!text-brand-300" : ""}`}>
        <span className="h-px w-6 bg-current opacity-60" />
        {eyebrow}
      </span>
      <h2
        className={`font-display mt-4 text-3xl font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[2.65rem] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
