import { Reveal, SectionHeading } from "./Reveal";

const timeline = [
  {
    period: "2024 — Present",
    title: "Freelance Full-Stack Developer",
    org: "Remote / Nigeria",
    body: "Building React front-ends and Node/Express APIs for small businesses and early-stage products.",
  },
  {
    period: "2023 — 2024",
    title: "Frontend Developer",
    org: "Placeholder Company",
    body: "Shipped responsive interfaces, improved page load times and maintained a shared component library.",
  },
  {
    period: "2022 — 2023",
    title: "Junior Web Developer",
    org: "Placeholder Agency",
    body: "Turned designs into production pages and supported backend integrations for client websites.",
  },
  {
    period: "2021 — 2022",
    title: "Software Development Training",
    org: "Self-taught & online programs",
    body: "Focused on JavaScript fundamentals, data structures, Git workflows and full-stack project work.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="04" title="Experience & Education" />
      <div className="relative border-l border-border pl-6 sm:pl-8">
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 80} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full bg-primary shadow-[0_0_14px_var(--primary)] sm:-left-[39px]" />
            <p className="font-mono text-xs text-primary">{t.period}</p>
            <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
            <p className="font-mono text-sm text-muted-foreground">{t.org}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
