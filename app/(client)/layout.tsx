import Navbar from "@/components/portfolio/Navbar"
import Footer from "@/components/portfolio/Footer"
import ScrollProgress from "@/components/portfolio/ScrollProgress"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-ink text-fg">
      <ScrollProgress />
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
