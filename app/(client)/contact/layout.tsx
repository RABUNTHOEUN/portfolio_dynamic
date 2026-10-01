import { pageMetadata } from "@/lib/seo"

// page.tsx is a client component, so metadata lives in this layout
export const metadata = pageMetadata("Contact", "Have a project or opportunity? Get in touch.", "/contact")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
