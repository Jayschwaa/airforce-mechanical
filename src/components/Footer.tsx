import Link from "next/link";
import { CAPABILITIES } from "@/data/capabilities";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            The commercial division of Air Force HVAC. Family owned since {SITE.founded}. HVAC and plumbing
            self-performed; electrical and roofing managed under one contract.
          </p>
          <p className="label mt-6 text-sky-400">{SITE.tagline}</p>
        </div>

        <div>
          <h2 className="label text-white/45">Capabilities</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {CAPABILITIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/capabilities/${c.slug}`} className="transition-colors hover:text-sky-300">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label text-white/45">Company</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-sky-300">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="transition-colors hover:text-sky-300">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={SITE.residentialUrl}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-sky-300"
              >
                Residential service ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="label text-white/45">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-white/70">
            <p>
              Jason Schwartz, Principal
              <br />
              <a href={SITE.phoneHref} className="transition-colors hover:text-sky-300">
                {SITE.phone}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-sky-300">
                {SITE.email}
              </a>
            </p>
            <p>
              24/7 service line
              <br />
              <a href={SITE.serviceHref} className="transition-colors hover:text-sky-300">
                {SITE.serviceLine}
              </a>
            </p>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs leading-relaxed text-white/45 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 {SITE.legalName} Licensed &amp; insured.{" "}
            {SITE.licenses.map((l) => `${l.label} ${l.number}`).join(" · ")}
          </p>
          <p>Work outside Florida is performed with locally licensed operating partners.</p>
        </div>
      </div>
    </footer>
  );
}
