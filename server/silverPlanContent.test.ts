import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const expectedDescription =
  "最も人気のプランです。政府公認のTourist Driverが観光地での案内も担当。コストパフォーマンスと安心感を両立しています。（※）閑散期にはChauffeur Guide Driverが手配される場合もあります。";
const expectedDriverFeature = "政府公認Tourist Driver以上の手配";

describe("シルバープランの案内", () => {
  it("トップページとプランページで指定説明と手配文言を統一する", () => {
    const plansSection = readFileSync(
      path.resolve(process.cwd(), "client/src/components/sections/PlansSection.tsx"),
      "utf8",
    );
    const planPage = readFileSync(
      path.resolve(process.cwd(), "client/src/pages/PlanPage.tsx"),
      "utf8",
    );

    expect(plansSection).toContain(expectedDescription);
    expect(planPage).toContain(expectedDescription);
    expect(plansSection).toContain(expectedDriverFeature);
    expect(planPage).toContain(expectedDriverFeature);
  });
});
