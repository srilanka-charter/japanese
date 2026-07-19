import { useSEO } from "@/hooks/useSEO";

// ── ローカルコンポーネント ──────────────────────────────────────
function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-10"
      style={{ fontFamily: "'Shippori Mincho', serif" }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="inline-flex items-center gap-2 text-base sm:text-lg font-bold mt-6 mb-3">
      <span className="bg-[oklch(0.35_0.12_155)] text-white text-xs font-bold px-2 py-0.5 rounded">
        POINT
      </span>
      <span className="text-[oklch(0.25_0.10_155)] border-b-2 border-[oklch(0.75_0.12_155)] pb-0.5">
        {children}
      </span>
    </h3>
  );
}

function StepCard({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-4">
      <div className="flex-shrink-0 w-9 h-9 bg-[oklch(0.35_0.12_155)] text-white rounded-full flex items-center justify-center text-sm font-bold">
        {step}
      </div>
      <div>
        <p className="font-bold text-gray-900 mb-1">{title}</p>
        <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function EsimArticle() {
  useSEO({
    title: "スリランカ到着後すぐにネットを使うには？空港でのSIM購入＆eSIM完全ガイド | SLTCS",
    description:
      "スリランカ・バンダラナイケ空港でのDialog SIM購入手順とeSIMの事前設定方法を徹底解説。料金比較・物理SIM vs eSIMの選び方まで、SLTCSが旅行者向けにまとめました。",
    path: "/travel-planning/esim",
    noindex: false,
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "スリランカ到着後すぐにネットを使うには？空港でのSIM購入＆eSIM完全ガイド",
        description:
          "スリランカ・バンダラナイケ空港でのDialog SIM購入手順とeSIMの事前設定方法を徹底解説。",
        author: { "@type": "Organization", name: "SLTCS" },
        datePublished: "2026-04-07",
        inLanguage: "ja",
      },
    ],
    jsonLdIdPrefix: "esim-article",
  });

  return (
    <article className="text-gray-800">
      {/* ── ヒーロー画像 ── */}
      <figure className="mb-8">
        <img
          src="/manus-storage/hero_8be50ec9.jpeg"
          alt="スリランカ到着後すぐにネットを使うには？空港でのSIM購入＆eSIM完全ガイド"
          fetchPriority="high"
          loading="eager"
          className="w-full rounded-2xl shadow-md object-cover max-h-[400px]"
        />
      </figure>

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-6">
        スリランカの玄関口であるバンダラナイケ国際空港に降り立った瞬間、多くの旅行者がまず考えること――それは「<strong className="text-gray-900">どうやってスマホをネットに繋げるか</strong>」ではないでしょうか。
      </p>
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-4">
        地図アプリでホテルへの道を確認したり、配車サービスを利用したり、到着の報告をSNSに投稿したり。現代の旅にインターネットは欠かせない存在です。
      </p>
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        この記事では、空港内で手に入る現地SIMカードの具体的な買い方と、事前準備が可能なeSIMの使い方を、両方の選択肢から詳しくご紹介します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "現地SIMカードなら「Dialog」一択と言われる理由"],
            ["2", "旅行者向けプリペイドSIMの料金はどれくらい？"],
            ["3", "実際の購入手順――5分で完了するシンプルさ"],
            ["4", "物理カード不要の時代へ――eSIMという新しい選択肢"],
            ["5", "SIM購入で困ったら？現地ドライバーのサポートを活用"],
            ["6", "物理SIM vs eSIM――どちらを選ぶべき？"],
            ["7", "さいごに"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① Dialog一択の理由
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">
        <H2 id="section1">現地SIMカードなら「Dialog」一択と言われる理由</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          バンダラナイケ空港の到着ロビーには、複数の通信キャリアがブースを構えています。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          その中で旅行者から圧倒的に支持されているのが、国内シェアNo.1の「<strong className="text-gray-900">Dialog（ダイアログ）</strong>」です。選ばれている背景には、主に3つの理由があります。
        </p>
        <figure className="my-6">
          <img
            src="/manus-storage/airport_carriers_5e78b675.png"
            alt="バンダラナイケ空港の通信会社カウンター"
            loading="lazy"
            className="w-full rounded-xl shadow-md border border-gray-100"
          />
          <figcaption className="text-center text-xs text-gray-500 mt-2">バンダラナイケ空港の到着ロビーにある各通信会社のカウンター</figcaption>
        </figure>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              icon: "📡",
              title: "電波の届く範囲が広い",
              desc: "都市部はもちろん、シギリヤやエッラといった内陸の観光地や山岳エリアでも安定して接続できるケースが多く報告されています。",
            },
            {
              icon: "⚡",
              title: "4G LTE対応で通信品質が高い",
              desc: "動画視聴やビデオ通話もストレスなく利用できます。",
            },
            {
              icon: "🕐",
              title: "カウンターが24時間対応",
              desc: "深夜着のフライトでも到着直後にSIMを入手できるのは大きな安心材料です。",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-bold text-gray-900 text-sm mb-2">{item.title}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 料金
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">
        <H2 id="section2">旅行者向けプリペイドSIMの料金はどれくらい？</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          Dialogが空港で販売しているツーリスト向けパッケージは、いずれも<strong className="text-gray-900">30日間有効</strong>です。データ量に応じて4段階に分かれており、自分の使い方に合ったものを選べます。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">容量</th>
                <th className="text-left px-4 py-3 font-semibold">想定価格（LKR）</th>
                <th className="text-left px-4 py-3 font-semibold">日本円の目安</th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">こんな人に向いている</th>
              </tr>
            </thead>
            <tbody>
              {[
                { gb: "20GB", lkr: "約1,400 LKR", jpy: "約700円", desc: "SNS・地図・メールが中心の一般的な観光客" },
                { gb: "30GB", lkr: "約1,800 LKR", jpy: "約900円", desc: "時々YouTubeやNetflixも観たい方" },
                { gb: "50GB", lkr: "約2,450 LKR", jpy: "約1,200円", desc: "テレワークやZoom会議が必要なノマドワーカー" },
                { gb: "100GB", lkr: "約3,200 LKR", jpy: "約1,600円", desc: "長期滞在者やデータ通信をフルに使いたい方" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-bold text-[oklch(0.35_0.12_155)] border-b border-gray-100">{row.gb}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.lkr}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.jpy}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          ※為替レートや時期によって多少前後します。プランによっては、WhatsAppの通信量がカウントされない特典が付くこともあります。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ 購入手順
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">
        <H2 id="section3">実際の購入手順――5分で完了するシンプルさ</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          SIMカードの購入は驚くほど簡単です。到着ロビーでDialogのロゴが掲げられたカウンターを見つけたら、以下の流れで進みます。
        </p>
        <StepCard step={1} title="希望のデータ容量を伝える">
          カウンターのスタッフに希望のデータ容量を伝えます。英語が苦手でも、<strong>料金表を指差せばOK</strong>です。
        </StepCard>
        <StepCard step={2} title="パスポートを提示する">
          本人確認のために必要なので、手荷物からすぐ出せるようにしておきましょう。
        </StepCard>
        <StepCard step={3} title="スマートフォンをスタッフに預ける">
          SIMカードの差し替えからAPN設定まで、<strong>すべて代行してくれます</strong>。
        </StepCard>
        <StepCard step={4} title="ネット接続完了">
          数分後にはネットに接続された状態でスマホが返却されます。
        </StepCard>
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mt-6 text-sm text-amber-900 leading-relaxed">
          <strong>出発前にSIMロック解除を済ませておくことが重要です。</strong><br />
          日本の携帯キャリアで購入した端末は、ロックがかかったままだと海外SIMを認識しません。各キャリアのマイページやショップで、渡航前に必ず手続きを完了させてください。
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ eSIM
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">
        <H2 id="section4">物理カード不要の時代へ――eSIMという新しい選択肢</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          「小さなSIMカードを扱うのが不安」「日本の電話番号もそのまま使いたい」という方に注目されているのが、<strong className="text-gray-900">eSIM（イーシム）</strong>です。
          端末に内蔵されたチップにデジタルでプロファイルを書き込む仕組みで、物理的なカードの抜き差しが一切不要です。
        </p>

        <H3>eSIMが旅行者にとって便利な3つの理由</H3>
        <div className="space-y-4 mb-8">
          {[
            {
              num: "①",
              title: "出発前にセットアップが完了する",
              desc: "日本にいる段階でオンライン購入と設定を済ませれば、スリランカに着陸して機内モードを解除した瞬間からデータ通信が使えます。空港のカウンターに並ぶ時間を節約できるのは大きなメリットです。",
            },
            {
              num: "②",
              title: "日本のSIMと同時に使える",
              desc: "eSIM対応のスマートフォンでは、物理SIMスロットに日本のSIMを入れたまま、eSIMでスリランカの回線を追加できます。日本の電話番号で着信を受けつつ、現地の安価なデータ通信を利用するという二刀流が可能です。",
            },
            {
              num: "③",
              title: "カードの紛失・破損リスクがゼロ",
              desc: "デジタルデータとして端末内に格納されるため、nano SIMのように紛失する心配がありません。旅先でのトラブル要因をひとつ減らせます。",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex-shrink-0 w-9 h-9 bg-[oklch(0.35_0.12_155)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                {item.num}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <H3>DialogのeSIMを事前に入手する方法</H3>
        <figure className="my-6">
          <img
            src="/manus-storage/dialog_esim_2312c71e.png"
            alt="Dialog eSIMの購入画面"
            loading="lazy"
            className="w-full max-w-lg mx-auto rounded-xl shadow-md border border-gray-100"
          />
          <figcaption className="text-center text-xs text-gray-500 mt-2">Dialog公式サイトのeSIM購入画面</figcaption>
        </figure>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          Dialogは公式サイト上でeSIMのオンライン販売を行っています。
          約3,500ルピー（日本円でおよそ<strong className="text-gray-900">1,800円前後</strong>）で100GBのデータ通信パッケージを購入可能です。
          QRコードが発行されるので、スマホの「設定」→「モバイル通信」→「eSIMを追加」から読み込めば設定完了です。
        </p>
        <a
          href="https://www.dialog.lk/buy/new-connection/gsm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[oklch(0.35_0.12_155)] text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-[oklch(0.30_0.12_155)] transition-colors mb-6"
        >
          🔗 Dialog eSIM 公式サイトで購入する
        </a>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          なお、空港のDialogカウンターでeSIMを希望することもできますが、対応状況はタイミングによって異なる場合があるため、確実に使いたい方は渡航前のオンライン購入をおすすめします。
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
          <strong>対応端末の確認もお忘れなく。</strong><br />
          iPhone XR / XS以降、Google Pixel 3以降など、比較的新しいモデルであればeSIMに対応しています。お使いの端末が対応しているかどうかは、メーカーの公式サイトで事前にチェックしておきましょう。
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ ドライバーのサポート
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section5">
        <H2 id="section5">SIM購入で困ったら？現地ドライバーのサポートを活用</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          長時間のフライト後、慣れない空港で通信カウンターを探すのは意外と体力を消耗します。
          もし英語でのやり取りに不安がある場合や、カウンターの場所がわからない場合は、<strong className="text-gray-900">スリランカタクシーチャーターサービス(SLTCS)のドライバーに頼る</strong>という方法もあります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          SLTCSのドライバーは、到着ロビーを出てすぐの「<strong className="text-gray-900">Paging Area</strong>」と呼ばれるエリアで待機しています。
          合流後、一緒にSIMカウンターまで同行してもらえるほか、プラン選びの通訳サポートもしてくれるので、初めてのスリランカでも安心です。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ 物理SIM vs eSIM
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section6">
        <H2 id="section6">物理SIM vs eSIM――どちらを選ぶべき？</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-5">
          最後に、それぞれの特徴を比較して整理しておきましょう。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">比較ポイント</th>
                <th className="text-left px-4 py-3 font-semibold">物理SIM（空港購入）</th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">eSIM（オンライン購入）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { point: "購入タイミング", sim: "空港到着後", esim: "出発前に自宅で可能" },
                { point: "設定の手間", sim: "スタッフにお任せ", esim: "自分でQRコードを読み込む" },
                { point: "日本のSIMとの併用", sim: "SIMを差し替えるため不可", esim: "デュアルSIMで同時利用可能" },
                { point: "紛失リスク", sim: "nano SIMの取り扱いに注意", esim: "なし" },
                { point: "対応端末", sim: "SIMフリーなら基本的にどれでも", esim: "eSIM対応機種のみ" },
                { point: "コストパフォーマンス", sim: "非常に安い", esim: "同等またはやや高め" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{row.point}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.sim}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.esim}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-4">
          コスト重視で手軽さを求めるなら<strong>物理SIM</strong>、事前準備の安心感と日本番号の維持を優先するなら<strong>eSIM</strong>、というのがひとつの判断基準になるでしょう。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑦ さいごに
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section7">
        <H2 id="section7">さいごに</H2>
        <p className="text-base leading-[1.9] text-gray-700">
          スリランカでの通信環境を整えることは、旅の快適さを大きく左右する最初のステップです。
          紅茶畑が広がるヌワラエリヤの高原や、世界遺産シギリヤロックからの絶景を、リアルタイムで家族や友人とシェアするためにも、
          自分に合った通信手段を事前に検討しておくことをおすすめします。
        </p>
      </section>
    </article>
  );
}
