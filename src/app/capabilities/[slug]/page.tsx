import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container, CtaBand, InsightCard, PageHero } from "@/components/Sections";
import { CAPABILITIES, getCapability } from "@/data/capabilities";
import { getInsight } from "@/data/insights";
import { getProject } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CAPABILITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCapability(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/capabilities/${c.slug}` },
  };
}

// Params are awaited inside Suspense so the route shell stays static and navigation is instant.
export default function CapabilityPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950" />}>
      <CapabilityPageContent params={params} />
    </Suspense>
  );
}

async function CapabilityPageContent({ params }: Props) {
  const { slug } = await params;
  const c = getCapability(slug);
  if (!c) notFound();

  const projects = c.relatedProjects.map(getProject).filter((p) => p !== undefined);
  const insights = c.relatedInsights.map(getInsight).filter((i) => i !== undefined);
  const index = CAPABILITIES.findIndex((x) => x.slug === c.slug);
  const next = CAPABILITIES[(index + 1) % CAPABILITIES.length];

  return (
    <>
      <PageHero eyebrow={`Capability ${c.code}`} title={c.title} lede={c.summary}>
        <Link href="/contact" className="btn btn-primary">
          Request consultation
        </Link>
        <Link href="/capabilities" className="btn btn-ghost">
          All capabilities
        </Link>
      </PageHero>

      <section className="on-light bg-paper text-navy-900">
        <Container className="grid gap-14 py-20 md:py-24 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-xl leading-relaxed text-navy-900/85">{c.intro}</p>

            <h2 className="display mt-14 text-4xl">Scope</h2>
            <ul className="mt-6 border-t border-navy-900/12">
              {c.scope.map((s, i) => (
                <li key={s} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-navy-900/12 py-4">
                  <span className="label pt-1 text-sky-700">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:pt-2">
            <div className="bg-navy-900 p-7 text-white">
              <h2 className="label text-sky-400">What ownership receives</h2>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/85">
                {c.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-sky-400" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {projects.length > 0 && (
              <div className="border border-navy-900/12 bg-white p-7">
                <h2 className="label text-sky-700">Related work</h2>
                <ul className="mt-5 space-y-5">
                  {projects.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/projects/${p.slug}`} className="group block">
                        <span className="display block text-2xl group-hover:text-sky-700">{p.client}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-steel">{p.scale}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>

      {insights.length > 0 && (
        <section className="bg-ink">
          <Container className="py-20">
            <p className="eyebrow">Related insights</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {insights.map((i) => (
                <InsightCard key={i.slug} i={i} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="Talk to us about your portfolio."
        text="One point of contact, technicians who know your properties, and every line of scope laid out and priced."
        secondary={{ href: `/capabilities/${next.slug}`, label: `Next: ${next.title}` }}
      />
    </>
  );
}
