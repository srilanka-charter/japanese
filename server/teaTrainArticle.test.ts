import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("紅茶列車ガイドの予約案内", () => {
  it("指定の案内文を掲載し、新しい案内画像と既存の出発時間図をともに保持する", () => {
    const source = readFileSync(
      path.resolve(process.cwd(), "client/src/pages/articles/TeaTrainArticle.tsx"),
      "utf8",
    );

    expect(source).toContain("出発の2時間前に駅にいけば、2等指定席を購入できる場合があります。");
    expect(source).toContain("ナヌオヤからデモダラまでの3時間半程度が立ち席となる可能性があります。");
    expect(source).toContain("HaputaleからDemodaraまでの1時間程度の区間でも、十分楽しむことができます。");
    expect(source).toContain("/manus-storage/tea-train-sltcs-ticket-options_fd6720b9.png");
    expect(source).toContain("/manus-storage/departure_time_chart_new_8ef64d8d.png");
  });
});
