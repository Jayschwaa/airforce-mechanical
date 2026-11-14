const STEPS = [
  { label: "Today", from: 140, to: 150, text: "$150.0M", kind: "base" },
  { label: "Inspection", from: 150, to: 160.5, text: "+$10.5M", kind: "lever" },
  { label: "Opex → capex", from: 160.5, to: 171.5, text: "+$11.0M", kind: "lever" },
  { label: "Maintenance", from: 171.5, to: 173.8, text: "+$2.3M", kind: "lever" },
  { label: "At exit", from: 140, to: 173.8, text: "$173.8M", kind: "total" },
] as const;

const W = 560;
const TOP = 34;
const BOTTOM = 270;
const MIN = 140;
const MAX = 176;
const BAR = 80;
const GAP = 30;
const LEFT = 15;

const y = (v: number) => BOTTOM - ((v - MIN) / (MAX - MIN)) * (BOTTOM - TOP);

/** Waterfall of the three value levers from the illustrative 1,000-unit model. */
export function ValueBridge() {
  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} 312`}
        role="img"
        aria-label="Value bridge: $150.0M today, plus $10.5M from inspection, plus $11.0M from moving opex to capex, plus $2.3M from planned maintenance, equals $173.8M at exit."
        className="w-full"
      >
        <line x1="0" x2={W} y1={BOTTOM} y2={BOTTOM} stroke="rgb(255 255 255 / 0.25)" />
        {STEPS.map((s, i) => {
          const x = LEFT + i * (BAR + GAP);
          const top = y(s.to);
          const bottom = y(s.from);
          const fill = s.kind === "lever" ? "#6dcff6" : s.kind === "total" ? "#ffffff" : "#1c4a66";
          return (
            <g key={s.label}>
              <rect x={x} y={top} width={BAR} height={bottom - top} fill={fill} />
              {/* Axis break: full-height bars start at $140M, not zero */}
              {s.kind !== "lever" && (
                <path
                  d={`M${x - 4} ${BOTTOM - 14} l${BAR + 8} -8 v6 l-${BAR + 8} 8 Z`}
                  fill="#051824"
                />
              )}
              {i < STEPS.length - 1 && (
                <line
                  x1={x + BAR}
                  x2={x + BAR + GAP}
                  y1={top}
                  y2={top}
                  stroke="rgb(255 255 255 / 0.4)"
                  strokeDasharray="3 3"
                />
              )}
              <text
                x={x + BAR / 2}
                y={top - 9}
                textAnchor="middle"
                fontSize="19"
                fontWeight="600"
                fill={s.kind === "lever" ? "#9ee0fa" : "#ffffff"}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.text}
              </text>
              <text
                x={x + BAR / 2}
                y={BOTTOM + 24}
                textAnchor="middle"
                fontSize="11.5"
                letterSpacing="1"
                fill="rgb(255 255 255 / 0.6)"
                style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase" }}
              >
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-white/45">
        Illustrative model: 1,000 units at $150,000 a door, 5.5% exit cap. Vertical axis starts at $140M.
        Maintenance lever includes $500K of cash retained during the hold.
      </figcaption>
    </figure>
  );
}
