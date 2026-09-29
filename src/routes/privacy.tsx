import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/ui-bits";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

const description =
  "How K-Tech Technologies handles the information you send through this website — what is collected, how it is used, and how to contact us about your data.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | K-Tech Technologies" },
      { name: "description", content: description },
      { property: "og:title", content: "Privacy Policy | K-Tech Technologies" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:title", content: "Privacy Policy | K-Tech Technologies" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "Who this policy covers",
    body: [
      `This website is owned and operated by ${site.founder}, trading as ${site.name}, based in ${site.location}. This policy explains in plain language what happens to information you share here.`,
    ],
  },
  {
    title: "What information is collected",
    body: [
      "If you use the enquiry form, the details you type — your name, email address, phone number, business name, project type, budget range, timeline and description — are placed into an email in your own email application. You choose whether to send it.",
      "This website does not store form submissions in a database, and it does not ask you to create an account or set marketing cookies.",
    ],
  },
  {
    title: "How your information is used",
    body: [
      "Anything you send by form, email, phone or WhatsApp is used only to reply to your enquiry, prepare a quote and, if we work together, deliver the project.",
      "Your details are never sold, rented or shared for marketing purposes.",
    ],
  },
  {
    title: "How long it is kept",
    body: [
      "Enquiry emails and project correspondence are kept for as long as needed to answer you and to keep reasonable business records. You can ask for your details to be deleted at any time.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "This site is hosted by a third-party hosting provider, and its fonts are served by Google Fonts. Providers like these may process basic technical information such as your IP address and browser type as part of delivering the page.",
      "Links to GitHub, LinkedIn, X and WhatsApp lead to services with their own privacy policies, which apply once you leave this site.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask what information is held about you, ask for it to be corrected or deleted, or withdraw from further contact. Just send a message and it will be handled promptly.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "If this website adds features that handle information differently — such as stored form submissions or analytics — this page will be updated to describe them before they go live.",
    ],
  },
  {
    title: "Contact",
    body: [
      `Questions about privacy can go to ${site.email} or ${site.phoneDisplay}.`,
    ],
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="Short version: I only use your details to reply to you and deliver your project. Nothing is sold, and nothing is stored on this website without telling you."
      />

      <Section className="pt-6" ariaLabel="Privacy policy">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 40}>
              <h2 className="text-xl font-semibold sm:text-2xl">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
