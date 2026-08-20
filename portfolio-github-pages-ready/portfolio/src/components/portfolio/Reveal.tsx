import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <h2 className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">
        <span className="text-primary">{index}.</span> {title}
      </h2>
      <div className="mt-4 h-px w-24 bg-primary/60" />
    </Reveal>
  );
}
