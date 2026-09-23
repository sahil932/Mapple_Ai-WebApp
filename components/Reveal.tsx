import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  id?: string;
}

/**
 * Keeps section markup visible in the initial HTML response.
 *
 * The previous version hid content until IntersectionObserver ran. That made
 * otherwise-valid sections appear blank whenever scripts were delayed or
 * unavailable. Motion is now handled by local component interactions only,
 * so core page content remains resilient and accessible.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  id,
}: RevealProps) {
  return (
    <Tag id={id} className={className || undefined}>
      {children}
    </Tag>
  );
}
