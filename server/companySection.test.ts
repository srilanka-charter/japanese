import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const COMPANY_SECTION_PATH = path.resolve(
  process.cwd(),
  "client/src/components/sections/CompanySection.tsx",
);

describe("トップページの会社概要", () => {
  it("車両提供会社としてI Tours & Travelを表示する", () => {
    const source = readFileSync(COMPANY_SECTION_PATH, "utf8");

    expect(source).toContain('label: "車両提供会社"');
    expect(source).toContain('value: "I Tours & Travel（在スリランカ）"');
    expect(source).not.toContain('label: "英語名"');
    expect(source).not.toContain('value: "SLTCS Int Ltd"');
  });
});
