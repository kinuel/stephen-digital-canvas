import { ExternalLink, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const projects = [
  {
    name: "Kart",
    description:
      "A full e-commerce storefront with product search, cart persistence, secure checkout flow and an admin dashboard for managing inventory and orders.",
    tags: ["React", "Tailwind", "Express", "PostgreSQL"],
    demo: "#",
    repo: "#",
  },
  {
    name: "EduManage",
    description:
      "A school management system covering student records, attendance, grading, timetables and a parent/staff portal — built for real institutions to run day-to-day.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demo: "#",
    repo: "#",
  },
  {
    name: "ChainFolio",
    description:
      "A blockchain-powered website with wallet connect, on-chain data display and smart contract interaction for a Web3 project.",
    tags: ["React", "Ethers.js", "Solidity", "Node.js"],
    demo: "#",
    repo: "#",
  },
  {
    name: "LocalHub",
    description:
      "A fast, SEO-friendly website for a local business — service listings, booking form, Google Maps integration and mobile-first design to bring in nearby customers.",
    tags: ["React", "Tailwind", "Node.js"],
    demo: "#",
    repo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="03" title="Projects" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 glow-hover">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mono text-lg font-semibold">{p.name}</h3>
                <span className="font-mono text-xs text-primary/70">0{i + 1}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_24px_-6px_var(--primary)]"
                >
                  <ExternalLink className="size-3.5" /> Live Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="size-3.5" /> GitHub
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
