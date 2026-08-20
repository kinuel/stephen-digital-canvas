import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { value: "15+", label: "Projects shipped" },
  { value: "3+", label: "Years with JavaScript" },
  { value: "100%", label: "Remote friendly" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm a full-stack JavaScript developer based in Nigeria, specializing in{" "}
            <span className="text-foreground">e-commerce platforms</span>,{" "}
            <span className="text-foreground">school management systems</span>,{" "}
            <span className="text-foreground">blockchain websites</span>, and{" "}
            <span className="text-foreground">websites for local businesses</span>. I build clean,
            functional and scalable web applications across the entire stack — from responsive
            React interfaces to the APIs and databases that power them.
          </p>
          <p>
            Whether it's a storefront that needs to convert, a school portal that needs to handle
            hundreds of students and staff, a dApp interface that needs to talk to smart contracts,
            or a local business that needs a fast, trustworthy online presence — I focus on
            maintainable code, sensible architecture, and shipping something people actually use.
          </p>
          <p>
            When I'm not shipping features, I'm usually exploring new tooling, refactoring something
            for the fun of it, or helping other developers debug their stack traces.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-border bg-card p-6 font-mono text-sm glow-hover">
            <p className="text-muted-foreground">
              <span className="text-primary">const</span> developer = {"{"}
            </p>
            <p className="pl-4">
              name: <span className="text-primary">"Chukwuebuka"</span>,
            </p>
            <p className="pl-4">
              role: <span className="text-primary">"Full-Stack Dev"</span>,
            </p>
            <p className="pl-4">
              stack: [<span className="text-primary">"React"</span>,{" "}
              <span className="text-primary">"Node"</span>],
            </p>
            <p className="pl-4">
              openToWork: <span className="text-primary">true</span>,
            </p>
            <p className="text-muted-foreground">{"};"}</p>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-semibold text-primary">{s.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
