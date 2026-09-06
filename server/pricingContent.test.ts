import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const PRICING_PAGE_PATH = path.resolve(
  process.cwd(),
  "client/src/pages/PricingPage.tsx",
);

describe("料金ページの掲載範囲", () => {
  it("プラン比較とシルバー・ゴールド料金表を表示しない", () => {
    const source = readFileSync(PRICING_PAGE_PATH, "utf8");

    expect(source).toContain("const bronzePlan");
    expect(source).toContain("<PlanPricingTable plan={bronzePlan} />");
    expect(source).not.toContain("Plan overview cards");
    expect(source).not.toContain("SLTCSではお客様の趣向に合わせて3つのプランをご用意しております");
    expect(source).not.toContain("シルバープラン（2日間／Sedan）");
    expect(source).not.toContain("ゴールドプラン（2日間／Sedan）");
  });
});
