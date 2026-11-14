import Image from "next/image";
import Link from "next/link";
import {
  CapabilityCard,
  ClientMarquee,
  ContactSection,
  Container,
  InsightCard,
  ProjectCard,
  SectionHeading,
} from "@/components/Sections";
import { ValueBridge } from "@/components/ValueBridge";
import { CAPABILITIES } from "@/data/capabilities";
import { INSIGHTS } from "@/data/insights";
import { EXPERIENCE, PROJECTS } from "@/data/projects";

const HERO_STATS = [
  { value: "$40M+", label: "National sales across facilities platforms" },
  { value: "450+", label: "Distribution and retail centers, 100K to 3M sq ft" },
  { value: "250+", label: "Industrial facilities under diligence and maintenance" },
  { value: "$370K", label: "Returned to one owner on one project" },
];

const FIELD = [
  {
    src: "/images/rtu-service.jpg",
    alt: "Technician servicing a packaged rooftop unit",
    caption: "Rooftop replacement and service",
  },
  {
    src: "/images/spiral-duct.jpg",
    alt: "Spiral ductwork and piping beneath an exposed ceiling",
    caption: "Ductwork: metal, spiral and fiberglass",
  },
  {
    src: "/images/condenser-farm.jpg",
    alt: "Rows of condensing units on a commercial roof",
    caption: "Portfolio-scale condenser fleets",
  },
];

const SCALE = [
  { value: "FL · TX · LA", label: "Physical presence, with national coverage for the right project" },
  { value: "1M+ sq ft", label: "Of ductwork cleaned" },
  { value: "4 scopes", label: "HVAC, plumbing, electrical and roofing under one contract" },
  { value: "24 / 7", label: "Emergency dispatch, every day of the year" },
];

const LEVERS = [
  {
    n: "01",
    title: "Inspection",
    value: "+$10.5M",
    text: "A unit census puts the real cost, about $10,500 a door in this model, in front of your investment team before the deposit goes hard.",
  },
  {
    n: "02",
    title: "Opex to capex",
    value: "+$11.0M",
    text: "Replacing 75 units a year on a plan moves $600K a year out of surprise opex. At a 5.5% cap that is about $10.9M at exit.",
  },
  {
    n: "03",
    title: "Planned maintenance",
    value: "+$2.3M",
    text: "A program trims the remaining $400K of maintenance spend by 25% or more: $100K a year of NOI, plus cash retained in the hold.",
  },
];

const AGREEMENT = [
  {
    title: "Tagged asset inventory",
    text: "Every unit logged with age, refrigerant and condition, so ownership knows what it owns and what it owes.",
  },
  {
    title: "Filter & belt program",
    text: "Consumables scheduled and carried in the agreement. No change orders for routine wear items.",
  },
  {
    title: "Refrigerant compliance logs",
    text: "Leak testing, recovery and EPA recordkeeping maintained on your behalf.",
  },
  {
    title: "Condition reporting",
    text: "A written report after every visit, per asset. Hand it straight to ownership.",
  },
  {
    title: "Priority dispatch",
    text: "Agreement properties go to the front of the queue, with escalation to a project manager.",
  },
  {
    title: "Upfront repair pricing",
    text: "A price list for common repairs and reduced labor rates on anything outside the agreement.",
  },
];

const WHY = [
  {
    title: "We scope what the property needs",
    text: "Not just what was specified. That difference funded a re-roof and electrical upgrades one owner had not planned for.",
  },
  {
    title: "We run the load calculations",
    text: "Electrical capacity is confirmed on every property before equipment is ordered, not assumed into the budget.",
  },
  {
    title: "Utilities never gate our schedule",
    text: "We sequence trades around utility and regulatory pipelines so the longest outside lead time is not yours.",
  },
  {
    title: "One partner, fewer change orders",
    text: "HVAC and plumbing self-performed, electrical and roofing managed, every line of scope laid out and priced.",
  },
];

const PROCESS = [
  {
    title: "Portfolio assessment",
    text: "We walk representative buildings, photograph every system and reconcile the field notes against service history.",
  },
  {
    title: "Capital plan",
    text: "A year-by-year plan with a unit pricing menu, a stated range and an honest list of what is still to be confirmed.",
  },
  {
    title: "Program execution",
    text: "Replacements on a steady cadence, with the small fixes bundled into each mobilization and trades sequenced around power.",
  },
  {
    title: "Maintenance & reporting",
    text: "A planned program with condition reporting, refrigerant logs and a team prepared to defend the plan at exit.",
  },
];

export default function HomePage() {
  const featured = PROJECTS[0];
  const cards = PROJECTS.slice(1, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/hero-rooftop-miami.jpg"
          alt="Rooftop mechanical plant on a high-rise at dusk, overlooking the Miami skyline and bay"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        <Container className="relative pb-14 pt-24 md:pt-36">
          <p className="eyebrow">Commercial HVAC &amp; mechanical · Est. 2010</p>
          <h1 className="display mt-7 max-w-4xl text-6xl text-balance sm:text-7xl lg:text-[6.5rem]">
            Your property. <span className="text-sky-400">Our mission.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Air Force Mechanical scopes, replaces and maintains HVAC and plumbing across multifamily, office,
            retail and industrial portfolios, with an owner’s eye on NOI, insurability and exit.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Request a portfolio consultation
            </Link>
            <Link href="/diligence" className="btn btn-ghost">
              See a sample assessment
            </Link>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/15 pt-10 lg:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div key={s.value}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="display block text-5xl md:text-6xl">{s.value}</span>
                  <span className="mt-3 block max-w-[15rem] text-sm leading-snug text-white/60">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <ClientMarquee />

      {/* Capabilities */}
      <section id="capabilities" className="on-light bg-paper text-navy-900">
        <Container className="py-20 md:py-28">
          <SectionHeading
            eyebrow="What we do"
            title="Full-scope mechanical contracting."
            lede="From a single failed chiller to 300 systems across three communities, we operate as an extension of your asset management team, not another vendor to manage."
          />
          <div className="mt-14 grid gap-px border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <CapabilityCard key={c.slug} c={c} />
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {FIELD.map((f) => (
              <figure key={f.src} className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="label absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent px-5 pb-4 pt-12 text-white">
                  {f.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <dl className="mt-14 grid gap-px bg-navy-700 sm:grid-cols-2 lg:grid-cols-4">
            {SCALE.map((s) => (
              <div key={s.value} className="bg-navy-900 p-7 text-white">
                <dt className="display text-3xl text-sky-400">{s.value}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-white/65">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Inspection to exit */}
      <section id="inspection-to-exit" className="relative overflow-hidden bg-navy-950">
        <div className="chart-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative py-20 md:py-28">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="From inspection to exit"
                title="Turn surprise opex into planned capex."
                lede="A 1,000-unit, twenty-year-old property makes about 1,000 HVAC service calls a year. Each one is a hot resident, a negotiation and an uncontrolled invoice. Three levers change that, and each is worth money at the exit cap."
              />
              <p className="display mt-10 text-5xl md:text-6xl">
                ~$24M <span className="text-sky-400">of value</span>
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                Created on a $45M equity check in our illustrative model. About 0.5x, from systems most
                underwriting treats as a reserve line.
              </p>
            </div>
            <div className="border border-white/10 bg-ink/60 p-5 md:p-8">
              <ValueBridge />
            </div>
          </div>

          <ol className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {LEVERS.map((l) => (
              <li key={l.n} className="bg-navy-950 p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="label text-white/45">Lever {l.n}</span>
                  <span className="display text-3xl text-sky-400">{l.value}</span>
                </div>
                <h3 className="display mt-5 text-3xl">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{l.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/insights/inspection-to-exit-surprise-opex-to-planned-capex" className="btn btn-ghost">
              Read the full model
            </Link>
            <Link href="/diligence" className="btn btn-ghost">
              How we run diligence
            </Link>
          </div>
        </Container>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="bg-ink">
        <Container className="py-20 md:py-28">
          <SectionHeading
            eyebrow="Case studies"
            title="Proof, at institutional scale."
            lede="A sample of how we operate as a dedicated mechanical partner across multifamily, commercial and industrial portfolios."
          />

          <article className="mt-14 grid border border-white/10 bg-navy-900 lg:grid-cols-[1.05fr_1fr]">
            <div className="p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="label bg-sky-400/10 px-2.5 py-1.5 text-sky-300">{featured.sector}</span>
                <span className="label text-white/45">$100B+ AUM institutional owner</span>
              </div>
              <h3 className="display mt-7 text-5xl md:text-6xl">
                $370,000 <span className="text-sky-400">saved</span>
              </h3>
              <p className="mt-4 max-w-lg leading-relaxed text-white/70">
                For {featured.client} on a single program: lower cost, more scope, better returns. We were the
                only contractor to run a full electrical load calculation on every property.
              </p>
              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8 sm:grid-cols-4">
                {featured.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="display block text-4xl">{s.value}</span>
                      <span className="label mt-2 block leading-relaxed text-white/50">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <Link href={`/projects/${featured.slug}`} className="btn btn-primary mt-10">
                Read the case study
              </Link>
            </div>
            {featured.quote && (
              <figure className="flex flex-col justify-center border-t border-white/10 bg-navy-800 p-7 md:p-10 lg:border-l lg:border-t-0">
                <span aria-hidden="true" className="display text-7xl leading-none text-sky-400">
                  “
                </span>
                <blockquote className="-mt-4 text-lg leading-relaxed text-white/90 md:text-xl">
                  {featured.quote.text}
                </blockquote>
                <figcaption className="mt-7 text-sm">
                  <span className="font-semibold text-white">{featured.quote.name}</span>
                  <span className="mt-1 block text-white/55">{featured.quote.role}</span>
                </figcaption>
              </figure>
            )}
          </article>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
          <Link href="/projects" className="btn btn-ghost mt-10">
            All projects &amp; experience
          </Link>
        </Container>
      </section>

      {/* Service agreements */}
      <section id="service-agreements" className="on-light bg-paper text-navy-900">
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Service agreements"
              title="Planned maintenance costs less than the call you make at 2 a.m."
              lede="A property without a maintenance contract ages faster than its years. An agreement turns mechanical spend from an unpredictable line item into a scheduled, documented program your asset managers can plan around."
            />
            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {AGREEMENT.map((a) => (
                <div key={a.title} className="border-t border-navy-900/15 pt-5">
                  <dt className="display text-2xl">{a.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-steel">{a.text}</dd>
                </div>
              ))}
            </dl>
            <Link href="/service-agreements" className="btn btn-dark mt-12">
              Discuss a service agreement
            </Link>
          </div>
          <figure className="relative min-h-[26rem] overflow-hidden bg-navy-900">
            <Image
              src="/images/crane-lift.jpg"
              alt="A crane lifts a mechanical unit onto the roof of an occupied building"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6 pt-20 text-white">
              <span className="label text-sky-400">In the field</span>
              <span className="mt-2 block text-sm leading-relaxed text-white/85">
                An equipment set on an occupied site. The kind of logistics a planned program lets us schedule
                instead of scramble.
              </span>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-navy-950">
        <Container className="py-20 md:py-28">
          <SectionHeading
            eyebrow="Select client experience"
            title="Across every asset class in your portfolio."
          />
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {EXPERIENCE.map((group) => (
              <div key={group.sector} className="bg-navy-950 p-7">
                <h3 className="label text-sky-400">{group.sector}</h3>
                <ul className="mt-6 space-y-6">
                  {group.items.map((item) => (
                    <li key={item.client}>
                      <p className="display text-2xl">{item.client}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why + process */}
      <section className="on-light bg-white text-navy-900">
        <Container className="py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Why ownership chooses us" title="An equity mindset, on every line of scope." />
              <ol className="mt-10">
                {WHY.map((w, i) => (
                  <li key={w.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-navy-900/12 py-6">
                    <span className="label pt-1.5 text-sky-700">0{i + 1}</span>
                    <div>
                      <h3 className="display text-2xl">{w.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{w.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <SectionHeading eyebrow="How we work" title="A dedicated program, not a work-order queue." />
              <ol className="mt-10">
                {PROCESS.map((p, i) => (
                  <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-navy-900/12 py-6">
                    <span className="label pt-1.5 text-sky-700">0{i + 1}</span>
                    <div>
                      <h3 className="display text-2xl">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Insights */}
      <section className="on-light bg-paper text-navy-900">
        <Container className="py-20 md:py-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Mechanical intelligence for owners."
              lede="Field notes on capital planning, diligence and keeping buildings running."
            />
            <Link href="/insights" className="btn btn-outline-dark shrink-0">
              All insights
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {INSIGHTS.slice(0, 3).map((i) => (
              <InsightCard key={i.slug} i={i} light />
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
