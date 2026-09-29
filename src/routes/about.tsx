import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Heart, Rocket, Target } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/ui-bits";
import { journey, site } from "@/data/site";

const description =
  "Meet Tarfa Elijah Kwembe, founder of K-Tech Technologies in Jos, Nigeria — a dedicated web developer with training in web development, digital marketing and drone photography.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tarfa Elijah Kwembe | K-Tech Technologies" },
      { name: "description", content: description },
      { property: "og:title", content: "About Tarfa Elijah Kwembe | K-Tech Technologies" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: "About | K-Tech Technologies" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Heart,
    title: "Honesty first",
    body: "I tell you what I can do well, what I'm still learning, and when someone else is a better fit. Trust is worth more than one extra invoice.",
  },
  {
    icon: Target,
    title: "Detail matters",
    body: "Spacing, contrast, loading speed, the wording on a button. Small decisions are what separate a decent site from a good one.",
  },
  {
    icon: Compass,
    title: "Clear communication",
    body: "No jargon, no silence. You'll know what stage your project is at and what I need from you next.",
  },
  {
    icon: Rocket,
    title: "Always improving",
    body: "Every project teaches me something that makes the next one better. I build practice projects even when nobody is paying me to.",
  },
];

const strengths = [
  "Modern web development — HTML, CSS, JavaScript, React and TypeScript",
  "IT support experience, from troubleshooting to setup and configuration",
  "Working knowledge of data analysis with Excel and Power BI",
  "Digital marketing fundamentals and social media management",
  "Drone photography for property, events and business promotion",
  "Teaching experience — which is why I explain things without jargon",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            I&apos;m {site.founder.split(" ")[0]} — and I build the web{" "}
            <span className="text-gradient-mix">carefully</span>
          </>
        }
        intro="K-Tech Technologies isn't an agency with a boardroom. It's one developer in Jos, Plateau State, who genuinely enjoys solving business problems with technology — and who takes the finish of a project personally."
      />

      {/* Story */}
      <Section ariaLabel="My story">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">My story</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                I&apos;ve always been the person friends and family called when something technical
                stopped working. That habit turned into real IT support experience, and eventually
                into a bigger question: instead of fixing tools, could I build them?
              </p>
              <p>
                That question led me to web development. I started with HTML and CSS in the evenings,
                moved into JavaScript, and then completed professional training in web development,
                digital marketing and drone photography — three skills that turn out to work
                extremely well together for small businesses.
              </p>
              <p>
                Since then I&apos;ve been building steadily: landing pages, an enquiry desk, practice
                business websites, and this site. Not to fill a portfolio grid, but because building
                real things is the only way I know to actually get better.
              </p>
              <p>
                I also spent time teaching, which changed how I work with clients. Explaining
                something clearly to someone who isn&apos;t technical is a skill, and it&apos;s the
                one clients tell me they value most.
              </p>
              <p>
                So here&apos;s the honest position: I&apos;m early in my professional journey. I
                don&apos;t have a decade of case studies. What I do have is training, real projects,
                a genuine work ethic, and the kind of attention that only comes from someone who
                still finds this exciting.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="premium-card p-7">
              <h3 className="text-lg font-semibold">What I bring to a project</h3>
              <ul className="mt-5 space-y-4">
                {strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="gold-rule my-7" />
              <dl className="grid grid-cols-2 gap-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Founder
                  </dt>
                  <dd className="mt-1.5 font-semibold">{site.founder}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Based in
                  </dt>
                  <dd className="mt-1.5 font-semibold">{site.location}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission / vision */}
      <Section ariaLabel="Mission and vision">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="premium-card h-full p-8">
              <Target className="h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold">Mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                To give small businesses and individuals the kind of website they deserve — fast,
                clear, mobile-friendly and honest — at a price that makes sense for where they are
                in their growth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="premium-card h-full p-8">
              <Eye className="h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold">Vision</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                To grow K-Tech Technologies into a dependable technology studio known across Plateau
                State and beyond for careful work, clear communication and results businesses can
                measure.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section ariaLabel="Core values">
        <SectionHeading
          eyebrow="Core values"
          title="How I choose to work"
          intro="These aren't wall posters. They're the rules I actually make decisions with."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="premium-card h-full p-6">
                <value.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Career journey */}
      <Section ariaLabel="Career journey">
        <SectionHeading
          eyebrow="Career journey"
          title="The road so far — and what's next"
          intro="No fabricated milestones. Just the steps in the order they happened."
        />
        <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
          {journey.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} as="li" className="relative">
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

      {/* Future goals */}
      <Section ariaLabel="Future goals">
        <Reveal className="premium-card p-8 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Where I&apos;m heading</h2>
          <div className="mt-6 grid gap-6 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2 sm:text-base">
            <p>
              Short term: become genuinely strong in full stack development, so I can build features
              that store and serve data rather than only front-end screens. Alongside that, deepen my
              Power BI work so reporting becomes a real part of what K-Tech offers.
            </p>
            <p>
              Longer term: a small, trusted studio serving businesses across Plateau State and
              Nigeria — with case studies, testimonials and client logos earned honestly, one
              completed project at a time. This website is built so all of that can be added without
              a redesign.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        title="Want to know if I'm the right fit?"
        body="Send me a message. I'll be straight with you about what I can deliver, what it will cost, and how long it will take."
      />
    </>
  );
}
