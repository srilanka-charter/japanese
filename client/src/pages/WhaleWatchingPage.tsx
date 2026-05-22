import { Link } from "wouter";
import { ChevronRight, Home, CheckCircle2, Calendar, Clock, Ship, Waves, Fish, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

// Image URLs
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/whale_hero-acCCARPKjEEpk6DgUTEmGF.webp";
const WHALE_HUMPBACK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/whale_humpback-8nHNCzMWvsmcAjBanrRzLk.webp";
const MIRISSA_PORT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/whale_mirissa_port-JZ4AXUeBJci3eoBNA7ipzg.webp";
const DOLPHINS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/whale_dolphins-MPDVLn4pQWcd5YzzQkjCfw.webp";
const BOAT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/whale_boat-8zdFbg53CHoob3Pz2UTPFH.webp";

const CONTACT_URL = "https://sltcs.srilanka-charter.com/contact";

const sltcsMerits = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />,
    text: "前後の観光地からスムーズに移動。ミリッサ港への送迎から次の目的地への移動まで一括手配できます",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />,
    text: "日本語ドライバーが同行。ツアー中の注意事項や見どころを日本語で案内します",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />,
    text: "信頼できる現地ボート会社を厳選。安全性・快適性の高いボートを手配します",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />,
    text: "他の旅行客との混載ではなく、グループだけのプライベートな移動が可能です",
  },
];

const seasons = [
  {
    period: "11月〜4月（ベストシーズン）",
    color: "bg-blue-600",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: <Star className="w-5 h-5" />,
    description: "南西モンスーンが落ち着き、インド洋が穏やかになる時期。特に12月〜3月はシロナガスクジラの目撃率が最も高く、ホエールウォッチングのベストシーズンです。波も比較的穏やかで、船酔いのリスクも低くなります。",
    animals: ["シロナガスクジラ（世界最大の動物）", "ザトウクジラ", "スピナードルフィン（大群）", "マッコウクジラ"],
  },
  {
    period: "5月〜10月（オフシーズン）",
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: <Waves className="w-5 h-5" />,
    description: "南西モンスーンの影響で海が荒れやすい時期。ミリッサ発のツアーは運休することが多く、この時期はホエールウォッチングには不向きです。ただし、スリランカ東海岸のトリンコマリーでは5月〜9月が逆にベストシーズンになります。",
    animals: ["トリンコマリーではシロナガスクジラ", "イルカ各種"],
  },
];

const highlights = [
  {
    icon: <Fish className="w-8 h-8 text-blue-500" />,
    title: "世界最大の動物に出会える",
    desc: "体長30m・体重200トンにもなるシロナガスクジラが、ミリッサ沖わずか数kmの海域に集まります。世界でも有数の遭遇率を誇る場所です。",
  },
  {
    icon: <Waves className="w-8 h-8 text-blue-500" />,
    title: "スピナードルフィンの大群",
    desc: "数百頭のスピナードルフィンが船の周りで飛び跳ねる光景は圧巻。クジラだけでなく、イルカとの出会いも楽しみのひとつです。",
  },
  {
    icon: <Ship className="w-8 h-8 text-blue-500" />,
    title: "早朝出発で高い遭遇率",
    desc: "ツアーは早朝5〜6時出発が一般的。午前中の穏やかな海況で、クジラの活動が活発な時間帯に海上に出ることができます。",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "所要時間は約4〜6時間",
    desc: "出港から帰港まで4〜6時間程度。沖合15〜20kmまで出ることもあるため、酔い止め薬の持参をおすすめします。",
  },
];

export default function WhaleWatchingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "スリランカ ホエールウォッチング（ミリッサ）",
    "description": "スリランカ・ミリッサ発のホエールウォッチング。シロナガスクジラやスピナードルフィンに出会える世界有数のスポット。SLTCSでは送迎付きでご案内します。",
    "url": "https://sltcs.srilanka-charter.com/whale-watching",
    "image": HERO_IMG,
    "touristType": "Wildlife Tourism",
    "availableSeason": "November to April",
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SEO Meta */}
      <title>スリランカ ホエールウォッチング｜ミリッサ発・シロナガスクジラに出会う旅 | SLTCS</title>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="スリランカのホエールウォッチング"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-16">
          <div className="max-w-4xl mx-auto w-full">
            <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
              Whale Watching
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
              スリランカの海で<br />世界最大の動物に出会う
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-2xl">
              ミリッサ沖に集まるシロナガスクジラ・ザトウクジラ・スピナードルフィン。<br className="hidden md:block" />
              インド洋が育む奇跡の生態系を体感してください。
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-100 py-3 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="flex items-center gap-1 hover:text-amber-600 transition-colors">
            <Home className="w-4 h-4" />
            <span>ホーム</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/activity" className="hover:text-amber-600 transition-colors">アクティビティ</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">ホエールウォッチング</span>
        </div>
      </nav>

      {/* Intro */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
            スリランカ南部の小さな漁村<strong>ミリッサ</strong>は、世界でも指折りのホエールウォッチングスポットとして知られています。
            大陸棚が急激に深くなるミリッサ沖は、体長30mを超える<strong>シロナガスクジラ（ブルーホエール）</strong>の回遊ルートにあたり、
            陸地からわずか数kmの海域で世界最大の動物に出会えるという、地球上でも稀有な環境が整っています。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-6 px-6 md:px-16 bg-blue-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold text-blue-800 mb-3">目次</p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-blue-700">
            <li className="flex items-center gap-2"><span className="font-bold">1.</span><a href="#why-mirissa" className="hover:underline">なぜミリッサが有名なのか</a></li>
            <li className="flex items-center gap-2"><span className="font-bold">2.</span><a href="#highlights" className="hover:underline">ホエールウォッチングの魅力</a></li>
            <li className="flex items-center gap-2"><span className="font-bold">3.</span><a href="#season" className="hover:underline">ベストシーズンと見られる生き物</a></li>
            <li className="flex items-center gap-2"><span className="font-bold">4.</span><a href="#sltcs" className="hover:underline">SLTCSで手配するメリット</a></li>
            <li className="flex items-center gap-2"><span className="font-bold">5.</span><a href="#tips" className="hover:underline">参加前に知っておきたいこと</a></li>
            <li className="flex items-center gap-2"><span className="font-bold">6.</span><a href="#contact" className="hover:underline">お問い合わせ</a></li>
          </ol>
        </div>
      </section>

      {/* Section 1: なぜミリッサが有名なのか */}
      <section id="why-mirissa" className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            なぜミリッサが世界的に有名なのか
          </h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded-full" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                ミリッサ沖のインド洋は、大陸棚が急激に深海へと落ち込む地形になっています。
                この深海には豊富なプランクトンが集まり、それを求めてクジラが回遊してきます。
                陸地から15〜20kmほどの海域で、体長30mにもなる<strong>シロナガスクジラ</strong>を間近に見られる場所は世界でも非常に限られています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                また、スリランカは赤道に近く年間を通じて温暖なため、クジラの回遊シーズンが長く、
                11月から4月にかけての約6ヶ月間、高い確率でクジラに出会えます。
                世界各地のホエールウォッチングスポットと比較しても、<strong>遭遇率の高さ</strong>はトップクラスです。
              </p>
              <p className="text-gray-700 leading-relaxed">
                さらに、ミリッサはゴール（Galle）から車で約1時間という好立地にあり、
                スリランカ南部の観光拠点からのアクセスも良好です。
              </p>
            </div>
            <div className="space-y-3">
              <img
                src={WHALE_HUMPBACK_IMG}
                alt="ザトウクジラの尾びれ"
                className="w-full rounded-xl shadow-md object-cover h-56"
              />
              <img
                src={MIRISSA_PORT_IMG}
                alt="ミリッサ港の夕景"
                className="w-full rounded-xl shadow-md object-cover h-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 魅力 */}
      <section id="highlights" className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            ホエールウォッチングの魅力
          </h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <img
              src={DOLPHINS_IMG}
              alt="スピナードルフィンの大群"
              className="w-full rounded-xl shadow-md object-cover h-64 md:h-80"
            />
            <p className="text-center text-sm text-gray-500 mt-2">数百頭のスピナードルフィンが船の周りを泳ぐ光景は圧巻</p>
          </div>
        </div>
      </section>

      {/* Section 3: ベストシーズン */}
      <section id="season" className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            ベストシーズンと見られる生き物
          </h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded-full" />
          <div className="space-y-6">
            {seasons.map((s, i) => (
              <div key={i} className={`rounded-xl border ${s.borderColor} ${s.bgLight} p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center gap-1.5 ${s.color} text-white text-sm font-bold px-3 py-1.5 rounded-full`}>
                    {s.icon}
                    {s.period}
                  </span>
                </div>
                <p className={`${s.textColor} text-sm leading-relaxed mb-3`}>{s.description}</p>
                <div>
                  <p className="text-xs font-bold text-gray-600 mb-2">主に見られる生き物：</p>
                  <ul className="flex flex-wrap gap-2">
                    {s.animals.map((a, j) => (
                      <li key={j} className={`text-xs ${s.color} text-white px-2.5 py-1 rounded-full`}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* カレンダー */}
          <div className="mt-10 bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-blue-900">月別ベストシーズンカレンダー（ミリッサ）</h3>
            </div>
            <div className="grid grid-cols-12 gap-1 text-xs text-center">
              {["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"].map((m, i) => {
                const isBest = [0,1,2,3,10,11].includes(i);
                return (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span className="text-gray-600 font-medium">{m}</span>
                    <div className={`w-full h-6 rounded ${isBest ? "bg-blue-500" : "bg-gray-200"}`} />
                    <span className={`text-[10px] ${isBest ? "text-blue-700 font-bold" : "text-gray-400"}`}>
                      {isBest ? "◎" : "×"}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 mt-3">◎ = ベストシーズン（遭遇率高）　× = オフシーズン（運休・荒天多）</p>
          </div>
        </div>
      </section>

      {/* Section 4: SLTCSで手配するメリット */}
      <section id="sltcs" className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            SLTCSで手配するメリット
          </h2>
          <div className="w-12 h-1 bg-amber-500 mb-8 rounded-full" />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                ホエールウォッチングは自分で現地のボート会社に申し込むことも可能ですが、
                SLTCSのプランに組み込むことで、移動の手間をすべて省くことができます。
                前日の観光地からミリッサ港へのスムーズな移動、ツアー終了後の次の目的地への移動まで、
                すべてチャーター車で一括対応します。
              </p>
              <div className="bg-white rounded-xl border border-amber-200 p-5 shadow-sm">
                <h3 className="font-bold text-amber-800 mb-4">SLTCSで手配するメリット</h3>
                <ul className="space-y-3">
                  {sltcsMerits.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      {m.icon}
                      <span>{m.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img
                src={BOAT_IMG}
                alt="ホエールウォッチングボートとクジラ"
                className="w-full rounded-xl shadow-md object-cover h-auto"
              />
              <p className="text-center text-sm text-gray-500 mt-2">信頼できるボート会社を厳選してご案内します</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 参加前に知っておきたいこと */}
      <section id="tips" className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            参加前に知っておきたいこと
          </h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "出発時間", content: "早朝5〜6時出発が一般的。前日はミリッサ近郊に宿泊するか、早朝にゴールから移動する必要があります。" },
              { title: "所要時間", content: "出港から帰港まで4〜6時間程度。沖合15〜20kmまで出ることもあります。" },
              { title: "酔い止め", content: "外洋に出るため、波が高い日は揺れます。酔いやすい方は事前に酔い止め薬を服用することをおすすめします。" },
              { title: "服装・持ち物", content: "日焼け止め・帽子・サングラスは必須。海風で体が冷えることがあるため、薄手の羽織りも持参を。" },
              { title: "遭遇の保証", content: "野生動物のため、100%の遭遇は保証できません。ただしミリッサのベストシーズン中の遭遇率は非常に高く、多くのツアーでクジラを目撃しています。" },
              { title: "天候による中止", content: "荒天時はツアーが中止になることがあります。スケジュールに余裕を持たせておくと安心です。" },
            ].map((tip, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold">{i + 1}</span>
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section id="contact" className="py-16 px-6 md:px-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ホエールウォッチングをプランに組み込みたい方へ
          </h2>
          <p className="text-blue-100 mb-2 leading-relaxed">
            ホエールウォッチングはもちろん、自分で現地のボート会社に直接申し込んでいただいても大丈夫です。
          </p>
          <p className="text-blue-100 mb-8 leading-relaxed">
            SLTCSのチャーターに組み込む場合は、ミリッサへの送迎・ボートの手配・前後の観光地への移動をまとめてご相談ください。
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT_URL}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg"
            >
              ホエールウォッチングについて問い合わせる
            </a>
            <Link
              href="/activity"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full transition-colors border border-white/30"
            >
              アクティビティ一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
