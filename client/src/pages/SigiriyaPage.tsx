import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_rock_hero-WvSdEsM6SGKw7D3K9DXp8D.webp";
const FRESCO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_fresco-V8LDtRxvQT2TeSKRfRhptL.webp";
const LION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_lion_gate-KbCL6FNhc825CvYKfTcHDn.webp";
const TAXI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/sigiriya_taxi_charter-jbGez2ndeLZJLBsvWSRKhH.webp";

export default function SigiriyaPage() {
  useEffect(() => {
    document.title = "シーギリヤロックの見所とは？行き方や周辺のホテルやレストランを含めて徹底解説！｜SLTCS";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "シーギリヤロックの行き方・見どころ・周辺レストラン・観光地・おすすめホテルを徹底解説。公共交通機関は不便なためタクシーチャーター（SLTCS）がおすすめ。日本語対応の専用車で快適にアクセス。");
    }
    return () => {
      document.title = "スリランカタクシーチャーターならSLTCS｜日本語対応の専用車で自由に周遊";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMG} alt="シーギリヤロック" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">世界遺産</span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg max-w-4xl">
            シーギリヤロックの見所とは？<br className="hidden md:block" />
            行き方や周辺のホテルやレストランを<br className="hidden md:block" />
            含めて徹底解説！
          </h1>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* 目次 */}
        <nav className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <p className="font-bold text-amber-800 mb-3 text-sm tracking-wide uppercase">目次</p>
          <ol className="space-y-1 text-sm text-amber-700 list-decimal list-inside">
            <li><a href="#access" className="hover:underline">シーギリヤロックへの行き方</a></li>
            <li><a href="#highlights" className="hover:underline">シーギリヤロックの見どころ</a></li>
            <li><a href="#restaurants" className="hover:underline">周辺のランチに便利なレストラン</a></li>
            <li><a href="#attractions" className="hover:underline">シーギリヤロック周辺の観光地</a></li>
            <li><a href="#hotels" className="hover:underline">シーギリヤ地域のおすすめホテル</a></li>
          </ol>
        </nav>

        {/* イントロ */}
        <p className="text-gray-700 leading-relaxed text-lg mb-10">
          スリランカ中央部のジャングルにそびえる巨岩「シーギリヤロック（Sigiriya Rock）」は、標高約200mの断崖頂上に1500年以上前の宮殿遺跡が広がる、まさに"天空の宮殿"です。ユネスコ世界遺産にも登録されており、スリランカを訪れたなら絶対に外せない観光スポットです。本記事では行き方から見どころ、周辺グルメ・観光地・ホテルまで徹底解説します。
        </p>

        {/* ① 行き方 */}
        <section id="access" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-6">
            シーギリヤロックへの行き方
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            シーギリヤへのアクセスは、首都コロンボから約170km内陸に位置しています。主な移動手段は以下の4つです。
          </p>

          {/* 比較表 */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
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

          <img src={TAXI_IMG} alt="シーギリヤへのタクシーチャーター" className="w-full rounded-2xl mb-8 shadow-lg" />

          <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-6 text-white mb-6">
            <p className="font-bold text-xl mb-3">✅ SLTCSのタクシーチャーターがおすすめ！</p>
            <p className="text-green-100 leading-relaxed mb-4">
              SLTCSは日本語対応の政府公認タクシーチャーターサービスです。ホテルまでお迎えに上がり、シーギリヤロックの入口まで直接お連れします。途中でダンブッラ石窟寺院などに立ち寄ることも自由自在。複数人でのご利用なら一人あたりの費用も大幅に抑えられます。
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
            シーギリヤロックの見どころ
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            シーギリヤロックは単なる「岩山」ではありません。5世紀に建設された古代宮殿の遺跡が頂上に広がり、登山途中にも見どころが満載です。
          </p>

          {/* 見どころカード */}
          <div className="space-y-6 mb-8">
            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl">🦁</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">ライオンの入口（Lion's Gate）</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  頂上直前に現れる巨大なライオンの爪の遺構。かつてはライオンの全身像が岩を覆っていたとされ、その口が入口になっていました。現在は爪の部分のみが残りますが、その迫力は圧巻です。
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">シーギリヤ・レディ（フレスコ画）</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  岩の中腹にある洞窟に描かれた美しい女性像のフレスコ画。1500年以上前に描かれたとは思えないほど鮮やかな色彩が残っており、スリランカ最古の絵画として世界的に有名です。
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl">🪞</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">ミラーウォール（鏡の壁）</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  かつては磨き上げられた石灰岩が鏡のように光り輝いていたとされる壁。現在も古代の落書き（グラフィティ）が残り、当時の人々の声を伝えています。
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl">🏛️</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">頂上の宮殿遺跡と360°の絶景</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  標高200mの頂上には古代王宮の遺構が広がり、スリランカの大ジャングルを360°見渡す絶景が広がります。早朝に登ると朝霧の中に浮かぶ幻想的な景色が楽しめます。
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl">💧</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">水の庭園（Water Gardens）</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  岩の麓に広がる精巧な水の庭園。5世紀に造られたとは思えない高度な水利技術による噴水や池が今も機能しており、世界最古の景観庭園の一つとされています。
                </p>
              </div>
            </div>
          </div>

          <img src={FRESCO_IMG} alt="シーギリヤ・レディ（フレスコ画）" className="w-full rounded-2xl mb-4 shadow-lg" />
          <p className="text-center text-gray-500 text-sm mb-8">▲ シーギリヤ・レディ（フレスコ画）— 1500年以上前に描かれた美しい女性像</p>

          <img src={LION_IMG} alt="ライオンの入口" className="w-full rounded-2xl mb-4 shadow-lg" />
          <p className="text-center text-gray-500 text-sm mb-8">▲ ライオンの入口（Lion's Gate）— 巨大な爪の遺構が迫力満点</p>

          {/* SLTCSシルバープラン案内 */}
          <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6">
            <p className="font-bold text-amber-800 text-lg mb-3">🌟 SLTCSシルバープラン以上でさらに充実した体験を！</p>
            <p className="text-amber-800 leading-relaxed text-sm mb-3">
              SLTCSのシルバープラン以上をご利用の場合、ドライバーがシーギリヤロックに<strong>一緒に登り、各スポットの歴史や見どころを日本語で解説</strong>します。フレスコ画の背景にある王朝の歴史、ミラーウォールの謎、頂上宮殿の構造など、ガイドなしでは気づけない深い知識をご提供します。
            </p>
            <p className="text-amber-700 text-sm">
              ※ ブロンズプランはドライバーが麓でお待ちします。シルバープラン以上は同行ガイドサービス込みです。
            </p>
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

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Hela Bojun Hala Sigiriya",
                type: "スリランカ料理",
                price: "¥〜¥¥",
                desc: "政府が運営するオーガニックスリランカ料理レストラン。地元の食材を使った本格的なカレーやライス＆カリーが楽しめます。観光客にも人気の清潔な施設です。",
                icon: "🍛"
              },
              {
                name: "Sigiriya Rest House",
                type: "スリランカ料理・洋食",
                price: "¥¥",
                desc: "シーギリヤロック入口近くに位置する歴史あるレストハウス。ライス＆カリーやサンドイッチなど幅広いメニューが揃い、観光の合間に立ち寄りやすいロケーションです。",
                icon: "🏡"
              },
              {
                name: "Jetwing Vil Uyana Restaurant",
                type: "スリランカ料理・インターナショナル",
                price: "¥¥¥",
                desc: "湿地帯の中に建つ高級エコロッジのレストラン。スリランカの伝統料理を洗練されたスタイルで提供。特別な食事体験を求める方におすすめです。",
                icon: "✨"
              },
              {
                name: "Sigiriya Village Restaurant",
                type: "ローカル料理",
                price: "¥",
                desc: "地元の人々が通うリーズナブルなローカルレストラン。本場のカレーや揚げ物を手頃な価格で楽しめます。スリランカの日常の味を体験したい方に。",
                icon: "🌿"
              }
            ].map((r) => (
              <div key={r.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">{r.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{r.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{r.type}</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{r.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ④ 周辺観光地 */}
        <section id="attractions" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-amber-500 pl-4 mb-6">
            シーギリヤロック周辺の観光地
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            シーギリヤ周辺は「文化三角地帯」と呼ばれ、世界遺産や国立公園が集中するスリランカ屈指の観光エリアです。タクシーチャーターを利用すれば、1日で複数の観光地を効率よく巡ることができます。
          </p>

          <div className="space-y-4">
            {[
              {
                name: "ダンブッラ石窟寺院",
                distance: "シーギリヤから約17km",
                desc: "紀元前1世紀に建設された世界遺産の石窟寺院。5つの洞窟に157体もの仏像と壁画が描かれており、スリランカ最大の石窟寺院として知られています。シーギリヤと合わせて訪れる方が多い必見スポットです。",
                badge: "世界遺産",
                icon: "⛩️"
              },
              {
                name: "ピドゥランガラロック",
                distance: "シーギリヤから約2km",
                desc: "シーギリヤロックの隣にそびえる岩山。頂上からシーギリヤロックを正面に望む絶景が楽しめ、「シーギリヤロックを眺める最高のビューポイント」として人気急上昇中。入場料も安くハイカーに人気です。",
                badge: "絶景スポット",
                icon: "🏔️"
              },
              {
                name: "ミネリヤ国立公園",
                distance: "シーギリヤから約20km",
                desc: "「エレファント・ギャザリング」で有名な国立公園。乾季（6〜9月）には数百頭ものゾウが水辺に集まる壮大な光景が見られます。ジープサファリで野生のゾウ・クジャク・ワニなどを間近に観察できます。",
                badge: "サファリ",
                icon: "🐘"
              },
              {
                name: "ポロンナルワ遺跡",
                distance: "シーギリヤから約40km",
                desc: "11〜13世紀に栄えたスリランカ王朝の古都。広大な遺跡群には仏塔・宮殿・沐浴池などが点在し、世界遺産にも登録されています。自転車でのんびり巡るのがおすすめです。",
                badge: "世界遺産",
                icon: "🏛️"
              },
              {
                name: "カウディッラス池（Kaudulla）",
                distance: "シーギリヤから約30km",
                desc: "ミネリヤと並ぶゾウの集まる場所として知られる国立公園。乾季には数百頭のゾウが見られることもあります。ミネリヤより観光客が少なく、よりプライベートなサファリ体験が可能です。",
                badge: "サファリ",
                icon: "🌿"
              }
            ].map((a) => (
              <div key={a.name} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="text-3xl flex-shrink-0">{a.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-bold text-gray-900">{a.name}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{a.badge}</span>
                    <span className="text-xs text-gray-400">{a.distance}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
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

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Jetwing Vil Uyana",
                category: "ラグジュアリー",
                price: "¥¥¥¥",
                desc: "湿地帯の中に建つ高級エコロッジ。木造のヴィラが池の上に建ち、野鳥や野生動物を間近に感じられる唯一無二の体験ができます。プールやスパも完備。",
                icon: "🌟"
              },
              {
                name: "Aliya Resort & Spa",
                category: "リゾート",
                price: "¥¥¥",
                desc: "シーギリヤロックを望む丘の上に建つリゾートホテル。プールからシーギリヤロックが見える絶景が自慢。スパやレストランも充実しています。",
                icon: "🏊"
              },
              {
                name: "Sigiriya Village Hotel",
                category: "ミドルレンジ",
                price: "¥¥",
                desc: "シーギリヤロック入口から徒歩圏内の便利なロケーション。広い敷地に伝統的なスリランカ建築のコテージが並び、自然の中でゆったり過ごせます。",
                icon: "🌴"
              },
              {
                name: "Thilanka Resort and Spa",
                category: "ミドルレンジ",
                price: "¥¥",
                desc: "シーギリヤロックの眺望が楽しめるプールが人気のリゾート。コストパフォーマンスが高く、家族連れやカップルに人気の選択肢です。",
                icon: "🏡"
              },
              {
                name: "Sigiriya Rest House",
                category: "バジェット〜ミドル",
                price: "¥〜¥¥",
                desc: "シーギリヤロック入口に最も近いゲストハウス。歴史ある建物で、シンプルながら清潔な客室を提供。早朝の登山には最適なロケーションです。",
                icon: "🏠"
              },
              {
                name: "Heritance Kandalama",
                category: "ラグジュアリー",
                price: "¥¥¥¥",
                desc: "世界的建築家ジェフリー・バワが設計した名建築ホテル。ダンブッラ湖に面した崖の上に建ち、ジャングルと一体化したデザインが圧巻。シーギリヤとダンブッラ観光の拠点に最適です。",
                icon: "✨"
              }
            ].map((h) => (
              <div key={h.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">{h.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{h.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{h.category}</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{h.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">シーギリヤをSLTCSで快適に！</h2>
          <p className="text-green-100 leading-relaxed mb-6 max-w-xl mx-auto">
            日本語対応の政府公認ドライバーが、シーギリヤロックへの移動から観光ガイドまでサポートします。シルバープラン以上では一緒に登山し、各スポットを丁寧に解説します。まずはお気軽にご相談ください。
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
