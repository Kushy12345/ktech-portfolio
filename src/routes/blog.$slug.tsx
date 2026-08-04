import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, CtaBand, Section } from "@/components/site/ui-bits";
import { FloatingShapes } from "@/components/site/Ambience";
import { Reveal } from "@/components/site/Reveal";
import { posts, site } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable | K-Tech Solutions" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | K-Tech Solutions` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: site.founder },
            publisher: { "@type": "Organization", name: site.name },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-32 sm:pt-40">
        <FloatingShapes />
        <Container className="relative max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All articles
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-gold/12 px-3 py-1 font-semibold text-gold">
              {post.category}
            </span>
            <span>{post.readingTime}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post.excerpt}
          </p>
        </Container>
      </section>

      <Section className="pt-10" ariaLabel="Article body">
        <div className="mx-auto max-w-3xl">
          <div className="gold-rule" />
          <div className="mt-10 space-y-6">
            {post.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 40}>
                <p className="text-base leading-[1.85] text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <div className="premium-card mt-14 p-7">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Written by <span className="font-semibold text-foreground">{site.founder}</span>,
              founder of {site.name} in {site.location}. If any of this raised a question about your
              own website, just ask.
            </p>
            <Button asChild variant="gold" className="mt-5">
              <Link to="/contact">Ask me a question</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0" ariaLabel="More articles">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-bold">Keep reading</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/blog/$slug"
                params={{ slug: other.slug }}
                className="premium-card block p-6"
              >
                <p className="text-xs font-semibold text-gold">{other.category}</p>
                <h3 className="mt-3 text-base font-semibold leading-snug">{other.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{other.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
