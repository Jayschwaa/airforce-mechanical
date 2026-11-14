import type { Insight } from "./insights-types";

export const INSIGHTS_B: Insight[] = [
  {
    slug: "challenger-panels-four-point-insurability",
    title: "Challenger panels, four-point inspections and Florida insurability",
    dek: "An in-unit electrical panel can decide what a carrier will write. Why we carry it below the line until the right people have weighed in.",
    category: "Diligence",
    date: "2026-08-27",
    readMinutes: 5,
    related: [
      "electrical-load-calculation-370k-saved",
      "roof-age-gutters-and-the-equipment-below",
      "pre-acquisition-hvac-census",
    ],
    blocks: [
      {
        t: "p",
        text: "On a 1997-vintage Florida community we assessed, the dwelling-unit electrical panels were original Challenger equipment, roughly thirty years old. Management indicated that very few had ever been swapped. That single observation became the largest open question in the capital plan.",
      },
      { t: "h2", text: "What is and is not true about Challenger" },
      {
        t: "p",
        text: "Challenger panels are not subject to a blanket recall. Certain Challenger breakers were historically recalled, and the product line is commonly identified by Florida insurance carriers and four-point inspectors as equipment requiring further evaluation because of age, obsolescence and perceived underwriting risk. Views vary from carrier to carrier.",
      },
      {
        t: "p",
        text: "That distinction matters. A report that says the panels are recalled is wrong. A report that ignores them is incomplete. The accurate position is that they are an insurability item whose cost depends on who is underwriting the property.",
      },
      { t: "h2", text: "Why we hold it below the line" },
      {
        t: "p",
        text: "For planning, in-unit panel replacement can be sized at roughly $1,500 to $2,000 a panel. Across 810 units that is $1.2M to $1.6M, enough to change a deal. But the in-unit panel is only the last link in the chain. The path that matters runs from the utility service to the main disconnect, to the main breaker and house panels, and finally to the dwelling units. Until the upstream equipment has been seen, a hard number is false precision.",
      },
      {
        t: "p",
        text: "So we carry electrical separately from the mechanical capital total, under diligence, and say so plainly.",
      },
      { t: "h2", text: "Who decides" },
      {
        t: "p",
        text: "The parties who ultimately determine what must be replaced, on what schedule, and how it affects premium and coverage are the four-point inspector, the insurance broker and the carrier. We recommend treating the panel question as a coordinated review with all three rather than as a contractor’s estimate.",
      },
      {
        t: "ol",
        items: [
          "Verify the specific panel and breaker models in representative units and building electrical rooms.",
          "Evaluate main service equipment, distribution panels and main breakers for the same manufacturer upstream.",
          "Consult the broker, carrier and four-point provider on underwriting requirements, replacement thresholds and coverage limitations.",
          "Have a licensed electrical contractor inspect representative panels for overheating, damaged bus bars, improper breaker types and corrosion.",
        ],
      },
      {
        t: "p",
        text: "Based on those findings, ownership can decide between targeted repairs, breaker replacement, phased panel replacement or a portfolio-wide program.",
      },
      { t: "h2", text: "Ask about prior losses" },
      {
        t: "p",
        text: "If a building on the property was rebuilt under an insurance claim, find out what drove the loss and whether electrical played any part. The answer sharpens both the scope and the underwriting, and the panel review is the right moment to ask.",
      },
      {
        t: "callout",
        label: "How we work on electrical",
        text: "We self-perform mechanical work and coordinate electrical scope with licensed electricians, sequencing the job around power.",
      },
    ],
  },
  {
    slug: "coastal-corrosion-chiller-coatings",
    title: "Coastal corrosion: what salt air does to a chiller in twelve years",
    dek: "At one coastal property, uncoated condenser coils were flaking to the touch within twelve years of installation. Two provisions protect the replacement.",
    category: "Building Systems",
    date: "2026-08-13",
    readMinutes: 4,
    related: ["chillers-and-fan-coils-one-project", "planned-maintenance-program-contents", "small-fixes-that-age-a-fleet"],
    blocks: [
      {
        t: "p",
        text: "Air-cooled equipment near the coast lives a shorter life than the same equipment inland. Salt-laden air attacks the aluminum fins and copper tubes of a condenser coil, capacity falls as the fin surface degrades, head pressure climbs, and the compressor works harder for less cooling until something fails.",
      },
      {
        t: "p",
        text: "We saw the end state on a coastal portfolio: condenser coils that had never been coated, flaking to the touch within twelve years of installation. That is early for equipment an owner expected to carry for twenty.",
      },
      { t: "h2", text: "Provision one: specify coatings at the factory" },
      {
        t: "p",
        text: "On coastal properties we furnish every air-cooled chiller replacement with factory-applied corrosion-resistant coil and cabinet coatings rated for severe coastal duty. They add a single-digit percentage to equipment cost and typically extend air-side coil life by eight to twelve years.",
      },
      {
        t: "p",
        text: "The arithmetic is easy. A coil replacement on an operating chiller means refrigerant recovery, a coil swap, recharge and start-up, plus the downtime. Paying a few percent up front to push that event out by a decade is among the cheapest life extensions available.",
      },
      { t: "h2", text: "Provision two: start the loop clean" },
      {
        t: "p",
        text: "The air side is half the story. Concurrently with replacement, the entire chilled-water loop should be flushed, chemically cleaned and brought to a clean operating baseline before the new plant is commissioned. Otherwise the scale and corrosion debris in the old piping circulates straight into new heat exchangers.",
      },
      {
        t: "p",
        text: "After commissioning, a quarterly water-quality monitoring program keeps the loop where it started.",
      },
      { t: "h2", text: "Clean coils with water" },
      {
        t: "p",
        text: "When a coil is replaced or cleaned, the cleaning method matters. Aggressive acid or alkaline cleaners can strip protective coatings and accelerate the very corrosion they were meant to address. On coated coastal coils we specify water-only cleaning, with no corrosive chemicals.",
      },
      { t: "h2", text: "A coastal maintenance baseline" },
      {
        t: "ul",
        items: [
          "Quarterly chiller plant checks.",
          "Quarterly water-quality sampling.",
          "Semi-annual condenser coil cleaning.",
          "An annual preventive-maintenance shutdown with refrigerant leak testing and EPA Section 608 documentation.",
          "Annual fan coil service.",
        ],
      },
    ],
  },
  {
    slug: "mold-at-the-plenum-condensate-risk",
    title: "Mold at the plenum: the quiet water risk in garden-style multifamily",
    dek: "Every plenum we opened on one Florida community showed mold. The fix belongs inside the system swap, and it starts with getting the plenum off the floor.",
    category: "Building Systems",
    date: "2026-07-30",
    readMinutes: 5,
    related: ["replacement-pace-75-a-year", "small-fixes-that-age-a-fleet", "pre-acquisition-hvac-census"],
    blocks: [
      {
        t: "p",
        text: "Indoor air quality problems in older garden-style apartments are usually blamed on dirty ducts. On a thirty-year-old Florida community we assessed, the real issue sat lower down: mold at the return plenums, repeated at the grilles and register boots.",
      },
      { t: "h2", text: "Why the plenum" },
      {
        t: "p",
        text: "The return plenums were mounted at the base of the closet, at floor level. In Florida’s humidity, with condensate handled on grade and occasional flooding at the slab, a low-mounted plenum sits in exactly the conditions that breed mold. Cleaning it treats the symptom. Next season it is back.",
      },
      { t: "h2", text: "Replace and raise, during the swap" },
      {
        t: "p",
        text: "The remedy we scoped was a new plenum at every system replacement, raised off the floor. Lifting it keeps water and moisture out, which is what makes the remediation last. Doing it during the swap means crews are already in the closet with the air handler out, so the incremental cost is a fraction of a standalone project.",
      },
      {
        t: "p",
        text: "Duct cleaning, by contrast, could wait. Cleaning thirty-year-old flex duct while leaving a moldy plenum in place spends money without solving the problem.",
      },
      { t: "h2", text: "Registers: a decision for ownership" },
      {
        t: "p",
        text: "The register boots and grilles showed the same mold. A property-wide seal-and-replace sweep, at roughly five registers a unit, is a large line item. We recommended remediating the affected registers near-term and carrying the full sweep below the line as a discussion item, with scope and timing set by ownership.",
      },
      { t: "h2", text: "Condensate is the other water risk" },
      {
        t: "p",
        text: "In several buildings, one condensate drain line was shared by three units stacked across three floors, and we found no secondary safety switches. A single clog in a shared stack can overflow into the unit below, and nothing shuts the system down first.",
      },
      {
        t: "ul",
        items: [
          "Add a drip pan and a condensate float switch at each air handler. It is inexpensive and meaningfully reduces the chance of an interior water loss.",
          "Carry an allowance per building to isolate shared drain stacks where practical.",
          "Review the service-call log for water and mold-related calls to confirm where the problem is concentrated.",
        ],
      },
      { t: "h2", text: "Do the protocol properly" },
      {
        t: "p",
        text: "Where mold is confirmed, follow a documented remediation protocol such as IICRC S520, with post-work clearance, ideally overseen by a third-party industrial hygienist. That is how the work gets done correctly, and it is also what supports disclosure at sale.",
      },
      {
        t: "callout",
        label: "Before disturbing original materials",
        text: "On older vintages, screen suspect duct and plenum assemblies for asbestos and lead before work begins. We do not disturb suspect materials without testing.",
      },
    ],
  },
  {
    slug: "planned-maintenance-program-contents",
    title: "What a planned maintenance program should actually include",
    dek: "Most maintenance contracts are filter changes with an invoice attached. A real program has a schedule, a price list and a paper trail.",
    category: "Operations",
    date: "2026-07-16",
    readMinutes: 5,
    related: [
      "inspection-to-exit-surprise-opex-to-planned-capex",
      "coastal-corrosion-chiller-coatings",
      "small-fixes-that-age-a-fleet",
    ],
    blocks: [
      {
        t: "p",
        text: "We regularly walk properties that operate with no HVAC service or maintenance contract at all. The equipment tells on them: it looks older than its years. Condenser coils are soiled and rusting, blowers have been replaced reactively with aftermarket parts, and nobody can say when a given unit was last serviced.",
      },
      {
        t: "p",
        text: "A planned program exists to reverse that, and to do it for less than the reactive spend it replaces. In our experience a well-run program reduces the remaining maintenance spend by 25% or more.",
      },
      { t: "h2", text: "Where the savings come from" },
      {
        t: "ul",
        items: [
          "Upfront pricing on a wide variety of service issues, so common repairs are not negotiated one emergency at a time.",
          "Twenty to thirty percent fewer technician and property management hours, because visits are scheduled and bundled.",
          "Better rates from vendors on equipment and parts bought on a plan.",
        ],
      },
      { t: "h2", text: "The minimum contents" },
      {
        t: "table",
        head: ["Element", "What it means in practice"],
        rows: [
          ["Tagged asset inventory", "Every unit logged with age, refrigerant, condition and location."],
          ["A defined visit schedule", "Quarterly plant checks, semi-annual condenser coil cleaning, annual shutdown."],
          ["Consumables included", "Filters and belts carried in the agreement, not billed as change orders."],
          ["Refrigerant records", "Leak testing, recovery and Section 608 documentation kept on your behalf."],
          ["Condition reporting", "A written report per asset after every visit."],
          ["Priority dispatch", "Agreement properties go to the front of the queue."],
          ["Discounted labor", "Reduced rates on repairs outside the agreement scope."],
        ],
      },
      { t: "h2", text: "Refrigerant records are the owner’s problem" },
      {
        t: "p",
        text: "Federal refrigerant rules place recordkeeping obligations on the owner or operator of the equipment, not only on the contractor who services it. Leak repair and recordkeeping requirements that once applied mainly to large appliances now reach much smaller HFC systems. A maintenance program should produce the log an auditor or a buyer’s diligence team would ask for, without anyone having to assemble it after the fact.",
      },
      { t: "h2", text: "Chilled-water properties need more" },
      {
        t: "p",
        text: "For buildings on a central plant, add quarterly water-quality sampling, an annual preventive-maintenance shutdown with refrigerant leak testing, and annual service on every in-unit fan coil. Water chemistry is the cheapest protection a new chiller can have.",
      },
      { t: "h2", text: "Why residents notice" },
      {
        t: "p",
        text: "Reliability creates satisfaction across the whole stakeholder base. Residents get fewer hot days. Property managers get fewer negotiations. Ownership gets a steadier expense line and equipment with a documented history, which is worth real money at exit.",
      },
      {
        t: "callout",
        label: "A simple test",
        text: "Ask your current vendor for the age, refrigerant and last service date of any unit on the property. If the answer takes more than a minute, you have a work-order queue, not a program.",
      },
    ],
  },
  {
    slug: "small-fixes-that-age-a-fleet",
    title: "Tie-downs, line sets and the small fixes that make a fleet look its age",
    dek: "Individually they are minor. Together they explain why outdoor units fail early, and why a buyer’s inspector marks the fleet down.",
    category: "Operations",
    date: "2026-07-02",
    readMinutes: 4,
    related: ["planned-maintenance-program-contents", "roof-age-gutters-and-the-equipment-below", "replacement-pace-75-a-year"],
    blocks: [
      {
        t: "p",
        text: "On many properties the outdoor units have been kept running but not kept up. Nothing is broken enough to generate a work order, so nothing gets fixed. A walk along the condenser pads usually turns up the same handful of items, and they are best handled in one visit.",
      },
      { t: "h2", text: "Soiled and corroding condenser coils" },
      {
        t: "p",
        text: "Heavily soiled coils cost capacity and equipment life. On units that are staying in service, a one-time cleaning largely recovers both. We have opened condensers to find bent and eroded fins, rust, and in one case cigarette butts and debris inside the cabinet.",
      },
      { t: "h2", text: "Hurricane tie-downs" },
      {
        t: "p",
        text: "Florida’s wind code calls for condensers to be anchored. On one community only the newest units had L-bracket tie-downs. Everything older simply sat on its slab. This is both a code item and an insurability item, and it costs very little per unit to correct.",
      },
      { t: "h2", text: "Line-set insulation" },
      {
        t: "p",
        text: "Worn or missing insulation on refrigerant lines wastes capacity and drips condensation onto whatever is below. Aged line sets are also leak-test candidates before any decision to reuse them with new equipment.",
      },
      { t: "h2", text: "Exposed low-voltage wiring" },
      {
        t: "p",
        text: "Thermostat wiring left exposed to sun, landscaping crews and weather is a common cause of nuisance failures. It should be secured in liquid-tight connectors.",
      },
      { t: "h2", text: "Water at the pad" },
      {
        t: "p",
        text: "Underneath all of it is water. Where a building has no gutters, rain sheets off the eaves and pools at the condenser pads, around line sets and electrical connections, accelerating the corrosion already visible on the cabinets.",
      },
      { t: "h2", text: "Bundle, do not project-manage" },
      {
        t: "p",
        text: "None of these justifies a standalone project. We bundle them into per-unit work: on systems being replaced, they ride along with the swap. On systems staying in service, they are completed in a single visit along with the coil cleaning.",
      },
      {
        t: "table",
        head: ["Item", "Why it matters"],
        rows: [
          ["Condenser coil cleaning", "Recovers capacity and extends life"],
          ["Hurricane tie-downs", "Wind code and insurability"],
          ["Line-set insulation", "Efficiency and water damage"],
          ["Liquid-tight low-voltage connections", "Fewer nuisance failures"],
          ["Dryer-vent cleaning", "Fire risk and resident complaints"],
        ],
      },
    ],
  },
  {
    slug: "temporary-cooling-chiller-lead-times",
    title: "Temporary cooling: bridging a 30-week chiller lead time",
    dek: "When a central plant fails ahead of cooling season, the replacement will not arrive in time. Habitability has to be planned separately.",
    category: "Operations",
    date: "2026-06-18",
    readMinutes: 4,
    related: ["chillers-and-fan-coils-one-project", "coastal-corrosion-chiller-coatings", "planned-maintenance-program-contents"],
    blocks: [
      {
        t: "p",
        text: "A failed chiller on an occupied residential building is first a habitability problem. On one affordable and senior-housing portfolio we assessed, multiple central plants were non-operational or critically degraded heading into cooling season, with elderly residents in the buildings.",
      },
      {
        t: "p",
        text: "Replacement equipment in that situation carried a lead time of roughly 30 weeks. Ordering faster does not solve a seven-month gap. The plan has to cover the gap itself.",
      },
      { t: "h2", text: "Sequence by risk, then by lead time" },
      {
        t: "p",
        text: "Recommendations across a portfolio should be ordered first by habitability risk and then by equipment lead time. A fully failed plant in an elderly building outranks a degraded one in a family property, and the longest-lead equipment gets ordered first even if its installation is months away.",
      },
      { t: "h2", text: "Three layers of temporary cooling" },
      {
        t: "ul",
        items: [
          "Trailer-mounted rental chillers tied into the existing chilled-water loop, which restore cooling to the whole building through the equipment already in place.",
          "In-unit portable units for vulnerable residents, where the loop cannot be restored quickly.",
          "Supplemental common-area cooling, so the building has a cool space available while unit-level solutions are deployed.",
        ],
      },
      {
        t: "p",
        text: "We price temporary cooling as an additive scope alongside the permanent replacement, so ownership can see the cost of the bridge and decide how much of it to carry.",
      },
      { t: "h2", text: "Keep the surviving plant alive" },
      {
        t: "p",
        text: "Where a building has two chillers and one is still running, the cheapest temporary cooling is the survivor. Targeted repairs, such as a failing variable-frequency drive or a deteriorated condenser coil, can carry a building through a season while the replacement is on order.",
      },
      { t: "h2", text: "Check what else can take the building down" },
      {
        t: "p",
        text: "New mechanical equipment depends on systems outside the mechanical room. At one property an aging electrical transformer required replacement. Had it failed first, the building could not have been reconnected until the full electrical scope was complete, which would have meant no cooling regardless of what was installed. Flag those dependencies in the same report.",
      },
      {
        t: "callout",
        label: "Plan it before June",
        text: "The time to identify a failing plant is before cooling season, when rental equipment is available and residents are not yet at risk.",
      },
    ],
  },
  {
    slug: "roof-age-gutters-and-the-equipment-below",
    title: "Roof age, gutters and the equipment below them",
    dek: "Exteriors sit outside mechanical scope. They still decide how long the mechanical equipment lasts and what the property costs to insure.",
    category: "Diligence",
    date: "2026-06-04",
    readMinutes: 4,
    related: [
      "challenger-panels-four-point-insurability",
      "small-fixes-that-age-a-fleet",
      "electrical-load-calculation-370k-saved",
    ],
    blocks: [
      {
        t: "p",
        text: "A mechanical assessment that stops at the equipment misses what is shortening its life. On a 50-building community we walked, the exteriors were outside our scope and still material to the investment, so we summarized them for ownership with their insurance implications.",
      },
      { t: "h2", text: "Roof age is an insurance variable" },
      {
        t: "p",
        text: "Of the roofs on that property, 34 were original 1997 shingle that had never been replaced. Nine were under fifteen years old. One building had been rebuilt after a large-loss claim. The originals had been kept intact through extensive patching.",
      },
      {
        t: "p",
        text: "In Florida, roof age drives both the insurance premium and the form of coverage available. Replacing the oldest roofs therefore tends to pay back through insurability as much as through avoided repairs. Roof replacement is typically funded at close and priced separately from the mechanical program.",
      },
      { t: "h2", text: "Measure before you price" },
      {
        t: "p",
        text: "Roofing is priced by the square. A drone and satellite survey confirms the exact squares per building before a roofing number is finalized, and costs very little relative to the range it closes.",
      },
      { t: "h2", text: "Gutters protect three systems" },
      {
        t: "p",
        text: "The quieter problem was that the property had no gutters anywhere. Rain sheets off the eaves directly onto the siding, the windows, and the condensers below. The result was bubbling and cracked siding, damaged window frames, and standing water at the condenser pads.",
      },
      {
        t: "p",
        text: "Gutters priced with the roofs protect all three at once. For the mechanical fleet specifically, they remove the ponding that corrodes cabinets, line sets and electrical connections from the ground up.",
      },
      { t: "h2", text: "Be careful with fresh paint" },
      {
        t: "p",
        text: "Roofs and siding that have recently been painted look better than they are. A cosmetic refresh ahead of a sale can mask underlying condition, so weight a closer envelope review accordingly.",
      },
      { t: "h2", text: "Why we coordinate roofing with mechanical" },
      {
        t: "ul",
        items: [
          "Rooftop equipment replacement and re-roofing disturb the same surface. Doing them out of order means paying for flashing and curb work twice.",
          "A single schedule keeps the building weather-tight while equipment is off the roof.",
          "Savings found in one scope can fund another. On one program, electrical savings helped an owner take on re-roofing it had not planned for.",
        ],
      },
      {
        t: "callout",
        label: "Our role",
        text: "We self-perform mechanical and plumbing work and manage roofing and gutter installation through licensed partners under one contract.",
      },
    ],
  },
];
