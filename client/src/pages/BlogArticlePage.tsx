import { Link, useParams } from "wouter";
import { Calendar, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, getCategoryBySlug } from "@/data/blogData";

// ── 記事コンテンツ（slug別） ────────────────────────────────────
function ArticleContent({ slug }: { slug: string }) {
  if (slug === "why-taxi-charter-is-recommended") {
    return <WhyTaxiCharterArticle />;
  }
  return (
    <p className="text-gray-500 text-center py-12">記事コンテンツを準備中です。</p>
  );
}

function WhyTaxiCharterArticle() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700">
      {/* リード文 */}
      <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-[oklch(0.35_0.12_155)] pl-5 bg-gray-50 py-4 rounded-r-lg not-prose">
        スリランカを旅行するとき、「鉄道で移動すべきか、バスを使うべきか、それとも専用車をチャーターすべきか」と迷う方は多いです。
        結論からいえば、観光地を複数まわる旅行者には<strong>タクシーチャーター（専用車）</strong>が最も効率的で快適な移動手段です。
        この記事では、スリランカの公共交通と専用車チャーターを比較しながら、タクシーチャーターが選ばれる理由をわかりやすく解説します。
      </p>

      {/* 画像1：専用車 */}
      <figure className="not-prose my-8">
        <img
          src="/manus-storage/private-car-sri-lanka_9dc767ae.jpg"
          alt="スリランカの専用チャーター車（プライベートカー）"
          className="w-full rounded-xl object-cover max-h-80"
        />
        <figcaption className="text-center text-sm text-gray-400 mt-2">
          スリランカの専用チャーター車。清潔で快適な車内で観光地を自由に移動できます。
        </figcaption>
      </figure>

      <h2>スリランカの主な移動手段と特徴</h2>
      <p>
        スリランカには鉄道・バス・配車アプリ（PickMe・Uber）・タクシーチャーターという4つの主な移動手段があります。
        それぞれの特徴を整理すると、旅行スタイルに合った選択肢が見えてきます。
      </p>

      {/* 比較表 */}
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[oklch(0.12_0.02_155)] text-white">
              <th className="px-4 py-3 text-left font-medium">移動手段</th>
              <th className="px-4 py-3 text-left font-medium">費用</th>
              <th className="px-4 py-3 text-left font-medium">自由度</th>
              <th className="px-4 py-3 text-left font-medium">快適さ</th>
              <th className="px-4 py-3 text-left font-medium">日本語対応</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-white">
              <td className="px-4 py-3 font-medium text-gray-900">鉄道</td>
              <td className="px-4 py-3 text-emerald-600 font-medium">◎ 安い</td>
              <td className="px-4 py-3 text-red-500">△ 路線限定</td>
              <td className="px-4 py-3 text-yellow-500">△ 混雑あり</td>
              <td className="px-4 py-3 text-red-500">✕ なし</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">バス</td>
              <td className="px-4 py-3 text-emerald-600 font-medium">◎ 安い</td>
              <td className="px-4 py-3 text-red-500">△ 路線限定</td>
              <td className="px-4 py-3 text-red-500">✕ 混雑・遅延</td>
              <td className="px-4 py-3 text-red-500">✕ なし</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="px-4 py-3 font-medium text-gray-900">配車アプリ</td>
              <td className="px-4 py-3 text-yellow-500">○ 中程度</td>
              <td className="px-4 py-3 text-yellow-500">○ 比較的自由</td>
              <td className="px-4 py-3 text-yellow-500">○ 普通</td>
              <td className="px-4 py-3 text-red-500">△ 英語のみ</td>
            </tr>
            <tr className="bg-[oklch(0.35_0.12_155)/10]">
              <td className="px-4 py-3 font-bold text-[oklch(0.35_0.12_155)]">タクシーチャーター</td>
              <td className="px-4 py-3 text-yellow-500">△ 高め</td>
              <td className="px-4 py-3 text-emerald-600 font-medium">◎ 完全自由</td>
              <td className="px-4 py-3 text-emerald-600 font-medium">◎ 快適</td>
              <td className="px-4 py-3 text-emerald-600 font-medium">◎ 日本語対応</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>鉄道・バスでは難しいこと</h2>
      <p>
        スリランカの鉄道は、エッラ〜キャンディ間の紅茶列車のような観光路線が有名ですが、
        シーギリヤやヤーラ国立公園など主要観光地の多くは鉄道が通っていません。
        バスは路線が多いものの、時刻表が不規則で遅延も多く、荷物が多い旅行者には負担が大きいです。
        また、スリランカの道路は日本と比べて路面状況が悪い区間も多く、長距離バス移動は体力的に消耗します。
      </p>
      <p>
        配車アプリ（PickMe・Uber）はコロンボ市内では便利ですが、地方への長距離移動や観光地間の移動には対応していないことがほとんどです。
        英語でのコミュニケーションが必要になる場面も多く、言語の不安を感じる方には向いていません。
      </p>

      <h2>タクシーチャーターが選ばれる5つの理由</h2>

      <h3>1. 旅程を完全に自由に組める</h3>
      <p>
        タクシーチャーターの最大のメリットは、行き先・出発時間・滞在時間をすべて自分で決められることです。
        「シーギリヤで朝の開場に合わせて早朝出発したい」「ヌワラエリヤで茶畑をゆっくり見たい」といった希望に、
        専用車なら柔軟に対応できます。
        公共交通では難しい、観光地間の自由な乗り継ぎが可能になります。
      </p>

      <h3>2. 複数の観光地を1日で効率よく巡れる</h3>
      <p>
        スリランカの観光地は互いに離れた場所に点在しています。
        たとえば、シーギリヤ・ダンブッラ・ミネリヤを1日で巡るルートは、公共交通では乗り換えが複雑で時間がかかります。
        専用車なら移動時間を最小化しながら、複数スポットを効率よく訪問できます。
      </p>

      <h3>3. 日本語で相談しながら旅ができる</h3>
      <p>
        SLTCSでは、予約から当日の移動まで日本語でのやり取りが可能です。
        観光地の見どころや食事のおすすめ、急な体調不良時の対応など、
        旅行中に生じるさまざまな場面でサポートを受けられます。
        英語に自信がない方や、初めてスリランカを訪れる方に特に安心です。
      </p>

      <h3>4. 荷物を車に置いたまま観光できる</h3>
      <p>
        複数日にわたる周遊旅行では、毎日ホテルをチェックアウトして荷物を持ち歩く必要がある場面が出てきます。
        専用車があれば、大きなスーツケースを車内に置いたまま観光できるため、身軽に動けます。
        特に家族旅行やシニア旅行では、荷物の負担軽減が快適さに直結します。
      </p>

      <h3>5. 政府公認ドライバーによる安心の移動</h3>
      <p>
        SLTCSのドライバーはスリランカ政府観光局の認定を受けています。
        道路状況や観光地の最新情報を熟知しており、安全で快適な移動を提供します。
        スリランカでは交通事情が日本と大きく異なるため、慣れたドライバーに任せることが旅の安全につながります。
      </p>

      {/* 画像2：スリランカの山道 */}
      <figure className="not-prose my-8">
        <img
          src="/manus-storage/sri-lanka-mountain-road_77faed64.jpg"
          alt="スリランカ中部高原の山岳道路"
          className="w-full rounded-xl object-cover max-h-80"
        />
        <figcaption className="text-center text-sm text-gray-400 mt-2">
          スリランカ中部高原の山岳道路。専用車なら険しい道も安心して移動できます。
        </figcaption>
      </figure>

      <h2>費用面の考え方</h2>
      <p>
        タクシーチャーターは鉄道やバスと比べて費用が高くなります。
        ただし、2〜4名のグループで利用する場合、1人あたりのコストは配車アプリを複数回使うのと大きく変わらないケースも多いです。
        また、移動時間の短縮・荷物の手間の削減・日本語サポートといった付加価値を考えると、
        旅行全体の満足度を高める投資として捉えることができます。
      </p>
      <p>
        SLTCSでは、旅行日数・人数・行きたい場所に応じた見積もりを無料で提供しています。
        まずは気軽にご相談ください。
      </p>

      <h2>こんな旅行者にタクシーチャーターがおすすめ</h2>
      <ul>
        <li>シーギリヤ・キャンディ・ヌワラエリヤなど複数の観光地を巡りたい方</li>
        <li>3泊4日・4泊5日など限られた日数で効率よく観光したい方</li>
        <li>家族連れ・シニア・荷物が多い旅行者</li>
        <li>英語に自信がなく、日本語でサポートを受けたい方</li>
        <li>ヤーラ国立公園のサファリやホエールウォッチングなど、アクセスが難しいスポットを訪れたい方</li>
        <li>初めてスリランカを旅行する方</li>
      </ul>

      {/* CTA ボックス */}
      <div className="not-prose bg-[oklch(0.12_0.02_155)] rounded-xl p-6 my-8 text-center">
        <p className="text-[oklch(0.75_0.12_75)] text-sm tracking-widest mb-2 font-medium">
          FREE CONSULTATION
        </p>
        <h3
          className="text-white text-xl font-bold mb-2"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          スリランカタクシーチャーターの相談はSLTCSへ
        </h3>
        <p className="text-white/60 text-sm mb-5 leading-relaxed">
          日程・人数・行きたい場所をお知らせいただければ、<br className="hidden sm:block" />
          専用車チャーターに適したモデルコースとお見積もりをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/#contact"
            className="inline-block bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] font-bold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            無料で相談する
          </a>
          <a
            href="/plan"
            className="inline-block border border-white/30 text-white font-medium px-7 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            プランを見る
          </a>
        </div>
      </div>

      <h2>まとめ</h2>
      <p>
        スリランカ旅行における移動手段を比較すると、複数の観光地を効率よく巡りたい旅行者には<strong>タクシーチャーター（専用車）</strong>が最も適しています。
        鉄道やバスは費用が安い反面、観光地へのアクセスや日本語対応に限界があります。
        SLTCSでは、政府公認ドライバーによる完全プライベートチャーターを日本語でご提供しています。
        スリランカ旅行を検討している方は、まず無料相談からお気軽にご連絡ください。
      </p>

      {/* 関連記事リンク */}
      <div className="not-prose mt-10 border-t border-gray-200 pt-8">
        <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wide uppercase">関連記事</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/plan"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-medium mb-1">プラン</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                SLTCSのタクシーチャータープランを見る
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
          <a
            href="/pricing"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <div className="flex-1">
              <p className="text-xs text-[oklch(0.35_0.12_155)] font-medium mb-1">料金</p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-[oklch(0.35_0.12_155)] transition-colors leading-snug">
                スリランカタクシーチャーターの料金を確認する
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── メインコンポーネント ────────────────────────────────────────
export default function BlogArticlePage() {
  const params = useParams<{ category: string; slug: string }>();
  const article = getArticleBySlug(params.slug);
  const category = getCategoryBySlug(params.category);

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

      {/* Hero */}
      <div className="relative bg-[oklch(0.12_0.02_155)] pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={article.thumbnail}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-5 flex-wrap">
            <Link href="/" className="hover:text-white/80 transition-colors">トップ</Link>
            <ChevronRight size={12} />
            <span className="text-white/40">お役立ち情報</span>
            <ChevronRight size={12} />
            <Link
              href={`/blog/${category.slug}`}
              className="text-[oklch(0.75_0.12_75)] hover:opacity-80 transition-opacity"
            >
              {category.label}
            </Link>
          </nav>

          <span className="inline-block bg-[oklch(0.35_0.12_155)] text-white text-xs font-medium px-3 py-1 rounded-md mb-4">
            {article.category}
          </span>

          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5"
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

      {/* Article Body */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10">
          <ArticleContent slug={article.slug} />
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href={`/blog/${category.slug}`}
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
