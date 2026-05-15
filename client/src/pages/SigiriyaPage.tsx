import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_rock_hero-WvSdEsM6SGKw7D3K9DXp8D.webp";
const TAXI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_taxi_charter-jbGez2ndeLZJLBsvWSRKhH.webp";
const KANDALAMA_IMG = "/manus-storage/heritance_kandalama_5d3649d9.jpg";

// 見どころ（H3 + 写真）
const highlights = [
  {
    id: "lion-gate",
    title: "ライオンゲート",
    image: "/manus-storage/sigiriya_lion_gate_v2_26e624bf.jpg",
    description:
      "頂上への最後の関門となる「ライオンゲート」。かつてはライオンの頭部全体が岩に彫られていましたが、現在は巨大な前足（爪）だけが残っています。その大きさは圧巻で、5世紀の建築技術の高さを物語ります。ここから急勾配の鉄製階段が頂上まで続きます。",
  },
  {
    id: "fresco",
    title: "シーギリヤレディ（フレスコ画）",
    image: "/manus-storage/sigiriya_fresco_ladies_5fb3a5d5.jpg",
    description:
      "岩の中腹にある洞窟に描かれた天女（アプサラス）の壁画。5世紀に描かれたとは思えないほど鮮やかな色彩で、約500体が描かれていたとされますが、現在は約20体が残っています。撮影禁止エリアのため、目に焼き付けておきましょう。SLTCSのシルバープラン以上ではドライバーが詳しく解説します。",
  },
  {
    id: "mirror-wall",
    title: "ミラーウォール（鏡の壁）",
    image: "/manus-storage/sigiriya_mirror_wall_d389e327.jpg",
    description:
      "フレスコ画の隣に続く、磨き上げられた白い漆喰の壁。かつては鏡のように光を反射し、フレスコ画を照らしていたとされます。壁には8〜10世紀に訪れた旅人たちが残した詩や落書き（グラフィティ）が刻まれており、古代の観光客の声を今に伝えています。",
  },
  {
    id: "summit",
    title: "頂上の宮殿遺跡と360度の絶景",
    image: "/manus-storage/sigiriya_summit_palace_cc5ecb90.jpg",
    description:
      "標高約200mの頂上には、5世紀に建設された宮殿の遺跡が広がります。プールや庭園の跡が残り、当時の豪華な宮廷生活を想像させます。頂上からは360度のパノラマビューが広がり、スリランカの密林と湖が一望できます。早朝訪問がおすすめです。",
  },
  {
    id: "water-garden",
    title: "水の庭園",
    image: "/manus-storage/sigiriya_water_garden_5c6cf63f.jpg",
    description:
      "岩の麓に広がる左右対称の水庭園。5世紀に作られた世界最古の景観庭園の一つとされ、噴水・水路・池が精巧に設計されています。雨季には今でも噴水が自然水圧で作動することが確認されており、古代の水利技術の高さに驚かされます。",
  },
];

// レストラン（表形式）
const restaurants = [
  {
    name: "Hela Bojun Hala Sigiriya",
    type: "スリランカ料理",
    rating: "4.1",
    feature: "政府運営のオーガニックスリランカ料理レストラン。地元食材を使った本格カレー・ライス＆カリーが楽しめる清潔な施設。",
  },
  {
    name: "Sigiriya Rest House",
    type: "スリランカ料理・洋食",
    rating: "3.9",
    feature: "シーギリヤロック入口近くの歴史あるレストハウス。ライス＆カリーやサンドイッチなど幅広いメニューが揃い立ち寄りやすい。",
  },
  {
    name: "Jetwing Vil Uyana Restaurant",
    type: "スリランカ料理・インターナショナル",
    rating: "4.5",
    feature: "湿地帯の中に建つ高級エコロッジのレストラン。スリランカの伝統料理を洗練されたスタイルで提供。特別な食事体験に最適。",
  },
  {
    name: "Sigiriya Village Restaurant",
    type: "ローカル料理",
    rating: "3.8",
    feature: "地元の人々が通うリーズナブルなローカルレストラン。本場のカレーや揚げ物を手頃な価格で楽しめる。",
  },
];

// 周辺観光地（H3 + 写真）— ポロンナルワ遺跡に実際の写真を使用
const nearbyAttractions = [
  {
    name: "ダンブッラ石窟寺院",
    image: "/manus-storage/dambulla_cave_temple_a3fe1f66.jpg",
    distance: "シーギリヤから約17km（車で約25分）",
    badge: "世界遺産",
    desc: "紀元前1世紀に建設された世界遺産の石窟寺院。5つの洞窟に157体もの仏像と壁画が描かれており、スリランカ最大の石窟寺院として知られています。シーギリヤと合わせて訪れる方が多い必見スポットです。",
  },
  {
    name: "ピドゥランガラロック",
    image: "/manus-storage/pidurangala_rock_e6725fa8.jpg",
    distance: "シーギリヤから約2km（徒歩・車で約10分）",
    badge: "絶景スポット",
    desc: "シーギリヤロックの隣にそびえる岩山。頂上からシーギリヤロックを正面に望む絶景が楽しめ、「シーギリヤロックを眺める最高のビューポイント」として人気急上昇中。入場料も安くハイカーに人気です。",
  },
  {
    name: "ミネリヤ国立公園",
    image: "/manus-storage/minneriya_elephants_c185b9ca.jpg",
    distance: "シーギリヤから約20km（車で約30分）",
    badge: "サファリ",
    desc: "「エレファント・ギャザリング」で有名な国立公園。乾季（6〜9月）には数百頭ものゾウが水辺に集まる壮大な光景が見られます。ジープサファリで野生のゾウ・クジャク・ワニなどを間近に観察できます。",
  },
  {
    name: "シーギリヤ博物館",
    image: "/manus-storage/sigiriya_museum_9d63ff81.jpg",
    distance: "シーギリヤロック入口隣接",
    badge: "博物館",
    desc: "シーギリヤロックの歴史と考古学的発見を展示する博物館。出土した陶器・石像・フレスコ画の複製などが展示されており、登山前に訪れることで遺跡への理解が深まります。入場料はシーギリヤロックのチケットに含まれます。",
  },
  {
    name: "ポロンナルワ遺跡",
    image: "/manus-storage/polonnaruwa_ruins_50133a2d.jpg",  // ← 実際の写真に差し替え
    distance: "シーギリヤから約40km（車で約50分）",
    badge: "世界遺産",
    desc: "11〜13世紀に栄えたスリランカ王朝の古都。広大な遺跡群には仏塔・宮殿・沐浴池などが点在し、世界遺産にも登録されています。自転車でのんびり巡るのがおすすめです。",
  },
];

// ホテル（表形式、ヘリタンスカンダラマ先頭）
const hotels = [
  {
    name: "Heritance Kandalama",
    category: "ラグジュアリー",
    price: "¥¥¥¥",
    access: "シーギリヤから約20km",
    desc: "世界的建築家ジェフリー・バワ設計の名建築ホテル。ダンブッラ湖に面した崖の上に建ち、ジャングルと一体化したデザインが圧巻。シーギリヤとダンブッラ観光の拠点に最適。",
    highlight: true,
  },
  {
    name: "Jetwing Vil Uyana",
    category: "ラグジュアリー",
    price: "¥¥¥¥",
    access: "シーギリヤから約3km",
    desc: "湿地帯の中に建つ高級エコロッジ。木造のヴィラが池の上に建ち、野鳥や野生動物を間近に感じられる唯一無二の体験ができます。プールやスパも完備。",
    highlight: false,
  },
  {
    name: "Aliya Resort & Spa",
    category: "リゾート",
    price: "¥¥¥",
    access: "シーギリヤから約2km",
    desc: "シーギリヤロックを望む丘の上に建つリゾートホテル。プールからシーギリヤロックが見える絶景が自慢。スパやレストランも充実。",
    highlight: false,
  },
  {
    name: "Sigiriya Village Hotel",
    category: "ミドルレンジ",
    price: "¥¥",
    access: "シーギリヤロック入口から徒歩圏内",
    desc: "広い敷地に伝統的なスリランカ建築のコテージが並び、自然の中でゆったり過ごせます。コストパフォーマンスが高い。",
    highlight: false,
  },
  {
    name: "Thilanka Resort and Spa",
    category: "ミドルレンジ",
    price: "¥¥",
    access: "シーギリヤから約1km",
    desc: "シーギリヤロックの眺望が楽しめるプールが人気のリゾート。コストパフォーマンスが高く、家族連れやカップルに人気。",
    highlight: false,
  },
  {
    name: "Sigiriya Rest House",
    category: "バジェット〜ミドル",
    price: "¥〜¥¥",
    access: "シーギリヤロック入口に最も近い",
    desc: "歴史ある建物で、シンプルながら清潔な客室を提供。早朝の登山には最適なロケーション。",
    highlight: false,
  },
];

// JSON-LD 構造化データ（FAQ + Article）
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "シーギリヤロックへの行き方は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "シーギリヤロックへはタクシーチャーターが最もおすすめです。コロンボから約4〜5時間で到着します。公共交通機関（バス・鉄道）は直通がなく、ダンブッラなどで乗り換えが必要なため不便です。SLTCSの日本語対応タクシーチャーターなら、ホテルから直接シーギリヤロック入口まで送迎します。"
      }
    },
    {
      "@type": "Question",
      "name": "シーギリヤロックの入場料はいくらですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "シーギリヤロックの外国人向け入場料は約USD 30（約4,500円）です。SLTCSのシルバープラン以上では、ドライバーが自己負担で同行し各スポットを日本語で解説します。"
      }
    },
    {
      "@type": "Question",
      "name": "シーギリヤロックの登山にかかる時間は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "シーギリヤロックの登山は往復で約2〜3時間が目安です。頂上までは約1,200段の階段があり、体力に応じて所要時間が変わります。早朝（開園直後の7時頃）の訪問が涼しく混雑も少なくおすすめです。"
      }
    },
    {
      "@type": "Question",
      "name": "シーギリヤロック周辺のおすすめホテルは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "シーギリヤ周辺のおすすめホテルは、ジェフリー・バワ設計のHeritance Kandalama（ラグジュアリー）、湿地帯のエコロッジJetwing Vil Uyana（ラグジュアリー）、コスパ重視ならSigiriya Village Hotelがあります。"
      }
    }
  ]
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "シーギリヤロックの見所とは？行き方や周辺のホテルやレストランを含めて徹底解説！",
  "description": "シーギリヤロックへの行き方（タクシーチャーター・バス・鉄道の比較）、見どころ5選、周辺レストラン、観光地、おすすめホテルを徹底解説。日本語対応タクシーチャーターSLTCSのご利用がおすすめです。",
  "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_rock_hero-WvSdEsM6SGKw7D3K9DXp8D.webp",
  "author": { "@type": "Organization", "name": "SLTCS スリランカタクシーチャーターサービス" },
  "publisher": {
    "@type": "Organization",
    "name": "SLTCS スリランカタクシーチャーターサービス",
    "url": "https://sltcs.srilanka-charter.com"
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sltcs.srilanka-charter.com/sigiriya" },
  "keywords": "シーギリヤロック 行き方, シーギリヤ アクセス, シーギリヤ タクシー, シーギリヤ 観光, スリランカ 世界遺産, シーギリヤ ホテル, シーギリヤ レストラン"
};

export default function SigiriyaPage() {
  useEffect(() => {
    // SEO: titleタグ — ターゲットキーワード「シーギリヤロック 行き方」を前方に配置
    document.title = "シーギリヤロックの行き方・見どころ完全ガイド｜タクシーチャーターで快適アクセス【SLTCS】";

    // SEO: descriptionタグ — 155文字以内でキーワードを自然に含める
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "シーギリヤロックへの行き方を徹底解説。コロンボからタクシーチャーター（約4〜5時間）・バス・鉄道を比較。日本語対応SLTCSなら直行でアクセス可能。見どころ・周辺レストラン・ホテルも網羅。");
    }

    // SEO: OGP
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "シーギリヤロックの行き方・見どころ完全ガイド｜SLTCS");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "シーギリヤロックへの行き方を徹底解説。タクシーチャーター・バス・鉄道を比較。日本語対応SLTCSで快適アクセス。見どころ・レストラン・ホテルも網羅。");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://sltcs.srilanka-charter.com/sigiriya");
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_rock_hero-WvSdEsM6SGKw7D3K9DXp8D.webp");

    // SEO: canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sltcs.srilanka-charter.com/sigiriya";

    // SEO: JSON-LD 構造化データ（FAQ + Article）
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-jsonld";
    faqScript.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(faqScript);

    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.id = "article-jsonld";
    articleScript.textContent = JSON.stringify(articleJsonLd);
    document.head.appendChild(articleScript);

    return () => {
      document.title = "スリランカタクシーチャーターならSLTCS｜日本語対応の専用車で自由に周遊";
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute("content", "スリランカタクシーチャーターならSLTCS。日本語対応の専用車・カーチャーターで、シーギリヤ・キャンディ・ヤラなどスリランカ全土を自由に周遊。政府公認ドライバーによる完全プライベートチャーターをご提供します。");
      document.getElementById("faq-jsonld")?.remove();
      document.getElementById("article-jsonld")?.remove();
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMG} alt="シーギリヤロック スリランカ世界遺産" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">世界遺産</span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg max-w-4xl">
            シーギリヤロックの行き方・見どころ<br className="hidden md:block" />
            完全ガイド
          </h1>
          <p className="text-white/90 mt-4 text-base md:text-lg max-w-2xl">
            タクシーチャーターで快適アクセス｜周辺ホテル・レストランも徹底解説
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* パンくずリスト（SEO強化） */}
        <nav aria-label="パンくずリスト" className="text-xs text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-amber-600 hover:underline">トップ</Link>
          <span>›</span>
          <span className="text-gray-400">観光スポット</span>
          <span>›</span>
          <span className="text-gray-700 font-medium">シーギリヤロック</span>
        </nav>

        {/* 目次 */}
        <nav aria-label="目次" className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <p className="font-bold text-amber-800 mb-3 text-sm tracking-wide uppercase">目次</p>
          <ol className="space-y-1 text-sm text-amber-700 list-decimal list-inside">
            <li><a href="#access" className="hover:underline">シーギリヤロックへの行き方（アクセス方法比較）</a></li>
            <li><a href="#highlights" className="hover:underline">シーギリヤロックの見どころ5選</a></li>
            <li><a href="#restaurants" className="hover:underline">周辺のランチに便利なレストラン</a></li>
            <li><a href="#attractions" className="hover:underline">シーギリヤロック周辺の観光地</a></li>
            <li><a href="#hotels" className="hover:underline">シーギリヤ地域のおすすめホテル</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        {/* イントロ */}
        <p className="text-gray-700 leading-relaxed text-lg mb-10">
          スリランカ中央部のジャングルにそびえる巨岩「シーギリヤロック（Sigiriya Rock）」は、標高約200mの断崖頂上に1500年以上前の宮殿遺跡が広がる、まさに"天空の宮殿"です。ユネスコ世界遺産にも登録されており、スリランカを訪れたなら絶対に外せない観光スポットです。本記事では<strong>シーギリヤロックへの行き方</strong>から見どころ、周辺グルメ・観光地・ホテルまで徹底解説します。
        </p>

        {/* ① 行き方（SEO最重要セクション） */}
        <section id="access" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-2">
            シーギリヤロックへの行き方・アクセス方法
          </h2>
          <p className="text-gray-500 text-sm mb-6">コロンボ・キャンディ・ダンブッラからのアクセスを徹底比較</p>

          <p className="text-gray-700 leading-relaxed mb-6">
            シーギリヤロックへのアクセスは、首都コロンボから約170km内陸に位置しています。主な移動手段は以下の4つです。<strong>公共交通機関は直通がなく乗り換えが複数回必要</strong>なため、初めての方や快適な旅を求める方にはタクシーチャーターが圧倒的におすすめです。
          </p>

          {/* 比較表 */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">移動手段</th>
                  <th className="px-4 py-3 text-left">所要時間</th>
                  <th className="px-4 py-3 text-left">費用目安</th>
                  <th className="px-4 py-3 text-left">快適さ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50 border-b border-amber-200">
                  <td className="px-4 py-3 font-bold text-amber-700">タクシーチャーター ★おすすめ</td>
                  <td className="px-4 py-3">約4〜5時間</td>
                  <td className="px-4 py-3">1台 約20,000円〜</td>
                  <td className="px-4 py-3">◎ ドアツードア</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3">バス（乗り換えあり）</td>
                  <td className="px-4 py-3">約5〜7時間</td>
                  <td className="px-4 py-3">数百円〜</td>
                  <td className="px-4 py-3">△ 乗り換え複数回</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3">鉄道＋バス</td>
                  <td className="px-4 py-3">約6〜8時間</td>
                  <td className="px-4 py-3">数百円〜</td>
                  <td className="px-4 py-3">△ 直通なし</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">国内線飛行機</td>
                  <td className="px-4 py-3">約30分（空港送迎別）</td>
                  <td className="px-4 py-3">高額</td>
                  <td className="px-4 py-3">○ 短時間</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-red-700 mb-2">⚠️ 公共交通機関はおすすめできない理由</p>
            <p className="text-red-700 text-sm leading-relaxed">
              シーギリヤへの直通バス・鉄道は存在せず、必ず途中で乗り換えが必要です。バスはダンブッラ経由で乗り換えが2〜3回、鉄道はハバラナ駅まで行き、そこからさらにバスかトゥクトゥクに乗り換える必要があります。荷物が多い場合や、限られた旅程で複数の観光地を回りたい場合は特に不便です。
            </p>
          </div>

          <img src={TAXI_IMG} alt="シーギリヤロックへのタクシーチャーター SLTCS" className="w-full rounded-2xl mb-8 shadow-lg" />

          <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-6 text-white mb-6">
            <p className="font-bold text-xl mb-3">✅ SLTCSのタクシーチャーターがおすすめ！</p>
            <p className="text-green-100 leading-relaxed mb-4">
              SLTCSは日本語対応の政府公認タクシーチャーターサービスです。ホテルまでお迎えに上がり、シーギリヤロックの入口まで直接お連れします。途中でダンブッラ石窟寺院などに立ち寄ることも自由自在。複数人でのご利用なら一人あたりの費用も大幅に抑えられます。
            </p>
            <ul className="text-green-100 text-sm space-y-1 mb-5">
              <li>✓ 日本語対応ドライバー選択可能</li>
              <li>✓ 政府公認・安心の品質</li>
              <li>✓ 追加料金なしの明朗会計</li>
              <li>✓ 旅程に合わせた柔軟なルート設定</li>
            </ul>
            <Link href="/">
              <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-full transition-colors">
                SLTCSの詳細を見る →
              </button>
            </Link>
          </div>
        </section>

        {/* ② 見どころ */}
        <section id="highlights" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-6">
            シーギリヤロックの見どころ5選
          </h2>

          {/* シルバープラン以上の説明 */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-6 text-white mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">SLTCS シルバープラン以上</span>
              <span className="text-amber-300 font-bold text-sm">特別サービス</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">ドライバーがシーギリヤロックに一緒に登り、各スポットを詳しく解説します（日本語ドライバー選択時）</h3>
            <p className="text-white/85 text-sm leading-relaxed mb-3">
              SLTCSのシルバープラン以上をご利用のお客様には、担当ドライバーがシーギリヤロックの入場料を自己負担で登山に同行し、フレスコ画・ライオンゲート・頂上宮殿遺跡など各見どころを詳しく解説するサービスをご提供しています。日本語ドライバーを選択していれば日本語での説明を受けることができます。
            </p>
            <p className="text-white/85 text-sm leading-relaxed mb-4">
              ガイドブックには載っていない地元ならではのエピソードや、最高の撮影スポットのアドバイスも受けられます。初めてのシーギリヤ訪問をより深く、より楽しく体験していただけます。ブロンズプランはドライバーが麓でお待ちします。
            </p>
            <Link href="/">
              <button className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-5 py-2 rounded-lg text-sm transition-colors">
                シルバープランの詳細を見る →
              </button>
            </Link>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            シーギリヤロックは単なる「岩山」ではありません。5世紀に建設された古代宮殿の遺跡が頂上に広がり、登山途中にも見どころが満載です。
          </p>

          <div className="space-y-12">
            {highlights.map((spot, index) => (
              <div key={spot.id} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 items-start`}>
                <div className="w-full lg:w-1/2">
                  <img
                    src={spot.image}
                    alt={`シーギリヤロック ${spot.title}`}
                    className="w-full h-56 lg:h-64 object-cover rounded-xl shadow-md"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-amber-400 pl-3">
                    {spot.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ③ レストラン */}
        <section id="restaurants" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-6">
            シーギリヤロック周辺のランチに便利なレストラン
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            シーギリヤロックの観光後は、周辺のレストランでスリランカ料理を楽しみましょう。観光地近くにはリーズナブルなローカル食堂から、リゾートホテルのレストランまで幅広い選択肢があります。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse" style={{ minWidth: "480px", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "22%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "52%" }} />
              </colgroup>
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-3 py-3 text-left text-xs">店名</th>
                  <th className="px-3 py-3 text-left text-xs">料理の種類</th>
                  <th className="px-2 py-3 text-center text-xs">評価</th>
                  <th className="px-3 py-3 text-left text-xs">特徴</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((r, i) => (
                  <tr key={i} className={`border-b ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-3 py-3 font-semibold text-gray-900 text-xs leading-snug">{r.name}</td>
                    <td className="px-3 py-3 text-gray-700 text-xs leading-snug">{r.type}</td>
                    <td className="px-2 py-3 text-center">
                      <span className="inline-flex items-center gap-0.5 bg-green-100 text-green-800 font-bold px-1.5 py-0.5 rounded text-xs">
                        ★ {r.rating}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-gray-600 text-xs leading-relaxed">{r.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">※ TripAdvisor評価は参考値です。最新情報は公式サイトでご確認ください。</p>
        </section>

        {/* ④ 周辺観光地 */}
        <section id="attractions" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-6">
            シーギリヤロック周辺の観光地
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            シーギリヤ周辺は「文化三角地帯」と呼ばれ、世界遺産や国立公園が集中するスリランカ屈指の観光エリアです。タクシーチャーターを利用すれば、1日で複数の観光地を効率よく巡ることができます。
          </p>

          <div className="space-y-10">
            {nearbyAttractions.map((spot, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 items-start`}>
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <img
                    src={spot.image}
                    alt={`${spot.name} スリランカ観光`}
                    className="w-full h-52 object-cover rounded-xl shadow-md"
                  />
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold text-gray-900 border-l-4 border-amber-400 pl-3">
                      {spot.name}
                    </h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">{spot.badge}</span>
                  </div>
                  <p className="text-xs text-amber-700 font-semibold mb-3">📍 {spot.distance}</p>
                  <p className="text-gray-700 leading-relaxed text-sm">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ⑤ ホテル */}
        <section id="hotels" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-6">
            シーギリヤ地域のおすすめホテル
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            シーギリヤ周辺には、ジャングルの中のエコロッジから豪華リゾートまで、個性豊かなホテルが揃っています。早朝のシーギリヤロック登山を楽しむなら、現地泊がおすすめです。
          </p>

          {/* ヘリタンスカンダラマの写真（表の上に掲載） */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={KANDALAMA_IMG}
              alt="Heritance Kandalama ヘリタンスカンダラマ シーギリヤ ホテル"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-bold">Heritance Kandalama（ヘリタンスカンダラマ）</p>
              <p className="text-white/80 text-xs">ジェフリー・バワ設計の名建築ホテル｜シーギリヤから約20km</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse" style={{ minWidth: "480px", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "22%" }} />
                <col style={{ width: "11%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "45%" }} />
              </colgroup>
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-3 py-3 text-left text-xs">ホテル名</th>
                  <th className="px-2 py-3 text-center text-xs">カテゴリ</th>
                  <th className="px-2 py-3 text-center text-xs">料金</th>
                  <th className="px-2 py-3 text-left text-xs">距離</th>
                  <th className="px-3 py-3 text-left text-xs">特徴</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((h, i) => (
                  <tr key={i} className={`border-b ${h.highlight ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-3 py-3">
                      {h.highlight && <span className="block text-xs text-amber-600 font-bold mb-0.5">★ イチオシ</span>}
                      <span className="font-semibold text-gray-900 text-xs leading-snug">{h.name}</span>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full leading-snug">{h.category}</span>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-bold">{h.price}</span>
                    </td>
                    <td className="px-2 py-3 text-gray-600 text-xs leading-snug">{h.access}</td>
                    <td className="px-3 py-3 text-gray-600 text-xs leading-relaxed">{h.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">※ 料金は目安です（¥=〜5,000円、¥¥=5,000〜15,000円、¥¥¥=15,000〜30,000円、¥¥¥¥=30,000円〜）。シーズンや予約時期により変動します。</p>
        </section>

        {/* ⑥ FAQ（SEO強化：構造化データと連動） */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-6">
            よくある質問（FAQ）
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "シーギリヤロックへの行き方は？",
                a: "シーギリヤロックへはタクシーチャーターが最もおすすめです。コロンボから約4〜5時間で到着します。公共交通機関（バス・鉄道）は直通がなく、ダンブッラなどで乗り換えが必要なため不便です。SLTCSの日本語対応タクシーチャーターなら、ホテルから直接シーギリヤロック入口まで送迎します。"
              },
              {
                q: "シーギリヤロックの入場料はいくらですか？",
                a: "シーギリヤロックの外国人向け入場料は約USD 30（約4,500円）です。SLTCSのシルバープラン以上では、ドライバーが自己負担で同行し各スポットを日本語で解説します。"
              },
              {
                q: "シーギリヤロックの登山にかかる時間は？",
                a: "シーギリヤロックの登山は往復で約2〜3時間が目安です。頂上までは約1,200段の階段があり、体力に応じて所要時間が変わります。早朝（開園直後の7時頃）の訪問が涼しく混雑も少なくおすすめです。"
              },
              {
                q: "シーギリヤロック周辺のおすすめホテルは？",
                a: "シーギリヤ周辺のおすすめホテルは、ジェフリー・バワ設計のHeritance Kandalama（ラグジュアリー）、湿地帯のエコロッジJetwing Vil Uyana（ラグジュアリー）、コスパ重視ならSigiriya Village Hotelがあります。"
              }
            ].map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer bg-white hover:bg-amber-50 transition-colors font-semibold text-gray-800 text-sm">
                  <span>Q. {item.q}</span>
                  <span className="text-amber-500 text-lg group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed border-t border-gray-100">
                  <p>A. {item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">シーギリヤをSLTCSで快適に！</h2>
          <p className="text-green-100 leading-relaxed mb-6 max-w-xl mx-auto">
政府公認ドライバーが、シーギリヤロックへの移動から観光ガイドまでサポートします。シルバープラン以上では一緒に登山し、各スポットを丁寧に解説。まずはお気軽にご相談ください。
          </p>
          <Link href="/">
            <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg">
              SLTCSトップページへ →
            </button>
          </Link>
        </div>

      </article>

      <Footer />
    </div>
  );
}
