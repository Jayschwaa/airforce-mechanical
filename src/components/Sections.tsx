import Image from "next/image";
import Link from "next/link";
import type { Capability } from "@/data/capabilities";
import type { Insight } from "@/data/insights";
import type { Project } from "@/data/projects";
import { CLIENTS, SITE, formatDate } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: { src: string; alt: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy-950">
      {image && (
        <>
          <Image src={image.src} alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </>
      )}
      <div className="chart-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-6 max-w-4xl text-5xl text-balance md:text-7xl">{title}</h1>
        {lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{lede}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-5 text-4xl text-balance md:text-[3.4rem]">{title}</h2>
      {lede && <p className="mt-5 text-lg leading-relaxed opacity-70">{lede}</p>}
    </div>
  );
}

export function ClientMarquee() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Select clients" className="border-y border-white/10 bg-navy-950 py-9">
      <p className="label px-5 text-center text-white/45">
        Trusted by institutional owners, operators and general contractors
      </p>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <ul className="animate-marquee flex w-max items-center gap-14 pr-14">
          {row.map((c, i) => (
            <li
              key={`${c}-${i}`}
              aria-hidden={i >= CLIENTS.length}
              className="display whitespace-nowrap text-xl uppercase tracking-[0.08em] text-white/55"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CapabilityCard({ c }: { c: Capability }) {
  return (
    <Link
      href={`/capabilities/${c.slug}`}
      className="group flex flex-col bg-white p-7 transition-colors hover:bg-sky-200/40"
    >
      <span className="label text-sky-700">{c.code}</span>
      <h3 className="display mt-4 text-[1.7rem] text-navy-900">{c.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{c.summary}</p>
      <span className="label mt-6 text-navy-900/60 transition-colors group-hover:text-sky-700">
        Scope detail <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group flex h-full flex-col border border-white/10 bg-navy-900 p-7 transition-colors hover:border-sky-400/60"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="label bg-sky-400/10 px-2.5 py-1.5 text-sky-300">{p.sector}</span>
        <span className="label text-white/45">{p.location}</span>
      </div>
      <h3 className="display mt-7 text-3xl">{p.client}</h3>
      <p className="mt-2 text-sm text-white/65">{p.title}</p>
      <p className="label mt-3 text-sky-400">{p.status}</p>
      <dl className="mt-7 flex-1 space-y-5 border-t border-white/10 pt-6 text-sm">
        <div>
          <dt className="label text-white/40">Scale</dt>
          <dd className="mt-1.5 leading-relaxed text-white/80">{p.scale}</dd>
        </div>
        <div>
          <dt className="label text-white/40">Value delivered</dt>
          <dd className="mt-1.5 leading-relaxed text-white/80">{p.value}</dd>
        </div>
      </dl>
      <span className="label mt-7 text-white/50 transition-colors group-hover:text-sky-300">
        Read case study <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export function InsightCard({ i, light = false }: { i: Insight; light?: boolean }) {
  return (
    <Link
      href={`/insights/${i.slug}`}
      className={`group flex h-full flex-col border p-7 transition-colors ${
        light
          ? "border-navy-900/10 bg-white hover:border-sky-600"
          : "border-white/10 bg-navy-900 hover:border-sky-400/60"
      }`}
    >
      <span className={`label ${light ? "text-sky-700" : "text-sky-400"}`}>{i.category}</span>
      <h3 className={`display mt-4 text-[1.75rem] text-balance ${light ? "text-navy-900" : ""}`}>{i.title}</h3>
      <p className={`mt-3 flex-1 text-sm leading-relaxed ${light ? "text-steel" : "text-white/65"}`}>{i.dek}</p>
      <span className={`label mt-6 ${light ? "text-navy-900/50" : "text-white/40"}`}>
        {formatDate(i.date)} · {i.readMinutes} min read
      </span>
    </Link>
  );
}

export function ContactSection({
  title = "Request a portfolio consultation.",
  lede = "Tell us about a deal you are working on, or a building you are getting ready to exit. We will come back with next steps. No obligation, no sales pressure.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950">
      <div className="chart-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="display mt-5 text-4xl text-balance md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">{lede}</p>
          <dl className="mt-10 space-y-6 border-t border-white/10 pt-8 text-sm">
            <div>
              <dt className="label text-white/45">Principal</dt>
              <dd className="mt-2 text-white/85">
                Jason Schwartz
                <br />
                <a href={SITE.phoneHref} className="text-sky-300 hover:underline">
                  {SITE.phone}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${SITE.email}`} className="text-sky-300 hover:underline">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-white/45">24/7 service line</dt>
              <dd className="mt-2">
                <a href={SITE.serviceHref} className="text-sky-300 hover:underline">
                  {SITE.serviceLine}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-white/45">Headquarters</dt>
              <dd className="mt-2 text-white/85">
                {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </dd>
            </div>
            <div>
              <dt className="label text-white/45">Licenses</dt>
              <dd className="mt-2 text-white/85">
                {SITE.licenses.map((l) => `${l.label} ${l.number}`).join(" · ")}
              </dd>
            </div>
          </dl>
        </div>
        <div className="border border-white/10 bg-ink/70 p-6 md:p-9">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export function CtaBand({
  title,
  text,
  primary = { href: "/contact", label: "Request consultation" },
  secondary,
}: {
  title: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-white/10 bg-navy-900">
      <Container className="flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="display text-4xl text-balance md:text-5xl">{title}</h2>
          {text && <p className="mt-4 text-lg leading-relaxed text-white/65">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.href} className="btn btn-primary">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn btn-ghost">
              {secondary.label}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
