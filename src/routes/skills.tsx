import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
  TechPill,
} from "@/components/site/ui-bits";
import { levelWidth, skillGroups, techStack, type SkillLevel } from "@/data/site";

const description =
  "An honest breakdown of my technical skills — HTML, CSS, JavaScript, TypeScript, React, Tailwind, Node.js, Git, Figma, WordPress, Power BI and more, labelled by real confidence level.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tools | K-Tech Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "Skills & Tools | K-Tech Solutions" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/skills" },
      { name: "twitter:title", content: "Skills & Tools | K-Tech Solutions" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const legend: { level: SkillLevel; meaning: string }[] = [
  { level: "Confident", meaning: "I can build with this independently, day to day." },
  { level: "Comfortable", meaning: "I use it regularly and know where to look when stuck." },
  { level: "Growing experience", meaning: "Actively building with it and improving fast." },
  { level: "Learning", meaning: "Studying it now — honest about that, not claiming otherwise." },
];

function SkillBar({ name, level }: { name: string; level: SkillLevel }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-semibold text-gold">{level}</span>
      </div>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary"
        role="img"
        aria-label={`${name}: ${level}`}
      >
        <span
          className="block h-full rounded-full bg-[image:var(--gradient-gold)] transition-[width] duration-1000 ease-out"
          style={{ width: levelWidth[level] }}
        />
      </div>
    </li>
  );
}

function Skills() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title={
          <>
            What I can do — with <span className="text-gradient-mix">honest labels</span>
          </>
        }
        intro="You won't find made-up percentages here. Every skill is labelled with how confident I genuinely am, so you can judge whether I'm the right person for your project."
      >
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {legend.map((item) => (
            <div key={item.level} className="rounded-2xl border border-border bg-surface/60 p-4">
              <dt className="text-sm font-semibold text-gold">{item.level}</dt>
              <dd className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {item.meaning}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section ariaLabel="Skill breakdown">
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 90}>
              <div className="premium-card h-full p-7">
                <h2 className="text-xl font-semibold">{group.title}</h2>
                <div className="gold-rule my-6" />
                <ul className="space-y-5">
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ariaLabel="Tools I work in">
        <SectionHeading
          eyebrow="Tech stack"
          title="The full toolkit"
          intro="Languages, frameworks and tools I reach for on real projects."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech, index) => (
            <Reveal key={tech} delay={index * 25}>
              <TechPill name={tech} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ariaLabel="Beyond code">
        <SectionHeading
          eyebrow="Beyond code"
          title="Skills that make projects easier"
          intro="Technical ability is only part of a good working relationship."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Teaching & explaining",
              body: "Teaching experience means I can explain technical decisions without jargon, so you're never nodding along without understanding.",
            },
            {
              title: "IT support background",
              body: "Years of troubleshooting real problems for real people. Useful when something breaks and needs a calm, methodical fix.",
            },
            {
              title: "Data analysis",
              body: "Excel and Power BI work that turns your existing records into something you can actually make decisions from.",
            },
            {
              title: "Digital marketing",
              body: "On-page SEO, social media management and content design — so your new site gets seen, not just built.",
            },
            {
              title: "Drone photography",
              body: "Aerial visuals for property, events and venues, which give marketing material an immediate lift.",
            },
            {
              title: "Design sense",
              body: "Figma and Canva work grounded in layout, hierarchy and contrast rather than decoration for its own sake.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="premium-card h-full p-6">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Have a project that fits these skills?"
        body="Tell me what you're trying to build. If it's outside what I can do well, I'll say so — and point you somewhere better."
      />
    </>
  );
}
