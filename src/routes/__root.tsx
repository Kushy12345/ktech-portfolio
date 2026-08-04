import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { MouseGlow } from "@/components/site/Ambience";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-5 py-32 text-center">
      <p className="font-display text-[6rem] font-bold leading-none text-gradient-gold sm:text-[9rem]">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">This page took a wrong turn</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist, or it has moved somewhere better. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="gold" size="lg">
          <Link to="/">Back to home</Link>
        </Button>
        <Button asChild variant="glass" size="lg">
          <Link to="/contact">Contact me</Link>
        </Button>
      </div>
      <nav aria-label="Helpful links" className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        {[
          { to: "/services", label: "Services" },
          { to: "/portfolio", label: "Portfolio" },
          { to: "/blog", label: "Blog" },
          { to: "/faq", label: "FAQs" },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="link-underline text-muted-foreground hover:text-gold">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight">This page didn&apos;t load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on my end. Try refreshing, or head back home.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button
            variant="gold"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </Button>
          <Button asChild variant="glass">
            <a href="/">Go home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "K-Tech Solutions | Web Developer in Jos, Nigeria" },
      {
        name: "description",
        content:
          "K-Tech Solutions builds clean, responsive websites and digital solutions for small businesses. Founded by Tarfa Elijah Kwembe in Jos, Nigeria.",
      },
      { name: "author", content: site.founder },
      { name: "theme-color", content: "#151517" },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_NG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@DrSLIM5" },
      { name: "twitter:creator", content: "@DrSLIM5" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          description:
            "Web design, web development and digital solutions for small businesses and startups.",
          founder: { "@type": "Person", name: site.founder },
          telephone: site.phone,
          email: site.email,
          areaServed: "Nigeria",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jos",
            addressRegion: "Plateau State",
            addressCountry: "NG",
          },
          sameAs: [site.socials.github, site.socials.linkedin, site.socials.x],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <MouseGlow />
      <Header />
      <main id="main" className="relative z-10">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </QueryClientProvider>
  );
}
