export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "callout"; label: string; text: string }
  | { t: "table"; head: string[]; rows: string[][]; note?: string }
  | { t: "quote"; text: string; cite: string };

export type Insight = {
  slug: string;
  title: string;
  dek: string;
  category:
    | "Capital Planning"
    | "Diligence"
    | "Building Systems"
    | "Compliance"
    | "Operations"
    | "Case Study";
  date: string;
  readMinutes: number;
  blocks: Block[];
  related: string[];
};
