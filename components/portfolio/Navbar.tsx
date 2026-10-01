"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { site } from "@/data/site"

export default function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  // hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest > (scrollY.getPrevious() ?? 0) && latest > 120)
  })

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          RA<span className="text-violet-400">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href}
              className={`relative px-4 py-2 text-sm transition-colors ${isActive(item.href) ? "text-white" : "text-white/50 hover:text-white"}`}>
              {item.label}
              {isActive(item.href) && (
                <motion.span layoutId="nav-underline"
                  className="absolute inset-x-4 -bottom-px h-px bg-violet-400" />
              )}
            </Link>
          ))}
        </nav>

        <Button asChild variant="outline" className="hidden rounded-full border-white/15 bg-transparent text-white hover:bg-violet-400/10 md:inline-flex">
          <Link href="/contact">Let&apos;s talk</Link>
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white md:hidden" aria-label="Menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-white/10 bg-[#0a0a0a] text-white">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <nav className="mt-16 flex flex-col gap-2 px-6">
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className={`py-3 text-3xl font-semibold ${isActive(item.href) ? "text-violet-400" : "text-white/70"}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
