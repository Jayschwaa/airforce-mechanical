export const SITE = {
  name: "Air Force Mechanical",
  legalName: "Air Force HVAC, Inc.",
  url: "https://airforcemechanical.co",
  tagline: "Your Property, Our Mission.",
  description:
    "Air Force Mechanical is the commercial division of Air Force HVAC: pre-acquisition diligence, portfolio replacement programs and planned maintenance for multifamily, office, retail and industrial owners.",
  founded: 2010,
  phone: "(305) 335-6991",
  phoneHref: "tel:+13053356991",
  serviceLine: "(754) 225-9220",
  serviceHref: "tel:+17542259220",
  email: "jason@airforceteam.com",
  address: {
    street: "4350 NW 19th Ave, Unit E",
    city: "Deerfield Beach",
    state: "FL",
    zip: "33064",
  },
  residentialUrl: "https://airforceteam.com",
  licenses: [
    { label: "FL Mechanical (HVAC)", number: "CAC1820262" },
    { label: "FL Plumbing", number: "CFC1433992" },
  ],
} as const;

export const NAV = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/diligence", label: "Diligence" },
  { href: "/service-agreements", label: "Service Agreements" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export const CLIENTS = [
  "Brookfield Asset Management",
  "Tredway",
  "Cantex Capital",
  "Fuller Realty",
  "HN Capital Partners",
  "Stockdale Investment Group",
  "AngMar Medical Holdings",
  "Invitation Homes",
  "Amherst Residential",
  "Providence Community Housing",
  "Bal Harbour Shops",
  "Versace",
  "Southwest Airlines",
  "Whiting-Turner",
  "Crossland Construction",
  "Catamount Constructors",
  "Mycon Construction",
  "MAPP Construction",
  "Southeast Industrial Construction",
  "Landman Group",
  "Berger Commercial",
] as const;

export const MANUFACTURERS = ["Lennox", "Carrier", "Trane", "Daikin", "Goodman / Amana"] as const;

export function formatDate(iso: string): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${months[m - 1]} ${d}, ${y}`;
}
