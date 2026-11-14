import type { Metadata } from "next";
import Link from "next/link";
import { Container, CtaBand, InsightCard, PageHero } from "@/components/Sections";
import { INSIGHTS } from "@/data/insights";
import { formatDate } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guidance on HVAC and mechanical systems for institutional owners: capital planning, pre-acquisition diligence, refrigerant compliance and keeping buildings running.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [lead, ...rest] = INSIGHTS;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Mechanical intelligence for institutional owners."
        lede="Field notes on capital planning, diligence, compliance and operations, drawn from the buildings we walk and the programs we run."
      />

      <section className="on-light bg-paper text-navy-900">
        <Container className="py-16 md:py-24">
          <Link
            href={`/insights/${lead.slug}`}
            className="group grid gap-8 border border-navy-900/10 bg-white p-7 transition-colors hover:border-sky-600 md:p-12 lg:grid-cols-[1.5fr_1fr] lg:items-end"
          >
            <div>
              <span className="label text-sky-700">Latest · {lead.category}</span>
              <h2 className="display mt-5 text-4xl text-balance md:text-6xl">{lead.title}</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-steel">{lead.dek}</p>
              <span className="label mt-6 block text-navy-900/50">
                {formatDate(lead.date)} · {lead.readMinutes} min read
              </span>
            </div>
          </Link>

          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((i) => (
              <InsightCard key={i.slug} i={i} light />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Have a question a building is asking?"
        text="Send it over. If it is one other owners are asking too, we will write it up."
      />
    </>
  );
}
