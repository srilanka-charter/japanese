import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const HOME_PAGE_PATH = path.resolve(process.cwd(), "client/src/pages/Home.tsx");
const PRICE_SECTION_PATH = path.resolve(
  process.cwd(),
  "client/src/components/sections/HomePricingSection.tsx",
);

describe("トップページの料金セクション", () => {
  it("車両セクション直前に指定のPRICE見出しと料金表を表示する", () => {
    const homeSource = readFileSync(HOME_PAGE_PATH, "utf8");
    const priceSectionSource = readFileSync(PRICE_SECTION_PATH, "utf8");

    expect(homeSource).toContain('import HomePricingSection from "@/components/sections/HomePricingSection"');
    expect(homeSource.indexOf("<HomePricingSection />")).toBeLessThan(
      homeSource.indexOf("<VehiclesPreviewSection />"),
    );
    expect(priceSectionSource).toContain(
      "スリランカのタクシーチャーターで最安の価格水準",
    );
    expect(priceSectionSource).toContain("PRICE");
    expect(priceSectionSource).toContain("<CharterPricingTable />");
    expect(priceSectionSource).toContain("無料でお見積もりを依頼する");
  });
});
