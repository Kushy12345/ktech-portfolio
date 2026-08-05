import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, XCircle, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, PageHero, Section } from "@/components/site/ui-bits";
import { getSeoChecks } from "@/lib/seo-checks.functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/seo-checker")({
  head: () => ({
    meta: [
      { title: "SEO Health Check | K-Tech Solutions" },
      { name: "description", content: "Internal diagnostic page that verifies sitemaps and robots.txt are reachable and complete." },
      { property: "og:title", content: "SEO Health Check | K-Tech Solutions" },
      { property: "og:description", content: "Internal diagnostic page that verifies sitemaps and robots.txt are reachable and complete." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/seo-checker" }],
  }),
  component: SeoCheckerPage,
});

function SeoCheckerPage() {
  const fetchChecks = useServerFn(getSeoChecks);
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["seo-checks"],
    queryFn: fetchChecks,
  });

  return (
    <main>
      <PageHero
        eyebrow="Internal diagnostic"
        title="SEO health check"
        intro="A quick verification that robots.txt, the sitemap index, and every page and blog sitemap are returning 200 and include every expected URL."
      />

      <Section className="pt-0">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Base URL: <span className="font-medium text-foreground">{data?.baseUrl ?? "—"}</span>
              </p>
              {data && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {data.summary.passed} of {data.summary.total} checks passed
                </p>
              )}
            </div>
            <Button
              variant="glass"
              size="sm"
              onClick={() => refetch()}
              disabled={isFetching}
              className={cn(isFetching && "opacity-60")}
            >
              <RefreshCw className={cn("mr-2 h-4 w-4", isFetching && "animate-spin")} aria-hidden="true" />
              Re-run checks
            </Button>
          </div>

          {isLoading && <p className="text-muted-foreground">Running checks…</p>}

          {error && (
            <div className="premium-card border-destructive/30 p-6">
              <div className="flex items-center gap-3 text-destructive">
                <XCircle className="h-5 w-5" aria-hidden="true" />
                <p className="font-medium">Could not run checks</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{error instanceof Error ? error.message : String(error)}</p>
            </div>
          )}

          {data && (
            <div className="grid gap-6 md:grid-cols-2">
              <CheckCard
                title="robots.txt"
                path="/robots.txt"
                status={data.robots.status}
                ok={data.robots.ok && data.robots.sitemapDirectiveFound}
                details={[
                  data.robots.sitemapDirectiveFound
                    ? "Sitemap directive points to /sitemap.xml"
                    : "Missing or incorrect Sitemap directive",
                  ...(data.robots.sitemapUrls.length > 0
                    ? [`Found directives: ${data.robots.sitemapUrls.join(", ")}`]
                    : []),
                ]}
                error={data.robots.error}
              />

              <CheckCard
                title="Sitemap index"
                path="/sitemap.xml"
                status={data.sitemapIndex.status}
                ok={data.sitemapIndex.ok && data.sitemapIndex.missingChildSitemaps.length === 0}
                details={[
                  `Child sitemaps found: ${data.sitemapIndex.childSitemaps.length}`,
                  ...(data.sitemapIndex.missingChildSitemaps.length > 0
                    ? [`Missing: ${data.sitemapIndex.missingChildSitemaps.join(", ")}`]
                    : []),
                ]}
                error={data.sitemapIndex.error}
              />

              <UrlListCard
                title="Pages sitemap"
                path="/sitemap-pages.xml"
                status={data.pagesSitemap.status}
                ok={data.pagesSitemap.ok && data.pagesSitemap.missing.length === 0}
                found={data.pagesSitemap.found}
                expected={data.pagesSitemap.expected}
                missing={data.pagesSitemap.missing}
                extra={data.pagesSitemap.extra}
                error={data.pagesSitemap.error}
              />

              <UrlListCard
                title="Blog sitemap"
                path="/sitemap-blog.xml"
                status={data.blogSitemap.status}
                ok={data.blogSitemap.ok && data.blogSitemap.missing.length === 0}
                found={data.blogSitemap.found}
                expected={data.blogSitemap.expected}
                missing={data.blogSitemap.missing}
                extra={data.blogSitemap.extra}
                error={data.blogSitemap.error}
              />
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}

function CheckCard({
  title,
  path,
  status,
  ok,
  details,
  error,
}: {
  title: string;
  path: string;
  status: number;
  ok: boolean;
  details: string[];
  error?: string | undefined;
}) {
  return (
    <article className={cn("premium-card p-6", ok ? "border-gold/20" : "border-destructive/30")}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{path}</p>
        </div>
        <StatusBadge ok={ok} status={status} />
      </div>
      <ul className="mt-5 space-y-2">
        {details.map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className={cn("mt-1 h-1.5 w-1.5 shrink-0 rounded-full", ok ? "bg-gold" : "bg-destructive")} aria-hidden="true" />
            {detail}
          </li>
        ))}
        {error && (
          <li className="flex items-start gap-2 text-sm text-destructive">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
            {error}
          </li>
        )}
      </ul>
    </article>
  );
}

function UrlListCard({
  title,
  path,
  status,
  ok,
  found,
  expected,
  missing,
  extra,
  error,
}: {
  title: string;
  path: string;
  status: number;
  ok: boolean;
  found: string[];
  expected: string[];
  missing: string[];
  extra: string[];
  error?: string | undefined;
}) {
  return (
    <article className={cn("premium-card p-6", ok ? "border-gold/20" : "border-destructive/30")}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{path}</p>
        </div>
        <StatusBadge ok={ok} status={status} />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <UrlList label={`Found (${found.length})`} urls={found} />
        <UrlList label={`Expected (${expected.length})`} urls={expected} />
        {missing.length > 0 && <UrlList label="Missing" urls={missing} variant="bad" />}
        {extra.length > 0 && <UrlList label="Extra" urls={extra} variant="warn" />}
      </div>

      {error && (
        <p className="mt-4 text-sm text-destructive">
          <span className="inline-flex items-center gap-2">
            <XCircle className="h-4 w-4" aria-hidden="true" />
            {error}
          </span>
        </p>
      )}
    </article>
  );
}

function UrlList({
  label,
  urls,
  variant = "neutral",
}: {
  label: string;
  urls: string[];
  variant?: "neutral" | "bad" | "warn";
}) {
  return (
    <div>
      <h3
        className={cn(
          "mb-2 text-xs font-semibold uppercase tracking-wider",
          variant === "bad" && "text-destructive",
          variant === "warn" && "text-gold",
          variant === "neutral" && "text-muted-foreground",
        )}
      >
        {label}
      </h3>
      <ul className="max-h-48 space-y-1 overflow-y-auto rounded-xl border border-border bg-background/60 p-3 text-xs">
        {urls.map((url) => (
          <li
            key={url}
            className={cn(
              "truncate font-mono",
              variant === "bad" && "text-destructive",
              variant === "warn" && "text-gold",
              variant === "neutral" && "text-muted-foreground",
            )}
            title={url}
          >
            {url}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusBadge({ ok, status }: { ok: boolean; status: number }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        ok ? "bg-gold/10 text-gold" : "bg-destructive/10 text-destructive",
      )}
    >
      {ok ? <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> : <XCircle className="h-3.5 w-3.5" aria-hidden="true" />}
      {status === 0 ? "Error" : `HTTP ${status}`}
    </span>
  );
}
