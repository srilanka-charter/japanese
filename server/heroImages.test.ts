import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const heroSectionPath = path.resolve(
  process.cwd(),
  "client/src/components/sections/HeroSection.tsx"
);

describe("ファーストビュー画像", () => {
  it("全スライドがManusストレージの画像を参照し、失効したCloudFront URLを含まない", () => {
    const source = readFileSync(heroSectionPath, "utf8");
    const expectedImagePaths = [
      "/manus-storage/fv-sri-lanka-sigiriya-kandy_bd15c5a6.webp",
      "/manus-storage/fv-sri-lanka-tea-train_15d4f75c.webp",
      "/manus-storage/fv-sri-lanka-safari_16f8c563.webp",
      "/manus-storage/fv-sri-lanka-surfing_4fc9f83a.webp",
    ];

    expectedImagePaths.forEach(imagePath => expect(source).toContain(imagePath));
    expect(source).not.toContain("d2xsxph8kpxj0f.cloudfront.net");
    expect(source.match(/image: "\/manus-storage\//g)).toHaveLength(4);
    expect(source).toContain("}, 5000);");
    expect(source).toContain("slides.slice(1).forEach");
  });

  it("検索エンジン向けのH1に指定されたブランド表記を使用する", () => {
    const source = readFileSync(heroSectionPath, "utf8");

    expect(source).toContain(
      "スリランカのタクシーチャーター｜日本語対応の専用車・政府公認ドライバーならスリノワ(SriNowa)"
    );
    expect(source).not.toContain(
      "スリランカのタクシーチャーター｜日本語対応の専用車・政府公認ドライバーならSriNowa"
    );
  });
});
