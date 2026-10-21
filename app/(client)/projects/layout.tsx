import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "Projects",
  "Web applications and business systems I've designed and built.",
  "/projects",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
