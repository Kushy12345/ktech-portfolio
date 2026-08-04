import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, Section } from "@/components/site/ui-bits";
import { faqs } from "@/data/site";

const description =
  "Answers to common questions about website cost, project timelines, redesigns, post-launch support, mobile-friendly builds and digital marketing at K-Tech Solutions.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | Costs, Timelines & Support — K-Tech Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "FAQs | K-Tech Solutions" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/faq" },
      { name: "twitter:title", content: "FAQs | K-Tech Solutions" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Faq;
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title={
          <>
            The questions people <span className="text-gradient-mix">actually ask</span>
          </>
        }
        intro="Straight answers about cost, timelines and what happens after launch. If yours isn't here, message me and I'll answer it properly."
      />

      <Section className="pt-6" ariaLabel="Frequently asked questions">
        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`item-${index}`}
                className="premium-card border-none px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      <CtaBand
        title="Still have a question?"
        body="Ask me directly — by form, email or WhatsApp. No obligation, and I'll always give you an honest answer."
      />
    </>
  );
}
