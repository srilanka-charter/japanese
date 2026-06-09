import { Link, useParams } from "wouter";
import { Calendar, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, getCategoryBySlug } from "@/data/blogData";
import Course10DaysArticle from "./articles/Course10DaysArticle";
import BookingTimingArticle from "./articles/BookingTimingArticle";
import FamilyTravelArticle from "./articles/FamilyTravelArticle";
import SoloWomenTravelArticle from "./articles/SoloWomenTravelArticle";
import HoneymoonArticle from "./articles/HoneymoonArticle";
import PriceBreakdownArticle from "./articles/PriceBreakdownArticle";
import TipMannerArticle from "./articles/TipMannerArticle";
import SeniorTravelArticle from "./articles/SeniorTravelArticle";
import { useSEO } from "@/hooks/useSEO";

// ─────────────────────────────────────────────────────────────────────────────
// 記事コンテンツ（slug 別に分岐）
// ─────────────────────────────────────────────────────────────────────────────
function ArticleContent({ slug }: { slug: string }) {
  if (slug === "why-taxi-charter-is-recommended") {
    return <WhyTaxiCharterArticle />;
  }
  if (slug === "course-10days") {
    return <Course10DaysArticle />;
  }
  if (slug === "when-to-book-charter") {
    return <BookingTimingArticle />;
  }
  if (slug === "family-travel-charter") {
    return <FamilyTravelArticle />;
  }
  if (slug === "solo-women-travel-charter") {
    return <SoloWomenTravelArticle />;
  }
  if (slug === "honeymoon-sri-lanka") {
    return <HoneymoonArticle />;
  }
  if (slug === "price-breakdown-risks") {
    return <PriceBreakdownArticle />;
  }
  if (slug === "tip-manner-guide") {
    return <TipMannerArticle />;
  }
  if (slug === "senior-travel-charter") {
    return <SeniorTravelArticle />;
  }
  return (
    <p className="text-gray-500 text-center py-12">記事コンテンツを準備中です。</p>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 記事本文
// ─────────────────────────────────────────────────────────────────────────────
function WhyTaxiCharterArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        スリランカを旅行するとき、「鉄道で移動すべきか、バスを使うべきか、それとも専用車をチャーターすべきか」と迷う方は少なくありません。
        結論からいえば、複数の観光地をまわる旅行者には<strong className="text-gray-900">タクシーチャーター（専用車）</strong>が最も効率的で快適な移動手段です。
        この記事では、スリランカの主な移動手段を比較しながら、タクシーチャーターが選ばれる理由をわかりやすく解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカの主な移動手段と特徴"],
            ["2", "鉄道・バスでは難しいこと"],
            ["3", "タクシーチャーターが選ばれる5つの理由"],
            ["4", "費用面の考え方"],
            ["5", "こんな旅行者におすすめ"],
            ["6", "まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① スリランカの主な移動手段と特徴
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
            style={{ fontFamily: "'Shippori Mincho', serif" }}>
          スリランカの主な移動手段と特徴
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカには鉄道・バス・配車アプリ（PickMe・Uber）・タクシーチャーターという4つの主な移動手段があります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          旅行スタイルに合った選択肢を選ぶために、それぞれの特徴を整理してみましょう。
        </p>

        {/* 比較表 */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6 -mx-4 sm:mx-0">
          <div className="min-w-[520px] sm:min-w-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[oklch(0.12_0.02_155)] text-white">
                <th className="px-4 py-3 text-left font-semibold">移動手段</th>
                <th className="px-4 py-3 text-center font-semibold">費用</th>
                <th className="px-4 py-3 text-center font-semibold">自由度</th>
                <th className="px-4 py-3 text-center font-semibold">快適さ</th>
                <th className="px-4 py-3 text-center font-semibold">日本語対応</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: "鉄道", cost: "◎ 安い", cost_c: "text-emerald-600", freedom: "△ 路線限定", freedom_c: "text-amber-500", comfort: "△ 混雑あり", comfort_c: "text-amber-500", lang: "✕ なし", lang_c: "text-red-400", highlight: false },
                { name: "バス", cost: "◎ 安い", cost_c: "text-emerald-600", freedom: "△ 路線限定", freedom_c: "text-amber-500", comfort: "✕ 混雑・遅延", comfort_c: "text-red-400", lang: "✕ なし", lang_c: "text-red-400", highlight: false },
                { name: "配車アプリ", cost: "○ 中程度", cost_c: "text-amber-500", freedom: "○ 比較的自由", freedom_c: "text-amber-500", comfort: "○ 普通", comfort_c: "text-amber-500", lang: "△ 英語のみ", lang_c: "text-amber-500", highlight: false },
                { name: "タクシーチャーター", cost: "△ 高め", cost_c: "text-amber-500", freedom: "◎ 完全自由", freedom_c: "text-emerald-600", comfort: "◎ 快適", comfort_c: "text-emerald-600", lang: "◎ 日本語対応", lang_c: "text-emerald-600", highlight: true },
              ].map((row) => (
                <tr key={row.name} className={row.highlight ? "bg-emerald-50" : "bg-white"}>
                  <td className={`px-4 py-3 font-semibold ${row.highlight ? "text-[oklch(0.35_0.12_155)]" : "text-gray-800"}`}>{row.name}</td>
                  <td className={`px-4 py-3 text-center font-medium ${row.cost_c}`}>{row.cost}</td>
                  <td className={`px-4 py-3 text-center font-medium ${row.freedom_c}`}>{row.freedom}</td>
                  <td className={`px-4 py-3 text-center font-medium ${row.comfort_c}`}>{row.comfort}</td>
                  <td className={`px-4 py-3 text-center font-medium ${row.lang_c}`}>{row.lang}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          費用面では鉄道・バスが優れていますが、自由度・快適さ・日本語対応という観点では、タクシーチャーターが他の手段を大きく上回ります。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 鉄道・バスでは難しいこと
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
            style={{ fontFamily: "'Shippori Mincho', serif" }}>
          鉄道・バスでは難しいこと
        </h2>

        {/* 画像1 */}
        <figure className="mb-7">
          <img
            src="/manus-storage/sri-lanka-bus-transport_e38248bc.jpg"
            alt="スリランカのバス停の様子"
            className="w-full rounded-xl object-cover max-h-72"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2">
            スリランカのバスは路線が多い一方、時刻表の不規則さや混雑が課題です。
          </figcaption>
        </figure>

        <h3 className="text-base sm:text-lg font-bold mt-12 mb-4 pb-2 border-b-2 border-[oklch(0.35_0.12_155)] flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-[oklch(0.35_0.12_155)] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">①</span>
          <span className="text-[oklch(0.35_0.12_155)]">主要観光地へのアクセスに限界がある</span>
        </h3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの鉄道は、エッラ〜キャンディ間の紅茶列車のような観光路線が有名ですが、シーギリヤ・ヤーラ国立公園・ミネリヤ国立公園など主要観光地の多くは鉄道が通っていません。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          バスは路線が多いものの、時刻表が不規則で遅延も多く、荷物が多い旅行者には体力的な負担が大きいです。
        </p>

        <h3 className="text-base sm:text-lg font-bold mt-12 mb-4 pb-2 border-b-2 border-[oklch(0.35_0.12_155)] flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-[oklch(0.35_0.12_155)] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">②</span>
          <span className="text-[oklch(0.35_0.12_155)]">配車アプリは地方移動に対応していない</span>
        </h3>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          配車アプリ（PickMe・Uber）はコロンボ市内では便利ですが、地方への長距離移動や観光地間の移動には対応していないことがほとんどです。
        </p>
        <p className="text-base leading-[1.9] text-gray-700">
          英語でのコミュニケーションが必要になる場面も多く、言語に不安を感じる方には向いていません。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ タクシーチャーターが選ばれる5つの理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-4"
            style={{ fontFamily: "'Shippori Mincho', serif" }}>
          タクシーチャーターが選ばれる5つの理由
        </h2>

        {/* 画像2 */}
        <figure className="mb-8">
          <img
            src="/manus-storage/private-car-sri-lanka_9dc767ae.jpg"
            alt="スリランカの専用チャーター車（プライベートカー）"
            className="w-full rounded-xl object-cover max-h-72"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2">
            清潔で快適な専用車で、スリランカの観光地を自由に移動できます。
          </figcaption>
        </figure>

        {/* 理由カード */}
        <div className="space-y-6">
          {[
            {
              num: "01",
              title: "旅程を完全に自由に組める",
              body: "タクシーチャーターの最大のメリットは、行き先・出発時間・滞在時間をすべて自分で決められることです。「シーギリヤで朝の開場に合わせて早朝出発したい」「ヌワラエリヤで茶畑をゆっくり見たい」といった希望にも、専用車なら柔軟に対応できます。",
            },
            {
              num: "02",
              title: "複数の観光地を1日で効率よく巡れる",
              body: "スリランカの観光地は互いに離れた場所に点在しています。シーギリヤ・ダンブッラ・ミネリヤを1日で巡るルートは、公共交通では乗り換えが複雑で時間がかかります。専用車なら移動時間を最小化しながら、複数スポットを効率よく訪問できます。",
            },
            {
              num: "03",
              title: "日本語で相談しながら旅ができる",
              body: "SLTCSでは、予約から当日の移動まで日本語でのやり取りが可能です。観光地の見どころや食事のおすすめ、急な体調不良時の対応など、旅行中に生じるさまざまな場面でサポートを受けられます。英語に自信がない方や、初めてスリランカを訪れる方に特に安心です。",
            },
            {
              num: "04",
              title: "荷物を車に置いたまま観光できる",
              body: "複数日にわたる周遊旅行では、大きなスーツケースを持ち歩く必要がある場面が出てきます。専用車があれば荷物を車内に置いたまま観光できるため、身軽に動けます。特に家族旅行やシニア旅行では、荷物の負担軽減が快適さに直結します。",
            },
            {
              num: "05",
              title: "政府公認ドライバーによる安心の移動",
              body: "SLTCSのドライバーはスリランカ政府観光局の認定を受けています。道路状況や観光地の最新情報を熟知しており、安全で快適な移動を提供します。スリランカでは交通事情が日本と大きく異なるため、慣れたドライバーに任せることが旅の安全につながります。",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-5 p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(0.12_0.02_155)] text-[oklch(0.75_0.12_75)] flex items-center justify-center text-xs font-bold tracking-wider">
                {item.num}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm leading-[1.9] text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ 費用面の考え方
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
            style={{ fontFamily: "'Shippori Mincho', serif" }}>
          費用面の考え方
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          タクシーチャーターは鉄道やバスと比べて費用が高くなります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          ただし、2〜4名のグループで利用する場合、1人あたりのコストは配車アプリを複数回使うのと大きく変わらないケースも多いです。移動時間の短縮・荷物の手間の削減・日本語サポートといった付加価値を考えると、旅行全体の満足度を高める投資として捉えることができます。
        </p>

        {/* ポイントボックス */}
        <div className="bg-[oklch(0.12_0.02_155)] rounded-xl p-5 text-white">
          <p className="text-[oklch(0.75_0.12_75)] text-xs font-semibold tracking-widest mb-3 uppercase">Cost Point</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-[oklch(0.75_0.12_75)] font-bold flex-shrink-0">✓</span>
              2〜4名のグループなら1人あたりの費用は想定より抑えられる
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[oklch(0.75_0.12_75)] font-bold flex-shrink-0">✓</span>
              移動時間の短縮で観光に使える時間が増える
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[oklch(0.75_0.12_75)] font-bold flex-shrink-0">✓</span>
              SLTCSでは旅行日数・人数・行き先に合わせた無料見積もりを提供
            </li>
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ こんな旅行者におすすめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
            style={{ fontFamily: "'Shippori Mincho', serif" }}>
          こんな旅行者におすすめ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "シーギリヤ・キャンディ・ヌワラエリヤなど複数の観光地を巡りたい方",
            "3泊4日・4泊5日など限られた日数で効率よく観光したい方",
            "家族連れ・シニア・荷物が多い旅行者",
            "英語に自信がなく、日本語でサポートを受けたい方",
            "ヤーラ国立公園のサファリやホエールウォッチングなど、アクセスが難しいスポットを訪れたい方",
            "初めてスリランカを旅行する方",
          ].map((text) => (
            <div key={text} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 leading-relaxed">
              <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════ */}
      <div className="bg-[oklch(0.12_0.02_155)] rounded-2xl p-7 sm:p-10 text-center mb-14">
        <p className="text-[oklch(0.75_0.12_75)] text-xs font-semibold tracking-widest uppercase mb-3">
          Free Consultation
        </p>
        <h3
          className="text-white text-xl sm:text-2xl font-bold mb-3"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカタクシーチャーターの相談はSLTCSへ
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
          日程・人数・行きたい場所をお知らせいただければ、<br className="hidden sm:block" />
          専用車チャーターに適したモデルコースとお見積もりをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/#contact"
            onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
            className="inline-block bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] font-bold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            無料で相談する
          </a>
          <a
            href="/plan"
            className="inline-block border border-white/30 text-white font-medium px-8 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            プランを見る
          </a>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
            style={{ fontFamily: "'Shippori Mincho', serif" }}>
          まとめ
        </h2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカ旅行における移動手段を比較すると、複数の観光地を効率よく巡りたい旅行者には<strong className="text-gray-900">タクシーチャーター（専用車）</strong>が最も適しています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          鉄道やバスは費用が安い反面、観光地へのアクセスや日本語対応に限界があります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700">
          SLTCSでは、政府公認ドライバーによる完全プライベートチャーターを日本語でご提供しています。スリランカ旅行を検討している方は、まず無料相談からお気軽にご連絡ください。
        </p>
      </section>

      {/* ── 関連記事 ── */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">関連記事</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/plan"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
          >
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">プラン</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                SLTCSのタクシーチャータープランを見る
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
          <a
            href="/pricing"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
          >
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-semibold mb-1">料金</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                スリランカタクシーチャーターの料金を確認する
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
        </div>
      </div>

    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// メインコンポーネント
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogArticlePage() {
  const params = useParams<{ category: string; slug: string }>();
  const article = getArticleBySlug(params.slug);
  const category = getCategoryBySlug(params.category);

  const SITE_URL = "https://sltcs.srilanka-charter.com";

  // SEO最適化：記事ごとのメタデータを動的に設定
  const articleJsonLd = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.thumbnail?.startsWith('http') ? article.thumbnail : `${SITE_URL}${article.thumbnail}`,
    "author": { "@type": "Organization", "name": "SLTCS スリランカタクシーチャーターサービス" },
    "publisher": {
      "@type": "Organization",
      "name": "SLTCS スリランカタクシーチャーターサービス",
      "url": SITE_URL,
    },
    "datePublished": article.publishedAt,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/${params.category}/${params.slug}` },
  } : null;

  const breadcrumbJsonLd = article && category ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "トップ", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "お役立ち情報", "item": `${SITE_URL}/${params.category}` },
      { "@type": "ListItem", "position": 3, "name": category.label, "item": `${SITE_URL}/${params.category}` },
      { "@type": "ListItem", "position": 4, "name": article.title, "item": `${SITE_URL}/${params.category}/${params.slug}` },
    ],
  } : null;

  useSEO(article && category ? {
    title: `${article.title} | SLTCS`,
    description: article.excerpt,
    path: `/${params.category}/${params.slug}`,
    ogImage: article.thumbnail?.startsWith('http') ? article.thumbnail : `${SITE_URL}${article.thumbnail}`,
    jsonLdList: [articleJsonLd, breadcrumbJsonLd].filter(Boolean) as object[],
    jsonLdIdPrefix: `article-${params.slug}`,
  } : {
    title: "お役立ち情報 | SLTCS スリランカタクシーチャーターサービス",
    description: "スリランカ旅行に役立つ情報をお届けします。タクシーチャーターの基礎・観光地ガイド・モデルコースなど。",
    path: "/",
  });

  if (!article || !category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <p className="text-gray-500 text-lg">記事が見つかりませんでした。</p>
          <Link href="/" className="mt-4 inline-block text-emerald-600 hover:underline">
            トップページへ戻る
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* ── ヒーロー ── */}
      <div className="relative bg-[oklch(0.12_0.02_155)] pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={article.thumbnail} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくず */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-5 flex-wrap">
            <Link href="/" className="hover:text-white/80 transition-colors">トップ</Link>
            <ChevronRight size={12} />
            <span className="text-white/40">お役立ち情報</span>
            <ChevronRight size={12} />
            <Link
              href={`/${category.slug}`}
              className="text-[oklch(0.75_0.12_75)] hover:opacity-80 transition-opacity"
            >
              {category.label}
            </Link>
          </nav>

          <span className="inline-block bg-[oklch(0.35_0.12_155)] text-white text-xs font-semibold px-3 py-1 rounded-md mb-4">
            {article.category}
          </span>

          <h1
            className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            {article.title}
          </h1>

          <div className="flex items-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {article.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              約{article.readingTime}分で読めます
            </span>
          </div>
        </div>
      </div>

      {/* ── 記事本文 ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10">
          <ArticleContent slug={article.slug} />
        </div>

        {/* 戻るリンク */}
        <div className="mt-8">
          <Link
            href={`/${category.slug}`}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[oklch(0.35_0.12_155)] transition-colors"
          >
            <ArrowLeft size={15} />
            {category.label}の記事一覧へ戻る
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
