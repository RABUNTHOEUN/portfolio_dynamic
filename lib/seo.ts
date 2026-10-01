import type { Metadata } from "next";
import { site } from "@/data/site";

/** Use in app/layout.tsx:  export const metadata = rootMetadata */
export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`, // child pages only set their own title
  },
  description: site.description,
  keywords: [
    "portfolio",
    "developer",
    "Next.js",
    "Nuxt",
    "Vue",
    "React",
    "Spring Boot",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
};

/** Helper for static pages */
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title, // becomes "About | Ra Bunthoeun"
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
