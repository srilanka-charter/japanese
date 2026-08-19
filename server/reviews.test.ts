import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const reviewsSectionPath = path.resolve(
  process.cwd(),
  "client/src/components/sections/ReviewsSection.tsx"
);

describe("口コミカード画像", () => {
  it("提供された4枚の写真を指定順に参照する", () => {
    const source = readFileSync(reviewsSectionPath, "utf8");
    const expectedImagePaths = [
      "/manus-storage/review-tk-couple-sigiriya_1ffa6081.png",
      "/manus-storage/review-k-family-safari_d7a8cd58.png",
      "/manus-storage/review-s-couple-boat_decdd6fc.png",
      "/manus-storage/review-h-pair-coconut_172ca850.png",
    ];

    const positions = expectedImagePaths.map(imagePath => {
      expect(source).toContain(imagePath);
      return source.indexOf(imagePath);
    });

    expect(positions).toEqual([...positions].sort((left, right) => left - right));
    expect(source).toContain('alt={r.name}');
  });
});
