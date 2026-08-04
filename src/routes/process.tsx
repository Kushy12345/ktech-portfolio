import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/ui-bits";
import { processSteps } from "@/data/site";

const description =
  "My eight-step development process — from discovery call and fixed quote through design, build, testing, launch and post-launch support.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Development Process | K-Tech Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "Development Process | K-Tech Solutions" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/process" },
      { name: "twitter:title", content: "Development Process | K-Tech Solutions" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Development process"
        title={
          <>
            How a project actually <span className="text-gradient-mix">runs</span>
          </>
        }
        intro="No mystery, no waiting in the dark. Here's every stage of working with me, what happens in it, and what you'll have in your hands at the end of it."
      />

      <Section ariaLabel="Process steps">
        <div className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 70}>
              <article className="premium-card h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl font-bold text-gradient-gold">
                    {step.step}
                  </span>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.7rem] font-semibold text-accent-foreground">
                    {step.output}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold">{step.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ariaLabel="What I need from you">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="premium-card h-full p-8">
              <h2 className="text-2xl font-bold">What I need from you</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "A clear idea of what you want visitors to do on the site",
                  "Your text, or notes I can shape into text with you",
                  "Logo, photos and brand colours if you already have them",
                  "One decision-maker for feedback, to avoid conflicting changes",
                  "Reasonably prompt replies — this is what keeps timelines honest",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="premium-card h-full p-8">
              <h2 className="text-2xl font-bold">What you can expect from me</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "A written scope and a fixed quote before any work starts",
                  "Regular updates with a preview link you can click",
                  "Straight answers about what's possible within your budget",
                  "Testing on real devices before anything goes live",
                  "A walkthrough at handover, plus support after launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section ariaLabel="Quality checklist">
        <SectionHeading
          eyebrow="Before launch"
          title="The checklist every project passes"
          intro="Quality shouldn't be accidental. This is the list I work through before I call anything finished."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Responsive on phone, tablet and desktop",
            "Colour contrast meets WCAG AA",
            "Keyboard navigation and visible focus states",
            "Semantic HTML and correct heading order",
            "Page titles, descriptions and social preview tags",
            "Images sized, compressed and lazy-loaded",
            "All forms tested and validated",
            "Every link and button checked",
            "Loading speed measured, not guessed",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 50}>
              <div className="rounded-2xl border border-border bg-surface/60 p-5 text-sm text-muted-foreground">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Ready to start at step one?"
        body="The first step is a relaxed conversation about your business. No commitment, no sales pitch — just a useful chat."
      />
    </>
  );
}
