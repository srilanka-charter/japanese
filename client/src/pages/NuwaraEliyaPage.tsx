import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_hero-cUD77pa9iMkhZSpVEdQUpX.webp";
const TAXI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_taxi_charter-QT5DS6tZcSfabG2KVMSZ6N.webp";
const HOTEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_hotel_heritance-MJP4frYvWSZbKj4Aw4ZaSY.webp";

const highlights = [
  {
    name: "ペドロ茶園（Pedro Tea Estate）",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_pedro_tea_estate-Aw4PogFYbgxbkybfZqddUn.webp",
    desc: "ヌワラエリヤを代表する老舗茶園で、1885年創業の歴史ある紅茶工場を見学できます。広大な茶畑の中を歩きながら、茶摘みの実演を見学し、工場内での製茶工程（萎凋・揉捻・発酵・乾燥）を間近で体験できます。見学後は試飲コーナーで採れたての高品質セイロンティーを楽しめます。標高1,800m以上の高地で栽培されるヌワラエリヤ産の紅茶は、清涼感のある香りと軽い渋みが特徴で、世界的に高い評価を受けています。",
    time: "所要時間：約1〜1.5時間",
    fee: "入場料：約USD 3〜5",
  },
  {
    name: "グレゴリー湖（Lake Gregory）",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_gregory_lake-iMsNPFiYYoEFQaCGYo2qzh.webp",
    desc: "イギリス植民地時代の1873年に造られた人工湖で、ヌワラエリヤ市街地に隣接しています。湖畔には遊歩道が整備されており、スワンボートやモーターボートのレンタルも楽しめます。周囲の緑の丘と湖面の反射が美しく、早朝の霧が立ち込める時間帯は特に幻想的な雰囲気を醸し出します。湖畔のカフェでセイロンティーを飲みながら景色を楽しむのがおすすめです。",
    time: "所要時間：約1〜2時間",
    fee: "入場料：無料（ボートは有料）",
  },
  {
    name: "エッラ〜ヌワラエリヤ 高原列車",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_train_ella-Y3vannLMwdJL9wmfVcm2zh.webp",
    desc: "スリランカ屈指の絶景鉄道路線で、ナインアーチブリッジを渡る青い列車の光景は世界中の旅行者を魅了しています。エッラからナヌオヤ（ヌワラエリヤの最寄り駅）まで約3時間の車窓には、茶畑・滝・霧の山岳風景が続きます。1等観光車両（Observation Car）の窓から身を乗り出して撮影するのが定番です。SLTCSのタクシーチャーターを利用すれば、列車の出発駅まで送迎し、到着後の観光もスムーズに手配できます。",
    time: "所要時間：約3〜4時間（エッラ〜ナヌオヤ）",
    fee: "列車料金：1等約USD 10〜15",
  },
  {
    name: "ホートンプレインズ国立公園（Horton Plains）",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_horton_plains-7MgX5PgJuJhRxreTmFscGN.webp",
    desc: "標高2,100〜2,300mに広がるユネスコ世界遺産の国立公園で、スリランカ最大の断崖「ワールズエンド（World's End）」が最大の見どころです。晴れた日には断崖から880mの垂直の崖下に広がる熱帯雨林と、遠くインド洋まで見渡せます。早朝（6〜9時）が霧のかかりにくいベストタイムです。ベーカーズフォールズという美しい滝も公園内にあり、約9kmのトレッキングコースで両方を巡れます。",
    time: "所要時間：約4〜5時間（トレッキング含む）",
    fee: "入場料：外国人約USD 25",
  },
  {
    name: "ヴィクトリア公園（Victoria Park）",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_victoria_park-4gEc3BCUcVKdsyEtR6h7Jw.webp",
    desc: "1897年にヴィクトリア女王即位60周年を記念して造られたコロニアル様式の公園で、ヌワラエリヤ市街地の中心に位置します。バラ・デイジー・マリーゴールドなど色とりどりの花が咲き誇り、4月（アヴルッダ祭）と8月（花の季節）が特に美しい時期です。スリランカ固有の野鳥も多く生息しており、バードウォッチングの名所としても知られています。家族連れにも人気の憩いの場です。",
    time: "所要時間：約1〜1.5時間",
    fee: "入場料：約LKR 200（外国人）",
  },
];

const nearbySpots = [
  {
    name: "エッラ（Ella）",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_ella_rock-kwDLwiPJfF74UX7VC6grph.webp",
    dist: "約50km（車で約1.5時間）",
    desc: "ナインアーチブリッジ・エッラロック・リトルアダムズピークなど絶景スポットが集中するバックパッカーの聖地。ヌワラエリヤからの日帰り観光に最適。",
  },
  {
    name: "ランボダ滝（Ramboda Falls）",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_ramboda_falls-7QuqU8rchnVr47jHbnVpyH.webp",
    dist: "約20km（車で約40分）",
    desc: "高さ109mを誇るスリランカ第11位の滝。コロンボ〜ヌワラエリヤ間の幹線道路沿いにあり、移動途中に立ち寄れる絶景スポット。",
  },
  {
    name: "ハクガラ植物園（Hakgala Botanical Gardens）",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_hakgala_garden-n553PRpLxeyjidD7uNzxmv.webp",
    dist: "約10km（車で約20分）",
    desc: "標高1,745mに位置するコロニアル時代の植物園。バラ園・シダ植物・蘭の温室が見どころ。ヒンドゥー教の聖地シータ・アンマン寺院も隣接。",
  },
  {
    name: "アダムスピーク（Sri Pada）",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/nuwara_eliya_adam_peak-SrLPhyBQG9tXXtnaxPok7R.webp",
    dist: "約65km（車で約2時間）",
    desc: "仏教・ヒンドゥー教・キリスト教・イスラム教の4宗教の聖地。標高2,243mの山頂にある「仏陀の足跡」を目指す深夜登山は一生の思い出に。",
  },
];

const restaurants = [
  { name: "Grand Hotel Restaurant", type: "コンチネンタル・スリランカ料理", rating: "4.2", price: "$$", desc: "1891年創業の格式あるグランドホテル内のレストラン。英国植民地時代の雰囲気の中でアフタヌーンティーを楽しめる。" },
  { name: "Milano Restaurant", type: "スリランカ料理・ライスアンドカリー", rating: "4.4", price: "$", desc: "地元民にも人気のカジュアルレストラン。本格的なスリランカカレーとコットゥロティが絶品。リーズナブルな価格で満足度高い。" },
  { name: "Pastry Shop at Grand Hotel", type: "カフェ・ベーカリー", rating: "4.3", price: "$", desc: "グランドホテル内のカフェ。高原の涼しい気候の中でセイロンティーとケーキを楽しめる。観光の合間の休憩に最適。" },
  { name: "The Hill Club", type: "コンチネンタル料理（ドレスコードあり）", rating: "4.1", price: "$$$", desc: "1876年創立の英国式クラブ。ジャケット着用必須のフォーマルなディナーは特別な体験。スリランカで最も英国的な空間。" },
  { name: "De Silva Food Centre", type: "スリランカ料理・ストリートフード", rating: "4.5", price: "$", desc: "地元民御用達の食堂。ホッパー・ストリングホッパー・サンボルなど本場の朝食を格安で楽しめる。" },
];

const hotels = [
  { name: "Heritance Tea Factory", cat: "高級（5星）", price: "USD 200〜400/泊", dist: "市街から約10km", desc: "廃工場を改装したユニークな高級ホテル。茶畑に囲まれた絶景と歴史的な雰囲気が魅力。スパ・プール完備。" },
  { name: "Grand Hotel Nuwara Eliya", cat: "高級（4星）", price: "USD 100〜200/泊", dist: "市街中心部", desc: "1891年創業の老舗コロニアルホテル。英国調の内装と広大な庭園が特徴。ヌワラエリヤ観光の拠点として最適。" },
  { name: "The Hill Club", cat: "ブティック（4星）", price: "USD 80〜150/泊", dist: "市街中心部", desc: "1876年創立の英国式クラブをホテルとして開放。歴史的な建物と英国式サービスが体験できる唯一無二の宿泊施設。" },
  { name: "Araliya Green Hills Hotel", cat: "中級（3星）", price: "USD 50〜100/泊", dist: "市街から約2km", desc: "グレゴリー湖を見下ろす丘の上に建つホテル。眺望が素晴らしく、コストパフォーマンスが高い。家族連れにも人気。" },
  { name: "Jetwing St. Andrew's", cat: "高級（4星）", price: "USD 120〜220/泊", dist: "市街中心部", desc: "スコットランドの聖アンドリュース教会にちなんで建てられたコロニアルホテル。ゴルフコースに隣接し、英国式の優雅な滞在が楽しめる。" },
];

const faqs = [
  {
    q: "ヌワラエリヤへの行き方は？コロンボからどのくらいかかりますか？",
    a: "コロンボからヌワラエリヤまでは約180km、車で約5〜6時間です。公共バスや列車（キャンディ経由）でも行けますが、荷物が多い場合や時間を有効活用したい場合はタクシーチャーターが最も快適です。SLTCSのタクシーチャーターなら、コロンボのホテルから直接ヌワラエリヤまで送迎します。途中ランボダ滝などに立ち寄ることも可能です。"
  },
  {
    q: "ヌワラエリヤの気候・服装は？",
    a: "ヌワラエリヤは標高約1,868mの高原都市で、スリランカの中で最も涼しい場所です。年間平均気温は約16℃で、夜間は10℃以下になることもあります。訪問時期を問わず、長袖・薄手のジャケット・カーディガンなどの防寒着を必ず持参してください。特に12〜2月は最も寒い時期で、ダウンジャケットが必要な場合もあります。"
  },
  {
    q: "ホートンプレインズ国立公園への行き方は？",
    a: "ホートンプレインズ国立公園はヌワラエリヤ市街から約32km、車で約1時間です。公共交通機関のアクセスが不便なため、タクシーチャーターの利用が一般的です。SLTCSのタクシーチャーターなら、ヌワラエリヤのホテルからホートンプレインズまで送迎し、トレッキング中は公園入口で待機します。早朝出発（6時頃）が霧が少なく、ワールズエンドの絶景を楽しめるためおすすめです。"
  },
  {
    q: "紅茶工場見学はどこがおすすめですか？",
    a: "ヌワラエリヤ周辺には複数の紅茶工場があり、ペドロ茶園（Pedro Tea Estate）とマッケウッズ茶園（Mackwoods Labookellie）が特に観光客に人気です。どちらも無料または低料金で工場見学と試飲ができます。SLTCSのシルバープラン以上では、ドライバーが各茶園の特徴や製茶工程を詳しく解説します。日本語ドライバーを選択していれば日本語での説明を受けることができます。"
  },
  {
    q: "ヌワラエリヤからエッラへの移動方法は？",
    a: "ヌワラエリヤからエッラへは、高原列車（ナヌオヤ駅からエッラ駅まで約3時間）が最も人気のある移動手段です。世界で最も美しい鉄道路線の一つとして知られており、ナインアーチブリッジを渡る絶景が楽しめます。SLTCSのタクシーチャーターを利用すれば、ナヌオヤ駅まで送迎し、エッラ到着後の観光もスムーズに手配できます。"
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "ヌワラエリヤ高原の観光ガイド｜紅茶畑・高原列車・ホートンプレインズへの行き方",
      "description": "スリランカの高原都市ヌワラエリヤへの行き方・見どころ・おすすめホテル・レストランを徹底解説。タクシーチャーターで快適にアクセスする方法も紹介。",
      "image": HERO_IMG,
      "author": { "@type": "Organization", "name": "SLTCS" },
      "publisher": { "@type": "Organization", "name": "SLTCS スリランカタクシーチャーターサービス" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sltcs.srilanka-charter.com/nuwara-eliya" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://sltcs.srilanka-charter.com/" },
        { "@type": "ListItem", "position": 2, "name": "観光スポット", "item": "https://sltcs.srilanka-charter.com/#destinations" },
        { "@type": "ListItem", "position": 3, "name": "ヌワラエリヤ高原", "item": "https://sltcs.srilanka-charter.com/nuwara-eliya" }
      ]
    }
  ]
};

export default function NuwaraEliyaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useSEO({
    title: "ヌワラエリヤ高原の観光ガイド｜紅茶畑・高原列車・ホートンプレインズへの行き方【SLTCS】",
    description: "スリランカの高原都市ヌワラエリヤへの行き方・見どころ・おすすめホテル・レストランを徹底解説。コロンボからタクシーチャーターで快適にアクセスする方法も紹介。",
    path: "/nuwara-eliya",
    ogImage: HERO_IMG,
    jsonLdList: [structuredData],
    jsonLdIdPrefix: "nuwara-eliya",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accessRows = [
    { method: "タクシーチャーター（SLTCS）", time: "約5〜6時間", price: "USD 80〜120", desc: "ホテルから直接送迎。途中の観光地（ランボダ滝・茶園）に自由に立ち寄り可能。荷物の多い方・グループ旅行に最適。" },
    { method: "公共バス", time: "約6〜7時間", price: "USD 2〜5", desc: "コロンボのバスターミナルから出発。乗り換えが必要な場合あり。荷物が多いと不便。" },
    { method: "列車（キャンディ経由）", time: "約6〜8時間", price: "USD 5〜15", desc: "キャンディで乗り換えてナヌオヤ駅まで。高原列車の車窓は絶景だが時間がかかる。" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMG} alt="ヌワラエリヤ高原の茶畑と街並み" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="inline-block bg-emerald-600/80 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wider">
            NUWARA ELIYA
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ヌワラエリヤ高原
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl drop-shadow">
            スリランカのリトルイングランド｜標高1,868mの高原に広がる茶畑と霧の絶景
          </p>
          <div className="flex flex-wrap gap-3 mt-5 justify-center">
            <a href="#access" className="bg-white/20 backdrop-blur-sm border border-white/40 text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition">
              行き方を見る
            </a>
            <a href="#highlights" className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-700 transition">
              見どころを見る
            </a>
          </div>
        </div>
      </section>

      {/* パンくずリスト */}
      <nav className="bg-gray-50 border-b border-gray-200 px-4 py-2 text-sm text-gray-500">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-emerald-600">ホーム</Link>
          <span>/</span>
          <a href="/#destinations" className="hover:text-emerald-600">観光スポット</a>
          <span>/</span>
          <span className="text-gray-800 font-medium">ヌワラエリヤ高原</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* 目次 */}
        <nav className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-emerald-800 mb-3 text-sm">📋 この記事の目次</p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-emerald-700">
            <li><a href="#overview" className="hover:underline">ヌワラエリヤとは？基本情報</a></li>
            <li><a href="#access" className="hover:underline">行き方・アクセス方法の比較</a></li>
            <li><a href="#highlights" className="hover:underline">見どころ5選</a></li>
            <li><a href="#restaurants" className="hover:underline">おすすめレストラン</a></li>
            <li><a href="#nearby" className="hover:underline">周辺の観光スポット</a></li>
            <li><a href="#hotels" className="hover:underline">おすすめホテル</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        {/* 概要 */}
        <section id="overview" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-emerald-500" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ヌワラエリヤとは？基本情報
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ヌワラエリヤ（Nuwara Eliya）は、スリランカ中央高地に位置する標高約1,868mの高原都市です。「光の都市」を意味するシンハラ語の地名を持ち、スリランカで最も涼しい場所として知られています。年間平均気温は約16℃と、熱帯の島国スリランカにあって別世界のような気候が楽しめます。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            19世紀のイギリス植民地時代に避暑地として開発されたため、英国式の建築物・ゴルフコース・競馬場・ローズガーデンなどが今も残り、「スリランカのリトルイングランド」と呼ばれています。周囲に広がる緑の茶畑は世界最高品質のセイロンティーの産地として名高く、茶園見学と試飲は必須の観光体験です。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: "標高", value: "約1,868m" },
              { label: "年間平均気温", value: "約16℃" },
              { label: "コロンボから", value: "約5〜6時間" },
              { label: "キャンディから", value: "約2〜3時間" },
            ].map(item => (
              <div key={item.label} className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                <div className="text-xs text-emerald-600 font-medium mb-1">{item.label}</div>
                <div className="text-lg font-bold text-[oklch(0.15_0.01_60)]">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* アクセス */}
        <section id="access" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-emerald-500" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            行き方・アクセス方法の比較
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            コロンボからヌワラエリヤへのアクセス方法は主に3つあります。それぞれの特徴を比較して、旅のスタイルに合った方法を選びましょう。
          </p>
          {/* テーブル: スマホでは横スクロール */}
          <div className="overflow-x-auto mb-8 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="min-w-[520px]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-emerald-700 text-white">
                    <th className="p-3 text-left font-semibold whitespace-nowrap">移動手段</th>
                    <th className="p-3 text-left font-semibold whitespace-nowrap">所要時間</th>
                    <th className="p-3 text-left font-semibold whitespace-nowrap">料金目安</th>
                    <th className="p-3 text-left font-semibold">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {accessRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border-b border-gray-200 font-medium text-gray-800 whitespace-nowrap">{row.method}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 whitespace-nowrap">{row.time}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 whitespace-nowrap">{row.price}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 min-w-[200px]">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SLTCSタクシーチャーター */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-2xl p-6 text-white mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">SLTCS シルバープラン以上</span>
              <span className="text-amber-300 font-bold text-sm">特別サービス</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">ドライバーが茶園・観光スポットに同行し、各スポットを詳しく解説します</h3>
            <p className="text-white/85 text-sm leading-relaxed mb-3">
              SLTCSのシルバープラン以上をご利用のお客様には、担当ドライバーが茶園見学や観光スポットへの同行を含めて、ペドロ茶園の製茶工程・ホートンプレインズなど各見どころを詳しく解説するサービスをご提供しています。日本語ドライバーを選択していれば日本語での説明を受けることができます。
            </p>
            <p className="text-white/85 text-sm leading-relaxed mb-4">
              ランボダ滝・ハクガラ植物園など移動途中の観光地への立ち寄りスケジュールの調整も柔軟に対応します。ブロンズプランはドライバーが外でお待ちします。
            </p>
            <Link href="/plan">
              <button className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-5 py-2 rounded-lg text-sm transition-colors">
                シルバープランの詳細を見る →
              </button>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-3">SLTCSタクシーチャーターの特徴</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>コロンボ・キャンディ・シーギリヤなど<strong>スリランカ各地のホテルから直接送迎</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span><strong>日本語対応ドライバー選択可能</strong>（シルバープラン以上）が見どころを詳しく解説</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>ランボダ滝・茶園など<strong>途中の観光地に自由に立ち寄り可能</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>大型スーツケースも安心。<strong>荷物を気にせず快適に観光</strong>できる</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="/#contact"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                無料で相談する →
              </a>
            </div>
          </div>
        </section>

        {/* 見どころ */}
        <section id="highlights" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-emerald-500" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            ヌワラエリヤの見どころ5選
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            高原の涼しい気候の中、茶畑・湖・国立公園・植物園など多彩な見どころが集まっています。1泊2日以上の滞在がおすすめです。
          </p>
          <div className="space-y-10">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 flex-shrink-0">
                    <img src={h.img} alt={h.name} className="w-full h-56 md:h-full object-cover" />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded">見どころ {i + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[oklch(0.15_0.01_60)] mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        {h.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{h.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">⏱ {h.time}</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">🎫 {h.fee}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* レストラン */}
        <section id="restaurants" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-emerald-500" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            おすすめレストラン
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            ヌワラエリヤでは英国コロニアル料理からスリランカ本格カレーまで、多彩なグルメが楽しめます。
          </p>
          {/* テーブル: スマホでは横スクロール */}
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <div className="min-w-[580px]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-emerald-700 text-white">
                    <th className="p-3 text-left font-semibold whitespace-nowrap">店名</th>
                    <th className="p-3 text-left font-semibold whitespace-nowrap">料理の種類</th>
                    <th className="p-3 text-left font-semibold whitespace-nowrap">評価</th>
                    <th className="p-3 text-left font-semibold whitespace-nowrap">価格帯</th>
                    <th className="p-3 text-left font-semibold">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {restaurants.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border-b border-gray-200 font-medium text-gray-800 whitespace-nowrap">{r.name}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 whitespace-nowrap">{r.type}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 whitespace-nowrap">⭐ {r.rating}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 whitespace-nowrap">{r.price}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 min-w-[180px]">{r.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">※ 評価はTripAdvisor参考値。価格帯：$＝～usd 5、$$＝usd 5～15、$$$＝usd 15～</p>
        </section>

        {/* 周辺観光地 */}
        <section id="nearby" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-emerald-500" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            周辺の観光スポット
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            ヌワラエリヤを拠点に、周辺の絶景スポットへの日帰り観光も可能です。タクシーチャーターなら効率よく複数のスポットを巡れます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nearbySpots.map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-[oklch(0.15_0.01_60)] mb-1">{s.name}</h3>
                  <p className="text-xs text-emerald-600 font-medium mb-2">📍 {s.dist}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ホテル */}
        <section id="hotels" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-emerald-500" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            おすすめホテル
          </h2>
          <div className="bg-emerald-50 rounded-xl p-4 mb-6 border border-emerald-100">
            <img src={HOTEL_IMG} alt="Heritance Tea Factory" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-sm text-gray-600 leading-relaxed">
              ヌワラエリヤには英国植民地時代の歴史的建物を活かした高級ホテルから、コストパフォーマンスの高い中級ホテルまで揃っています。茶畑の中に建つ「Heritance Tea Factory」は廃工場を改装したユニークな高級ホテルとして特に人気です。
            </p>
          </div>
          {/* テーブル: スマホでは横スクロール */}
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <div className="min-w-[580px]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-emerald-700 text-white">
                    <th className="p-3 text-left font-semibold whitespace-nowrap">ホテル名</th>
                    <th className="p-3 text-left font-semibold whitespace-nowrap">カテゴリ</th>
                    <th className="p-3 text-left font-semibold whitespace-nowrap">料金目安</th>
                    <th className="p-3 text-left font-semibold whitespace-nowrap">距離</th>
                    <th className="p-3 text-left font-semibold">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {hotels.map((h, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border-b border-gray-200 font-medium text-gray-800 whitespace-nowrap">{h.name}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 whitespace-nowrap">{h.cat}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 whitespace-nowrap">{h.price}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 whitespace-nowrap">{h.dist}</td>
                      <td className="p-3 border-b border-gray-200 text-gray-600 min-w-[180px]">{h.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">※ 料金はシーズンにより変動します。</p>
        </section>

        {/* タクシーCTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-2xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-2/5">
                <img src={TAXI_IMG} alt="ヌワラエリヤへのタクシーチャーター" className="w-full h-52 md:h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 text-white md:w-3/5">
                <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  ヌワラエリヤへのタクシーチャーター
                </h2>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  政府公認ドライバーが、ヌワラエリヤへの移動から観光ガイドまでサポートします。シルバープラン以上では各スポットを詳しく解説。まずはお気軽にご相談ください。
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/#contact" className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                    無料で相談する →
                  </a>
                  <a href="/#plans" className="bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                    プランを見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.15_0.01_60)] mb-6 pb-2 border-b-2 border-emerald-500" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            よくある質問（FAQ）
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left p-4 flex items-start justify-between gap-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-800 text-sm leading-relaxed">Q. {faq.q}</span>
                  <span className="text-emerald-600 font-bold text-lg flex-shrink-0 mt-0.5">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 関連記事 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[oklch(0.15_0.01_60)] mb-4 pb-2 border-b border-gray-200" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            関連する観光スポット記事
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/sigiriya" className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-amber-100 h-24 flex items-center justify-center text-3xl">🏔️</div>
              <div className="p-3">
                <div className="text-xs text-amber-600 font-medium mb-1">世界遺産</div>
                <div className="font-bold text-sm text-gray-800">シーギリヤロック</div>
                <div className="text-xs text-gray-500 mt-1">天空の宮殿遺跡を登る</div>
              </div>
            </Link>
            <Link href="/kandy" className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-orange-100 h-24 flex items-center justify-center text-3xl">🛕</div>
              <div className="p-3">
                <div className="text-xs text-orange-600 font-medium mb-1">世界遺産</div>
                <div className="font-bold text-sm text-gray-800">キャンディ仏歯寺</div>
                <div className="text-xs text-gray-500 mt-1">スリランカ仏教の最高聖地</div>
              </div>
            </Link>
            <Link href="/galle" className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-blue-100 h-24 flex items-center justify-center text-3xl">🏰</div>
              <div className="p-3">
                <div className="text-xs text-blue-600 font-medium mb-1">世界遺産</div>
                <div className="font-bold text-sm text-gray-800">ゴール旧市街</div>
                <div className="text-xs text-gray-500 mt-1">オランダ植民地時代の要塞都市</div>
              </div>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
