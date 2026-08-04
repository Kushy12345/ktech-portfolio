import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, Section } from "@/components/site/ui-bits";
import { posts } from "@/data/site";

const description =
  "Plain-language articles on web development, responsive design, digital marketing basics, Power BI for small business and drone photography — by Tarfa Elijah Kwembe.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Notes on Web, Marketing & Data — K-Tech Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "Blog | K-Tech Solutions" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/blog" },
      { name: "twitter:title", content: "Blog | K-Tech Solutions" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Notes on building things <span className="text-gradient-mix">that work</span>
          </>
        }
        intro="What I'm learning, and what I think small businesses genuinely need to know about being online. No filler, no buzzwords."
      />

      <Section ariaLabel="Featured article" className="pt-6">
        <Reveal>
          <article className="premium-card p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-gold/12 px-3 py-1 font-semibold text-gold">
                {featured.category}
              </span>
              <span>{featured.readingTime}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={featured.date}>
                {new Date(featured.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {featured.excerpt}
            </p>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold"
            >
              Read the article
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </Reveal>
      </Section>

      <Section ariaLabel="All articles" className="pt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 70}>
              <article className="premium-card flex h-full flex-col p-7">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-gold">{post.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
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

      <CtaBand
        title="Got a question I should write about?"
        body="Send it over. If it's something other business owners are wondering too, it might become the next article."
      />
    </>
  );
}
