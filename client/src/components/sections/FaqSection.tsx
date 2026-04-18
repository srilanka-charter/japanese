import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "日本語は通じますか？",
    a: "はい、日本語に堪能なスタッフとドライバーが対応いたします。予約から旅行終了まで、すべて日本語でサポートいたします。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "旅の日程・人数・車種・プランによって異なります。まずはお問い合わせフォームからご相談ください。24時間以内に見積もりをご提案いたします。",
  },
  {
    q: "旅程は自由に変更できますか？",
    a: "はい、完全プライベートチャーターのため、旅程は自由にカスタマイズできます。当日の変更にも柔軟に対応いたします。",
  },
  {
    q: "子供や高齢者でも利用できますか？",
    a: "もちろんです。チャイルドシートのご用意や、高齢者の方への配慮も万全です。ご家族での旅行も安心してお任せください。",
  },
  {
    q: "ホテルの手配もお願いできますか？",
    a: "はい、ご希望に応じてホテルの手配もサポートいたします。現地の情報に精通したスタッフが最適なホテルをご提案します。",
  },
  {
    q: "キャンセルポリシーはどうなっていますか？",
    a: "キャンセルポリシーはプランや時期によって異なります。詳細はお問い合わせ時にご確認ください。",
  },
  {
    q: "支払い方法は何が使えますか？",
    a: "銀行振込、クレジットカード（Visa・Mastercard）、PayPalなど複数の支払い方法に対応しています。詳細はお問い合わせください。",
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
      </div>
    </section>
  );
}
