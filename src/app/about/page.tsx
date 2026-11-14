import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection, Container, PageHero, SectionHeading } from "@/components/Sections";
import { MANUFACTURERS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Air Force Mechanical is the commercial division of Air Force HVAC, a family-owned mechanical contractor established in 2010 and headquartered in Deerfield Beach, Florida.",
  alternates: { canonical: "/about" },
};

const STATS = [
  { value: "2010", label: "Family owned since" },
  { value: "$40M+", label: "National sales, all facilities platforms" },
  { value: "800+", label: "Five-star reviews" },
  { value: "1M+", label: "Square feet of ductwork cleaned" },
];

const LEADERS = [
  { name: "Jason Schwartz", role: "Owner & Principal" },
  { name: "Daniela Schwartz", role: "Owner" },
  { name: "Dash Hernandez", role: "Commercial" },
  { name: "Summer-Rae Tomlinson", role: "Chief of Staff" },
];

const APART = [
  {
    title: "Value-added partner",
    text: "We scope what the property actually needs, not just what was specified.",
  },
  {
    title: "Full electrical load calculations",
    text: "Run on every property before equipment is ordered. On one program we were the only contractor that did.",
  },
  {
    title: "Utility & regulatory navigation",
    text: "We sequence around utility pipelines so they never gate the schedule.",
  },
  {
    title: "One partner, fewer change orders",
    text: "HVAC and plumbing self-performed. Electrical and roofing managed under the same contract.",
  },
];

const COMPANY_DATA = [
  ["Legal name", SITE.legalName],
  ["Business type", "Small business · Family owned · Est. 2010"],
  ["Headquarters", `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`],
  ["Service area", "Miami-Dade · Broward · Palm Beach, with national coverage"],
  ["Presence", "Florida · Texas · Louisiana"],
  ["Florida licenses", SITE.licenses.map((l) => `${l.label} ${l.number}`).join(" · ")],
  ["Primary NAICS", "238220 · Plumbing, Heating & Air-Conditioning Contractors"],
  ["Additional NAICS", "238160 · 238210 · 238290 · 561210 · 561790"],
  ["PSC / FSC", "J041 (HVAC repair) · Z2 (building alteration)"],
  ["Insurance & bonding", "Licensed and insured. Bonding on request."],
  ["Payment", "Accepts government purchase and credit cards"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A contractor with an equity mindset."
        lede="Air Force Mechanical is the commercial division of Air Force HVAC: a family-owned mechanical contractor, established in 2010, delivering fast, reliable, precision-tuned work at scale for institutional owners, prime contractors and public agencies."
        image={{ src: "/images/miami-bayfront-aerial.jpg", alt: "" }}
      />

      <section className="border-b border-white/10 bg-navy-950">
        <Container>
          <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-navy-950 py-9 pr-4 lg:px-7 lg:first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="display block text-5xl text-sky-400">{s.value}</span>
                  <span className="mt-3 block text-sm leading-relaxed text-white/60">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="on-light bg-paper text-navy-900">
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Who we are" title="Every line of scope laid out, cost controlled, schedule held." />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-navy-900/85">
              <p>
                We started in South Florida in 2010 as a family business, and we still are one. What has changed
                is the scale: more than fifteen years of servicing and modernizing large portfolios across the
                Southeast and Texas, including mechanical due-diligence reviews and multi-year replacement
                programs for institutional owners and operators.
              </p>
              <p>
                That work has given us a useful combination of field execution and owner-side perspective. We
                try to write and scope the way an owner reads: lower cost, more scope, better returns, and no
                change-order surprises.
              </p>
              <p>
                Multifamily, office and industrial are our specialties. HVAC and plumbing are self-performed
                under our own licenses. Electrical and roofing are managed through licensed partners under one
                contract, sequenced around the mechanical work.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/downloads/air-force-capability-statement.pdf" className="btn btn-dark" download>
                Capability statement (PDF)
              </a>
              <a href={SITE.residentialUrl} target="_blank" rel="noopener" className="btn btn-outline-dark">
                Residential service ↗
              </a>
            </div>
          </div>
          <figure className="relative min-h-[24rem] overflow-hidden bg-navy-900">
            <Image
              src="/images/brickell-street.jpg"
              alt="High-rise residential and commercial towers along a street in Brickell, Miami"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </figure>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="What sets us apart" title="We think like an owner, because we scope like one." />
          <dl className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {APART.map((a, i) => (
              <div key={a.title} className="bg-ink p-7">
                <dt>
                  <span className="label text-sky-400">0{i + 1}</span>
                  <span className="display mt-4 block text-3xl">{a.title}</span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-white/65">{a.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="on-light bg-white text-navy-900">
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Leadership" title="The team behind the work." />
            <ul className="mt-10 border-t border-navy-900/12">
              {LEADERS.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-navy-900/12 py-5">
                  <span className="display text-3xl">{l.name}</span>
                  <span className="label text-right text-sky-700">{l.role}</span>
                </li>
              ))}
            </ul>
            <p className="label mt-10 text-navy-900/50">Manufacturers</p>
            <p className="display mt-3 text-2xl leading-snug">{MANUFACTURERS.join(" · ")}</p>
          </div>
          <div>
            <SectionHeading eyebrow="Company data" title="For procurement and compliance." />
            <dl className="mt-10 border-t border-navy-900/12">
              {COMPANY_DATA.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-navy-900/12 py-4 sm:grid-cols-[12rem_1fr]">
                  <dt className="label pt-1 text-navy-900/55">{k}</dt>
                  <dd className="leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact" className="btn btn-dark mt-10">
              Request a bid
            </Link>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
