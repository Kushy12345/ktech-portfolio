import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, Section } from "@/components/site/ui-bits";
import { projects, site } from "@/data/site";

const description =
  "Real projects built by Tarfa Elijah Kwembe — RISE Hub, the K-Tech Client Portal, the K-Tech website and earlier practice builds, with the problem, tech and lessons for each.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Projects by K-Tech Technologies" },
      { name: "description", content: description },
      { property: "og:title", content: "Portfolio | K-Tech Technologies" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:title", content: "Portfolio | K-Tech Technologies" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Fewer projects, <span className="text-gradient-mix">fully explained</span>
          </>
        }
        intro="I'd rather show you the projects that best represent where my work is today than twenty screenshots with no story. Each project below includes the problem it solved, the tech behind it, what was hard and what I learned."
      >
        <Button asChild variant="gold" size="lg">
          <a href={site.socials.github} target="_blank" rel="noreferrer noopener">
            <Github aria-hidden="true" />
            Browse the code on GitHub
          </a>
        </Button>
      </PageHero>

      <Section ariaLabel="Projects">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <article id={project.slug} className="premium-card scroll-mt-24 p-7 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">{project.kind}</p>
                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{project.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.overview}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.github ? (
                        <Button asChild variant="glass" size="sm">
                          <a href={project.github} target="_blank" rel="noreferrer noopener">
                            <Github aria-hidden="true" />
                            View on GitHub
                          </a>
                        </Button>
                      ) : null}
                      {project.demo ? (
                        <Button asChild variant="gold" size="sm">
                          <a href={project.demo}>
                            <ExternalLink aria-hidden="true" />
                            Live demo
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled>
                          Demo coming soon
                        </Button>
                      )}
                    </div>
                  </div>

                  <dl className="space-y-5 rounded-2xl border border-border bg-background/40 p-6">
                    {[
                      { k: "Problem solved", v: project.problem },
                      { k: "Biggest challenge", v: project.challenge },
                      { k: "What I learned", v: project.learned },
                    ].map((row) => (
                      <div key={row.k}>
                        <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                          {row.k}
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ariaLabel="Room to grow">
        <Reveal className="premium-card p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">More is on the way</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I&apos;m actively building, so this page grows month by month. Case studies, client logos
            and testimonials will appear here as they&apos;re genuinely earned — never before.
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title="Could your project be the next one here?"
        body="I'd love to build something worth writing up. Tell me what you have in mind."
      />
    </>
  );
}
