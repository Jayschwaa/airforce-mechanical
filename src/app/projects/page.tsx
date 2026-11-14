import type { Metadata } from "next";
import Image from "next/image";
import { ClientMarquee, Container, CtaBand, PageHero, ProjectCard } from "@/components/Sections";
import { EXPERIENCE, PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Case studies from institutional multifamily, commercial and industrial portfolios, including $370K saved on a 300-system modernization for Brookfield Asset Management.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Proof, at institutional scale."
        lede="How we operate as a dedicated mechanical partner: what we were asked to do, what we found, and what ownership kept."
        image={{ src: "/images/miami-bayfront-aerial.jpg", alt: "" }}
      />

      <section className="bg-ink">
        <Container className="py-20 md:py-24">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </Container>
      </section>

      <ClientMarquee />

      <section className="on-light bg-paper text-navy-900">
        <Container className="py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Select client experience</p>
              <h2 className="display mt-5 text-4xl md:text-[3.4rem]">Across every asset class.</h2>
            </div>
            <figure className="relative aspect-[16/9] overflow-hidden bg-navy-900">
              <Image
                src="/images/block-55.jpg"
                alt="Aerial view of a mixed-use residential and retail development in downtown Miami"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
              <figcaption className="label absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent px-4 pb-3 pt-10 text-white">
                Block 55, Miami · mixed-use HVAC
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-px border border-mist bg-mist md:grid-cols-2 xl:grid-cols-4">
            {EXPERIENCE.map((group) => (
              <div key={group.sector} className="bg-white p-7">
                <h3 className="label text-sky-700">{group.sector}</h3>
                <ul className="mt-6 space-y-6">
                  {group.items.map((item) => (
                    <li key={item.client}>
                      <p className="display text-2xl">{item.client}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-steel">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a href="/downloads/air-force-capability-statement.pdf" className="btn btn-outline-dark mt-12" download>
            Download capability statement (PDF)
          </a>
        </Container>
      </section>

      <CtaBand
        title="Give us a deal you are working on."
        text="Or a building you are getting ready to exit. We will walk it and tell you what we would do."
      />
    </>
  );
}
