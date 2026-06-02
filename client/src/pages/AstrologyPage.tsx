import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

// ── 画像URL ──────────────────────────────────────────────
const ASTROLOGY_HERO   = "/manus-storage/astrology_hero_bf80b777.jpeg";
const ASTROLOGY_CARD   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/astrology_card-HYddtQKCFTeuVS6kD3XBXW.webp";

// ── JSON-LD 構造化データ ─────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "スリランカ占星術鑑定（シャーミラ・ドゥヌシンハ先生）",
  "description": "スリランカの著名な占星術師シャーミラ・ドゥヌシンハ先生によるホロスコープ鑑定。コロンボ国際空港近くで受けられる本格ヴェーダ占星術。",
  "url": "https://sltcs.srilanka-charter.com/astrology",
  "touristType": "スピリチュアル体験",
  "availableLanguage": ["Japanese", "Sinhala", "English"],
};

export default function AstrologyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "スリランカで占星術師に貴方のホロスコープを見てもらおう！｜SLTCS",
    description: "スリランカの著名な占星術師シャーミラ・ドゥヌシンハ先生によるホロスコープ鑑定。数千年の歴史を持つヴェーダ占星術を、コロンボ国際空港近くで体験。SLTCSが手配します。",
    path: "/astrology",
    ogImage: ASTROLOGY_HERO,
    jsonLdList: [JSON_LD],
    jsonLdIdPrefix: "astrology",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── ヒーローセクション ── */}
      <section className="relative bg-[oklch(0.08_0.02_280)] overflow-hidden">
        <img
          src={ASTROLOGY_HERO}
          alt="スリランカで占星術を受けてみよう"
          className="w-full h-auto opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.08_0.02_280)/80]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-center">
          <span className="inline-block text-xs tracking-widest text-amber-300 font-semibold mb-2 uppercase">Sri Lanka Vedic Astrology</span>
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "'Noto Serif JP', serif", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
          >
            スリランカで占星術師に<br />
            貴方のホロスコープを見てもらおう！
          </h1>
          <p className="text-white/80 mt-3 text-sm md:text-base">
            数千年の歴史を持つヴェーダ占星術 ✦ 地球の歩き方掲載 ✦ 日本語通訳付き
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-16">

        {/* ── Section 1: スリランカ占星術の歴史 ── */}
        <section className="mb-14">
          <span className="inline-block text-xs tracking-widest text-amber-600 font-semibold uppercase mb-2">History</span>
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-400 pl-4 mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            スリランカ占星術の歴史
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              「光り輝く島」という意味を国名にもつスリランカは、古くは仏教王国として栄えた南アジアの楽園です。
              この地で数千年の時を経て受け継がれてきた占星術は、<strong>インドのヴェーダ占星術（ジョーティッシュ）</strong>を起源とし、
              スリランカ固有の仏教思想と深く融合して独自の体系を形成してきました。
            </p>
            <p>
              「ジョーティッシュ」とはサンスクリット語で<strong>「光の科学」</strong>を意味します。
              「宇宙＝惑星のパワーを活用し、人々の人生に光を与える」という哲学のもと、
              スリランカでは占星術が単なる占いではなく、生活に根付いた<strong>科学的な叡智</strong>として尊重されてきました。
            </p>
            <p>
              また、スリランカ占星術は「生命の科学」を意味するアーユルヴェーダとも深く連携しています。
              宝石産出国としても知られるスリランカでは、占星術と宝石選びが切っても切れない関係にあり、
              鑑定では<strong>あなたの運勢に合ったパワーストーン</strong>も教えてもらえます。
            </p>
          </div>

          {/* 3つの特徴カード */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="font-bold text-amber-900 mb-2">数千年の歴史</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                インドのヴェーダ占星術を起源とし、スリランカの仏教思想と融合した独自の占星術体系。
                現地では「ジョーティッシュ（光の科学）」と呼ばれています。
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="font-bold text-amber-900 mb-2">宝石と星の国</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                世界有数の宝石産出国であるスリランカでは、宝石選びと占星術は切っても切れない関係。
                あなたの運勢に合ったパワーストーンも教えてもらえます。
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-3">🔭</div>
              <h3 className="font-bold text-amber-900 mb-2">科学的な占星術</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                スリランカの占星術は星回りに基づく統計学的なもの。
                占い師の多くは代々続く占星術一家。
                生まれた時間が1分違うだけで結果が大きく変わります。
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 2: シャーミラ先生のプロフィール ── */}
        <section className="mb-14">
          <span className="inline-block text-xs tracking-widest text-amber-600 font-semibold uppercase mb-2">About Sharmila</span>
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-400 pl-4 mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            シャーミラ先生とはどんな先生か
          </h2>

          <div className="bg-gradient-to-br from-[oklch(0.12_0.03_280)] to-[oklch(0.18_0.04_280)] rounded-2xl overflow-hidden mb-8 shadow-xl">
            <img
              src={ASTROLOGY_CARD}
              alt="シャーミラ・ドゥヌシンハ先生 スリランカ占星術"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>シャーミラ・ドゥヌシンハ（Shirmila Dunusinghe）先生</strong>は、スリランカにて
              <strong>パンヒンダ・アストロジカル・センター</strong>を主宰する、占星術・手相・風水の鑑定士です。
            </p>
            <p>
              幼少期より宇宙に強い興味を持ち、時間があれば星空を何時間も眺めていたというシャーミラ先生は、
              2007年よりデブセタ・カレッジにて5年間占星術学を学び資格を取得。
              2012年より占星術鑑定士として活動を開始しました。
            </p>
            <p>
              「占星術の智恵と力を活用し、人々が幸せに過ごせるためのサポートをするのが私のライフワーク」という
              ゆるぎない信念と素朴で誠実な人柄が人気を呼び、
              これまでに<strong>国内外26,000人以上</strong>の占星術鑑定を行ってきました。
            </p>
          </div>

          {/* 実績バッジ */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="bg-stone-900 text-white rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-amber-400">26,000人+</div>
              <div className="text-xs text-white/70 mt-1">鑑定実績</div>
            </div>
            <div className="bg-stone-900 text-white rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-amber-400">地球の歩き方</div>
              <div className="text-xs text-white/70 mt-1">aruco スリランカ掲載</div>
            </div>
            <div className="bg-stone-900 text-white rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-amber-400">日本語</div>
              <div className="text-xs text-white/70 mt-1">通訳付きで安心</div>
            </div>
          </div>

          {/* 鑑定内容 */}
          <div className="mt-8 bg-stone-50 border border-stone-200 rounded-2xl p-6">
            <h3 className="font-bold text-stone-800 text-lg mb-4">鑑定書に記されること</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { num: "01", title: "あなたという人の本質", desc: "生まれ持った性質、思考の傾向、他者からは見えにくいあなたの深層を、星の配置から読み解きます。" },
                { num: "02", title: "仕事・天職の方向性", desc: "あなたに本当に向いている仕事、力を発揮できる環境、仕事運が上昇する時期・停滞する時期。" },
                { num: "03", title: "恋愛・結婚・人間関係", desc: "パートナーとの関係性、結婚に適した時期、注意すべき時期、良い関係を育てるための鍵。" },
                { num: "04", title: "健康と身体の傾向", desc: "生涯を通じて気をつけるべき健康リスク、養生のヒント、体調を崩しやすい時期の事前告知。" },
                { num: "05", title: "ラッキーカラー・パワーストーン", desc: "あなたの運気を高めるラッキーカラー、ラッキーナンバー、パワーストーン、良い方角。" },
                { num: "06", title: "今後1年間の運勢", desc: "全体運・注意点と、運気を上げるためのライフスタイルアドバイス（個人別）。" },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <span className="text-amber-400 font-black text-lg leading-none mt-0.5 shrink-0">{item.num}</span>
                  <div>
                    <div className="font-bold text-stone-800 text-sm">{item.title}</div>
                    <div className="text-stone-600 text-xs mt-1 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: SLTCSが手配できること ── */}
        <section className="mb-14">
          <span className="inline-block text-xs tracking-widest text-emerald-600 font-semibold uppercase mb-2">SLTCS Service</span>
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            SLTCSはシャーミラ先生の鑑定を手配できます
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed mb-8">
            <p>
              SLTCSでは、スリランカ旅行中にシャーミラ先生の占星術鑑定を受けるためのアレンジが可能です。
              日本語でのやり取りから予約調整まで、すべてSLTCSがサポートします。
              旅行の計画段階でお気軽にご相談ください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div className="text-2xl mb-3">📅</div>
              <h3 className="font-bold text-emerald-900 mb-2">予約・日程調整をサポート</h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                シャーミラ先生との日程調整から予約確認まで、SLTCSが日本語でサポートします。
                旅程に合わせた最適なタイミングをご提案します。
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div className="text-2xl mb-3">🚗</div>
              <h3 className="font-bold text-emerald-900 mb-2">鑑定場所への送迎</h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                鑑定場所はコロンボ国際空港の近くに位置しています。
                SLTCSのチャーター車で安心してアクセスできます。
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div className="text-2xl mb-3">🌐</div>
              <h3 className="font-bold text-emerald-900 mb-2">日本語通訳付き</h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                鑑定は日本語通訳付きで行われるため、言葉の壁を気にせず安心して受けられます。
                先生への質問も気軽にできます。
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div className="text-2xl mb-3">✨</div>
              <h3 className="font-bold text-emerald-900 mb-2">プラチナプラン限定</h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                占星術鑑定の手配はSLTCSのプラチナプランで対応可能です。
                詳細はお問い合わせ時にご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 4: 空港近くで鑑定を受けるのがおすすめ ── */}
        <section className="mb-14">
          <span className="inline-block text-xs tracking-widest text-blue-600 font-semibold uppercase mb-2">Best Timing</span>
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-blue-400 pl-4 mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            到着後または出発前に鑑定を受けるのがおすすめ
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed mb-8">
            <p>
              シャーミラ先生の鑑定場所は<strong>コロンボ国際空港（バンダラナイケ国際空港）の近く</strong>に位置しています。
              そのため、スリランカ到着直後または帰国便の出発前に立ち寄るのが最もスムーズです。
            </p>
            <p>
              旅行の<strong>最初に鑑定を受ける</strong>と、旅の間ずっと先生のアドバイスを意識しながら過ごすことができます。
              一方、<strong>帰国前に受ける</strong>と、スリランカ旅行の思い出として特別な締めくくりになります。
              どちらのタイミングでも、旅程に合わせてSLTCSが最適なアレンジをご提案します。
            </p>
          </div>

          {/* タイミング比較 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-blue-300 rounded-2xl p-6 bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">✈</div>
                <h3 className="font-bold text-blue-900 text-lg">到着後すぐに鑑定</h3>
              </div>
              <p className="text-blue-800 text-sm leading-relaxed">
                スリランカに着いたその日に鑑定を受けることで、
                旅の間ずっと先生のアドバイスを意識しながら過ごせます。
                「今日から何に気をつければいいか」を知った上で旅を楽しめます。
              </p>
              <div className="mt-3 text-xs text-blue-700 font-semibold bg-blue-100 rounded-lg px-3 py-2">
                ✦ 空港からそのまま鑑定場所へ直行できます
              </div>
            </div>
            <div className="border-2 border-purple-300 rounded-2xl p-6 bg-purple-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">🌙</div>
                <h3 className="font-bold text-purple-900 text-lg">出発前に鑑定</h3>
              </div>
              <p className="text-purple-800 text-sm leading-relaxed">
                スリランカ旅行の最後の思い出として、帰国便の前に鑑定を受けるのも人気です。
                旅の締めくくりに自分の未来を占ってもらい、
                日本に帰ってからの生活へのヒントをもらいましょう。
              </p>
              <div className="mt-3 text-xs text-purple-700 font-semibold bg-purple-100 rounded-lg px-3 py-2">
                ✦ 鑑定後そのまま空港へ向かえます
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-[oklch(0.15_0.04_280)] to-[oklch(0.2_0.05_300)] rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="text-amber-300 text-2xl mb-3">✦</div>
          <h3
            className="text-xl md:text-2xl font-bold mb-3"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            スリランカで本格占星術を体験しよう
          </h3>
          <p className="text-white/80 mb-6 text-sm md:text-base leading-relaxed">
            シャーミラ先生の鑑定手配はSLTCSにお任せください。<br />
            旅程に合わせた最適なタイミングをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://sltcs.srilanka-charter.com/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold px-8 py-3 rounded-full transition-colors shadow-md"
            >
              占星術について問い合わせる →
            </a>
            <a
              href="/activity"
              className="inline-flex items-center justify-center gap-2 border border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              アクティビティ一覧に戻る
            </a>
          </div>
        </div>

      </article>

      <Footer />
    </div>
  );
}
