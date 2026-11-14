import Link from "next/link";
import { Container } from "@/components/Sections";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="chart-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative py-32 md:py-44">
        <p className="eyebrow">404</p>
        <h1 className="display mt-6 text-6xl md:text-8xl">Off the flight plan.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          That page does not exist, or it has moved. The links below will get you back on course.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
          <Link href="/capabilities" className="btn btn-ghost">
            Capabilities
          </Link>
          <Link href="/insights" className="btn btn-ghost">
            Insights
          </Link>
        </div>
      </Container>
    </section>
  );
}
