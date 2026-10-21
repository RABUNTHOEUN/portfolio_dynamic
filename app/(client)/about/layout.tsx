import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "About",
  "Who I am, what I do, and how I approach building software.",
  "/about",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
