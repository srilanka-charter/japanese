import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_tooth_relic_temple_hero-H5KPCu2wFYrgvuf3d6Q945.webp";
const TAXI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_taxi_charter-6KQpC4E2cxLdgXVsKDuFTj.webp";
const HOTEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_hotel_earl-mJcAUkHGwmp4MMrEVDrTFk.webp";

// 見どころ（H3 + 写真）
const highlights = [
  {
    id: "relic-chamber",
    title: "仏歯奉安室（ダラダー・マーリガーワ）",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_tooth_relic_chamber-YvohM8RMYVqb3cUNmPAnc4.webp",
    description:
      "仏歯寺の中核となる奉安室には、釈迦の歯が黄金の容器に7重に収められています。毎日3回（早朝・昼・夕方）の法要（プージャ）の時間には、多くの信者が白い衣をまとって参拝に訪れます。黄金に輝く装飾と花の供え物が荘厳な雰囲気を醸し出し、スリランカ仏教の中心地として今も篤い信仰を集めています。SLTCSのシルバープラン以上では、ドライバーが法要の時間や参拝作法を丁寧に解説します。",
  },
  {
    id: "esala-perahera",
    title: "エサラ・ペラヘラ祭（毎年7〜8月）",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_esala_perahera-V5H8QKbQXd58Nt2nqPw6sM.webp",
    description:
      "毎年7〜8月に開催されるスリランカ最大の宗教行列祭典。豪華な衣装をまとった象が仏歯のレプリカを乗せて市内を練り歩き、キャンディアン・ダンサーや太鼓奏者が続きます。10日間にわたる祭りはユネスコ無形文化遺産にも登録されており、世界中から観光客が集まります。祭り期間中の宿泊は早めの予約が必須です。",
  },
  {
    id: "kandy-lake",
    title: "キャンディ湖（キリ・ムフダ）",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_lake-VMKDkEWhfFC66TY6YCg3gc.webp",
    description:
      "仏歯寺に隣接する人工湖。19世紀初頭にキャンディ王朝最後の王スリー・ウィクラマ・ラージャシンハが築いた湖で、湖畔の遊歩道は地元の人々の憩いの場となっています。夕暮れ時には湖面に仏歯寺が映り込む絶景が楽しめます。湖を一周する散歩コース（約3km）は観光客にも人気です。",
  },
  {
    id: "national-museum",
    title: "キャンディ国立博物館",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_museum-fR8DwXMye2iyEbiQGvqCa9.webp",
    description:
      "仏歯寺の隣に建つコロニアル様式の博物館。かつてキャンディ王朝の王妃の宮殿として使われていた建物で、キャンディ王朝の宝飾品・武器・儀式用品・象の飾り具などが展示されています。仏歯寺の歴史的背景を理解するのに最適な施設で、入場料も手頃です。",
  },
  {
    id: "royal-palace",
    title: "王宮謁見の間（マグル・マドゥワ）",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_royal_palace-dScccTtEAipNdtGyPS9xox.webp",
    description:
      "仏歯寺複合施設内にある王宮の謁見の間。精巧に彫刻された木製の柱が並ぶ伝統的なキャンディ建築の傑作で、かつてはキャンディ王が外交使節を迎えた場所です。1815年にイギリスとの条約が締結された歴史的な場所でもあります。仏歯寺のチケットで入場可能です。",
  },
];

// レストラン（表形式）
const restaurants = [
  {
    name: "The Empire Café",
    type: "スリランカ料理・洋食",
    rating: "4.3",
    feature: "キャンディ湖畔に位置するおしゃれなカフェ。スリランカ料理からサンドイッチ・パスタまで幅広いメニュー。湖を眺めながらの食事が楽しめる絶好のロケーション。",
  },
  {
    name: "Kandy Muslim Hotel",
    type: "スリランカ料理（ハラール）",
    rating: "4.2",
    feature: "地元で長年愛されるローカルレストラン。本格的なスリランカカレーとライス＆カリーが格安で楽しめる。地元民御用達の味を体験したい方に最適。",
  },
  {
    name: "Slightly Chilled",
    type: "インターナショナル・スリランカ料理",
    rating: "4.4",
    feature: "キャンディ中心部の人気レストラン。スリランカ料理と西洋料理を融合させたメニューが充実。旅行者に人気が高く、コスパも良い。",
  },
  {
    name: "The Pub Kandy",
    type: "洋食・バー",
    rating: "4.0",
    feature: "キャンディ市内のバー兼レストラン。ビールやカクテルと共に軽食を楽しめる。観光後のリラックスタイムに最適。",
  },
];

// 周辺観光地（H3 + 写真）
const nearbyAttractions = [
  {
    name: "ペラデニヤ王立植物園",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_botanical_garden-9ke4ABhDSDMmWdFWxvRaUP.webp",
    distance: "キャンディから約5km（車で約15分）",
    badge: "植物園",
    desc: "1821年に設立されたスリランカ最大の植物園。147ヘクタールの広大な敷地に4,000種以上の植物が植えられており、ヤシの並木道・ジャイアントバンブー・熱帯の花々が見事です。スリランカ大統領の公式植物園でもあり、各国首脳が植樹した記念樹も見どころです。",
  },
  {
    name: "ピンナワラ象の孤児院",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_pinnawala_elephants-j76jqoS3fAQgWh5TdRgdsH.webp",
    distance: "キャンディから約35km（車で約1時間）",
    badge: "動物保護施設",
    desc: "孤児や負傷したゾウを保護・育成する施設。現在80頭以上のゾウが暮らしており、毎日2回（10時・14時）のマハ・オヤ川での水浴びタイムが最大の見どころです。子ゾウへのミルクやり体験（有料）も人気。スリランカ観光の定番スポットです。",
  },
  {
    name: "キャンディアン・ダンスショー",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_cultural_show-4YTevsazGAAqKfXcNGmTKf.webp",
    distance: "キャンディ市内（複数の会場）",
    badge: "文化体験",
    desc: "毎晩開催されるキャンディ伝統舞踊のショー。精巧な衣装をまとったダンサーによるキャンディアン・ダンス、ファイアーダンス、太鼓演奏などが楽しめます。代表的な会場はバワ・ラカ・マンダラヤ（YMBA）やキャンディ・アーツ・センターです。所要約1時間。",
  },
  {
    name: "ヌワラエリヤ（紅茶の産地）",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_tea_plantation-VJNpsokH8P4U7XBNXEBwo6.webp",
    distance: "キャンディから約75km（車で約2〜3時間）",
    badge: "世界的茶産地",
    desc: "「セイロンティーの故郷」として知られるスリランカ最大の紅茶産地。緑の絨毯のように広がる茶畑と霧に包まれた山岳風景が絶景です。茶工場見学でセイロンティーの製造工程を学び、試飲も楽しめます。キャンディからの日帰り観光に最適なスポットです。",
  },
];

// ホテル（表形式）
const hotels = [
  {
    name: "The Earl's Regency",
    category: "ラグジュアリー",
    price: "¥¥¥¥",
    access: "キャンディ市内から約7km",
    desc: "丘の上に建つ高級リゾートホテル。緑豊かな山並みを望むインフィニティプールと伝統的なキャンディ建築が融合した優雅な空間。スパ・レストランも充実。",
    highlight: true,
  },
  {
    name: "Cinnamon Citadel Kandy",
    category: "ラグジュアリー",
    price: "¥¥¥¥",
    access: "キャンディ市内から約3km",
    desc: "マハウェリ川沿いに建つ5つ星ホテル。川と山の絶景を望む客室、プール、複数のレストランを完備。キャンディ観光の拠点として最適。",
    highlight: false,
  },
  {
    name: "Hotel Suisse",
    category: "ミドルレンジ",
    price: "¥¥¥",
    access: "キャンディ湖畔・仏歯寺から徒歩圏内",
    desc: "1895年創業の歴史あるコロニアルホテル。キャンディ湖を望む絶好のロケーション。伝統的な雰囲気と快適な設備を兼ね備えたクラシックホテル。",
    highlight: false,
  },
  {
    name: "OZO Kandy",
    category: "ミドルレンジ",
    price: "¥¥",
    access: "キャンディ市内中心部",
    desc: "モダンなデザインのブティックホテル。仏歯寺まで徒歩圏内の好立地。スタイリッシュな客室とルーフトップバーが人気。",
    highlight: false,
  },
  {
    name: "McLeod Inn",
    category: "バジェット〜ミドル",
    price: "¥〜¥¥",
    access: "キャンディ市内・仏歯寺から徒歩圏内",
    desc: "コスパ重視の旅行者に人気のゲストハウス。清潔な客室と親切なスタッフが好評。仏歯寺まで徒歩数分の便利な立地。",
    highlight: false,
  },
  {
    name: "Thilanka Hotel",
    category: "ミドルレンジ",
    price: "¥¥",
    access: "キャンディ湖畔",
    desc: "キャンディ湖を一望できる客室が人気のホテル。プールあり。仏歯寺まで徒歩圏内で観光に便利。家族連れにも対応。",
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
      "name": "キャンディ仏歯寺への行き方は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "キャンディ仏歯寺へはタクシーチャーターが最もおすすめです。コロンボから約3〜4時間で到着します。公共交通機関（バス・鉄道）でもアクセスできますが、荷物が多い場合や複数の観光地を効率よく回りたい場合はタクシーチャーターが便利です。SLTCSの日本語対応タクシーチャーターなら、ホテルから仏歯寺まで直接送迎します。"
      }
    },
    {
      "@type": "Question",
      "name": "キャンディ仏歯寺の入場料はいくらですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "キャンディ仏歯寺の外国人向け入場料は約USD 15（約2,200円）です。SLTCSのシルバープラン以上では、ドライバーが自己負担で同行し、法要の時間や参拝作法、各見どころを日本語で解説します。"
      }
    },
    {
      "@type": "Question",
      "name": "キャンディ仏歯寺の法要（プージャ）の時間は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "キャンディ仏歯寺の法要（プージャ）は1日3回行われます。早朝プージャ（5:30〜7:00）、昼プージャ（9:30〜11:00）、夕方プージャ（18:30〜20:00）です。法要の時間帯は多くの信者が参拝に訪れ、太鼓の音が響く荘厳な雰囲気を体験できます。"
      }
    },
    {
      "@type": "Question",
      "name": "キャンディ周辺のおすすめホテルは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "キャンディ周辺のおすすめホテルは、丘の上の高級リゾートThe Earl's Regency（ラグジュアリー）、川沿いの5つ星Cinnamon Citadel Kandy（ラグジュアリー）、湖畔の歴史あるHotel Suisse（ミドルレンジ）などがあります。仏歯寺まで徒歩圏内のホテルも多く便利です。"
      }
    }
  ]
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "キャンディ仏歯寺の見所とは？行き方や周辺のホテルやレストランを含めて徹底解説！",
  "description": "キャンディ仏歯寺への行き方（タクシーチャーター・バス・鉄道の比較）、見どころ5選、周辺レストラン、観光地、おすすめホテルを徹底解説。日本語対応タクシーチャーターSLTCSのご利用がおすすめです。",
  "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_tooth_relic_temple_hero-H5KPCu2wFYrgvuf3d6Q945.webp",
  "author": { "@type": "Organization", "name": "SLTCS スリランカタクシーチャーターサービス" },
  "publisher": {
    "@type": "Organization",
    "name": "SLTCS スリランカタクシーチャーターサービス",
    "url": "https://sltcs.srilanka-charter.com"
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sltcs.srilanka-charter.com/kandy" },
  "keywords": "キャンディ 仏歯寺 行き方, キャンディ アクセス, キャンディ タクシー, キャンディ 観光, スリランカ 世界遺産, キャンディ ホテル, キャンディ レストラン, 仏歯寺 入場料"
};

export default function KandyPage() {
  useEffect(() => {
    // SEO: titleタグ — ターゲットキーワード「キャンディ 仏歯寺 行き方」を前方に配置
    document.title = "キャンディ仏歯寺の行き方・見どころ完全ガイド｜タクシーチャーターで快適アクセス【SLTCS】";

    // SEO: descriptionタグ — 155文字以内でキーワードを自然に含める
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "キャンディ仏歯寺への行き方を徹底解説。コロンボからタクシーチャーター（約3〜4時間）・バス・鉄道を比較。日本語対応SLTCSなら直行でアクセス可能。見どころ・周辺レストラン・ホテルも網羅。");
    }

    // SEO: OGP
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "キャンディ仏歯寺の行き方・見どころ完全ガイド｜SLTCS");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "キャンディ仏歯寺への行き方を徹底解説。タクシーチャーター・バス・鉄道を比較。日本語対応SLTCSで快適アクセス。見どころ・レストラン・ホテルも網羅。");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://sltcs.srilanka-charter.com/kandy");
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/kandy_tooth_relic_temple_hero-H5KPCu2wFYrgvuf3d6Q945.webp");

    // SEO: canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sltcs.srilanka-charter.com/kandy";

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
        <img src={HERO_IMG} alt="キャンディ仏歯寺 スリランカ世界遺産" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">世界遺産</span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg max-w-4xl">
            キャンディ仏歯寺の行き方・見どころ<br className="hidden md:block" />
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
          <span className="text-gray-700 font-medium">キャンディ仏歯寺</span>
        </nav>

        {/* 目次 */}
        <nav aria-label="目次" className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <p className="font-bold text-amber-800 mb-3 text-sm tracking-wide uppercase">目次</p>
          <ol className="space-y-1 text-sm text-amber-700 list-decimal list-inside">
            <li><a href="#access" className="hover:underline">キャンディ仏歯寺への行き方（アクセス方法比較）</a></li>
            <li><a href="#highlights" className="hover:underline">キャンディ仏歯寺の見どころ5選</a></li>
            <li><a href="#restaurants" className="hover:underline">周辺のランチに便利なレストラン</a></li>
            <li><a href="#attractions" className="hover:underline">キャンディ周辺の観光地</a></li>
            <li><a href="#hotels" className="hover:underline">キャンディのおすすめホテル</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        {/* イントロ */}
        <p className="text-gray-700 leading-relaxed text-lg mb-10">
          スリランカ中部の高原都市キャンディに鎮座する「仏歯寺（スリー・ダラダー・マーリガーワ）」は、釈迦の歯を祀る世界で最も重要な仏教聖地のひとつです。ユネスコ世界遺産「キャンディの聖地」の中核を成すこの寺院は、スリランカ仏教の精神的象徴として、今も世界中の巡礼者と観光客を惹きつけています。本記事では<strong>キャンディ仏歯寺への行き方</strong>から見どころ、周辺グルメ・観光地・ホテルまで徹底解説します。
        </p>

        {/* ① 行き方（SEO最重要セクション） */}
        <section id="access" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-2">
            キャンディ仏歯寺への行き方・アクセス方法
          </h2>
          <p className="text-gray-500 text-sm mb-6">コロンボ・空港・シーギリヤからのアクセスを徹底比較</p>

          <p className="text-gray-700 leading-relaxed mb-6">
            キャンディはコロンボから約115km内陸の高原に位置しています。主な移動手段は以下の4つです。<strong>公共交通機関（バス・鉄道）でもアクセス可能</strong>ですが、荷物が多い場合や複数の観光地を効率よく回りたい場合はタクシーチャーターが圧倒的に便利です。
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
                  <td className="px-4 py-3">約3〜4時間</td>
                  <td className="px-4 py-3">1台 約15,000円〜</td>
                  <td className="px-4 py-3">◎ ドアツードア</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3">鉄道（コロンボ発）</td>
                  <td className="px-4 py-3">約2.5〜3時間</td>
                  <td className="px-4 py-3">数百円〜</td>
                  <td className="px-4 py-3">○ 景色が良い</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3">バス（コロンボ発）</td>
                  <td className="px-4 py-3">約3〜4時間</td>
                  <td className="px-4 py-3">数百円〜</td>
                  <td className="px-4 py-3">△ 混雑・荷物不便</td>
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

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-blue-700 mb-2">💡 鉄道でのアクセスについて</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              コロンボ・フォート駅からキャンディ駅まで鉄道が運行しており、景色を楽しみながら移動できます。ただし、鉄道はキャンディ市内の仏歯寺まで直接行けないため、駅からトゥクトゥクやタクシーへの乗り換えが必要です。また、スーツケースなど大きな荷物がある場合は不便です。複数の観光地を1日で回りたい場合は、タクシーチャーターが効率的です。
            </p>
          </div>

          <img src={TAXI_IMG} alt="キャンディへのタクシーチャーター SLTCS スリランカ" className="w-full rounded-2xl mb-8 shadow-lg" />

          <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-6 text-white mb-6">
            <p className="font-bold text-xl mb-3">✅ SLTCSのタクシーチャーターがおすすめ！</p>
            <p className="text-green-100 leading-relaxed mb-4">
              SLTCSは日本語対応の政府公認タクシーチャーターサービスです。ホテルまでお迎えに上がり、仏歯寺まで直接お連れします。途中でペラデニヤ植物園やピンナワラ象の孤児院などに立ち寄ることも自由自在。複数人でのご利用なら一人あたりの費用も大幅に抑えられます。
            </p>
            <ul className="text-green-100 text-sm space-y-1 mb-5">
              <li>✓ 日本語対応ドライバー</li>
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
            キャンディ仏歯寺の見どころ5選
          </h2>

          {/* シルバープラン以上の説明 */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-6 text-white mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">SLTCS シルバープラン以上</span>
              <span className="text-amber-300 font-bold text-sm">特別サービス</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">ドライバーが仏歯寺に一緒に入場し、各スポットを日本語で解説します</h3>
            <p className="text-white/85 text-sm leading-relaxed mb-3">
              SLTCSのシルバープラン以上をご利用のお客様には、担当ドライバーが仏歯寺の入場料を自己負担で同行し、奉安室・法要の意味・建築様式・歴史的背景など各見どころを日本語で詳しく解説するサービスをご提供しています。
            </p>
            <p className="text-white/85 text-sm leading-relaxed mb-4">
              法要（プージャ）の時間に合わせた訪問スケジュールの調整や、参拝作法のアドバイスも受けられます。初めてのキャンディ訪問をより深く、より楽しく体験していただけます。ブロンズプランはドライバーが外でお待ちします。
            </p>
            <Link href="/">
              <button className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-5 py-2 rounded-lg text-sm transition-colors">
                シルバープランの詳細を見る →
              </button>
            </Link>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            キャンディ仏歯寺は単なる「お寺」ではありません。スリランカ仏教の最高聖地として、境内には見どころが満載です。
          </p>

          <div className="space-y-12">
            {highlights.map((spot, index) => (
              <div key={spot.id} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 items-start`}>
                <div className="w-full lg:w-1/2">
                  <img
                    src={spot.image}
                    alt={`キャンディ仏歯寺 ${spot.title}`}
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
            キャンディ仏歯寺周辺のランチに便利なレストラン
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            キャンディ市内には、本格スリランカ料理のローカル食堂から観光客向けのカフェ・レストランまで幅広い選択肢があります。仏歯寺観光の後は、湖畔のカフェでゆっくり食事を楽しむのがおすすめです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left whitespace-nowrap">店名</th>
                  <th className="px-4 py-3 text-left whitespace-nowrap">料理の種類</th>
                  <th className="px-4 py-3 text-center whitespace-nowrap">TripAdvisor評価</th>
                  <th className="px-4 py-3 text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((r, i) => (
                  <tr key={i} className={`border-b ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{r.name}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{r.type}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-xs">
                        ★ {r.rating}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs leading-relaxed">{r.feature}</td>
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
            キャンディ周辺の観光地
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            キャンディはスリランカ中部観光の拠点として最適な都市です。タクシーチャーターを利用すれば、1日で複数の観光地を効率よく巡ることができます。
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
            キャンディのおすすめホテル
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            キャンディには、湖畔の歴史的ホテルから丘の上の高級リゾートまで、個性豊かなホテルが揃っています。仏歯寺での早朝法要（プージャ）を体験したいなら、現地泊がおすすめです。
          </p>

          {/* The Earl's Regencyの写真（表の上に掲載） */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={HOTEL_IMG}
              alt="The Earl's Regency キャンディ ホテル スリランカ"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-bold">The Earl's Regency（アールズ・リージェンシー）</p>
              <p className="text-white/80 text-xs">丘の上の高級リゾートホテル｜キャンディ市内から約7km</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left whitespace-nowrap">ホテル名</th>
                  <th className="px-4 py-3 text-center whitespace-nowrap">カテゴリ</th>
                  <th className="px-4 py-3 text-center whitespace-nowrap">料金目安</th>
                  <th className="px-4 py-3 text-left whitespace-nowrap">アクセス</th>
                  <th className="px-4 py-3 text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((h, i) => (
                  <tr key={i} className={`border-b ${h.highlight ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {h.highlight && <span className="block text-xs text-amber-600 font-bold mb-0.5">★ イチオシ</span>}
                      <span className="font-semibold text-gray-900">{h.name}</span>
                    </td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{h.category}</span>
                    </td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">{h.price}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">{h.access}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs leading-relaxed">{h.desc}</td>
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
                q: "キャンディ仏歯寺への行き方は？",
                a: "キャンディ仏歯寺へはタクシーチャーターが最もおすすめです。コロンボから約3〜4時間で到着します。公共交通機関（バス・鉄道）でもアクセスできますが、荷物が多い場合や複数の観光地を効率よく回りたい場合はタクシーチャーターが便利です。SLTCSの日本語対応タクシーチャーターなら、ホテルから仏歯寺まで直接送迎します。"
              },
              {
                q: "キャンディ仏歯寺の入場料はいくらですか？",
                a: "キャンディ仏歯寺の外国人向け入場料は約USD 15（約2,200円）です。SLTCSのシルバープラン以上では、ドライバーが自己負担で同行し、法要の時間や参拝作法、各見どころを日本語で解説します。"
              },
              {
                q: "キャンディ仏歯寺の法要（プージャ）の時間は？",
                a: "キャンディ仏歯寺の法要（プージャ）は1日3回行われます。早朝プージャ（5:30〜7:00）、昼プージャ（9:30〜11:00）、夕方プージャ（18:30〜20:00）です。法要の時間帯は多くの信者が参拝に訪れ、太鼓の音が響く荘厳な雰囲気を体験できます。"
              },
              {
                q: "キャンディ周辺のおすすめホテルは？",
                a: "キャンディ周辺のおすすめホテルは、丘の上の高級リゾートThe Earl's Regency（ラグジュアリー）、川沿いの5つ星Cinnamon Citadel Kandy（ラグジュアリー）、湖畔の歴史あるHotel Suisse（ミドルレンジ）などがあります。仏歯寺まで徒歩圏内のホテルも多く便利です。"
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
          <h2 className="text-2xl font-bold mb-3">キャンディ仏歯寺をSLTCSで快適に！</h2>
          <p className="text-green-100 leading-relaxed mb-6 max-w-xl mx-auto">
            日本語対応の政府公認ドライバーが、キャンディへの移動から観光ガイドまでサポートします。シルバープラン以上では一緒に仏歯寺に入場し、各スポットを丁寧に解説します。まずはお気軽にご相談ください。
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
