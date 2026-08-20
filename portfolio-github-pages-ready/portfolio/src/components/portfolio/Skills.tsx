import { Layout, Server, Database, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"],
  },
  { icon: Server, title: "Backend", items: ["Node.js", "Express", "REST APIs", "Authentication"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="02" title="Tech Stack" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 90}>
            <div className="h-full rounded-lg border border-border bg-card p-6 glow-hover">
              <div className="inline-flex rounded-md border border-primary/30 bg-primary/10 p-2.5 text-primary">
                <g.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-mono text-base font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="font-mono text-sm text-muted-foreground">
                    <span className="text-primary">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
