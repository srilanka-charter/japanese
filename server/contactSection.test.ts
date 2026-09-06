import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const CONTACT_SECTION_PATH = path.resolve(
  process.cwd(),
  "client/src/components/sections/ContactSection.tsx",
);

describe("トップページのお問い合わせ導線", () => {
  it("04特徴カードに指定された最安価格の案内を表示する", () => {
    const source = readFileSync(CONTACT_SECTION_PATH, "utf8");

    expect(source).toContain('num: "04"');
    expect(source).toContain('title: "最安価格で提供"');
    expect(source).toContain(
      "移動に特化することで日本人が運営するサービスの中で最安値での提供が可能に。予算に制約がある方でも手軽に利用できます。",
    );
    expect(source).not.toContain("観光地の深い知識と案内");
  });
});
