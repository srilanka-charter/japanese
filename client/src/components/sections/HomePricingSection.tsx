import { MessageCircle } from "lucide-react";
import CharterPricingTable from "@/components/sections/CharterPricingTable";

export default function HomePricingSection() {
  return (
    <section id="pricing" className="bg-[#0a1a12] py-20 lg:py-28">
      <div className="container max-w-5xl">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs font-bold tracking-[0.28em] text-[#c8a96e] uppercase mb-4">PRICE</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            スリランカのタクシーチャーターで最安の価格水準
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0d1f16] p-6 lg:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
          <p className="text-base text-white/80 leading-relaxed">
            業界最安の価格です。距離に応じて価格が変動するのでお問い合わせください。お問い合わせ時にお客様のお好みに合わせたプランも提案させていただきます。
          </p>
          <CharterPricingTable />
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/60 mb-6 text-sm leading-relaxed">
            旅程が決まっていない場合でも、行きたいスポットをお伝えいただければ最適なルートとお見積もりをご案内します。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#6ee2b0] px-10 py-4 font-bold tracking-wide text-[#0a1a12] shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle size={18} />
            無料でお見積もりを依頼する
          </a>
        </div>
      </div>
    </section>
  );
}
