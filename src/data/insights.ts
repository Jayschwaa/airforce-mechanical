import { INSIGHTS_A } from "./insights-a";
import { INSIGHTS_B } from "./insights-b";
import type { Insight } from "./insights-types";

export type { Insight, Block } from "./insights-types";

export const INSIGHTS: Insight[] = [...INSIGHTS_A, ...INSIGHTS_B].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export function getInsight(slug: string) {
  return INSIGHTS.find((i) => i.slug === slug);
}
