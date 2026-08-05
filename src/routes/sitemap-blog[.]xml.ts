import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildUrlSet, xmlResponse, type SitemapEntry } from "@/lib/sitemap-xml";
import { posts } from "@/data/site";

export const Route = createFileRoute("/sitemap-blog.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = posts.map((post) => ({
          path: `/blog/${post.slug}`,
          lastmod: post.date,
          changefreq: "yearly" as const,
          priority: "0.6",
        }));

        return xmlResponse(buildUrlSet(entries));
      },
    },
  },
});
