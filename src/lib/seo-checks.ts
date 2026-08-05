import { posts } from "@/data/site";

export interface FileCheck {
  path: string;
  status: number;
  ok: boolean;
  error?: string | undefined;
}

export interface SeoCheckResult {
  ok: boolean;
  baseUrl: string;
  robots: FileCheck & {
    sitemapDirectiveFound: boolean;
    sitemapUrls: string[];
  };
  sitemapIndex: FileCheck & {
    childSitemaps: string[];
    expectedChildSitemaps: string[];
    missingChildSitemaps: string[];
  };
  pagesSitemap: FileCheck & {
    found: string[];
    expected: string[];
    missing: string[];
    extra: string[];
  };
  blogSitemap: FileCheck & {
    found: string[];
    expected: string[];
    missing: string[];
    extra: string[];
  };
  summary: {
    total: number;
    passed: number;
    failed: number;
  };
}

export const EXPECTED_PAGE_PATHS = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/skills",
  "/process",
  "/blog",
  "/faq",
  "/contact",
  "/privacy",
];

export const EXPECTED_BLOG_PATHS = posts.map((post) => `/blog/${post.slug}`);

export const EXPECTED_CHILD_SITEMAPS = ["/sitemap-pages.xml", "/sitemap-blog.xml"];

function extractLocs(xml: string): string[] {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1]?.trim())
    .filter((value): value is string => typeof value === "string" && value.length > 0);
}

async function fetchCheck(baseUrl: string, path: string): Promise<FileCheck & { text: string }> {
  try {
    const url = new URL(path, baseUrl).toString();
    const response = await fetch(url, { redirect: "follow" });
    const text = await response.text();
    return {
      path,
      status: response.status,
      ok: response.status === 200 && text.trim().length > 0,
      text,
      error: response.status === 200 ? undefined : `HTTP ${response.status}`,
    };
  } catch (err) {
    return {
      path,
      status: 0,
      ok: false,
      text: "",
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export async function runSeoChecks(baseUrl: string): Promise<SeoCheckResult> {
  const robots = await fetchCheck(baseUrl, "/robots.txt");
  const sitemapIndex = await fetchCheck(baseUrl, "/sitemap.xml");
  const pagesSitemap = await fetchCheck(baseUrl, "/sitemap-pages.xml");
  const blogSitemap = await fetchCheck(baseUrl, "/sitemap-blog.xml");

  const robotsSitemapUrls = robots.text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.toLowerCase().startsWith("sitemap:"))
    .map((line) => line.slice("sitemap:".length).trim());

  const robotsSitemapPathnames = robotsSitemapUrls.map((url) => {
    try {
      return new URL(url, baseUrl).pathname;
    } catch {
      return url;
    }
  });

  const indexLocs = sitemapIndex.ok ? extractLocs(sitemapIndex.text) : [];
  const indexPathnames = indexLocs.map((loc) => {
    try {
      return new URL(loc, baseUrl).pathname;
    } catch {
      return loc;
    }
  });

  const pagesLocs = pagesSitemap.ok ? extractLocs(pagesSitemap.text) : [];
  const pagesPathnames = pagesLocs.map((loc) => {
    try {
      return new URL(loc, baseUrl).pathname;
    } catch {
      return loc;
    }
  });

  const blogLocs = blogSitemap.ok ? extractLocs(blogSitemap.text) : [];
  const blogPathnames = blogLocs.map((loc) => {
    try {
      return new URL(loc, baseUrl).pathname;
    } catch {
      return loc;
    }
  });

  const robotsCheck = {
    ...robots,
    sitemapDirectiveFound: robotsSitemapPathnames.includes("/sitemap.xml"),
    sitemapUrls: robotsSitemapUrls,
  };

  const sitemapIndexCheck = {
    ...sitemapIndex,
    childSitemaps: indexPathnames,
    expectedChildSitemaps: EXPECTED_CHILD_SITEMAPS,
    missingChildSitemaps: EXPECTED_CHILD_SITEMAPS.filter((path) => !indexPathnames.includes(path)),
  };

  const pagesCheck = {
    ...pagesSitemap,
    found: pagesPathnames,
    expected: EXPECTED_PAGE_PATHS,
    missing: EXPECTED_PAGE_PATHS.filter((path) => !pagesPathnames.includes(path)),
    extra: pagesPathnames.filter((path) => !EXPECTED_PAGE_PATHS.includes(path)),
  };

  const blogCheck = {
    ...blogSitemap,
    found: blogPathnames,
    expected: EXPECTED_BLOG_PATHS,
    missing: EXPECTED_BLOG_PATHS.filter((path) => !blogPathnames.includes(path)),
    extra: blogPathnames.filter((path) => !EXPECTED_BLOG_PATHS.includes(path)),
  };

  const checks = [
    robots.ok && robotsCheck.sitemapDirectiveFound,
    sitemapIndex.ok && sitemapIndexCheck.missingChildSitemaps.length === 0,
    pagesSitemap.ok && pagesCheck.missing.length === 0,
    blogSitemap.ok && blogCheck.missing.length === 0,
  ];

  const passed = checks.filter(Boolean).length;
  const failed = checks.length - passed;

  return {
    ok: failed === 0,
    baseUrl,
    robots: robotsCheck,
    sitemapIndex: sitemapIndexCheck,
    pagesSitemap: pagesCheck,
    blogSitemap: blogCheck,
    summary: { total: checks.length, passed, failed },
  };
}
