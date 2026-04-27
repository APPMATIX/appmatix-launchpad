import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-[10rem] font-display font-bold leading-none text-gradient">404</div>
        <h2 className="mt-2 text-2xl font-display font-semibold">Page not found</h2>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Appmatix Solutions — Software studio for ambitious SMBs" },
      { name: "description", content: "We build web apps, mobile experiences, and automation systems engineered by a senior team and shipped on a predictable timeline." },
      { name: "author", content: "Appmatix Solutions" },
      { property: "og:title", content: "Appmatix Solutions — Software that moves businesses forward" },
      { property: "og:description", content: "Web, mobile, and automation engineered by a senior team. Predictable, transparent, and built to scale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
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
  return <Outlet />;
}
