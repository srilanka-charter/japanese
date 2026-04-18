const companyInfo = [
  { label: "サービス名", value: "スリランカタクシーチャーターサービス（SLTCS）" },
  { label: "英語名", value: "Sri Lanka Taxi Charter Service (SLTCS)" },
  { label: "事業内容", value: "スリランカ国内でのプライベートドライバー手配・観光チャーターサービス" },
  { label: "対応エリア", value: "スリランカ全土（コロンボ・ネゴンボ・キャンディ・シーギリヤ・ヌワラエリヤ・ゴール・ヤラ 他）" },
  { label: "対応言語", value: "日本語・英語・シンハラ語・タミル語" },
  { label: "営業時間", value: "24時間対応（お問い合わせは随時受付）" },
  { label: "お問い合わせ", value: "フォームよりお気軽にご連絡ください" },
];

export default function CompanySection() {
  return (
    <section className="py-20 lg:py-28 bg-[oklch(0.98_0_0)]">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">COMPANY</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] mt-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            会社概要
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[oklch(0.9_0.01_155)]">
          {companyInfo.map((item, i) => (
            <div
              key={i}
              className={`flex ${i % 2 === 0 ? "bg-white" : "bg-[oklch(0.98_0_0)]"}`}
            >
              <div className="w-36 sm:w-48 flex-shrink-0 bg-[oklch(0.35_0.12_155)] text-white px-4 py-4 text-sm font-medium flex items-center">
                {item.label}
              </div>
              <div className="flex-1 px-4 py-4 text-sm text-[oklch(0.3_0.02_155)] flex items-center">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
