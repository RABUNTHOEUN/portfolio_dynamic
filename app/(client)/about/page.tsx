import { pageMetadata } from "@/lib/seo"
import Reveal from "@/components/portfolio/Reveal"
import PageHeader from "@/components/portfolio/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const focus = [
  { title: "Frontend", text: "Responsive, accessible interfaces with Vue, Nuxt, React and Next.js." },
  { title: "Backend", text: "APIs and business logic with Spring Boot, Java and Node.js." },
  { title: "Data & Deployment", text: "MySQL databases and Docker-based deployment." },
]

export const metadata = pageMetadata("About", "Who I am, what I do, and how I approach building software.", "/about")

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-32">
      <PageHeader eyebrow="About me" title="Turning ideas into useful products." />
      <div className="space-y-6 text-lg leading-8 text-white/50">
        <Reveal>
          <p>I enjoy transforming ideas into reliable and intuitive applications. My work spans frontend development, backend systems, APIs, databases, and deployment.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p>I believe good software should not only look good — it should solve problems, be maintainable, and provide a great experience for its users.</p>
        </Reveal>
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {focus.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.12}>
            <Card className="h-full border-white/10 bg-white/[0.02] text-white">
              <CardHeader><CardTitle>{f.title}</CardTitle></CardHeader>
              <CardContent className="text-white/50">{f.text}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </main>
  )
}
