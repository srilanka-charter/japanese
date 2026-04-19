const reviews = [
  {
    id: 1,
    image: "/manus-storage/review_T_family_3fb7a7a4.jpg",
    name: "T様ご家族",
    country: "日本",
    count: 4,
    date: "2025年8月",
    driver: "プリヤンタ",
    headline: "毎日が感動の連続でした。スリランカが大好きになりました！",
    body: "コロンボ空港からスタートし、プリヤンタさんとともに6日間でシーギリヤ、キャンディ、ヌワラエリヤ、ゴールを巡りました。彼は時間に正確で安全運転、常に私たちの体調や気分を気にかけてくれたので、道中も安心して過ごせました。長距離の移動でも終始明るく接してくれて、スリランカの文化や歴史についても丁寧に教えてくれました。最初の計画にはなかった絶景スポットにも連れて行ってくれて、美味しいローカルレストランにも詳しく、旅がより豊かになりました。本当にありがとうございました。またスリランカに来るときはぜひお願いしたいです。",
  },
  {
    id: 2,
    image: "/manus-storage/review_K_family_2313b7bf.png",
    name: "K様ご家族",
    country: "日本",
    count: 6,
    date: "2025年9月",
    driver: "アルナ",
    headline: "アルナさんのおかげで最高の家族旅行になりました！！",
    body: "私達家族のスリランカ旅行は、アルナさんのおかげで最高の旅になりました！ありがとうございました！！スリランカまたきます。そのときはよろしくお願いします♡ アルーナさんと一緒に旅ができたことで、スリランカが好きになりました！！また、いつか会いましょう。子供たちもアルナさんのことが大好きになって、帰りの車では泣いていました。本当に素晴らしいドライバーさんです。",
  },
  {
    id: 3,
    image: "/manus-storage/review_S_family_38517451.png",
    name: "S様ご夫婦",
    country: "日本",
    count: 2,
    date: "2025年10月",
    driver: "タリンダ",
    headline: "これ以上は望めないほど素晴らしい体験でした！！",
    body: "私たちもスリランカでの旅行中、ドライバーとしてタリンダさんに同行してもらうことができ、とても幸運でした。これ以上は望めないほど素晴らしい体験でした。タリンダさんは親切で忍耐強く、特に私たちの希望を丁寧に聞いてくれて、旅の間じゅう安心して過ごすことができました。日本語もとても上手で、コミュニケーションは常にスムーズ。時間厳守で、送迎やアクティビティには必ず時間どおりに来てくれました。観光スポットやレストランのおすすめも教えてくれて、本当に助かりました。安全運転にも感謝します。私たちはタリンダさんを強くおすすめします。とても信頼でき、親切です。",
  },
  {
    id: 4,
    image: "/manus-storage/review_H_family_1e95cc38.png",
    name: "H様お二人連れ",
    country: "日本",
    count: 2,
    date: "2025年11月",
    driver: "タシュミンダ",
    headline: "トラブルもありましたが、交渉して解決してくれました！",
    body: "ドライバー兼ガイドのタシュミンダさんのおかげで最高の4泊5日になりました！タシュミンダさんは全ての目的地に同行して私たちをエスコートし、サポートしてくださいました。スリランカのあらゆる観光地を知りつくしており、最高のPlanを組んでくださいました。紅茶列車では座席が同行者と隣同士ではないトラブルもありましたが、列車内まで同行し乗客と交渉して解決してくれました。私たちの希望を汲んで、かつ空き時間を見つけて更に色々な場所へ案内してくれました。日本語も非常に上手で安心しました。とても感謝しています。ありがとうございました！",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[oklch(0.98_0_0)]">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-label">CUSTOMER VOICES</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] mt-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            お客様の声
          </h2>
          <p className="text-[oklch(0.5_0.02_155)] mt-3">実際にSLTCSをご利用いただいたお客様からのリアルな声をご紹介します</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl border border-[oklch(0.9_0.01_155)] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* 画像：アスペクト比を保ちながら全体を表示 */}
              <div className="w-full overflow-hidden bg-[oklch(0.95_0_0)]">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="font-bold text-[oklch(0.15_0.01_60)] text-base">{r.name}（{r.country}）</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-[oklch(0.35_0.12_155)]/10 text-[oklch(0.35_0.12_155)] text-xs px-2 py-0.5 rounded-full font-medium">
                      ご利用人数 {r.count}
                    </span>
                    <span className="bg-[oklch(0.35_0.12_155)]/10 text-[oklch(0.35_0.12_155)] text-xs px-2 py-0.5 rounded-full font-medium">
                      {r.date}
                    </span>
                    <span className="bg-[oklch(0.75_0.12_75)]/20 text-[oklch(0.5_0.08_75)] text-xs px-2 py-0.5 rounded-full font-medium">
                      ドライバー：{r.driver}
                    </span>
                  </div>
                </div>
                <h3 className="font-black text-[oklch(0.15_0.01_60)] text-base mb-3 leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  {r.headline}
                </h3>
                <p className="text-sm text-[oklch(0.4_0.02_155)] leading-relaxed">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
