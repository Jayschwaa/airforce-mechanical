import type { Insight } from "./insights-types";

export const INSIGHTS_A: Insight[] = [
  {
    slug: "inspection-to-exit-surprise-opex-to-planned-capex",
    title: "From inspection to exit: turning surprise opex into planned capex",
    dek: "Mechanical systems move value at three points in a deal. An illustrative 1,000-unit model shows roughly $24M of opportunity on a $45M equity check.",
    category: "Capital Planning",
    date: "2026-11-10",
    readMinutes: 6,
    related: ["pre-acquisition-hvac-census", "replacement-pace-75-a-year", "planned-maintenance-program-contents"],
    blocks: [
      {
        t: "p",
        text: "Take a 1,000-unit multifamily property that is twenty years old. Most deals trading today are older vintage, so this is the common case rather than the exception. A property like that generates about 1,000 service calls a year to outside HVAC vendors.",
      },
      {
        t: "p",
        text: "That is 1,000 hot and unhappy residents, 1,000 negotiations between a property manager and a third party, and 1,000 line items of maintenance spend nobody controlled. Deferral does not show up as one large failure. It shows up as a thousand small ones.",
      },
      { t: "h2", text: "The model" },
      {
        t: "p",
        text: "To size what that is worth, we use a simple illustrative model: 1,000 units at $150,000 a door, a $150M valuation, a $45M equity check and a 5.5% exit cap rate. Three levers move the value, and each one sits at a different stage of the hold.",
      },
      {
        t: "table",
        head: ["Lever", "When", "What moves", "Value"],
        rows: [
          ["1. Inspection", "Before the deposit goes hard", "$10,500 a door of real cost identified", "+$10.5M"],
          ["2. Opex to capex", "During the hold", "$600K a year shifts from surprise opex to planned capex", "+$11.0M"],
          ["3. Planned maintenance", "During the hold", "25% off the remaining $400K of maintenance spend", "+$2.3M"],
          ["Total", "", "$150.0M becomes $173.8M", "+$23.8M"],
        ],
        note: "Illustrative. Assumes 1,000 units at $150,000 a door and a 5.5% exit cap. Lever 3 includes $500K of cash retained during the hold.",
      },
      { t: "h2", text: "Lever 1: understand real costs before closing" },
      {
        t: "p",
        text: "The first number is the one you find before you go hard. A unit census across HVAC, ductwork, electrical and roofing puts the real capital need in front of the investment team while it can still change the price or the financing.",
      },
      {
        t: "ul",
        items: [
          "HVAC: $7,000 a system across 50% of units, $3.5M",
          "Ductwork: $2,000 a unit, $2.0M",
          "Electrical: $2,000 a unit, $2.0M",
          "Roofing: $3,000 a unit, $3.0M",
        ],
      },
      {
        t: "p",
        text: "That is $10,500 a door, or $10.5M across the property. The point is not to kill the deal. It is to make sure you do not overpay, and that capex financing is in place to maintain the property properly through the ownership life cycle.",
      },
      { t: "h2", text: "Lever 2: surprise opex becomes planned capex" },
      {
        t: "p",
        text: "Emergency replacements land in operating expense, one failed unit at a time, at emergency pricing. Replacing 75 units a year on a schedule moves about $600,000 a year out of opex and into a planned capital line. At a 5.5% cap rate, $600,000 of recovered net operating income is worth about $10.9M at exit.",
      },
      {
        t: "p",
        text: "The work is the same work the building needed anyway. What changes is that it is the right work, done the right way, at a reasonable price, and that it is classified where a buyer will underwrite it.",
      },
      { t: "h2", text: "Lever 3: a planned maintenance program" },
      {
        t: "p",
        text: "After replacement is moved to capital, about $400,000 a year of maintenance spend remains. A planned program cuts that by 25% or more through upfront pricing on a wide range of service issues, 20 to 30% fewer technician and property management hours, and better rates from vendors. That is $100,000 a year of savings and NOI, worth roughly $1.8M at the exit cap, plus about $500,000 of cash retained over the hold.",
      },
      { t: "h2", text: "Planned or unplanned: same building" },
      {
        t: "p",
        text: "Unplanned, the building delivers less certainty through the deal life cycle, unhappy tenants, unforeseen emergency work and equipment of unknown status. Planned, the same building maximizes value at each stage, improves tenant satisfaction and retention, produces steadier cash flow, lets property management focus on its real value drivers, and opens the door to energy and insurance savings.",
      },
      {
        t: "callout",
        label: "Bring us a deal",
        text: "Give us a deal you are working on, or a building you are getting ready to exit. We will walk it and show you which of the three levers apply.",
      },
    ],
  },
  {
    slug: "pre-acquisition-hvac-census",
    title: "What a pre-acquisition mechanical census should put in front of your investment committee",
    dek: "A punch list tells you what is broken today. A census tells you what the next five years cost and which numbers are still estimates.",
    category: "Diligence",
    date: "2026-11-03",
    readMinutes: 6,
    related: [
      "inspection-to-exit-surprise-opex-to-planned-capex",
      "r22-r410a-refrigerant-transition-underwriting",
      "challenger-panels-four-point-insurability",
    ],
    blocks: [
      {
        t: "p",
        text: "A typical property condition report gives mechanical systems a paragraph and a reserve figure. That is rarely enough to price a deal where HVAC, ductwork, electrical and roofing together can run five figures a door. A mechanical census is a different document, written for the people who have to decide.",
      },
      { t: "h2", text: "Start with representative buildings, and say so" },
      {
        t: "p",
        text: "A first pass does not need every unit. On an 810-unit, 50-building community, we walked three representative buildings, photographed each system, data plate, line set and panel, and extrapolated across the portfolio. The result was a Phase 1 rough-order-of-magnitude estimate carrying about a 10% range, clearly labeled as directional.",
      },
      {
        t: "p",
        text: "What matters is that the report says exactly what it is built on. A number extrapolated from three buildings and a number confirmed by a full census are both useful. Confusing them is where deals get hurt.",
      },
      { t: "h2", text: "The data plate census" },
      {
        t: "p",
        text: "Every condensing unit carries a data plate with its refrigerant, tonnage and date of manufacture. Collected across a sample, those plates answer the two questions that drive the capital plan.",
      },
      {
        t: "ul",
        items: [
          "The refrigerant split. How many systems run on R-22, which must be replaced, versus R-410A, which can be replaced on a schedule, versus newer A2L equipment.",
          "The age distribution. This is what defends a replacement pace of fifty versus seventy-five versus one hundred systems a year.",
        ],
      },
      {
        t: "p",
        text: "To bring a Phase 1 estimate to institutional standard, move from a handful of buildings to a 10 to 15% unit sample with a full data plate census, so that the split and the ages are facts rather than estimates.",
      },
      { t: "h2", text: "Read the service history" },
      {
        t: "p",
        text: "A property’s digital service-call log is the single best validation available. One community we assessed had logged roughly 5,000 service calls over seven years. Reviewing a log like that for failure patterns and for water or mold-related calls tests both the replacement pace and the indoor air quality exposure against what has actually happened in the units.",
      },
      {
        t: "p",
        text: "The same log sizes plumbing. Combined with snaking and scoping a few drain lines, the call history tells you whether main-line clogs are an occasional nuisance or a system problem.",
      },
      { t: "h2", text: "Follow the systems that touch HVAC" },
      {
        t: "ul",
        items: [
          "Ductwork and plenums. Open them. Mold at the plenum and the register boots changes the scope of every system swap.",
          "Condensate. Shared drain lines without secondary safety switches are an interior water loss waiting for a clog.",
          "Electrical. Trace the path from the utility service to the main disconnect, the main breaker and the dwelling-unit panels. New equipment is only as good as the service behind it.",
          "Exterior. Roof age, missing gutters and ponding at the condenser pads all shorten equipment life and move insurance.",
        ],
      },
      { t: "h2", text: "Watch for the cosmetic refresh" },
      {
        t: "p",
        text: "Fresh paint on roofs and siding ahead of a sale can mask underlying condition. When we see a recent cosmetic refresh, we weight the drone survey and a closer envelope review accordingly.",
      },
      { t: "h2", text: "What the report should contain" },
      {
        t: "ol",
        items: [
          "Key takeaways an investment committee can read in two minutes.",
          "A year-by-year capital plan, with Year 0 separated from the steady-state program.",
          "A unit pricing menu and the quantity assumptions behind every total.",
          "Items carried below the line because they are not yet understood, with the path to resolving them.",
          "Exclusions and open items, stated plainly.",
          "Photographs grouped by system.",
          "The verification work needed before the number is final.",
        ],
      },
      {
        t: "callout",
        label: "Sample report",
        text: "A three-page excerpt from a real portfolio assessment, with client details removed, is available on our Diligence page.",
      },
    ],
  },
  {
    slug: "r22-r410a-refrigerant-transition-underwriting",
    title: "R-22 cannot wait. R-410A can. Underwriting the refrigerant transition",
    dek: "Two refrigerant rules shape every multifamily capital plan. One creates a deadline. The other creates a schedule.",
    category: "Compliance",
    date: "2026-10-22",
    readMinutes: 5,
    related: ["replacement-pace-75-a-year", "pre-acquisition-hvac-census", "planned-maintenance-program-contents"],
    blocks: [
      {
        t: "p",
        text: "Refrigerant type is the fastest way to sort a mechanical fleet into what must be replaced and what can be planned. It is printed on every data plate, and it maps directly onto federal rules that are already in effect.",
      },
      { t: "h2", text: "R-22: the item that cannot wait" },
      {
        t: "p",
        text: "R-22 was permanently banned from production and import in the United States effective January 1, 2020. It is now available only from reclaimed and stockpiled supply, at substantially elevated prices, and any system still running on it faces increasingly difficult and expensive service.",
      },
      {
        t: "p",
        text: "Concentrations can be large. At one property we assessed, 71 residential condensing units were confirmed R-22 from a single installation cycle. On an 810-unit community, roughly 175 systems were still on R-22. In both cases our recommendation was the same: replace all of it, and in the larger portfolio, do it in Year 0.",
      },
      { t: "h2", text: "R-410A: plannable capital" },
      {
        t: "p",
        text: "R-410A is being phased down under the AIM Act and the EPA Technology Transitions Rule. Since January 1, 2025, the EPA has prohibited the manufacture and import of new residential and light commercial air-conditioning equipment using refrigerants with a global warming potential above 700. R-410A has a GWP of 2,088, so new R-410A equipment production has ended.",
      },
      {
        t: "p",
        text: "Existing R-410A equipment, however, remains fully serviceable for years. The practical takeaway for an owner is that an R-410A fleet does not need to be replaced on an emergency basis. It is normal, plannable capital.",
      },
      {
        t: "table",
        head: ["Refrigerant", "GWP", "Status", "What to do"],
        rows: [
          ["R-22", "1,810", "Production and import banned since 2020", "Replace. Prioritize in Year 0."],
          ["R-410A", "2,088", "New equipment production ended; serviceable", "Replace on a steady annual schedule."],
          ["R-454B", "466", "Compliant A2L replacement", "Specify for new chillers and systems."],
          ["R-32", "675", "Compliant A2L replacement", "Specify for new residential systems."],
        ],
        note: "Installation rules for equipment manufactured before 2025 have been revisited by the EPA. Confirm the current rule before purchasing legacy inventory.",
      },
      { t: "h2", text: "What changes with A2L equipment" },
      {
        t: "p",
        text: "R-32 and R-454B are classified A2L, meaning mildly flammable. That brings updated installation requirements, and it means a like-for-like swap is not always like-for-like: line sets, clearances and in some cases leak detection need to be reviewed. Build that into the unit price rather than discovering it on the first install.",
      },
      { t: "h2", text: "How to carry it in the model" },
      {
        t: "ul",
        items: [
          "Count the R-22 systems and carry their replacement as near-term capital.",
          "Run the R-410A fleet as an annual capital line sized to the age distribution, not as a one-time event.",
          "Require certified EPA Section 608 recovery and documentation on every removal. It is a compliance requirement and a clean record for the file.",
          "Ask for the refrigerant split in every diligence report. If it is not there, the report is not finished.",
        ],
      },
    ],
  },
  {
    slug: "replacement-pace-75-a-year",
    title: "The 75-a-year rule: pacing a replacement program a buyer will underwrite",
    dek: "Replace too slowly and it reads as deferred maintenance. Replace too fast and you spend the next owner’s capital. The age distribution sets the pace.",
    category: "Capital Planning",
    date: "2026-10-08",
    readMinutes: 5,
    related: [
      "r22-r410a-refrigerant-transition-underwriting",
      "inspection-to-exit-surprise-opex-to-planned-capex",
      "pre-acquisition-hvac-census",
    ],
    blocks: [
      {
        t: "p",
        text: "Once the R-22 equipment is dealt with, the remaining question on most multifamily fleets is how fast to replace the mid-life R-410A systems. The answer matters twice: once for the hold-period budget, and again at disposition, when a buyer decides whether the remaining fleet is ordinary capital or a problem.",
      },
      { t: "h2", text: "Start with natural turnover" },
      {
        t: "p",
        text: "A residential split system lasts roughly twelve to eighteen years. An 810-unit portfolio therefore turns over about forty-five to seventy systems a year simply to hold its average age steady. Any replacement pace below that range means the fleet is getting older every year.",
      },
      { t: "h2", text: "Why 75 was the midpoint" },
      {
        t: "p",
        text: "On that portfolio, with about 615 R-410A systems at an estimated average age near ten years, we set 75 systems a year as the planning midpoint inside a reasonable band of 50 to 100. At 75 a year the program stays comfortably within the natural rhythm of the fleet. After three years roughly 390 R-410A systems remain, all of them serviceable.",
      },
      {
        t: "table",
        head: ["Pace", "What it means", "How it reads at exit"],
        rows: [
          ["50 a year", "Roughly holds average age", "Defensible if the fleet is young; lighter annual capital"],
          ["75 a year", "Gradually lowers average age", "Recurring capital a future owner simply continues"],
          ["100 a year", "Actively renews the fleet", "Strongest fleet at sale; heaviest annual spend"],
        ],
        note: "The owner sets the pace by budget. The age distribution is what defends the choice.",
      },
      { t: "h2", text: "Run it as a line, not an event" },
      {
        t: "p",
        text: "The framing matters as much as the number. A one-time replacement event looks like catch-up spending on deferred maintenance. A steady annual capital line looks like what it is: ordinary recurring capital. Framed that way, the spend reads as a program the next owner continues rather than a liability they inherit.",
      },
      { t: "h2", text: "Bundle the work that rides along" },
      {
        t: "p",
        text: "Each swap is a mobilization, and several scopes are far cheaper inside one than outside it. On the same portfolio every swapped system received a new raised return plenum and a thermostat, and the line set was addressed at the same visit. The systems that were not being swapped received a one-time condenser cleaning, hurricane tie-downs, line-set insulation and secured low-voltage wiring.",
      },
      { t: "h2", text: "What can move the number" },
      {
        t: "ul",
        items: [
          "Line sets. Whether existing line sets can be reused is the variable most likely to move a split-system program.",
          "Ductwork strategy. Cleaning, repair or replacement each carry very different costs.",
          "Electrical capacity. Confirm it before equipment is ordered.",
          "The sample. A 10 to 15% data-plate census turns the pace from a judgment into a calculation.",
        ],
      },
      {
        t: "callout",
        label: "At disposition",
        text: "A replacement pace is only as good as the evidence behind it. We are prepared to defend the plan, or ownership’s preferred view of it, in front of a buyer.",
      },
    ],
  },
  {
    slug: "chillers-and-fan-coils-one-project",
    title: "Why we scope chillers and fan coils as one project",
    dek: "Replacing a central plant without the terminal units it feeds rarely delivers the capital outcome ownership paid for. There are four reasons.",
    category: "Building Systems",
    date: "2026-09-24",
    readMinutes: 5,
    related: ["coastal-corrosion-chiller-coatings", "temporary-cooling-chiller-lead-times", "planned-maintenance-program-contents"],
    blocks: [
      {
        t: "p",
        text: "Many mid-rise multifamily and senior-housing buildings are served by a central chilled-water plant: one or two air-cooled chillers feeding a loop, with a fan coil unit in every apartment. When a chiller fails, the natural instinct is to replace the chiller. We recommend scoping the plant and the fan coils together.",
      },
      {
        t: "p",
        text: "One property we assessed is typical. An 82-unit mid-rise built in 2012 was served by two 80-ton air-cooled scroll chillers. One had failed outright. The other was running, but with a variable-frequency drive that overheated and shut the chiller down intermittently, and condenser coils in severe decline. All 82 fan coils were degraded.",
      },
      { t: "h2", text: "1. System performance is gated by the fan coils" },
      {
        t: "p",
        text: "A new chiller produces precisely controlled chilled water. Comfort in the apartment still depends on the terminal unit. Fouled coils, worn blower motors, deteriorated drain pans and weak control valves keep the new chiller’s capacity from becoming in-unit cooling.",
      },
      { t: "h2", text: "2. Operating efficiency is compromised" },
      {
        t: "p",
        text: "High-efficiency chillers are engineered for a specific load profile. Aged fan coils with fouled coils force the chiller to produce colder leaving water and run outside its efficiency envelope, which erodes the energy savings that justified the investment.",
      },
      { t: "h2", text: "3. Old equipment contaminates new equipment" },
      {
        t: "p",
        text: "Scale, biofilm and corrosion debris accumulated in old fan coils and loop piping are mobilized when a new chiller comes online at higher flow rates and with updated water chemistry. Replacing both at once allows the loop to be flushed, treated and commissioned as a single integrated system.",
      },
      { t: "h2", text: "4. Mobilization and disruption are largely shared" },
      {
        t: "p",
        text: "Rigging, crane access, mechanical-room work, loop draining and refilling, controls recommissioning and tenant notice cycles overlap between chiller and fan coil work. Doing both concurrently reduces total project cost and disturbs occupied units once instead of twice.",
      },
      { t: "h2", text: "What the combined scope looks like" },
      {
        t: "ul",
        items: [
          "Full replacement of the failed chiller, like-for-like, including rigging, piping, start-up and commissioning.",
          "Condenser coil replacement on the surviving chiller, with refrigerant recovery, recharge and start-up.",
          "Variable-frequency drive replacement on the surviving chiller.",
          "Re-insulation of mechanical-room water lines.",
          "In-unit fan coil replacement across the building, integrated with the plant work.",
          "A loop flush, chemical clean and clean operating baseline before commissioning.",
        ],
      },
      {
        t: "callout",
        label: "Lead time",
        text: "Chiller lead times can run to roughly 30 weeks. Identify them before cooling season, and plan temporary cooling where the gap cannot be closed.",
      },
    ],
  },
  {
    slug: "electrical-load-calculation-370k-saved",
    title: "The electrical load calculation that returned $370,000 to an owner",
    dek: "On a 300-system replacement program, the largest saving came from a calculation, run on every property, that nobody else had run.",
    category: "Case Study",
    date: "2026-09-10",
    readMinutes: 5,
    related: [
      "challenger-panels-four-point-insurability",
      "inspection-to-exit-surprise-opex-to-planned-capex",
      "roof-age-gutters-and-the-equipment-below",
    ],
    blocks: [
      {
        t: "p",
        text: "An institutional owner with more than $100B under management needed to modernize aging air-conditioning across three multifamily communities. The local municipality was pressing for it. The scope was 300 HVAC replacements. The risk was everything around them.",
      },
      { t: "h2", text: "The problem behind the problem" },
      {
        t: "ul",
        items: [
          "The electrical infrastructure was aged, and nobody knew whether it had capacity for new high-efficiency units.",
          "The initial estimate carried $510,000 for building and transformer electrical upgrades on the assumption that it did not.",
          "The local utility ran its own engineering and build-out pipelines, which threatened to gate the entire schedule.",
        ],
      },
      { t: "h2", text: "Run the numbers before you buy the upgrade" },
      {
        t: "p",
        text: "We ran a full electrical load calculation on every property. We were the only contractor that did. The calculations confirmed that the new units could be supported by the existing electrical service, which meant most of the assumed building and transformer scope was not needed.",
      },
      {
        t: "p",
        text: "We then took apartment-by-apartment power-source detail to the utility and negotiated transformer and service scope directly, and we sequenced our trades around the utility’s pipelines so that their timeline never gated ours.",
      },
      {
        t: "table",
        head: ["Line", "Estimated", "Actual"],
        rows: [
          ["HVAC systems & duct cleaning", "$1,910,000", "$1,910,000"],
          ["Electrical: unit upgrades", "$350,000", "$350,000"],
          ["Community #1 re-roofing", "$250,000", "$250,000"],
          ["Electrical: building & transformer upgrades", "$510,000", "$140,000"],
          ["Total project cost", "$3,020,000", "$2,650,000"],
        ],
        note: "Figures rounded to the nearest $10,000. Actual building and transformer electrical comprised $130,000 of building upgrades and $10,000 of transformer upgrades under a refund mechanism.",
      },
      { t: "h2", text: "Where the savings went" },
      {
        t: "p",
        text: "The owner kept $370,000, or 12% of the estimated project cost. In practice that money funded scope the owner had not planned for: the program now includes 16 re-roofs alongside the mechanical work.",
      },
      {
        t: "quote",
        text: "They understood the scope and what actually needed to get done, not just what was specified. That saved us enough on HVAC to fund a re-roof and electrical upgrades we hadn’t planned for.",
        cite: "David Friedman, Senior Vice President, Real Estate Investments, Brookfield Asset Management",
      },
      { t: "h2", text: "The lesson for other owners" },
      {
        t: "ol",
        items: [
          "Do not price an electrical upgrade on an assumption. A load calculation costs little and can remove six figures of scope.",
          "Engage the utility early with unit-level detail. Vague requests go to the back of an engineering queue.",
          "Sequence trades around the longest external lead time, so that no one else’s schedule becomes yours.",
          "Hold mechanical, electrical and roofing under one contract. Savings in one scope can then fund another without a new procurement.",
        ],
      },
    ],
  },
];
