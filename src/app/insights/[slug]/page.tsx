import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container, CtaBand, InsightCard } from "@/components/Sections";
import { INSIGHTS, getInsight, type Block } from "@/data/insights";
import { SITE, formatDate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.dek, publishedTime: post.date },
  };
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return <p className="mt-6 text-lg leading-[1.75] text-navy-900/85">{block.text}</p>;
    case "h2":
      return <h2 className="display mt-14 text-4xl text-balance">{block.text}</h2>;
    case "ul":
      return (
        <ul className="mt-6 space-y-3 text-lg leading-[1.7] text-navy-900/85">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4">
              <span aria-hidden="true" className="mt-[0.85em] h-px w-5 shrink-0 bg-sky-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-6 space-y-3 text-lg leading-[1.7] text-navy-900/85">
          {block.items.map((item, i) => (
            <li key={item} className="grid grid-cols-[2.25rem_1fr] gap-2">
              <span className="label pt-2 text-sky-700">{String(i + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="mt-10 border-l-2 border-sky-600 bg-white p-6">
          <p className="label text-sky-700">{block.label}</p>
          <p className="mt-2 text-lg leading-relaxed">{block.text}</p>
        </aside>
      );
    case "quote":
      return (
        <figure className="mt-10 bg-navy-900 p-7 text-white md:p-9">
          <blockquote className="display text-3xl leading-tight text-balance">“{block.text}”</blockquote>
          <figcaption className="mt-5 text-sm text-white/60">{block.cite}</figcaption>
        </figure>
      );
    case "table":
      return (
        <figure className="mt-8">
          <div className="overflow-x-auto border border-navy-900/12 bg-white">
            <table className="w-full min-w-[34rem] border-collapse text-left text-[0.95rem]">
              <thead>
                <tr className="label bg-navy-900 text-white">
                  {block.head.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")} className="border-t border-navy-900/10 align-top">
                    {row.map((cell, i) =>
                      i === 0 ? (
                        <th key={i} scope="row" className="px-4 py-3 font-semibold">
                          {cell}
                        </th>
                      ) : (
                        <td key={i} className="px-4 py-3 text-navy-900/80">
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <figcaption className="mt-3 text-xs leading-relaxed text-steel">{block.note}</figcaption>}
        </figure>
      );
  }
}

// Params are awaited inside Suspense so the route shell stays static and navigation is instant.
export default function InsightPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950" />}>
      <InsightPageContent params={params} />
    </Suspense>
  );
}

async function InsightPageContent({ params }: Props) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const related = post.related.map(getInsight).filter((i) => i !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/insights/${post.slug}`,
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-navy-950">
        <div className="chart-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="label text-white/50">
            <Link href="/insights" className="hover:text-sky-300">
              Insights
            </Link>{" "}
            / <span className="text-sky-400">{post.category}</span>
          </nav>
          <h1 className="display mt-6 max-w-4xl text-5xl text-balance md:text-[4.25rem]">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/70">{post.dek}</p>
          <p className="label mt-8 text-white/45">
            {formatDate(post.date)} · {post.readMinutes} min read · Air Force Mechanical
          </p>
        </Container>
      </section>

      <article className="on-light bg-paper text-navy-900">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            {post.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}

            <div className="mt-16 flex flex-col gap-5 border-t border-navy-900/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-steel">
                Written by the Air Force Mechanical team from field assessments and active programs.
                <br />
                General guidance only. Confirm code and regulatory requirements for your property.
              </p>
              <Link href="/contact" className="btn btn-dark shrink-0">
                Talk to us
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-ink">
          <Container className="py-20">
            <p className="eyebrow">Keep reading</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((i) => (
                <InsightCard key={i.slug} i={i} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="Give us a deal you are working on."
        text="Or a building you are getting ready to exit."
        secondary={{ href: "/diligence", label: "See a sample assessment" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
