import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildSitemapIndex, xmlResponse } from "@/lib/sitemap-xml";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(buildSitemapIndex(["/sitemap-pages.xml", "/sitemap-blog.xml"])),
    },
  },
});
