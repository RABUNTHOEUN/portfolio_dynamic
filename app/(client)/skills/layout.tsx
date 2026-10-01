import { pageMetadata } from "@/lib/seo"

// page.tsx is a client component, so metadata lives in this layout
export const metadata = pageMetadata("Skills", "The languages, frameworks and tools I use to design, build and ship.", "/skills")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
