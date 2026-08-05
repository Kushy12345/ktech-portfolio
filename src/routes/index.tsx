import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Github,
  GraduationCap,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { FloatingShapes } from "@/components/site/Ambience";
import { LogoMark } from "@/components/site/Logo";
import {
  AnimatedStat,
  Container,
  CtaBand,
  Eyebrow,
  Section,
  SectionHeading,
  TechPill,
} from "@/components/site/ui-bits";
import {
  journey,
  posts,
  projects,
  serviceGroups,
  site,
  techStack,
  whyWorkWithMe,
} from "@/data/site";

const description =
  "K-Tech Solutions helps businesses build a strong digital presence with clean, responsive websites, web apps and practical digital support. Based in Jos, Nigeria.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K-Tech Solutions | Websites That Grow Small Businesses" },
      { name: "description", content: description },
      { property: "og:title", content: "K-Tech Solutions | Websites That Grow Small Businesses" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "K-Tech Solutions | Websites That Grow Small Businesses" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const learning = [
  "Full stack development with Node.js and Express",
  "Databases: MongoDB and SQL fundamentals",
  "Next.js app structure and rendering",
  "Advanced Power BI reporting for small business",
];

function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40" aria-label="Introduction">
        <FloatingShapes />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Reveal>
                <Eyebrow>Web developer &amp; digital solutions</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                  Helping businesses build a{" "}
                  <span className="text-gradient-mix">strong digital presence</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I&apos;m {site.founder} — the developer behind K-Tech Solutions. I build clean,
                  responsive websites and digital solutions that make small businesses easy to find,
                  easy to trust and easy to contact.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild variant="gold" size="lg">
                    <Link to="/contact">
                      Let&apos;s build your website
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="violet" size="lg">
                    <Link to="/contact" hash="consultation">
                      <Calendar aria-hidden="true" />
                      Book a consultation
                    </Link>
                  </Button>
                  <Button asChild variant="glass" size="lg">
                    <Link to="/portfolio">View my work</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                  {[
                    { k: "Based in", v: "Jos, Nigeria" },
                    { k: "Focus", v: "Small business web" },
                    { k: "Availability", v: "Taking projects" },
                  ].map((item) => (
                    <div key={item.k}>
                      <dt className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                        {item.k}
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold text-foreground">{item.v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Portrait placeholder + tech orbit */}
            <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
              <div className="premium-card overflow-hidden p-4">
                <div
                  className="grid aspect-[4/5] place-items-center rounded-2xl border border-gold/20"
                  style={{ background: "var(--gradient-aurora)" }}
                >
                  <div className="px-6 text-center">
                    <LogoMark className="mx-auto h-16 w-16" />
                    <p className="mt-5 font-display text-lg font-semibold">{site.founder}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                      Founder, K-Tech Solutions
                    </p>
                    <p className="mt-5 text-xs text-muted-foreground">
                      Professional portrait coming soon
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 px-1 pt-4">
                  {["React", "TypeScript", "Tailwind", "Node.js", "Figma"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[0.7rem] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Stats ---------- */}
      <Section className="pt-4" ariaLabel="At a glance">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <AnimatedStat value={3} label="Professional training programmes completed" />
          <AnimatedStat value={4} suffix="+" label="Portfolio projects built and documented" />
          <AnimatedStat value={20} suffix="+" label="Services across web, data and media" />
          <AnimatedStat value={100} suffix="%" label="Of my attention on your project" />
        </div>
      </Section>

      {/* ---------- Services ---------- */}
      <Section ariaLabel="Services">
        <SectionHeading
          eyebrow="What I do"
          title="Practical services for businesses getting online"
          intro="From a single landing page to a full business website with reporting and marketing support — scoped honestly around your budget."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 90}>
              <article className="premium-card h-full p-7">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.slice(0, 5).map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  hash={group.id}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                >
                  {group.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Why work with me ---------- */}
      <Section className="relative overflow-hidden" ariaLabel="Why work with me">
        <SectionHeading
          eyebrow="Why work with me"
          title="No inflated claims — just careful, well-finished work"
          intro="I'm early in my professional journey and open about it. What I offer instead of a long client list is full attention, clear communication and code I'm happy to hand over."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyWorkWithMe.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="premium-card h-full p-6">
                <CheckCircle2 className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Tech stack ---------- */}
      <Section ariaLabel="Technology stack">
        <SectionHeading
          eyebrow="Tech stack"
          title="The tools I build with"
          intro="A focused stack I keep sharpening, rather than a long list I've only touched once."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech, index) => (
            <Reveal key={tech} delay={index * 25}>
              <TechPill name={tech} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Portfolio preview ---------- */}
      <Section ariaLabel="Selected work">
        <SectionHeading
          eyebrow="Selected work"
          title="Real projects, honestly described"
          intro="Every project below is something I actually built, with the problem it solved and what I learned written out in full."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <article className="premium-card h-full p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{project.kind}</p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/portfolio"
                  hash={project.slug}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                >
                  Read the case notes
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- GitHub + learning ---------- */}
      <Section ariaLabel="GitHub and learning">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="premium-card h-full p-8">
              <Github className="h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold">My code is public</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                My GitHub profile is a live record of how I work — commits, project structure, and
                the practice builds behind the polished pages. If you want to judge me on something
                real, start there.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="gold">
                  <a href={site.socials.github} target="_blank" rel="noreferrer noopener">
                    <Github aria-hidden="true" />
                    Kushy12345 on GitHub
                  </a>
                </Button>
                <Button asChild variant="glass">
                  <Link to="/portfolio">See projects</Link>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-7 gap-1.5" aria-hidden="true">
                {Array.from({ length: 49 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-4 rounded-[3px] border border-border"
                    style={{
                      background:
                        i % 5 === 0
                          ? "color-mix(in oklab, var(--gold) 70%, transparent)"
                          : i % 3 === 0
                            ? "color-mix(in oklab, var(--gold) 32%, transparent)"
                            : "transparent",
                    }}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Illustrative activity grid — the live contribution graph lives on my profile.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="premium-card h-full p-8">
              <GraduationCap className="h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold">What I&apos;m learning right now</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I treat learning as part of the job, not something I finished. Here&apos;s what
                I&apos;m actively working through this season.
              </p>
              <ul className="mt-6 space-y-4">
                {learning.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/skills"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold"
              >
                See my full skill set
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Journey ---------- */}
      <Section ariaLabel="My journey">
        <SectionHeading
          eyebrow="My journey"
          title="Growth, in the order it actually happened"
          intro="I'd rather show you a real timeline than invent testimonials. This is where I started, where I am, and where I'm heading."
        />
        <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
          {journey.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} as="li" className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[38px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-gold/50 bg-background"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------- Blog preview ---------- */}
      <Section ariaLabel="From the blog">
        <SectionHeading
          eyebrow="Notes"
          title="Writing about the work"
          intro="Plain-language articles on web development, marketing basics and what I'm learning along the way."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <article className="premium-card h-full p-7">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <BookOpen className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  <span>{post.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                >
                  Read article
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Promise ---------- */}
      <Section ariaLabel="My promise">
        <Reveal className="premium-card mx-auto max-w-3xl p-8 text-center sm:p-12">
          <Quote className="mx-auto h-8 w-8 text-gold" aria-hidden="true" />
          <p className="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
            &ldquo;I won&apos;t promise you a decade of experience. I&apos;ll promise you a developer
            who returns your calls, explains the trade-offs, and finishes the job properly.&rdquo;
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            {site.founder} &mdash; Founder, {site.name}
          </p>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
