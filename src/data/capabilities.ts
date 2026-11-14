export type Capability = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  intro: string;
  scope: string[];
  deliverables: string[];
  relatedProjects: string[];
  relatedInsights: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    slug: "diligence-capital-assessments",
    code: "AFM-01",
    title: "Diligence & Capital Assessments",
    summary:
      "Mechanical condition assessments written from an owner’s point of view: a unit census, a priced capital plan and the open questions, before your deposit goes hard.",
    intro:
      "Most mechanical reports are an equipment list with a total at the bottom. Ours is written the way an investment committee reads: what cannot wait, what is ordinary recurring capital, what sits outside mechanical scope but still moves the deal, and what we have not yet confirmed. We walk the buildings, photograph every system, data plate, line set and panel, then reconcile the field notes against the property’s service history.",
    scope: [
      "Data-plate census: refrigerant, tonnage, manufacture date and condition by unit",
      "Refrigerant exposure split across R-22, R-410A and A2L equipment",
      "Ductwork, plenum, condensate and indoor air quality review",
      "Electrical path from utility service to dwelling-unit panels, with load calculations where capacity is in question",
      "Service-call history analysis for failure patterns and water or mold claims",
      "Year-by-year capital plan with a unit pricing menu and stated estimating tolerance",
      "Conditions outside mechanical scope (roofing, gutters, siding, plumbing) flagged with insurance implications",
    ],
    deliverables: [
      "A Phase 1 rough-order-of-magnitude report within days of the walk",
      "Photographic documentation grouped by system",
      "A five-year plan your asset managers can drop into the model",
      "A team prepared to defend the plan at disposition",
    ],
    relatedProjects: ["project-jet-capital-assessment", "cantex-capital-industrial"],
    relatedInsights: ["pre-acquisition-hvac-census", "inspection-to-exit-surprise-opex-to-planned-capex"],
  },
  {
    slug: "system-replacement-programs",
    code: "AFM-02",
    title: "Rooftop, Split, VRF & Chiller Replacement",
    summary:
      "Packaged RTU changeouts, split and VRF replacement, air- and water-cooled chillers, with crane logistics and phased cutovers built around occupied buildings.",
    intro:
      "Replacement is where capital plans succeed or stall. We run replacements as programs rather than one-off jobs: a steady annual cadence for the mid-life fleet, a hard deadline for anything on R-22, and trades sequenced so a utility timeline or an equipment lead time never gates the schedule. From a single 80-ton chiller to 300 systems across three communities, the method is the same.",
    scope: [
      "Packaged rooftop unit changeouts with curb adapters, rigging and crane coordination",
      "Split-system and VRF replacement, including line sets, plenums and thermostats",
      "Air-cooled and water-cooled chiller replacement with start-up and commissioning",
      "In-unit fan coil and air handler replacement integrated with central plant work",
      "Coastal-duty coil and cabinet coatings on exposed equipment",
      "EPA Section 608 refrigerant recovery and documentation on every removal",
      "Temporary cooling during long-lead equipment cycles",
    ],
    deliverables: [
      "A phased cutover plan built around tenant notice cycles",
      "Manufacturer equipment warranty plus a labor warranty on our installation",
      "A close-out package with serials, start-up sheets and refrigerant logs",
    ],
    relatedProjects: ["brookfield-multifamily-modernization", "tredway-christopher-homes"],
    relatedInsights: ["replacement-pace-75-a-year", "chillers-and-fan-coils-one-project"],
  },
  {
    slug: "design-build",
    code: "AFM-03",
    title: "Design / Build",
    summary:
      "Mechanical design-build delivery: load calculations, equipment selection, duct and piping layout, permit sets and commissioning under one contract.",
    intro:
      "When the drawings and the field are owned by different parties, the owner pays for the gap. Design-build puts load calculations, equipment selection, layout, permitting and installation under one point of accountability, which is how we find the scope a property actually needs rather than simply pricing what was specified.",
    scope: [
      "Heating and cooling load calculations",
      "Equipment selection across Lennox, Carrier, Trane, Daikin and Goodman / Amana",
      "Ductwork and piping layout for new construction and tenant improvements",
      "Permit sets and coordination with the authority having jurisdiction",
      "Value engineering against the owner’s budget and hold period",
      "Start-up, balancing and commissioning",
    ],
    deliverables: [
      "One contract covering design through commissioning",
      "A transparent scope with every line laid out and priced",
      "As-built documentation at turnover",
    ],
    relatedProjects: ["brookfield-multifamily-modernization"],
    relatedInsights: ["electrical-load-calculation-370k-saved"],
  },
  {
    slug: "ductwork-indoor-air-quality",
    code: "AFM-04",
    title: "Ductwork & Indoor Air Quality",
    summary:
      "Metal, spiral and fiberglass duct fabrication, installation and sealing, plus cleaning, mold remediation, UV purification and humidity control.",
    intro:
      "In humid climates the duct system is where comfort complaints, energy loss and mold exposure meet. We have cleaned more than one million square feet of ductwork and fabricate and install metal, spiral and fiberglass systems. On replacement programs we handle the plenum and register work inside the swap that is already happening, so remediation lasts and mobilization is not paid for twice.",
    scope: [
      "Metal, spiral and fiberglass duct fabrication and installation",
      "Duct sealing, repair and insulation upgrades",
      "Commercial duct cleaning and dryer-vent cleaning at portfolio scale",
      "Plenum replacement, including raising low-mounted plenums out of moisture",
      "Register boot and grille remediation",
      "UV purification, filtration upgrades and humidity control",
      "Air quality testing and coordination with third-party hygienists",
    ],
    deliverables: [
      "Before-and-after photo documentation",
      "A remediation protocol and clearance path where mold is present",
      "Scope bundled with system swaps to share mobilization",
    ],
    relatedProjects: ["project-jet-capital-assessment"],
    relatedInsights: ["mold-at-the-plenum-condensate-risk"],
  },
  {
    slug: "controls-bas-vfd",
    code: "AFM-05",
    title: "Controls, BAS & VFD",
    summary:
      "BACnet controls, variable-frequency drive integration, sequence-of-operation tuning and remote monitoring with fault alerting.",
    intro:
      "New equipment on old controls rarely performs to its rating. We integrate building automation and drives alongside mechanical replacement so the plant runs inside its efficiency envelope and faults surface before a tenant calls.",
    scope: [
      "BACnet building automation integration",
      "Variable-frequency drive installation and replacement",
      "Sequence-of-operation review and tuning",
      "Controls recommissioning after plant replacement",
      "Remote monitoring and fault alerting",
    ],
    deliverables: [
      "Documented sequences of operation",
      "Trend data to support energy and warranty conversations",
      "Alerting routed to a project manager, not a voicemail box",
    ],
    relatedProjects: ["tredway-christopher-homes"],
    relatedInsights: ["chillers-and-fan-coils-one-project"],
  },
  {
    slug: "planned-maintenance",
    code: "AFM-06",
    title: "Planned Maintenance",
    summary:
      "Scheduled programs with asset tagging, refrigerant tracking and written condition reporting for every piece of equipment.",
    intro:
      "A property with no maintenance contract ages faster than its years. Planned maintenance turns mechanical spend from an unpredictable line item into a scheduled, documented program, and in our experience trims the remaining reactive spend by a quarter or more.",
    scope: [
      "Tagged asset inventory with age, condition and refrigerant type",
      "Quarterly plant checks and semi-annual condenser coil cleaning",
      "Annual preventive-maintenance shutdown with refrigerant leak testing",
      "Quarterly water-quality sampling on chilled-water loops",
      "Filter and belt program carried in the agreement",
      "Upfront pricing on common repairs",
    ],
    deliverables: [
      "A written condition report after every visit",
      "Refrigerant compliance logs maintained on your behalf",
      "Priority dispatch and discounted labor on out-of-scope repairs",
    ],
    relatedProjects: ["fuller-realty-portfolio", "cantex-capital-industrial"],
    relatedInsights: ["planned-maintenance-program-contents"],
  },
  {
    slug: "emergency-service",
    code: "AFM-07",
    title: "24/7 Emergency Service",
    summary:
      "Around-the-clock dispatch with stocked service vehicles, priority response for agreement properties and escalation direct to a project manager.",
    intro:
      "Emergencies are a habitability issue first and a mechanical issue second. Our dispatch runs every hour of the year, and agreement properties go to the front of the queue. Where a failure cannot be repaired same-day, we stand up temporary cooling so residents and tenants are not waiting on a lead time.",
    scope: [
      "24/7/365 dispatch",
      "Stocked service vehicles for first-visit repairs",
      "Temporary cooling: rental chillers, portable units and common-area cooling",
      "Escalation path to a named project manager",
      "After-action reporting for ownership",
    ],
    deliverables: [
      "Defined response windows for agreement properties",
      "A written cause-and-fix summary after every emergency call",
      "A recommendation on whether the failure belongs in the capital plan",
    ],
    relatedProjects: ["fuller-realty-portfolio"],
    relatedInsights: ["temporary-cooling-chiller-lead-times"],
  },
  {
    slug: "commercial-plumbing",
    code: "AFM-08",
    title: "Commercial Plumbing",
    summary:
      "Repair, replacement and new construction, from high-pressure sewer jetting and gas line repair to water heaters, backflow and drain-line camera work.",
    intro:
      "Plumbing and HVAC fail into each other: a shared condensate stack, a drain backup under new equipment, a water heater closet that doubles as a mechanical room. Holding both trades under one license set and one account team removes the hand-off where responsibility usually gets lost.",
    scope: [
      "High-pressure sewer jetting and drain cleaning",
      "Camera inspection and line snaking for diligence",
      "Gas line repair",
      "Water heater service and replacement",
      "Leak detection and pipe repair",
      "Backflow prevention",
      "Legacy plumbing infrastructure on older urban buildings",
    ],
    deliverables: [
      "One vendor across plumbing and HVAC",
      "Service-history review to size plumbing exposure during diligence",
      "A unified view of mechanical health across the asset",
    ],
    relatedProjects: ["hn-capital-design-district"],
    relatedInsights: ["pre-acquisition-hvac-census"],
  },
  {
    slug: "managed-electrical-roofing",
    code: "AFM-09",
    title: "Managed Electrical & Roofing",
    summary:
      "Electrical load calculations, panel, service and transformer upgrades, and re-roofing coordinated with the mechanical scope under one contract.",
    intro:
      "HVAC replacement touches the roof above it and the electrical service behind it. We self-perform the mechanical and plumbing work and manage licensed electrical and roofing partners under the same contract, sequencing every trade around power and weather. On one program, running a full electrical load calculation on every property returned $370,000 to the owner’s budget.",
    scope: [
      "Electrical load calculations on every property before equipment is ordered",
      "Panel, service and transformer upgrades through licensed electrical partners",
      "Utility coordination and regulatory navigation",
      "Re-roofing sequenced with rooftop equipment replacement",
      "Gutter installation to protect siding, windows and condensers",
      "Drone and satellite roof measurement",
    ],
    deliverables: [
      "A single schedule across mechanical, electrical and roofing",
      "Fewer change orders, because scope gaps between trades are ours to close",
      "Documentation for carriers, four-point inspectors and lenders",
    ],
    relatedProjects: ["brookfield-multifamily-modernization"],
    relatedInsights: ["electrical-load-calculation-370k-saved", "challenger-panels-four-point-insurability"],
  },
];

export function getCapability(slug: string) {
  return CAPABILITIES.find((c) => c.slug === slug);
}
