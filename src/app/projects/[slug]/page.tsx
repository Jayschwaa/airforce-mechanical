import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container, CtaBand, PageHero } from "@/components/Sections";
import { getCapability } from "@/data/capabilities";
import { PROJECTS, getProject } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.client}: ${p.title}`,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: p.image ? { images: [p.image.src] } : undefined,
  };
}

// Params are awaited inside Suspense so the route shell stays static and navigation is instant.
export default function ProjectPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950" />}>
      <ProjectPageContent params={params} />
    </Suspense>
  );
}

async function ProjectPageContent({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const capabilities = p.capabilities.map(getCapability).filter((c) => c !== undefined);
  const index = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <PageHero eyebrow={`${p.sector} · ${p.location}`} title={p.client} lede={p.summary}>
        <span className="label border border-sky-400/40 px-3 py-2 text-sky-300">{p.status}</span>
      </PageHero>

      <section className="border-b border-white/10 bg-navy-950">
        <Container>
          <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {p.stats.map((s) => (
              <div key={s.label} className="bg-navy-950 py-9 pr-4 lg:px-7 lg:first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="display block text-5xl text-sky-400">{s.value}</span>
                  <span className="label mt-3 block leading-relaxed text-white/55">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="on-light bg-paper text-navy-900">
        <Container className="grid gap-14 py-20 md:py-24 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="display text-4xl text-balance md:text-5xl">{p.title}</h2>

            {p.image && (
              <figure className="relative mt-10 aspect-[16/9] overflow-hidden bg-navy-900">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </figure>
            )}

            {p.body?.map((para) => (
              <p key={para.slice(0, 40)} className="mt-7 text-lg leading-relaxed text-navy-900/85">
                {para}
              </p>
            ))}

            {p.challenge && (
              <>
                <h3 className="display mt-14 text-3xl">The challenge</h3>
                <ul className="mt-5 border-t border-navy-900/12">
                  {p.challenge.map((c) => (
                    <li key={c} className="border-b border-navy-900/12 py-4 leading-relaxed">
                      {c}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {p.approach && (
              <>
                <h3 className="display mt-14 text-3xl">Our approach</h3>
                <ol className="mt-5 border-t border-navy-900/12">
                  {p.approach.map((a, i) => (
                    <li key={a} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-navy-900/12 py-4">
                      <span className="label pt-1 text-sky-700">0{i + 1}</span>
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}

            {p.costs && (
              <>
                <h3 className="display mt-14 text-3xl">Project cost &amp; savings detail</h3>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
                    <tbody>
                      {p.costs.rows.map((r) => (
                        <tr
                          key={r.label}
                          className={
                            r.kind === "save"
                              ? "bg-navy-900 text-white"
                              : r.kind
                                ? "border-y-2 border-navy-900 font-semibold"
                                : "border-b border-navy-900/12"
                          }
                        >
                          <th scope="row" className="px-3 py-3.5 font-[inherit]">
                            {r.label}
                          </th>
                          <td
                            className={`px-3 py-3.5 text-right tabular-nums ${r.kind === "save" ? "display text-2xl text-sky-400" : ""}`}
                          >
                            {r.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-steel">{p.costs.note}</p>
              </>
            )}

            {p.outcomes && (
              <>
                <h3 className="display mt-14 text-3xl">Outcomes</h3>
                <dl className="mt-5 grid gap-px border border-mist bg-mist sm:grid-cols-2">
                  {p.outcomes.map((o) => (
                    <div key={o.title} className="bg-white p-6">
                      <dt className="label text-sky-700">{o.title}</dt>
                      <dd className="mt-2 leading-relaxed">{o.text}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}
          </div>

          <aside className="space-y-6">
            <dl className="bg-navy-900 p-7 text-white">
              <div>
                <dt className="label text-sky-400">Scope</dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/85">{p.scope}</dd>
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <dt className="label text-sky-400">Scale</dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/85">{p.scale}</dd>
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <dt className="label text-sky-400">Value delivered</dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/85">{p.value}</dd>
              </div>
            </dl>

            <div className="border border-navy-900/12 bg-white p-7">
              <h2 className="label text-sky-700">Capabilities used</h2>
              <ul className="mt-5 space-y-3">
                {capabilities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/capabilities/${c.slug}`} className="display text-2xl hover:text-sky-700">
                      {c.title} <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {p.quote && (
        <section className="bg-navy-950">
          <Container className="py-20 md:py-24">
            <figure className="mx-auto max-w-4xl">
              <span aria-hidden="true" className="display text-8xl leading-none text-sky-400">
                “
              </span>
              <blockquote className="display -mt-6 text-3xl leading-tight text-balance md:text-[2.6rem]">
                {p.quote.text}
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <span className="font-semibold">{p.quote.name}</span>
                <span className="mt-1 block text-white/55">{p.quote.role}</span>
              </figcaption>
            </figure>
          </Container>
        </section>
      )}

      <CtaBand
        title="Have a portfolio like this one?"
        text="Tell us about it. We reply within one business day."
        secondary={{ href: `/projects/${next.slug}`, label: `Next: ${next.client}` }}
      />
    </>
  );
}
