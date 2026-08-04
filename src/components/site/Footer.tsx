import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Wordmark } from "./Logo";
import { nav, site } from "@/data/site";

const legal = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/process", label: "Development Process" },
  { to: "/faq", label: "FAQs" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.tagline}. Websites, web applications and practical digital support for small
            businesses — built by {site.founder}.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.socials.x}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Profile on X"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.9l-4.5-6-5.2 6H2l7.2-8.3L1.6 2h6.9l4.2 5.6L18.9 2zm-2.4 18h1.9L7.2 3.9H5.2L16.5 20z" />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wide text-foreground">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {[...nav.slice(1), ...legal].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-foreground">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${site.phone}`} className="flex items-start gap-3 hover:text-gold">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 break-all hover:text-gold"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed and built by {site.founder}.</p>
        </div>
      </div>
    </footer>
  );
}
