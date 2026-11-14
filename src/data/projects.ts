export type Project = {
  slug: string;
  client: string;
  title: string;
  sector: "Multifamily" | "Commercial" | "Industrial" | "Diligence";
  location: string;
  status: string;
  summary: string;
  scope: string;
  scale: string;
  value: string;
  stats: { value: string; label: string }[];
  image?: { src: string; alt: string };
  challenge?: string[];
  approach?: string[];
  outcomes?: { title: string; text: string }[];
  costs?: { rows: { label: string; amount: string; kind?: "sub" | "total" | "save" }[]; note: string };
  quote?: { text: string; name: string; role: string };
  body?: string[];
  capabilities: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "brookfield-multifamily-modernization",
    client: "Brookfield Asset Management",
    title: "Multifamily HVAC modernization across three communities",
    sector: "Multifamily",
    location: "El Paso & Odessa, TX",
    status: "Active program",
    summary:
      "300 HVAC replacements and 16 re-roofs for a $100B+ AUM institutional owner, with $370,000 returned to the budget by running the electrical load calculations nobody else ran.",
    scope:
      "HVAC replacement and duct cleaning, in-unit electrical upgrades, building and transformer electrical scope, and re-roofing, delivered as one sequenced program.",
    scale: "300 HVAC replacements, 16 re-roofs, 3 communities, 2 markets",
    value:
      "12% of estimated project cost returned to ownership, a schedule the utility never gated, and the modernization the municipality had been asking for.",
    stats: [
      { value: "300", label: "HVAC replacements" },
      { value: "16", label: "Re-roofs" },
      { value: "3", label: "Communities" },
      { value: "12%", label: "Project cost savings" },
    ],
    image: {
      src: "/images/reroof-before-after.jpg",
      alt: "Before and after views of a multifamily community roof replacement with new rooftop HVAC equipment",
    },
    challenge: [
      "The local municipality was pressing the owner to modernize aging air-conditioning infrastructure.",
      "The electrical infrastructure was aged, with unknown capacity for new high-efficiency units.",
      "The local utility’s independent engineering and build-out pipelines threatened to gate the timeline.",
    ],
    approach: [
      "We were the only contractor to run a full electrical load calculation on every property, confirming that the new units could be supported by the existing electrical service.",
      "We navigated utility and local regulatory constraints, negotiating transformer and service scope directly with apartment-by-apartment power-source detail.",
      "We sequenced our trades around the utility’s pipelines so that their timeline never gated ours.",
    ],
    costs: {
      rows: [
        { label: "HVAC systems & duct cleaning", amount: "$1,910,000" },
        { label: "Electrical: unit upgrades", amount: "$350,000" },
        { label: "Community #1 re-roofing", amount: "$250,000" },
        { label: "Estimated electrical: building & transformer upgrades", amount: "$510,000" },
        { label: "Estimated total project cost", amount: "$3,020,000", kind: "sub" },
        { label: "Actual electrical: building upgrades", amount: "$130,000" },
        { label: "Actual electrical: transformer upgrades (refund mechanism)", amount: "$10,000" },
        { label: "Actual total project cost", amount: "$2,650,000", kind: "total" },
        { label: "Total client savings (12% of estimated project cost)", amount: "$370,000", kind: "save" },
      ],
      note: "Figures rounded to the nearest $10,000.",
    },
    outcomes: [
      { title: "Cost savings", text: "$370K returned to the owner’s budget." },
      { title: "On-time delivery", text: "Utility pipelines never gated the schedule." },
      { title: "Municipal favor", text: "The modernization the city was asking for, delivered." },
      { title: "More targets", text: "Brought onto the client’s near-term projects." },
    ],
    quote: {
      text: "Air Force is a true value-added partner. They understood the scope and what actually needed to get done, not just what was specified. That saved us enough on HVAC to fund a re-roof and electrical upgrades we hadn’t planned for. No surprises, faster schedule. We’ve already brought them onto several of our near-term projects.",
      name: "David Friedman",
      role: "Senior Vice President, Real Estate Investments, Brookfield Asset Management",
    },
    capabilities: ["system-replacement-programs", "managed-electrical-roofing", "ductwork-indoor-air-quality"],
  },
  {
    slug: "tredway-christopher-homes",
    client: "Tredway",
    title: "Christopher Homes: a seven-property affordable housing portfolio",
    sector: "Multifamily",
    location: "Greater New Orleans, LA",
    status: "Active partner",
    summary:
      "Active HVAC partner across an out-of-state multifamily portfolio, including 80 to 155-ton chiller replacements and more than 300 air handler replacements.",
    scope:
      "Central chiller plant replacement in the 80 to 155-ton range, in-unit air handler replacement, and ongoing mechanical service across the portfolio.",
    scale: "7 properties under active management",
    value:
      "One mechanical partner across an entire out-of-state portfolio, with consistent execution standards and documented reporting on every property.",
    stats: [
      { value: "7", label: "Properties" },
      { value: "80–155T", label: "Chiller replacements" },
      { value: "300+", label: "Air handlers replaced" },
    ],
    image: {
      src: "/images/crane-lift.jpg",
      alt: "A crane sets a rooftop mechanical unit onto a multi-story residential building",
    },
    body: [
      "Occupied affordable and senior housing leaves no room for extended outages. Central plant work on this portfolio is planned around habitability first: equipment lead times are identified early, plant and terminal-unit replacement are scoped together where a chilled-water loop feeds in-unit equipment, and temporary cooling is available where a lead time would otherwise run through cooling season.",
      "Because the same team carries every property, ownership receives one reporting format, one set of execution standards and one point of contact across the portfolio, rather than a different vendor relationship at each site.",
    ],
    capabilities: ["system-replacement-programs", "controls-bas-vfd", "planned-maintenance"],
  },
  {
    slug: "fuller-realty-portfolio",
    client: "Fuller Realty",
    title: "Commercial HVAC portfolio partnership",
    sector: "Commercial",
    location: "Houston & San Antonio, TX",
    status: "Ongoing relationship",
    summary:
      "Dedicated HVAC partner for a flex industrial and office portfolio, with more than 150 systems under active management.",
    scope:
      "Diligence, preventive maintenance, repairs and system replacements across the full book of commercial properties, functioning as an extension of the property management team.",
    scale: "150+ HVAC systems under active management",
    value:
      "Single-vendor accountability across a large multi-site portfolio: faster response times, reduced deferred maintenance and predictable cost management.",
    stats: [
      { value: "150+", label: "Systems under management" },
      { value: "2", label: "Metro markets" },
      { value: "1", label: "Accountable vendor" },
    ],
    image: {
      src: "/images/rtu-service.jpg",
      alt: "A technician services a packaged rooftop unit on a commercial roof",
    },
    body: [
      "A flex industrial and office portfolio produces a steady stream of small mechanical decisions: repair or replace, now or next quarter, tenant cost or landlord cost. Handled property by property and vendor by vendor, those decisions add up to deferred maintenance nobody chose on purpose.",
      "Under a portfolio partnership every system is tagged and tracked, so each decision is made against the equipment’s age, condition and repair history. The management team gets one call to make, and ownership gets a mechanical picture it can plan capital against.",
    ],
    capabilities: ["planned-maintenance", "emergency-service", "system-replacement-programs"],
  },
  {
    slug: "hn-capital-design-district",
    client: "HN Capital Partners",
    title: "Integrated HVAC & plumbing in the Dallas Design District",
    sector: "Commercial",
    location: "Dallas, TX",
    status: "Ongoing relationship",
    summary:
      "Mechanical and plumbing partner across a 19-building, roughly one-million-square-foot portfolio of older urban buildings.",
    scope:
      "High-pressure sewer jetting, gas line repair, legacy plumbing infrastructure maintenance and HVAC service across the full portfolio.",
    scale: "19 buildings, ~1M sq ft under coverage",
    value:
      "A single vendor covering both plumbing and HVAC reduces vendor management overhead, improves response accountability and gives ownership a unified view of mechanical health.",
    stats: [
      { value: "19", label: "Buildings" },
      { value: "~1M", label: "Square feet" },
      { value: "2", label: "Trades, one vendor" },
    ],
    image: {
      src: "/images/brazing.jpg",
      alt: "Close-up of a technician brazing copper refrigerant lines at a coil",
    },
    body: [
      "Older urban building stock carries plumbing infrastructure that predates its drawings. Keeping it in service takes a team that will jet a line, repair a gas leak and document what it found, so the next call starts with history instead of guesswork.",
      "Covering HVAC and plumbing together means one account team sees how the systems interact across all 19 buildings, and ownership has one party accountable for the result.",
    ],
    capabilities: ["commercial-plumbing", "planned-maintenance", "emergency-service"],
  },
  {
    slug: "cantex-capital-industrial",
    client: "Cantex Capital",
    title: "Diligence and maintenance across 250+ industrial facilities",
    sector: "Industrial",
    location: "Dallas–Fort Worth, TX",
    status: "Ongoing relationship",
    summary:
      "Dedicated HVAC partner for an industrial portfolio: pre-acquisition diligence reporting and estimating, capital project management and quarterly maintenance.",
    scope:
      "Pre-acquisition diligence reporting and estimation, capital project management, and quarterly maintenance across the portfolio.",
    scale: "250+ industrial facilities",
    value:
      "The same team that assesses a building before closing maintains it afterward, so the diligence number and the operating reality stay connected.",
    stats: [
      { value: "250+", label: "Industrial facilities" },
      { value: "Quarterly", label: "Maintenance cadence" },
      { value: "3", label: "Scopes: diligence, capital, service" },
    ],
    image: {
      src: "/images/spiral-duct.jpg",
      alt: "Exposed spiral ductwork and mechanical piping beneath an industrial ceiling",
    },
    body: [
      "An acquisitive industrial owner needs a mechanical number it can trust quickly, on building after building. On this portfolio we provide diligence reporting and estimates ahead of acquisition, manage the capital projects that follow, and maintain the equipment on a quarterly cycle.",
      "Because the estimator and the maintainer are the same organization, each new assessment is informed by how similar equipment has actually performed elsewhere in the portfolio.",
    ],
    capabilities: ["diligence-capital-assessments", "planned-maintenance", "system-replacement-programs"],
  },
  {
    slug: "project-jet-capital-assessment",
    client: "Confidential ownership group",
    title: "Project Jet: a five-year HVAC capital plan for 810 units",
    sector: "Diligence",
    location: "Florida",
    status: "Phase 1 assessment",
    summary:
      "A rough-order-of-magnitude capital assessment for an 810-unit, 50-building garden-style community, built from three representative buildings. Property details anonymized.",
    scope:
      "Mechanical walkthrough and photographic documentation, refrigerant census, ductwork and condensate review, in-unit electrical observations, and a year-by-year capital plan with a unit pricing menu.",
    scale: "810 units, 50 buildings, 1997 vintage",
    value:
      "Ownership received a defensible replacement pace, a clear list of what could not wait, and an honest account of what still needed to be confirmed.",
    stats: [
      { value: "810", label: "Systems in the census" },
      { value: "~175", label: "R-22 units, replaced in Year 0" },
      { value: "75 / yr", label: "R-410A replacement pace" },
      { value: "$5.9–6.5K", label: "Per door over five years" },
    ],
    image: {
      src: "/images/condenser-farm.jpg",
      alt: "Rows of condensing units on a large flat commercial roof",
    },
    body: [
      "The fleet split three ways: roughly 175 systems on R-22, 615 on R-410A and 25 on newer A2L refrigerant. The R-22 units were the one item that could not wait. The R-410A fleet, at an estimated average age near ten years, was mid-to-late life but fully serviceable, so we proposed replacing about 75 a year as an ongoing capital line rather than a one-time event.",
      "Every plenum we opened showed mold, and the plenums sat low, in exactly the on-grade moisture that breeds it. We scoped a new raised plenum into each system swap, where crews would already be working. Several units shared a single condensate drain across three floors with no secondary safety switches, so drip pans and float switches went into Year 0.",
      "The in-unit electrical panels were a 30-year-old product line that Florida carriers and four-point inspectors routinely flag. Rather than put a hard number on a scope we had only partly seen, we carried electrical below the capital total and recommended a coordinated review with the inspector, the broker and the carrier.",
      "Roofs, gutters and siding sat outside mechanical scope but were material to the investment, so they were summarized with their insurance implications. The report closed with the verification work needed to bring a Phase 1 estimate to the standard an institutional buyer would underwrite against.",
    ],
    capabilities: ["diligence-capital-assessments", "ductwork-indoor-air-quality", "managed-electrical-roofing"],
  },
];

export const EXPERIENCE: { sector: string; items: { client: string; text: string }[] }[] = [
  {
    sector: "Multifamily & Residential",
    items: [
      {
        client: "Brookfield Asset Management",
        text: "300 HVAC replacements and 16 re-roofs across three communities; $370K (12%) saved.",
      },
      {
        client: "Tredway",
        text: "Seven-property portfolio: 80–155T chiller replacements and 300+ air handler replacements.",
      },
      {
        client: "Providence Community Housing",
        text: "Re-roof and rooftop HVAC replacement.",
      },
      {
        client: "Block 55, Miami",
        text: "Mixed-use HVAC for a residential and retail development.",
      },
    ],
  },
  {
    sector: "Office & Retail",
    items: [
      {
        client: "Fuller Realty",
        text: "150+ systems under management across Houston and San Antonio flex and office.",
      },
      {
        client: "Stockdale Investment Group",
        text: "Dedicated HVAC partner across high-end Dallas retail, including Knox Village, Preston Center and Lovers Lane.",
      },
      {
        client: "Bal Harbour Shops & Versace",
        text: "Precision climate control for luxury retail.",
      },
      {
        client: "205 Datura, West Palm Beach",
        text: "Corporate office HVAC.",
      },
      {
        client: "HN Capital Partners",
        text: "Plumbing and HVAC across 19 buildings and ~1M sq ft in the Dallas Design District.",
      },
    ],
  },
  {
    sector: "Industrial & Logistics",
    items: [
      {
        client: "Cantex Capital",
        text: "Diligence, capital project management and quarterly maintenance across 250+ industrial facilities in DFW.",
      },
      {
        client: "Distribution & retail centers",
        text: "450+ centers from 100,000 to 3 million square feet.",
      },
      {
        client: "General contractor partners",
        text: "Mechanical scopes delivered for Whiting-Turner, Crossland, Catamount, Mycon, MAPP and Southeast Industrial Construction.",
      },
    ],
  },
  {
    sector: "Healthcare & Institutional",
    items: [
      {
        client: "AngMar Medical Holdings",
        text: "HVAC maintenance program across Texas medical facilities, expanding nationally under a single point of contact.",
      },
      {
        client: "K–12 education",
        text: "School chiller replacement.",
      },
      {
        client: "Government & prime contractors",
        text: "Primary NAICS 238220. Accepts government purchase and credit cards.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
