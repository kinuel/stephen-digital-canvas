import { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

const lines = [
  "building e-commerce platforms that convert.",
  "school management systems for modern institutions.",
  "blockchain websites for the decentralized web.",
  "sleek, high-converting sites for local businesses.",
];

function useTyping() {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[line] ?? "";
    const done = !deleting && text === full;
    const cleared = deleting && text === "";
    const delay = done ? 1800 : cleared ? 220 : deleting ? 28 : 55;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setLine((l) => (l + 1) % lines.length);
        return;
      }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, line]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-28">
        <p className="font-mono text-sm text-primary">$ whoami</p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Chukwuebuka <span className="block text-primary text-glow">Stephen Emmanuel</span>
        </h1>
        <p className="mt-5 font-mono text-lg text-muted-foreground sm:text-xl">
          Full-Stack Developer <span className="text-primary">/</span> JavaScript
        </p>

        <p className="mt-6 min-h-14 max-w-2xl font-mono text-sm text-foreground/85 sm:text-base">
          <span className="text-primary">&gt;</span> {typed}
          <span className="caret ml-0.5">&nbsp;</span>
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_30px_-4px_var(--primary)]"
          >
            View Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-6 py-3 font-mono text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            Contact Me
          </a>
        </div>

        <p className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <MapPin className="size-3.5 text-primary" /> Based in Nigeria — available for remote work
        </p>
      </div>
    </section>
  );
}
