import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

const faqs = [
  {
    q: "日本語は通じますか？",
    a: "はい、日本語に堪能なスタッフが問い合わせから対応させていただきます。追加料金はかかりますが日本語ドライバーを希望することも可能です。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "旅の日程・人数・車種・プランによって異なります。まずはお問い合わせフォームからご相談ください。24時間以内に見積もりをご提案いたします。",
  },
  {
    q: "旅程は自由に変更できますか？",
    a: "はい、完全プライベートチャーターのため、旅程は自由にカスタマイズできます。ただ、ご予約完了後に大幅に距離が長くなる変更をご希望する場合は追加料金が発生する場合がございます。",
  },
  {
    q: "子供や高齢者でも利用できますか？",
    a: "もちろんです。チャイルドシートのご用意や、高齢者の方への配慮も万全です。ご家族での旅行も安心してお任せください。",
  },
  {
    q: "キャンセルポリシーはどうなっていますか？",
    a: "旅行開始の7日前まではキャンセル料は発生しません。それ以降でも天災や飛行機の欠航などの事情がございましたら基本的にキャンセル料はかかりません。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] mt-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[oklch(0.9_0.01_155)] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[oklch(0.35_0.12_155)]/5 transition-colors duration-200"
              >
                <span className="font-medium text-[oklch(0.15_0.01_60)] pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[oklch(0.35_0.12_155)] transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-[oklch(0.4_0.02_155)] leading-relaxed border-t border-[oklch(0.9_0.01_155)] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 border border-[oklch(0.35_0.12_155)] text-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.35_0.12_155)] hover:text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200"
          >
            FAQ記事をすべて見る
          </Link>
        </div>
      </div>
    </section>
  );
}
