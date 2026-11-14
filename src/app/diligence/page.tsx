import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection, Container, InsightCard, PageHero, SectionHeading } from "@/components/Sections";
import { ValueBridge } from "@/components/ValueBridge";
import { getInsight } from "@/data/insights";

export const metadata: Metadata = {
  title: "Pre-Acquisition Diligence & Capital Assessments",
  description:
    "Mechanical condition assessments written from an owner’s point of view: a unit census, a five-year capital plan and the open questions, before your deposit goes hard. Download a sample report.",
  alternates: { canonical: "/diligence" },
};

const CENSUS = [
  { item: "HVAC", basis: "$7,000 a system across 50% of units", total: "$3.5M" },
  { item: "Ductwork", basis: "$2,000 a unit", total: "$2.0M" },
  { item: "Electrical", basis: "$2,000 a unit", total: "$2.0M" },
  { item: "Roofing", basis: "$3,000 a unit", total: "$3.0M" },
];

const REPORT = [
  {
    title: "Key takeaways",
    text: "What cannot wait, what is ordinary recurring capital, and what is still unknown, in language an investment committee can act on.",
  },
  {
    title: "Refrigerant census",
    text: "The fleet split across R-22, R-410A and A2L equipment, with ages from the data plates.",
  },
  {
    title: "Year-by-year spend",
    text: "Year 0 separated from the steady program, with a unit pricing menu and the quantity assumptions behind each total.",
  },
  {
    title: "Below-the-line items",
    text: "Scopes that are real but not yet understood, such as electrical, carried separately with a path to resolving them.",
  },
  {
    title: "Other building systems",
    text: "Roofing, gutters, siding and plumbing summarized with their insurance implications, even where they sit outside our scope.",
  },
  {
    title: "Photographic record",
    text: "Every system, data plate, line set and panel we looked at, grouped by system.",
  },
];

const STEPS = [
  {
    title: "Walk",
    text: "We walk representative buildings and photograph each system. A first pass on a large community takes a day.",
  },
  {
    title: "Reconcile",
    text: "The team reconciles field notes and pressure-tests assumptions against the property’s service history.",
  },
  {
    title: "Report",
    text: "A Phase 1 rough-order-of-magnitude report: directional figures with a stated range, usually around 10%.",
  },
  {
    title: "Firm",
    text: "Two to three further field days deepen the sample to 10 to 15% of units and bring electrical, ductwork and plumbing specialists on site.",
  },
  {
    title: "Defend",
    text: "We stand behind the plan in front of a lender, a carrier or a buyer at disposition.",
  },
];

export default function DiligencePage() {
  const related = [
    "pre-acquisition-hvac-census",
    "r22-r410a-refrigerant-transition-underwriting",
    "challenger-panels-four-point-insurability",
  ]
    .map(getInsight)
    .filter((i) => i !== undefined);

  return (
    <>
      <PageHero
        eyebrow="Diligence & capital assessments"
        title="Know the number before you go hard."
        lede="A mechanical assessment written the way an owner reads: focused on what protects net operating income, insurability and resident comfort, rather than a simple equipment list."
        image={{ src: "/images/brickell-street.jpg", alt: "" }}
      >
        <a href="/downloads/sample-capital-assessment.pdf" className="btn btn-primary" download>
          Download sample report (PDF)
        </a>
        <Link href="/contact" className="btn btn-ghost">
          Send us a deal
        </Link>
      </PageHero>

      <section className="on-light bg-paper text-navy-900">
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Lever 1"
              title="$10,500 a door, found before closing."
              lede="In our illustrative 1,000-unit model, the walkthrough puts $10.5M of real capital need in front of your investment team before the deposit goes hard. The aim is not to kill the deal. It is to avoid overpaying, and to have capex financing in place for the ownership life cycle."
            />
          </div>
          <div>
            <table className="w-full border-collapse text-left">
              <caption className="label pb-4 text-left text-sky-700">What the census finds</caption>
              <thead>
                <tr className="label border-b-2 border-navy-900 text-navy-900/60">
                  <th scope="col" className="py-3 pr-3 font-medium">
                    System
                  </th>
                  <th scope="col" className="py-3 pr-3 font-medium">
                    Basis
                  </th>
                  <th scope="col" className="py-3 text-right font-medium">
                    1,000 units
                  </th>
                </tr>
              </thead>
              <tbody>
                {CENSUS.map((r) => (
                  <tr key={r.item} className="border-b border-navy-900/12">
                    <th scope="row" className="display py-4 pr-3 text-2xl font-semibold">
                      {r.item}
                    </th>
                    <td className="py-4 pr-3 text-sm text-steel">{r.basis}</td>
                    <td className="display py-4 text-right text-2xl tabular-nums">{r.total}</td>
                  </tr>
                ))}
                <tr className="bg-navy-900 text-white">
                  <th scope="row" className="display px-3 py-4 text-2xl font-semibold">
                    Total
                  </th>
                  <td className="py-4 pr-3 text-sm text-white/65">$10,500 a door</td>
                  <td className="display px-3 py-4 text-right text-3xl text-sky-400 tabular-nums">$10.5M</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-steel">Illustrative figures for a twenty-year-old, 1,000-unit property.</p>
          </div>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-20 md:py-28">
          <SectionHeading
            eyebrow="The report"
            title="What lands on your desk."
            lede="Built for capital planning and negotiation, not a generic punch list."
          />
          <dl className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {REPORT.map((r, i) => (
              <div key={r.title} className="bg-ink p-7">
                <dt>
                  <span className="label text-sky-400">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display mt-4 block text-3xl">{r.title}</span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-white/65">{r.text}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 grid items-center gap-10 border border-white/10 bg-navy-900 p-7 md:p-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="label text-sky-400">Representative work sample</p>
              <h3 className="display mt-4 text-4xl text-balance">
                Three pages from a real portfolio assessment.
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">
                Excerpted from an assessment prepared for a multifamily affordable and senior-housing owner.
                Client and property names, locations, pricing and serial numbers have been removed. It covers a
                failed central chiller plant, why chillers and fan coils are scoped together, coastal equipment
                protection and refrigerant compliance.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/downloads/sample-capital-assessment.pdf" className="btn btn-primary" download>
                Download sample report
              </a>
              <Link href="/projects/project-jet-capital-assessment" className="btn btn-ghost">
                Read the Project Jet case study
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="on-light bg-white text-navy-900">
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Process" title="From first walk to a number you can underwrite." />
            <figure className="relative mt-10 aspect-[16/9] overflow-hidden bg-navy-900">
              <Image
                src="/images/team-planning.jpg"
                alt="A project team reviewing building plans at a conference table"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
          </div>
          <ol>
            {STEPS.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-navy-900/12 py-6">
                <span className="label pt-1.5 text-sky-700">0{i + 1}</span>
                <div>
                  <h3 className="display text-3xl">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-steel">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-950">
        <div className="chart-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="After closing"
              title="The inspection is the first of three levers."
              lede="The same census that protects the purchase price sets up the replacement program and the maintenance plan. Together they are worth roughly $24M on a $45M equity check in our model."
            />
            <Link
              href="/insights/inspection-to-exit-surprise-opex-to-planned-capex"
              className="btn btn-ghost mt-9"
            >
              Read: from inspection to exit
            </Link>
          </div>
          <div className="border border-white/10 bg-ink/60 p-5 md:p-8">
            <ValueBridge />
          </div>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-20">
          <p className="eyebrow">Diligence insights</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((i) => (
              <InsightCard key={i.slug} i={i} />
            ))}
          </div>
        </Container>
      </section>

      <ContactSection
        title="Send us a deal."
        lede="Give us a deal you are working on, or a building you are getting ready to exit. We will tell you what a walk would cover and how quickly we can be on site."
      />
    </>
  );
}
