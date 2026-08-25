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
      "/manus-storage/sigiriya_44803162.jpg",
      "/manus-storage/ella_nine_arch_8f10f348.webp",
      "/manus-storage/activity_safari_new_441f0bbd.png",
      "/manus-storage/blog-honeymoon-beach_437cd287.jpg",
    ];

    expectedImagePaths.forEach(imagePath => expect(source).toContain(imagePath));
    expect(source).not.toContain("d2xsxph8kpxj0f.cloudfront.net");
    expect(source.match(/image: "\/manus-storage\//g)).toHaveLength(5);
  });
});
