import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── 画像URL ──────────────────────────────────────────────
const SAFARI_COMBINED_IMG = "/manus-storage/activity_safari_new_441f0bbd.png";
const VILLAGE_TOUR_IMG  = "/manus-storage/village_tour_new_48785d75.png";
const ELEPHANT_RIDE_IMG = "/manus-storage/elephant_ride_new_42c3de4f.jpg";
const WHALE_BOAT_IMG    = "/manus-storage/activity_whale_boat_eeb7b1f7.jpg";
const WHALE_GEN_IMG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/whale_watching-QwGwMP6VHzQRs7q2TrnBXD.webp";
const ASTROLOGY_CARD    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/astrology_card-HYddtQKCFTeuVS6kD3XBXW.webp";
const AYURVEDA_IMG1     = "/manus-storage/ayurveda_new_50ef3ed6.png";

// ── 構造化データ ──────────────────────────────────────────
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "スリランカのアクティビティ完全ガイド｜サファリ・アーユルヴェーダ・ビレッジツアー・ホエールウォッチング・占星術",
  "description": "スリランカで体験できるアクティビティを徹底紹介。サファリ、アーユルヴェーダ、シーギリヤ村ビレッジツアー、エレファントライド、ホエールウォッチング、占星術まで。SLTCSプラチナプラン限定の手配も可能。",
  "image": SAFARI_COMBINED_IMG,
  "author": { "@type": "Organization", "name": "SLTCS スリランカタクシーチャーターサービス" },
  "publisher": {
    "@type": "Organization",
    "name": "SLTCS スリランカタクシーチャーターサービス",
    "url": "https://sltcs.srilanka-charter.com",
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sltcs.srilanka-charter.com/activity" },
  "keywords": "スリランカ アクティビティ, スリランカ サファリ, スリランカ アーユルヴェーダ, シーギリヤ ビレッジツアー, スリランカ ホエールウォッチング, スリランカ 象乗り, スリランカ 占星術",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://sltcs.srilanka-charter.com/" },
    { "@type": "ListItem", "position": 2, "name": "アクティビティ", "item": "https://sltcs.srilanka-charter.com/activity" },
  ],
};

// ── 目次データ ────────────────────────────────────────────
const toc = [
  { id: "safari",        label: "大自然をワイルドに楽しむサファリ" },
  { id: "ayurveda",      label: "アーユルヴェーダ" },
  { id: "village-tour",  label: "シーギリヤ村でのビレッジツアー" },
  { id: "elephant-ride", label: "シーギリヤ村でのエレファントライド" },
  { id: "whale",         label: "ホエールウォッチング" },
  { id: "astrology",     label: "占星術" },
];

export default function ActivityPage() {
  useEffect(() => {
    document.title = "スリランカのアクティビティ完全ガイド｜サファリ・アーユルヴェーダ・ビレッジツアー・ホエールウォッチング【SLTCS】";

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "スリランカで体験できるアクティビティを徹底紹介。サファリ、アーユルヴェーダ、シーギリヤ村ビレッジツアー、エレファントライド、ホエールウォッチング、占星術まで。SLTCSプラチナプラン限定の手配も可能。"
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "スリランカのアクティビティ完全ガイド｜SLTCS");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "サファリ・アーユルヴェーダ・ビレッジツアー・エレファントライド・ホエールウォッチング・占星術。SLTCSで手配できるスリランカのアクティビティを一挙紹介。");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://sltcs.srilanka-charter.com/activity");
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", SAFARI_COMBINED_IMG);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sltcs.srilanka-charter.com/activity";

    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.id = "activity-article-jsonld";
    articleScript.textContent = JSON.stringify(articleJsonLd);
    document.head.appendChild(articleScript);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "activity-breadcrumb-jsonld";
    breadcrumbScript.textContent = JSON.stringify(breadcrumbJsonLd);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.title = "スリランカタクシーチャーターならSLTCS｜日本語対応の専用車で自由に周遊";
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl)
        descEl.setAttribute(
          "content",
          "スリランカタクシーチャーターならSLTCS。日本語対応の専用車・カーチャーターで、シーギリヤ・キャンディ・ヤラなどスリランカ全土を自由に周遊。政府公認ドライバーによる完全プライベートチャーターをご提供します。"
        );
      document.getElementById("activity-article-jsonld")?.remove();
      document.getElementById("activity-breadcrumb-jsonld")?.remove();
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/activity_hero_new-E6uaXMWkZJRfDhMFSNXWYq.webp"
          alt="スリランカ サファリ アクティビティ"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Activities
          </span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg max-w-4xl">
            スリランカのアクティビティ<br className="hidden md:block" />
            完全ガイド
          </h1>
          <p className="text-white/90 mt-4 text-base md:text-lg max-w-2xl">
            サファリ・アーユルヴェーダ・ビレッジツアー・ホエールウォッチング・占星術まで
          </p>
        </div>
      </div>

      {/* ── Article ── */}
      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* パンくずリスト */}
        <nav aria-label="パンくずリスト" className="text-xs text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-amber-600 hover:underline">トップ</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">アクティビティ</span>
        </nav>

        {/* イントロ */}
        <div className="bg-gray-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10 text-gray-700 leading-relaxed">
          <p className="mb-3">
            スリランカには世界遺産以外にも、<strong>サファリ・アーユルヴェーダ・紅茶列車・ホエールウォッチング・占星術</strong>と様々なアクティビティが存在しています。
          </p>
          <p className="mb-3">
            SLTCSの<strong>プラチナプランでは限定で手配ができるもの</strong>もあります。この項目ではSLTCSで手配できるアクティビティを紹介します。
          </p>
          <p className="text-sm text-gray-500">
            気になるアクティビティに関してはお問い合わせ時にお伝えください。担当者から価格を含めてご案内させていただきます。
          </p>
        </div>

        {/* 目次 */}
        <nav aria-label="目次" className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-10">
          <p className="font-bold text-emerald-800 mb-3 text-sm tracking-wide uppercase">目次</p>
          <ol className="space-y-1 text-sm text-emerald-700 list-decimal list-inside">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── H2: サファリ ── */}
        <section id="safari" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-2">
            大自然をワイルドに楽しむサファリ
          </h2>
          <p className="text-gray-500 text-sm mb-6">スリランカヒョウや象の群れに出会える秘境体験</p>

          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img
              src={SAFARI_COMBINED_IMG}
              alt="スリランカの6つのサファリマップとサファリ体験"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
            <p>
              スリランカには、アフリカとは一味違う独自の野生動物が生息するサファリが存在します。最大の見どころは、<strong>世界でも有数の希少種であるスリランカヒョウ（Sri Lanka Leopard）</strong>です。ヤラ国立公園はその生息密度が世界最高水準とも言われており、運が良ければ木の上でくつろぐ豹の姿を目撃できます。
            </p>
            <p>
              サファリには<strong>専用のジープが必須</strong>です。公園内は舗装されていない赤土の道が続き、一般車では立ち入ることができません。ジープに乗り込み、ガイドとともに草原や密林を進みながら、象・水牛・孔雀・ワニなど多様な野生動物を間近で観察します。
            </p>
            <p>
              SLTCSの<strong>プラチナプランでは、ラグジュアリージープの手配が可能</strong>です。通常のサファリジープよりも快適な車内で、SLTCSのドライバーも同乗して日本語で解説します。動物の習性や最適な観察ポイントなど、現地を知り尽くしたドライバーならではの案内で、サファリ体験がさらに充実したものになります。早朝（6〜9時）と夕方（16〜18時）が動物の活動時間帯のため、この時間帯のサファリが特におすすめです。
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-emerald-800 mb-2 text-sm">✔ ポイントまとめ</p>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>✔ スリランカヒョウが見られるサファリはヤラ国立公園が有名</li>
              <li>✔ 公園内はジープが必須（一般車での入場不可）</li>
              <li>✔ プラチナプランではラグジュアリージープを手配可能、ドライバーも同乗して日本語解説</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="/safari"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm shadow"
            >
              もっと詳しく →
            </a>
            <a
              href="https://sltcs.srilanka-charter.com/contact"
              className="inline-flex items-center justify-center gap-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold px-6 py-2.5 rounded-full transition-colors text-sm"
            >
              サファリについて問い合わせる →
            </a>
          </div>
        </section>

        {/* ── H2: アーユルヴェーダ ── */}
        <section id="ayurveda" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-2">
            アーユルヴェーダ
          </h2>
          <p className="text-gray-500 text-sm mb-6">シーギリヤ近郊で受けられる本格アーユルヴェーダ施術</p>

          <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
            <img
              src={AYURVEDA_IMG1}
              alt="Athreya アーユルヴェーダ シーギリヤ 施術"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
            <p>
              スリランカといえばアーユルヴェーダというほど、スリランカはアーユルヴェーダが盛んな国として世界的に知られています。アーユルヴェーダとは、インド発祥の5,000年以上の歴史を持つ伝統医学で、ハーブオイルを使ったマッサージや薬草療法によって心身のバランスを整えます。スリランカでは独自の発展を遂げており、専用のアーユルヴェーダリゾートホテルに滞在して長期的な施術を受けることもできます。
            </p>
            <p>
              一方、シーギリヤ近郊では<strong>立ち寄り型の施設で気軽にアーユルヴェーダを体験</strong>することができます。SLTCSがご案内できる施設のひとつが、シーギリヤ近郊に位置する<strong><a href="https://athreyasigiriya.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Athreya（アスレヤ）</a></strong>です。
            </p>
            <p>
              Athreyaは、スリランカの伝統的なアーユルヴェーダの知識と技術を受け継いだ施設です。経験豊富なセラピストによる本格的なオイルマッサージや各種トリートメントを提供しており、シーギリヤ観光の合間に立ち寄ることができます。慌ただしい観光スケジュールの中でも、心身をリセットできる貴重な時間を過ごせます。SLTCSのドライバーが施設まで送迎し、予約のサポートもいたします。
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-emerald-800 mb-2 text-sm">✔ ポイントまとめ</p>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>✔ スリランカは世界有数のアーユルヴェーダの聖地</li>
              <li>✔ シーギリヤ近郊のAthreyaで立ち寄り型の施術が可能</li>
              <li>✔ SLTCSドライバーが送迎・予約サポートを担当</li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="/#contact"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-full transition-colors shadow-md"
            >
              アーユルヴェーダについて問い合わせる →
            </a>
          </div>
        </section>

        {/* ── H2: ビレッジツアー ── */}
        <section id="village-tour" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-2">
            シーギリヤ村でのビレッジツアー
          </h2>
          <p className="text-gray-500 text-sm mb-6">牛車・水上ボート・料理体験の3時間コース</p>

          {/* ビレッジツアー写真（牛車＋料理体験の合成画像） */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
            <img
              src={VILLAGE_TOUR_IMG}
              alt="シーギリヤ村 ビレッジツアー 牛車と料理体験"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
            <p>
              シーギリヤ村では、スリランカの農村文化を体全体で感じられる<strong>ビレッジツアー</strong>が体験できます。観光地化されていない本物の村の暮らしに触れられる、旅の中でも特に記憶に残る体験です。
            </p>
            <p>
              ツアーはまず<strong>牛車（バッファロー・カート）に乗って村を練り歩く</strong>ところから始まります。のんびりと揺れる牛車から眺める田園風景は、日常の喧騒を忘れさせてくれます。村人たちの生活の様子を間近に感じながら、緑豊かな農村地帯をゆっくりと進みます。
            </p>
            <p>
              次に<strong>水上ボートに乗って湖を遊覧</strong>します。静かな水面に映るジャングルと空の景色は格別で、野鳥や水辺の動物を観察できることもあります。
            </p>
            <p>
              ツアーのクライマックスは<strong>現地料理の調理体験</strong>です。地元の女性スタッフの指導のもと、スリランカの伝統的な料理を自分の手で作ります。薪火を使った本格的な調理法で作り上げた<strong>熱々の出来立て料理をその場で食べられる</strong>のは、このツアーならではの特権です。全行程は<strong>約3時間</strong>で、世界遺産観光と組み合わせて1日で楽しめます。
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-emerald-800 mb-2 text-sm">✔ ポイントまとめ</p>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>✔ 牛車に乗って村を練り歩く農村体験</li>
              <li>✔ 水上ボートで湖を遊覧</li>
              <li>✔ 現地料理を自分で作り、出来立てをその場で食べる（全行程約3時間）</li>
            </ul>
          </div>
        </section>

        {/* ── H2: エレファントライド ── */}
        <section id="elephant-ride" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-2">
            シーギリヤ村でのエレファントライド
          </h2>
          <p className="text-gray-500 text-sm mb-6">世界遺産を背景に象の背中から眺める絶景</p>

          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img
              src={ELEPHANT_RIDE_IMG}
              alt="シーギリヤ エレファントライド 象乗り体験"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              サファリでは象を<strong>見る</strong>ことはできても、象に<strong>乗る</strong>ことはできません。しかし、シーギリヤ周辺では象に乗る体験ができます。世界遺産シーギリヤロックを背景に、象の背中から眺める景色は他では味わえない特別なものです。
            </p>
            <p>
              スリランカゾウはアジアゾウの亜種で、穏やかな性格で知られています。マホウト（象使い）と一緒に安全に体験できるため、初めての方でも安心です。シーギリヤ観光と組み合わせて、忘れられない思い出を作りましょう。
            </p>
          </div>
        </section>

        {/* ── H2: ホエールウォッチング ── */}
        <section id="whale" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-2">
            ホエールウォッチング
          </h2>
          <p className="text-gray-500 text-sm mb-6">Mirissa近郊でシロナガスクジラに出会う早朝体験</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={WHALE_GEN_IMG}
                alt="ホエールウォッチング シロナガスクジラ 尾びれ スリランカ"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={WHALE_BOAT_IMG}
                alt="ホエールウォッチング 船 Mirissa スリランカ"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              スリランカ南部の港町<strong>Mirissa（ミリッサ）近郊</strong>は、世界有数のホエールウォッチングスポットとして知られています。インド洋に生息する<strong>シロナガスクジラ（ブルーホエール）</strong>は地球上で最も大きな生き物で、その雄大な姿を間近で見られる機会は世界でも限られています。
            </p>
            <p>
              ツアーは<strong>早朝6〜7時頃に出港</strong>し、沖合でクジラを探します。運が良ければ潮吹きや豪快なジャンプ（ブリーチング）、そして海に潜る際の大きな尾びれを目撃できます。ミリッサはゴールやウナワトゥナからも近く、南部観光と組み合わせて楽しめます。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a href="/whale-watching" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm shadow">
              もっと詳しく →
            </a>
            <a
              href="https://sltcs.srilanka-charter.com/contact"
              className="inline-flex items-center justify-center gap-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold px-6 py-2.5 rounded-full transition-colors text-sm"
            >
              ホエールウォッチングについて問い合わせる →
            </a>
          </div>
        </section>

        {/* ── H2: 占星術 ── */}
        <section id="astrology" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-2">
            占星術
          </h2>
          <p className="text-gray-500 text-sm mb-6">地球の歩き方掲載・シャーミラ先生の本格ヒンドゥー占星術</p>

          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img
              src={ASTROLOGY_CARD}
              alt="シャーミラ・ドゥヌシンハ先生 スリランカ ヒンドゥー占星術"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              スリランカでは<strong>ヒンドゥー占星術（ジョーティシャ）</strong>の流れを汲む占星術が古くから根付いています。その中でも特に有名なのが、<strong>地球の歩き方にも掲載された<a href="https://panhinda-astrology.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Shirmila Dunusinghe（シャーミラ・ドゥヌシンハ）先生</a></strong>です。
            </p>
            <p>
              先生は恋愛・結婚・仕事・健康・家族・運勢など幅広いテーマについて、古代の叡智と直感で人生の道しるべを示してくれます。鑑定は<strong>コロンボ国際空港の近く</strong>で行われるため、帰国前の最後の観光として立ち寄るのが特におすすめです。スリランカ旅行の締めくくりに、自分の未来を占ってもらいましょう。
            </p>
          </div>
          <div className="flex justify-start">
            <a
              href="/astrology"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-full transition-colors shadow-md text-sm"
            >
              もっと詳しく →
            </a>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            アクティビティの手配はSLTCSにお任せください
          </h3>
          <p className="text-white/90 mb-6 text-sm md:text-base">
            気になるアクティビティがあれば、お問い合わせ時にお伝えください。<br />
            担当者から価格を含めて詳しくご案内します。
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors shadow-md"
          >
            無料で相談する →
          </a>
        </div>

      </article>

      <Footer />
    </div>
  );
}
