"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import Reveal from "@/components/portfolio/Reveal"
import PageHeader from "@/components/portfolio/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/data/site"

const projectTypes = [
  "Website",
  "Web Application",
  "Business System",
  "CMS",
  "API / Backend",
  "Other",
]

const budgets = [
  "Not sure yet",
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000+",
]

export default function ContactPage() {
  const { t } = useLanguage()
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const set =
    (key: keyof typeof form) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
      ) => {
        setForm((current) => ({
          ...current,
          [key]: e.target.value,
        }))
      }

  function submit(e: React.FormEvent) {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio project inquiry from ${form.name}`,
    )

    const body = encodeURIComponent(
      [
        `Hello Ra,`,
        ``,
        `I'd like to discuss a project with you.`,
        ``,
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Project type: ${form.projectType || "Not specified"}`,
        `Budget: ${form.budget || "Not specified"}`,
        ``,
        `Message:`,
        form.message,
        ``,
        `— Sent from portfolio website`,
      ].join("\n"),
    )

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <main className="mx-auto max-w-6xl px-6 pb-32">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <PageHeader
        eyebrow={t("Contact")}
        title={t("Let's build something great together.")}
      >{t("Have a project, idea, or opportunity? Tell me a little about it and I'll get back to you.")}</PageHeader>

      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}
      <section className="mt-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Contact information */}
          <Reveal>
            <div className="space-y-8">

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-brand">{t("Get in touch")}</p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight">{t("Have something in mind?")}</h2>

                <p className="mt-4 leading-7 text-fg/40">{t("Whether you're starting with an idea, planning a new product, or improving an existing system, I'm happy to hear about it.")}</p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-fg/10 bg-fg/[0.02] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-fg/30">{t("Email")}</p>

                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 block break-all text-lg transition hover:text-brand"
                >
                  {site.email}
                </a>
              </div>

              {/* Availability */}
              <div className="rounded-2xl border border-fg/10 bg-fg/[0.02] p-6">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal" />

                  <span className="text-sm text-fg/70">{t("Available for opportunities")}</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-fg/40">{t("Open to freelance projects, collaborations, and interesting development opportunities.")}</p>
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-fg/30">{t("Find me online")}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {site.socials.map((social) => (
                    <a
                      key={t(social.label)}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-fg/10 px-4 py-2 text-sm text-fg/50 transition hover:border-fg/30 hover:text-fg"
                    >
                      {t(social.label)}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>

          {/* =====================================================
              FORM
          ===================================================== */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-fg/10 bg-fg/[0.02] p-6 sm:p-8 lg:p-10">

              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-brand">{t("Start a conversation")}</p>

                <h2 className="mt-3 text-2xl font-semibold">{t("Tell me about your project")}</h2>
              </div>

              <form onSubmit={submit} className="space-y-6">

                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div className="space-y-2">
                    <Label htmlFor="name">{t("Name")}</Label>

                    <Input
                      id="name"
                      required
                      placeholder={t("Your name")}
                      value={form.name}
                      onChange={set("name")}
                      className="h-12 border-fg/15 bg-fg/[0.03]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("Email")}</Label>

                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder={t("you@example.com")}
                      value={form.email}
                      onChange={set("email")}
                      className="h-12 border-fg/15 bg-fg/[0.03]"
                    />
                  </div>

                </div>

                {/* Project type + Budget */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div className="space-y-2">
                    <Label htmlFor="projectType">{t("Project type")}</Label>

                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={set("projectType")}
                      className="h-12 w-full rounded-md border border-fg/15 bg-fg/[0.03] px-3 text-sm text-fg outline-none transition focus:border-brand"
                    >
                      <option
                        value=""
                        className="bg-ink"
                      >{t("Select a project type")}</option>

                      {projectTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-ink"
                        >
                          {t(type)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">{t("Budget")}</Label>

                    <select
                      id="budget"
                      value={form.budget}
                      onChange={set("budget")}
                      className="h-12 w-full rounded-md border border-fg/15 bg-fg/[0.03] px-3 text-sm text-fg outline-none transition focus:border-brand"
                    >
                      <option
                        value=""
                        className="bg-ink"
                      >{t("Select a budget")}</option>

                      {budgets.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                          className="bg-ink"
                        >
                          {t(budget)}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">{t("Message")}</Label>

                  <Textarea
                    id="message"
                    required
                    rows={7}
                    placeholder={t("Tell me about your project, goals, requirements, or idea...")}
                    value={form.message}
                    onChange={set("message")}
                    className="resize-none border-fg/15 bg-fg/[0.03]"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <p className="text-xs leading-5 text-fg/30">{t("Your message will open your email client to send the inquiry.")}</p>

                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full bg-btn px-8 text-btn-fg hover:bg-btn/85"
                  >{t("Send message →")}</Button>

                </div>

              </form>
            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          PROJECT TYPES
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <div className="border-y border-fg/10 py-16">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-brand">{t("What I can help with")}</p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t("From websites to business systems.")}</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {projectTypes.map((type, index) => (
                  <div
                    key={type}
                    className="rounded-xl border border-fg/10 bg-fg/[0.02] p-5 transition hover:border-brand/30"
                  >
                    <span className="text-xs text-brand">
                      0{index + 1}
                    </span>

                    <p className="mt-3 font-medium">
                      {t(type)}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("Have an idea?")}</p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">{t("Let's turn it into something real.")}</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-fg/40">{t("Start with a simple conversation. You don't need everything figured out before reaching out.")}</p>

            <div className="mt-10">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex rounded-full border border-fg/15 px-7 py-3 font-medium transition hover:border-fg/40 hover:bg-fg/5"
              >
                {site.email}
              </a>
            </div>

          </div>
        </Reveal>
      </section>

    </main>
  )
}