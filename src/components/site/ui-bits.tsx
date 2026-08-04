import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { FloatingShapes } from "./Ambience";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold",
        className,
      )}
    >
      <Sparkles className="h-3 w-3" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading
        className={cn(
          "mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          Heading === "h1" && "text-4xl sm:text-5xl lg:text-6xl",
        )}
      >
        {title}
      </Heading>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn("py-20 sm:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Page hero used by every inner page. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-8 pt-32 sm:pt-40">
      <FloatingShapes />
      <Container className="relative">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}

/** Number that counts up when scrolled into view. */
export function AnimatedStat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="premium-card p-6 text-center">
      <div className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">
        {display}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function TechPill({ name }: { name: string }) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-border bg-surface/60 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-surface-2">
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-aurora)] font-display text-sm font-bold text-foreground"
      >
        {name.slice(0, 2)}
      </span>
      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}

/** Closing call-to-action band, reused across pages. */
export function CtaBand({
  title = "Let's build something you're proud to share",
  body = "Tell me about your business and what you need. I'll reply with honest advice, a clear scope and a fixed price — whether or not we end up working together.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-4xl border border-gold/20 bg-surface p-8 text-center sm:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "var(--gradient-aurora)" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Book a free consultation
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link to="/portfolio">View my work</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
