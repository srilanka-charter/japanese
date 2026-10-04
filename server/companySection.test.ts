import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const COMPANY_SECTION_PATH = path.resolve(
  process.cwd(),
  "client/src/components/sections/CompanySection.tsx",
);

describe("トップページの会社概要", () => {
  it("サービス名をスリノワとし、登録番号・車両提供会社を表示しない", () => {
    const source = readFileSync(COMPANY_SECTION_PATH, "utf8");

    expect(source).toContain('value: "スリノワ"');
    expect(source).not.toContain("商標登録第7034996");
    expect(source).not.toContain("I Tours & Travel");
    expect(source).not.toContain('label: "英語名"');
    expect(source).not.toContain('value: "SriNowa Int Ltd"');
  });
});
