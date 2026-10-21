import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";

const defaultTitle = `${site.full_name} — ${site.role}`;

/** Build a share-image URL (rendered by app/og/route.tsx, 1200x630). */
export function ogImageUrl(title: string, description?: string, label?: string) {
  const params = new URLSearchParams({ title });
  if (description) params.set("desc", description);
  if (label) params.set("label", label);
  return `/og?${params.toString()}`;
}

const defaultImage = {
  url: ogImageUrl(defaultTitle, site.description, "Portfolio"),
  width: 1200,
  height: 630,
  alt: defaultTitle,
};

/** Used in app/layout.tsx:  export const metadata = rootMetadata */
export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | ${site.full_name}`, // child pages only set their own title
  },
  description: site.description,
  applicationName: `${site.full_name} — Portfolio`,
  keywords: [
    "portfolio",
    "developer",
    "web developer",
    "full-stack developer",
    "Next.js",
    "Nuxt",
    "Vue",
    "React",
    "Spring Boot",
    "Cambodia",
    site.full_name,
  ],
  authors: [{ name: site.full_name, url: site.url }],
  creator: site.full_name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${site.full_name} — Portfolio`,
    title: defaultTitle,
    description: site.description,
    url: "/",
    locale: "en_US",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: [defaultImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Paste your Search Console token here (or set the env var) to verify the site.
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
    : undefined,
};

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/**
 * Helper for static pages.
 * Note: a child's `openGraph` / `twitter` REPLACE the parent's (no deep merge),
 * so siteName, type and images are repeated here on purpose.
 */
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const image = {
    url: ogImageUrl(title, description, site.full_name),
    width: 1200,
    height: 630,
    alt: `${title} | ${site.full_name}`,
  };

  return {
    title, // becomes "About | Ra Bunthoeun"
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: `${site.full_name} — Portfolio`,
      title: `${title} | ${site.full_name}`,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.full_name}`,
      description,
      images: [image.url],
    },
  };
}

/** Absolute URL for a path, e.g. absoluteUrl("/about"). */
export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

/** Only real web links belong in schema.org `sameAs` (skip tel:, mailto:). */
export function sameAsLinks() {
  return site.socials.map((s) => s.href).filter((href) => href.startsWith("http"));
}

/** Person + WebSite structured data for the whole site. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${absoluteUrl("/")}#person`,
        name: site.full_name,
        jobTitle: site.role,
        description: site.description,
        url: absoluteUrl("/"),
        image: absoluteUrl("/logo200x200.png"),
        email: `mailto:${site.email}`,
        sameAs: sameAsLinks(),
        knowsAbout: site.skillGroups.flatMap((g) => g.items.map((i) => i.name)),
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: `${site.full_name} — Portfolio`,
        description: site.description,
        inLanguage: ["en", "km"],
        publisher: { "@id": `${absoluteUrl("/")}#person` },
      },
    ],
  };
}

/** Safe to inject with dangerouslySetInnerHTML (escapes "<"). */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
