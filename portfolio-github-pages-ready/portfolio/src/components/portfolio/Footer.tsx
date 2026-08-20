import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "./Contact";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Chukwuebuka Stephen Emmanuel
        </p>
        <div className="flex gap-4">
          {[
            { href: CONTACT.github, Icon: Github, label: "GitHub" },
            { href: CONTACT.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${CONTACT.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
