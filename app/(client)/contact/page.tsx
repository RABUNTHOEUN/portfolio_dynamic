"use client"
import { useState } from "react"
import Reveal from "@/components/portfolio/Reveal"
import PageHeader from "@/components/portfolio/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/data/site"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <main className="mx-auto max-w-3xl px-6 pb-32">
      <PageHeader eyebrow="Contact" title="Let's build something great together.">
        Have a project, idea, or opportunity? I&apos;d love to hear about it.
      </PageHeader>
      <Reveal>
        <form onSubmit={submit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required value={form.name} onChange={set("name")} className="border-white/15 bg-white/[0.03]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={form.email} onChange={set("email")} className="border-white/15 bg-white/[0.03]" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required rows={6} value={form.message} onChange={set("message")} className="border-white/15 bg-white/[0.03]" />
          </div>
          <Button type="submit" size="lg" className="rounded-full bg-white px-8 text-black hover:bg-violet-100">
            Send message →
          </Button>
        </form>
      </Reveal>
    </main>
  )
}
