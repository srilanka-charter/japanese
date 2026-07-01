import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_fort_hero-DUKxQjoVyFYYNXeLGiZBub.webp";
const TAXI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_taxi_charter-V9W6J4ETCrzur43PoirLq2.webp";
const HOTEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_hotel_amangalla-RXcP4gmiEohYCnm35XfdB2.webp";

// 見どころ（H3 + 写真）
const highlights = [
  {
    id: "fort-walls",
    title: "城壁（ランパート）散歩",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_fort_walls-f7jYHJFZsjM9k9xGAw2ENK.webp",
    description:
      "ゴール要塞を囲む全長約1.4kmの城壁は、夕暮れ時の散歩コースとして絶大な人気を誇ります。17世紀にオランダ人が築いた堅牢な石造りの城壁の上を歩きながら、インド洋の絶景と要塞内の赤瓦屋根の街並みを一望できます。随所に設置された大砲が当時の面影を伝えており、フォトスポットとしても最高です。SLTCSのシルバープラン以上では、ドライバーが各バスティオン（稜堡）の歴史を丁寧に解説します。",
  },
  {
    id: "lighthouse",
    title: "ゴール灯台",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_lighthouse-bpEG4tikmYVRc3r6gfXegc.webp",
    description:
      "要塞の南端に建つ真っ白な灯台は、スリランカで最も古い灯台のひとつです（1848年建造）。高さ約26mの灯台はゴールのシンボルとして観光客に人気が高く、周囲のターコイズブルーの海との対比が美しい絶景スポットです。灯台の周辺は地元の人々の憩いの場となっており、夕日が沈む時間帯は特に幻想的な雰囲気に包まれます。",
  },
  {
    id: "dutch-reformed-church",
    title: "オランダ改革派教会（1755年建造）",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_dutch_reformed_church-FKp99kRnqNcfzcFqdHuQhe.webp",
    description:
      "1755年にオランダ東インド会社が建設した歴史的な教会。白亜の外観と内部の石畳の床に刻まれたオランダ人商人・兵士の墓碑が印象的です。床全体が墓石で覆われているという珍しい構造で、当時のオランダ植民地時代の歴史を今に伝えています。現在もキリスト教会として使用されており、日曜礼拝も行われています。",
  },
  {
    id: "national-museum",
    title: "ゴール国立博物館",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_national_museum-VrGn4BAxrNcsvJJCQ8egrt.webp",
    description:
      "要塞内に建つコロニアル様式の博物館。ポルトガル・オランダ・イギリスの植民地時代の遺物、伝統的なスリランカの工芸品、地域の歴史資料などが展示されています。かつてのオランダ東インド会社の倉庫を改築した建物で、外観も見どころのひとつです。入場料は手頃で、ゴールの歴史的背景を深く理解するのに最適な施設です。",
  },
  {
    id: "fort-street",
    title: "フォート内のブティック街",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_fort_street-SGrrKQe5fJDAcpH9uycmyL.webp",
    description:
      "要塞内の石畳の通りには、おしゃれなブティック・カフェ・ギャラリー・ジュエリーショップが軒を連ねています。コロニアル建築をリノベーションしたユニークな店舗が多く、スリランカの伝統工芸品やハンドメイドジュエリー、オーガニックコスメなどのショッピングが楽しめます。「ペダラーズ・ストリート」や「チャーチ・ストリート」周辺が特に賑やかです。",
  },
];

// レストラン（表形式）
const restaurants = [
  {
    name: "The Fort Printers",
    type: "スリランカ料理・インターナショナル",
    rating: "4.5",
    feature: "要塞内の歴史的な印刷所を改装したレストラン。中庭のガーデンダイニングが人気。スリランカ料理と西洋料理を融合させたメニューが充実。ゴール旅行の特別なディナーに最適。",
  },
  {
    name: "Pedlar's Inn Café",
    type: "スリランカ料理・カフェ",
    rating: "4.3",
    feature: "要塞内の人気カフェ。ライス＆カリーやスリランカの軽食が手頃な価格で楽しめる。地元の旅行者にも人気の定番スポット。",
  },
  {
    name: "Serendipity Arts Café",
    type: "インターナショナル・カフェ",
    rating: "4.4",
    feature: "アート系ブティックに併設されたおしゃれなカフェ。スムージー・サンドイッチ・スリランカ料理が楽しめる。インスタ映えするインテリアが人気。",
  },
  {
    name: "The Tuna & The Crab",
    type: "シーフード・インターナショナル",
    rating: "4.6",
    feature: "ゴール要塞内の人気シーフードレストラン。新鮮なインド洋の魚介類を使った料理が絶品。テラス席からの眺めも素晴らしい。",
  },
];

// 周辺観光地（H3 + 写真）
const nearbyAttractions = [
  {
    name: "ウナワトゥナビーチ",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_unawatuna_beach-AJVLevJTQTuxR45AUhMsmi.webp",
    distance: "ゴールから約5km（車で約15分）",
    badge: "ビーチ",
    desc: "スリランカ南部を代表する美しいビーチリゾート。三日月形の白砂ビーチとターコイズブルーの海が広がり、スノーケリングやダイビングも楽しめます。ビーチ沿いにはレストラン・バー・ゲストハウスが立ち並び、のんびりとしたリゾートタイムを満喫できます。ゴール観光と組み合わせた日帰り訪問に最適です。",
  },
  {
    name: "ミリッサビーチ（ホエールウォッチング）",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_mirissa_beach-9kGNTSprFRiRu3npK3k5qc.webp",
    distance: "ゴールから約35km（車で約1時間）",
    badge: "ビーチ・ホエールウォッチング",
    desc: "スリランカ最大のホエールウォッチングスポット。11月〜4月のシーズンにはブルーホエール・スパームホエールなどの大型クジラを高確率で目撃できます。美しいビーチとサンセットも有名で、ゴールからの日帰り観光に人気のスポットです。早朝出発のホエールウォッチングツアーが多数催行されています。",
  },
  {
    name: "竿釣り漁師（スティルト・フィッシャーメン）",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_stilt_fishermen-dCatKWDUuWVFkJNcu8wDBA.webp",
    distance: "ゴール〜ウェリガマ沿岸（車で約30〜60分）",
    badge: "文化体験",
    desc: "スリランカ南部の海岸線で見られる伝統的な竿釣り漁師（スティルト・フィッシャーメン）は、世界的に有名な絶景フォトスポットです。海中に立てた木の棒に腰掛けて釣りをする独特のスタイルは、スリランカを象徴する文化的な光景。夕暮れ時のシルエットが特に美しく、写真愛好家に人気です。",
  },
  {
    name: "ヤラ国立公園",
    image: "/manus-storage/yala_leopard_769d6ffa.jpg",
    distance: "ゴールから約150km（車で約3〜4時間）",
    badge: "野生動物",
    desc: "スリランカ最大の国立公園で、世界最高密度のヒョウの生息地として知られています。ヒョウのほか、ゾウ・クマ・ワニ・水牛・多種多様な野鳥などが生息しており、本格的なサファリが楽しめます。ゴールを拠点に1泊2日のサファリツアーを組み合わせるプランが人気です。",
  },
];

// ホテル（表形式）
const hotels = [
  {
    name: "Amangalla",
    category: "ラグジュアリー",
    price: "¥¥¥¥¥",
    access: "ゴール要塞内・中心部",
    desc: "1684年創業の歴史的コロニアルホテル。オランダ東インド会社の本部として使われた建物を改装した超高級ホテル。優雅な中庭、スパ、プールを完備。ゴール滞在の最高峰。",
    highlight: true,
  },
  {
    name: "The Galle Fort Hotel",
    category: "ラグジュアリー",
    price: "¥¥¥¥",
    access: "ゴール要塞内",
    desc: "要塞内の歴史的建物をリノベーションした高級ブティックホテル。個性的なデザインの客室と中庭プールが魅力。フォートの中心部に位置し、観光に最適なロケーション。",
    highlight: false,
  },
  {
    name: "Fort Bazaar",
    category: "ミドルレンジ",
    price: "¥¥¥",
    access: "ゴール要塞内",
    desc: "要塞内のブティックホテル。コロニアルな雰囲気とモダンな設備が融合。屋上テラスからの眺めが素晴らしい。レストランも好評。",
    highlight: false,
  },
  {
    name: "The Sun House",
    category: "ミドルレンジ",
    price: "¥¥¥",
    access: "ゴール市内・要塞から約1km",
    desc: "丘の上に建つ歴史的なヴィラホテル。プールと庭園が美しく、ゴール湾を一望できる絶景ロケーション。家族経営の温かいサービスが好評。",
    highlight: false,
  },
  {
    name: "Jetwing Lighthouse",
    category: "ラグジュアリー",
    price: "¥¥¥¥",
    access: "ゴール要塞から約2km",
    desc: "著名な建築家ジェフリー・バワが設計した高級リゾートホテル。インド洋を望む絶景と独創的な建築が魅力。プール・スパ・レストランを完備。",
    highlight: false,
  },
  {
    name: "Closenberg Hotel",
    category: "ミドルレンジ",
    price: "¥¥",
    access: "ゴール湾岸・要塞から約3km",
    desc: "1858年創業の歴史あるコロニアルホテル。ゴール湾を一望できる高台に建ち、プールと庭園が美しい。コスパが良くリピーターも多い。",
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
      "name": "ゴール旧市街への行き方は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ゴール旧市街へはタクシーチャーターが最もおすすめです。コロンボから約2〜3時間で到着します。公共交通機関（バス・鉄道）でもアクセスできますが、荷物が多い場合や複数の観光地を効率よく回りたい場合はタクシーチャーターが便利です。SLTCSの日本語対応タクシーチャーターなら、ホテルからゴール要塞まで直接送迎します。"
      }
    },
    {
      "@type": "Question",
      "name": "ゴール要塞の入場料はいくらですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ゴール要塞（フォート）自体は無料で入場できます。要塞内の観光施設（国立博物館・オランダ改革派教会など）は個別に入場料が必要です。博物館の外国人向け入場料は約USD 5〜10程度です。SLTCSのシルバープラン以上では、ドライバーが各施設の入場料や見どころを丁寧に解説します。"
      }
    },
    {
      "@type": "Question",
      "name": "ゴール旧市街の観光に必要な時間はどれくらいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ゴール要塞内の主要スポット（城壁散歩・灯台・オランダ改革派教会・博物館・ショッピング）を巡るには最低でも半日（3〜4時間）は必要です。ウナワトゥナビーチやミリッサビーチも組み合わせる場合は1日以上を確保することをおすすめします。SLTCSのタクシーチャーターなら、ご希望に合わせて柔軟に観光プランを組み立てられます。"
      }
    },
    {
      "@type": "Question",
      "name": "コロンボからゴールまでの所要時間は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "コロンボからゴールまでの所要時間は、タクシーチャーターで約2〜3時間（約120km）です。鉄道では約2時間30分〜3時間、バスでは約3〜4時間かかります。SLTCSのタクシーチャーターなら、高速道路（E01）を利用して最短ルートで快適に移動できます。"
      }
    },
    {
      "@type": "Question",
      "name": "ゴール旧市街はいつ行くのがベストシーズンですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ゴール旧市街のベストシーズンは12月〜3月です。この時期は南西モンスーンの影響が少なく、晴天が続きます。4月〜11月は南西モンスーンの影響で雨が多くなりますが、観光自体は年間を通じて可能です。ホエールウォッチング（ミリッサ）を組み合わせる場合は11月〜4月がおすすめです。"
      }
    }
  ]
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ゴール旧市街の見所とは？行き方や周辺のホテルやレストランを含めて徹底解説！",
  "description": "ゴール旧市街への行き方（タクシーチャーター・バス・鉄道の比較）、見どころ5選、周辺レストラン、観光地、おすすめホテルを徹底解説。日本語対応タクシーチャーターSLTCSのご利用がおすすめです。",
  "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_fort_hero-DUKxQjoVyFYYNXeLGiZBub.webp",
  "author": { "@type": "Organization", "name": "SLTCS スリランカタクシーチャーターサービス" },
  "publisher": {
    "@type": "Organization",
    "name": "SLTCS スリランカタクシーチャーターサービス",
    "url": "https://sltcs.srilanka-charter.com"
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sltcs.srilanka-charter.com/galle" },
  "keywords": "ゴール 旧市街 行き方, ゴール要塞 アクセス, ゴール タクシー, ゴール 観光, スリランカ 世界遺産, ゴール ホテル, ゴール レストラン, ゴール要塞 入場料"
};

export default function GallePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "ゴール旧市街の行き方・見どころ完全ガイド｜タクシーチャーターで快適アクセス【SLTCS】",
    description: "ゴール旧市街への行き方を徹底解説。コロンボからタクシーチャーター（約2〜3時間）・バス・鉄道を比較。日本語対応SLTCSなら直行でアクセス可能。見どころ・周辺レストラン・ホテルも網羅。",
    path: "/galle",
    ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/galle_fort_hero-DUKxQjoVyFYYNXeLGiZBub.webp",
    jsonLdList: [faqJsonLd, articleJsonLd],
    jsonLdIdPrefix: "galle",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMG} alt="ゴール旧市街 スリランカ世界遺産" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">世界遺産</span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg max-w-4xl">
            ゴール旧市街の行き方・見どころ<br className="hidden md:block" />
            完全ガイド
          </h1>
          <p className="text-white/90 mt-4 text-base md:text-lg max-w-2xl">
            タクシーチャーターで快適アクセス｜周辺ホテル・レストランも徹底解説
          </p>
        </div>
      </div>

      {/* 目次 */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="container py-4">
          <nav aria-label="目次">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-amber-800 font-medium">
              {[
                { href: "#access", label: "行き方" },
                { href: "#highlights", label: "見どころ5選" },
                { href: "#restaurants", label: "レストラン" },
                { href: "#nearby", label: "周辺観光地" },
                { href: "#hotels", label: "ホテル" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-amber-600 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="container py-12 max-w-4xl mx-auto">

        {/* イントロ */}
        <section className="mb-12">
          <p className="text-[oklch(0.35_0.02_60)] leading-relaxed text-base md:text-lg">
            <strong>ゴール旧市街（ゴール要塞）</strong>は、スリランカ南部に位置するユネスコ世界文化遺産です。16世紀にポルトガル人が築き、17世紀にオランダ東インド会社が大規模に拡張した要塞都市で、アジアに現存するヨーロッパ植民地時代の要塞としては最も保存状態が良いもののひとつとして知られています。城壁に囲まれた旧市街には、コロニアル建築の教会・博物館・ブティック・カフェが立ち並び、歴史と現代が融合した独特の雰囲気を醸し出しています。コロンボから約2〜3時間でアクセスでき、スリランカ南部観光の拠点としても人気の高い都市です。
          </p>
        </section>

        {/* 行き方セクション */}
        <section id="access" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-amber-400" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ゴール旧市街への行き方
          </h2>

          <p className="text-[oklch(0.35_0.02_60)] mb-6 leading-relaxed">
            ゴール旧市街へのアクセス方法は主に3つあります。それぞれのメリット・デメリットを比較して、旅のスタイルに合った方法をお選びください。
          </p>

          {/* 比較表 */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[oklch(0.15_0.01_60)] text-white">
                  <th className="px-4 py-3 text-left font-semibold">移動手段</th>
                  <th className="px-4 py-3 text-left font-semibold">所要時間</th>
                  <th className="px-4 py-3 text-left font-semibold">料金目安</th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50 border-b border-amber-100">
                  <td className="px-4 py-3 font-bold text-amber-700">タクシーチャーター（SLTCS）</td>
                  <td className="px-4 py-3">約2〜3時間</td>
                  <td className="px-4 py-3">¥¥¥</td>
                  <td className="px-4 py-3">ホテル直接送迎・日本語対応・荷物OK・途中立ち寄り自由</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">鉄道</td>
                  <td className="px-4 py-3">約2時間30分〜3時間</td>
                  <td className="px-4 py-3">¥</td>
                  <td className="px-4 py-3">海岸沿いの景色が美しい・座席確保が必要・時刻表に注意</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">バス</td>
                  <td className="px-4 py-3">約3〜4時間</td>
                  <td className="px-4 py-3">¥</td>
                  <td className="px-4 py-3">最安値・混雑しやすい・荷物管理に注意</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* タクシーチャーター詳細 */}
          <div className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-sm">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img src={TAXI_IMG} alt="ゴール旧市街 タクシーチャーター" className="w-full h-48 md:h-full object-cover" />
              </div>
              <div className="md:w-3/5 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">おすすめ</span>
                  <h3 className="font-bold text-lg text-[oklch(0.15_0.01_60)]">SLTCSタクシーチャーターで行く</h3>
                </div>
                <ul className="space-y-2 text-sm text-[oklch(0.35_0.02_60)]">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span><strong>コロンボ市内のホテルから直接送迎</strong>。乗り換えなしでゴール要塞まで快適移動</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span><strong>日本語対応ドライバー選択可能</strong>（シルバープラン以上）が見どころを詳しく解説</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span>ウナワトゥナビーチ・ミリッサなど<strong>途中の観光地に自由に立ち寄り可能</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span>大型スーツケースも安心。<strong>荷物を気にせず快適に観光</strong>できる</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/#contact"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    無料で相談する →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 見どころセクション */}
        <section id="highlights" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-amber-400" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ゴール旧市街の見どころ5選
          </h2>
          <p className="text-[oklch(0.35_0.02_60)] mb-8 leading-relaxed">
            ゴール要塞内には歴史的な見どころが凝縮されています。半日〜1日かけてじっくり巡るのがおすすめです。
          </p>
          <div className="space-y-10">
            {highlights.map((h, i) => (
              <article key={h.id} id={h.id} className="scroll-mt-20">
                <div className={`md:flex gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-2/5 mb-4 md:mb-0">
                    <img
                      src={h.image}
                      alt={h.title}
                      className="w-full h-52 object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <div className="md:w-3/5">
                    <h3 className="text-xl font-bold text-[oklch(0.15_0.01_60)] mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      {i + 1}. {h.title}
                    </h3>
                    <p className="text-[oklch(0.4_0.02_60)] leading-relaxed text-sm md:text-base">{h.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* レストランセクション */}
        <section id="restaurants" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-amber-400" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ゴール旧市街のおすすめレストラン
          </h2>
          <p className="text-[oklch(0.35_0.02_60)] mb-6 leading-relaxed">
            ゴール要塞内にはコロニアル建築を活かしたおしゃれなレストランやカフェが多数あります。新鮮なシーフードとスリランカ料理を楽しめます。
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
                <tr className="bg-[oklch(0.15_0.01_60)] text-white">
                  <th className="px-3 py-3 text-left text-xs">店名</th>
                  <th className="px-3 py-3 text-left text-xs">ジャンル</th>
                  <th className="px-2 py-3 text-center text-xs">評価</th>
                  <th className="px-3 py-3 text-left text-xs">特徴</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((r, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-3 py-3 font-medium text-[oklch(0.15_0.01_60)] text-xs leading-snug">{r.name}</td>
                    <td className="px-3 py-3 text-[oklch(0.4_0.02_60)] text-xs leading-snug">{r.type}</td>
                    <td className="px-2 py-3 text-center">
                      <span className="inline-flex items-center gap-0.5 text-amber-600 font-bold text-xs">
                        ★ {r.rating}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-[oklch(0.4_0.02_60)] text-xs leading-relaxed">{r.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 周辺観光地セクション */}
        <section id="nearby" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-amber-400" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ゴール周辺のおすすめ観光地
          </h2>
          <p className="text-[oklch(0.35_0.02_60)] mb-8 leading-relaxed">
            ゴールを拠点に、周辺の美しいビーチや文化スポットを組み合わせた観光がおすすめです。タクシーチャーターなら効率よく複数のスポットを巡れます。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {nearbyAttractions.map((a, i) => (
              <article key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">{a.badge}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[oklch(0.15_0.01_60)] mb-1">{a.name}</h3>
                  <p className="text-xs text-amber-700 font-medium mb-2">{a.distance}</p>
                  <p className="text-sm text-[oklch(0.4_0.02_60)] leading-relaxed">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ホテルセクション */}
        <section id="hotels" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-amber-400" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ゴール旧市街のおすすめホテル
          </h2>

          {/* 注目ホテル */}
          <div className="bg-amber-50 rounded-2xl overflow-hidden border border-amber-200 mb-6">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img src={HOTEL_IMG} alt="Amangalla ゴール 高級ホテル" className="w-full h-52 md:h-full object-cover" />
              </div>
              <div className="md:w-3/5 p-6">
                <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded mb-3">編集部おすすめ</span>
                <h3 className="text-xl font-bold text-[oklch(0.15_0.01_60)] mb-2">Amangalla</h3>
                <p className="text-sm text-[oklch(0.4_0.02_60)] leading-relaxed mb-3">
                  1684年創業の歴史的コロニアルホテル。オランダ東インド会社の本部として使われた建物を改装した超高級ホテルで、ゴール要塞内に位置する最高峰の宿泊施設です。優雅な中庭、スパ、プールを完備し、世界中のVIPが訪れる特別な滞在体験を提供します。
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 font-bold">¥¥¥¥¥</span>
                  <span className="text-xs text-gray-500">ゴール要塞内・中心部</span>
                </div>
              </div>
            </div>
          </div>

          {/* ホテル一覧表 */}
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
                <tr className="bg-[oklch(0.15_0.01_60)] text-white">
                  <th className="px-3 py-3 text-left text-xs">ホテル名</th>
                  <th className="px-2 py-3 text-center text-xs">カテゴリ</th>
                  <th className="px-2 py-3 text-center text-xs">料金</th>
                  <th className="px-2 py-3 text-left text-xs">距離</th>
                  <th className="px-3 py-3 text-left text-xs">特徴</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((h, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-3 py-3">
                      {h.highlight && <span className="block text-xs text-amber-600 font-bold mb-0.5">★ イチオシ</span>}
                      <span className="font-medium text-[oklch(0.15_0.01_60)] text-xs leading-snug">{h.name}</span>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full leading-snug">{h.category}</span>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-bold">{h.price}</span>
                    </td>
                    <td className="px-2 py-3 text-[oklch(0.4_0.02_60)] text-xs leading-snug">{h.access}</td>
                    <td className="px-3 py-3 text-[oklch(0.4_0.02_60)] text-xs leading-relaxed">{h.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQセクション */}
        <section id="faq" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-amber-400" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-amber-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-[oklch(0.15_0.01_60)] text-sm md:text-base pr-4">{item.name}</span>
                  <span className={`text-amber-500 text-xl transition-transform flex-shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 bg-amber-50 text-sm text-[oklch(0.4_0.02_60)] leading-relaxed">
                    {item.acceptedAnswer.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTAセクション */}
        <section className="bg-[oklch(0.15_0.01_60)] rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ゴール旧市街をタクシーチャーターで快適に観光しよう
          </h2>
          <p className="text-white/80 text-sm mb-6 max-w-xl mx-auto">
            SLTCSの日本語対応タクシーチャーターなら、コロンボのホテルからゴール要塞まで直接送迎。ウナワトゥナビーチやミリッサへの途中立ち寄りも自由自在です。まずはお気軽にご相談ください。
          </p>
          <a
            href="/#contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-3 rounded-full text-sm transition-colors"
          >
            無料で旅を相談する →
          </a>
        </section>

        {/* パンくずリスト */}
        <nav aria-label="パンくずリスト" className="mt-8 text-sm text-gray-400">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">ホーム</Link></li>
            <li>/</li>
            <li className="text-gray-600">ゴール旧市街</li>
          </ol>
        </nav>
      </div>

      <Footer />
    </div>
  );
}
