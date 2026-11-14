import type { Metadata } from "next";
import Link from "next/link";
import { CapabilityCard, Container, CtaBand, PageHero } from "@/components/Sections";
import { CAPABILITIES } from "@/data/capabilities";
import { MANUFACTURERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Diligence and capital assessments, system replacement programs, design-build, ductwork and IAQ, controls, planned maintenance, emergency service, plumbing, and managed electrical and roofing.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Full-scope mechanical contracting."
        lede="Nine scopes, one account team. HVAC and plumbing are self-performed. Electrical and roofing are managed under the same contract and sequenced around the mechanical work."
        image={{ src: "/images/spiral-duct.jpg", alt: "" }}
      >
        <Link href="/contact" className="btn btn-primary">
          Request consultation
        </Link>
      </PageHero>

      <section className="on-light bg-paper text-navy-900">
        <Container className="py-20 md:py-24">
          <div className="grid gap-px border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <CapabilityCard key={c.slug} c={c} />
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-navy-900/12 pt-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Equipment</p>
              <h2 className="display mt-5 text-4xl">Manufacturers we install and service.</h2>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-mist sm:grid-cols-3 lg:grid-cols-5">
              {MANUFACTURERS.map((m) => (
                <li key={m} className="display flex items-center justify-center bg-white px-4 py-8 text-center text-2xl">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure which scope applies?"
        text="Most engagements start with a walk of the property. Tell us what you are seeing and we will tell you what we would look at first."
        secondary={{ href: "/diligence", label: "How diligence works" }}
      />
    </>
  );
}
