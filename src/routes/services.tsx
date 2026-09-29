import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/ui-bits";
import { serviceGroups } from "@/data/site";

const description =
  "Website design, responsive development, web applications, WordPress, basic SEO, digital marketing, Power BI dashboards and IT support for small businesses.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Websites, Web Apps & Digital Support — K-Tech Technologies" },
      { name: "description", content: description },
      { property: "og:title", content: "Services | K-Tech Technologies" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: "Services | K-Tech Technologies" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "K-Tech Technologies services",
          itemListElement: serviceGroups.flatMap((group, gi) =>
            group.items.map((item, i) => ({
              "@type": "ListItem",
              position: gi * 10 + i + 1,
              name: item,
            })),
          ),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything you need to get online — <span className="text-gradient-mix">properly</span>
          </>
        }
        intro="Four areas of work, all built around the same idea: your website should earn its keep. Each service below lists what's included, who it suits and what you actually get out of it."
      >
        <div className="flex flex-wrap gap-3">
          {serviceGroups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              {group.title}
            </a>
          ))}
        </div>
      </PageHero>

      {serviceGroups.map((group, index) => (
        <Section key={group.id} id={group.id} ariaLabel={group.title} className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                0{index + 1} &mdash; Service
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{group.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {group.blurb}
              </p>
              <div className="premium-card mt-8 p-6">
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold">Ideal for</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {group.idealFor}
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild variant="gold" className="mt-7">
                <Link to="/contact">
                  {group.cta}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={100}>
                <div className="premium-card h-full p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                    What&apos;s included
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="premium-card h-full p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                    What you get out of it
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {group.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>
      ))}

      <Section ariaLabel="How pricing works">
        <SectionHeading
          eyebrow="Pricing"
          title="How I quote work"
          intro="No packages designed to upsell you. I scope the project, quote a fixed price against it, and tell you honestly what can wait for a later phase."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Single-page sites",
              body: "A focused landing page or one-page business site. The fastest and most affordable way to get a real presence online.",
            },
            {
              title: "Multi-page business sites",
              body: "Several pages with services, gallery and contact, plus on-page SEO and a content structure you can grow into.",
            },
            {
              title: "Apps & ongoing work",
              body: "Web applications, dashboards or monthly maintenance and marketing support, priced by scope or as a simple retainer.",
            },
          ].map((tier, i) => (
            <Reveal key={tier.title} delay={i * 90}>
              <div className="premium-card h-full p-7">
                <h3 className="text-lg font-semibold">{tier.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Want a number? Use the{" "}
            <Link to="/contact" hash="estimator" className="link-underline font-semibold text-gold">
              project budget estimator
            </Link>{" "}
            or just ask me directly.
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title="Not sure which service you need?"
        body="Describe the problem in your own words and I'll tell you what I'd actually recommend — including if that's less work than you expected."
      />
    </>
  );
}
