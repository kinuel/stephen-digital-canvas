import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";

export const CONTACT = {
  email: "emmanuelchukwuebuka539@gmail.com",
  phone: "+234 701 251 7339",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

// Replace this with your real Formspree endpoint after creating a form at
// https://formspree.io — it looks like "https://formspree.io/f/xxxxxxxx"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeajnzke";

export function Contact() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Message sent!", {
          description: "Thanks for reaching out — I'll get back to you shortly.",
        });
        form.reset();
      } else {
        toast.error("Something went wrong", {
          description: "Please try again or email me directly.",
        });
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  }

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="05" title="Contact" />
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Got a project, a role, or an idea worth building? Send a message and I'll get back to
            you shortly.
          </p>
          <ul className="mt-7 space-y-3">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-3 font-mono text-sm text-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 font-mono text-sm text-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" /> {CONTACT.phone}
              </a>
            </li>
          </ul>
          <div className="mt-7 flex gap-3">
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
                className="rounded-md border border-border p-3 text-muted-foreground glow-hover hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-lg border border-border bg-card p-6"
          >
            <input type="hidden" name="_subject" value="New portfolio enquiry" />
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-xs text-muted-foreground">
                name
              </label>
              <input id="name" name="name" required placeholder="Ada Obi" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs text-muted-foreground">
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="ada@example.com"
                className={field}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs text-muted-foreground"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                className={field}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_30px_-4px_var(--primary)] disabled:opacity-60"
            >
              <Send className="size-4" /> Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
