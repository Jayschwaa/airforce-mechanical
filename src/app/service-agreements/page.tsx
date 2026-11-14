import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection, Container, PageHero, SectionHeading } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Service Agreements & Planned Maintenance",
  description:
    "Planned maintenance programs for commercial and multifamily portfolios: tagged asset inventory, scheduled visits, refrigerant compliance logs, condition reporting and priority dispatch.",
  alternates: { canonical: "/service-agreements" },
};

const INCLUDED = [
  {
    title: "Tagged asset inventory",
    text: "Every unit tagged and logged with age, refrigerant, condition and location, so ownership always knows what it owns and what it owes.",
  },
  {
    title: "Filter & belt program",
    text: "Consumables scheduled and carried in the agreement. No surprise change orders for routine wear items.",
  },
  {
    title: "Refrigerant compliance logs",
    text: "Leak testing, recovery and EPA Section 608 documentation maintained on your behalf across every piece of equipment.",
  },
  {
    title: "Condition reporting",
    text: "A written report after every visit, per asset. The same document your team can hand straight to ownership.",
  },
  {
    title: "Priority dispatch",
    text: "Agreement properties go to the front of the queue, 24/7, with escalation direct to a project manager.",
  },
  {
    title: "Upfront repair pricing",
    text: "A price list for common service issues, and reduced labor rates on any repair outside the agreement.",
  },
];

const SCHEDULE = [
  { cadence: "Quarterly", items: "Chiller plant checks. Water-quality sampling on chilled-water loops." },
  { cadence: "Semi-annual", items: "Condenser coil cleaning, water only on coated coastal coils." },
  {
    cadence: "Annual",
    items: "Preventive-maintenance shutdown with refrigerant leak testing and Section 608 documentation. Fan coil and air handler service.",
  },
  { cadence: "Every visit", items: "Written condition report, per asset, with photographs." },
];

const RESULTS = [
  { value: "25%+", label: "Reduction in remaining maintenance spend through planned service" },
  { value: "20–30%", label: "Fewer technician and property management hours" },
  { value: "$100K", label: "A year of savings and NOI in our 1,000-unit model" },
];

export default function ServiceAgreementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service agreements"
        title="Planned maintenance costs less than the call you make at 2 a.m."
        lede="We regularly walk properties that run with no maintenance contract at all, and the equipment looks older than its years. An agreement reverses that, for less than the reactive spend it replaces."
        image={{ src: "/images/crane-lift.jpg", alt: "" }}
      >
        <Link href="/contact" className="btn btn-primary">
          Discuss a service agreement
        </Link>
      </PageHero>

      <section className="border-b border-white/10 bg-navy-950">
        <Container>
          <dl className="grid gap-px bg-white/10 md:grid-cols-3">
            {RESULTS.map((r) => (
              <div key={r.label} className="bg-navy-950 py-10 md:px-7 md:first:pl-0">
                <dt className="sr-only">{r.label}</dt>
                <dd>
                  <span className="display block text-6xl text-sky-400">{r.value}</span>
                  <span className="mt-3 block max-w-xs text-sm leading-relaxed text-white/65">{r.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="on-light bg-paper text-navy-900">
        <Container className="py-20 md:py-28">
          <SectionHeading
            eyebrow="What is included"
            title="A schedule, a price list and a paper trail."
            lede="Every agreement turns mechanical spend from an unpredictable line item into a scheduled, documented program your asset managers can plan around."
          />
          <dl className="mt-14 grid gap-px border border-mist bg-mist md:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((a, i) => (
              <div key={a.title} className="bg-white p-7">
                <dt>
                  <span className="label text-sky-700">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display mt-4 block text-3xl">{a.title}</span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-steel">{a.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Typical schedule"
              title="What happens, and when."
              lede="Tuned to the equipment on site. Chilled-water properties and coastal properties carry additional provisions."
            />
            <figure className="relative mt-10 aspect-[4/3] overflow-hidden bg-navy-900">
              <Image
                src="/images/waterfront-rooftop.jpg"
                alt="A technician inspecting rooftop equipment at a waterfront property"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
          </div>
          <dl>
            {SCHEDULE.map((s) => (
              <div key={s.cadence} className="grid gap-2 border-t border-white/12 py-7 sm:grid-cols-[11rem_1fr]">
                <dt className="display text-3xl text-sky-400">{s.cadence}</dt>
                <dd className="leading-relaxed text-white/75">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="on-light bg-white text-navy-900">
        <Container className="grid gap-px py-20 md:grid-cols-3 md:py-24">
          {[
            {
              title: "Predictable",
              text: "Mechanical opex becomes a planned figure, not a quarterly surprise.",
            },
            {
              title: "Documented",
              text: "Deferred risk tracked per asset, ready for capital planning and diligence.",
            },
            {
              title: "Accountable",
              text: "One vendor across the portfolio. No chasing responsibility between trades.",
            },
          ].map((b) => (
            <div key={b.title} className="border-l-2 border-sky-600 py-2 pl-6 md:mr-8">
              <h3 className="display text-4xl">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-steel">{b.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <ContactSection
        title="Discuss a service agreement."
        lede="Tell us how many properties and roughly what equipment. We will propose a schedule and a price list."
      />
    </>
  );
}
