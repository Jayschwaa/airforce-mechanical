import type { Metadata } from "next";
import { ContactSection } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a portfolio consultation with Air Force Mechanical. Tell us about a deal you are working on or a building you are getting ready to exit.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactSection />;
}
