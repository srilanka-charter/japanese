import { Link } from "wouter";

// ─── ローカルコンポーネント ───────────────────────────────────────────────────
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-5 mt-4"
    style={{ fontFamily: "'Shippori Mincho', serif" }}
  >
    {children}
  </h2>
);

const H3 = ({ children, index }: { children: React.ReactNode; index?: number }) => {
  const nums = ["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩"];
  const badge = index !== undefined ? nums[index] ?? String(index + 1) : "•";
  return (
    <h3 className="text-base sm:text-lg font-bold mt-12 mb-4 pb-2 border-b-2 border-[oklch(0.35_0.12_155)] flex items-center gap-2">
      <span className="w-6 h-6 rounded bg-[oklch(0.35_0.12_155)] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">{badge}</span>
      <span className="text-[oklch(0.35_0.12_155)]">{children}</span>
    </h3>
  );
};

// ─── 記事本文 ─────────────────────────────────────────────────────────────────
export default function TipMannerArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        スリランカ旅行を計画するとき、「チップはいくら渡せばいいの？」「渡し方のマナーはある？」と迷う方は多いはずです。
        スリランカにはチップ文化が根付いており、ドライバー・ホテルスタッフ・レストランそれぞれに異なる相場があります。
        この記事では、スリランカのチップ事情をシーン別にわかりやすく解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカのチップ文化とは"],
            ["2", "ドライバー・チャーターへのチップ相場"],
            ["3", "ホテルスタッフへのチップ相場"],
            ["4", "レストランでのチップ相場"],
            ["5", "その他のシーン別チップ相場"],
            ["6", "チップの渡し方・タイミング・注意点"],
            ["7", "まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① スリランカのチップ文化とは
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>1. スリランカのチップ文化とは</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカはチップ文化が根付いた国です。義務ではありませんが、サービスを受けた際にチップを渡すことは現地では一般的なマナーとして認識されています。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          スリランカの平均的な月収は日本円換算で3〜5万円程度と低く、チップはサービス業に従事する人々にとって重要な収入源です。「気持ちよいサービスを受けたら感謝の気持ちを形にする」という姿勢で、無理のない範囲で渡すのが基本的な考え方です。
        </p>

        {/* アイキャッチ画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-booking-timing-MRqrgcQXvfYZKvH7j2ycGu.webp"
            alt="スリランカのドライバーとお客様"
            className="w-full object-cover max-h-72"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            スリランカのドライバーは旅のパートナー。感謝の気持ちをチップで伝えよう。
          </figcaption>
        </figure>

        {/* チップ文化のポイント */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
          <p className="font-bold text-emerald-800 mb-3">💡 スリランカのチップ文化・基本ルール</p>
          <ul className="space-y-2 text-sm text-emerald-900">
            {[
              "チップは義務ではないが、渡すのが一般的なマナー",
              "通貨はスリランカルピー（LKR）で渡すのが基本",
              "サービスに満足したときだけ渡せばOK",
              "小額紙幣（100・500ルピー札）を事前に用意しておくと便利",
              "渡すタイミングはサービス終了後・チェックアウト時が一般的",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-600 flex-shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          チップを渡す際は、直接手渡しするのが基本です。テーブルに置いたままにするより、「ありがとう（Thank you）」と一言添えながら手渡しすると、より丁寧な印象を与えられます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          なお、チップは現地通貨（スリランカルピー）で渡すのが望ましいです。日本円やドルでも受け取ってもらえる場合がありますが、両替の手間を考えると現地通貨のほうが喜ばれます。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② ドライバー・チャーターへのチップ相場
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>2. ドライバー・チャーターへのチップ相場</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          スリランカ旅行でチップが最も重要になるシーンが、専用車ドライバーへのチップです。複数日にわたって同じドライバーが担当する場合、旅の最後に感謝の気持ちを伝えることが一般的です。
        </p>

        {/* ドライバーチップ相場表 */}
        <div className="overflow-x-auto mb-8 -mx-4 sm:mx-0">
          <div className="min-w-[480px] sm:min-w-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                  <th className="px-4 py-3 text-left font-semibold">サービス内容</th>
                  <th className="px-4 py-3 text-left font-semibold">チップ相場（1日あたり）</th>
                  <th className="px-4 py-3 text-left font-semibold">渡すタイミング</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["専用車ドライバー（英語対応）", "LKR 1,500〜2,500（約600〜1,000円）", "旅行最終日・または毎日"],
                  ["専用車ドライバー（日本語対応）", "LKR 2,000〜3,500（約800〜1,400円）", "旅行最終日・または毎日"],
                  ["ガイド兼ドライバー", "LKR 3,500〜4,500（約1,400〜1,800円）", "旅行最終日"],
                  ["空港送迎のみ", "LKR 500〜1,000（約200〜400円）", "到着後または出発前"],
                  ["半日チャーター", "LKR 500〜1,000（約200〜400円）", "チャーター終了後"],
                ].map(([service, amount, timing], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{service}</td>
                    <td className="px-4 py-3 text-[oklch(0.35_0.12_155)] font-bold border-b border-gray-100">{amount}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <H3 index={0}>毎日渡す vs 最終日にまとめて渡す</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          ドライバーへのチップは「毎日少額ずつ渡す」方法と「旅行最終日にまとめて渡す」方法があります。どちらでも問題ありませんが、複数日のチャーターでは最終日にまとめて渡すほうが一般的です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          旅行中に特別に良いサービスを受けた日（例：急な体調不良への対応、おすすめスポットへの案内など）は、その日にプラスアルファのチップを渡すと喜ばれます。
        </p>

        <H3 index={1}>SLTCSのドライバーへのチップについて</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          SLTCSでは、チャーター料金にチップは含まれていません。チップはお客様の任意となっており、サービスへの満足度に応じてお渡しいただく形をとっています。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          「いくら渡せばいいかわからない」という方は、上記の相場を参考に、旅行日数×1日あたりの相場で計算するとスムーズです。たとえば5日間のチャーターで日本語対応ドライバーの場合、LKR 10,000〜17,500（約4,000〜7,000円）が目安となります。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ ホテルスタッフへのチップ相場
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>3. ホテルスタッフへのチップ相場</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          ホテルでのチップは、スタッフの種類によって渡すタイミングと金額が異なります。特に小規模なブティックホテルやヴィラでは、チップがスタッフの重要な収入源となっています。
        </p>

        {/* ホテルチップ相場表 */}
        <div className="overflow-x-auto mb-8 -mx-4 sm:mx-0">
          <div className="min-w-[480px] sm:min-w-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                  <th className="px-4 py-3 text-left font-semibold">スタッフの種類</th>
                  <th className="px-4 py-3 text-left font-semibold">チップ相場</th>
                  <th className="px-4 py-3 text-left font-semibold">渡すタイミング</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ポーター（荷物運び）", "LKR 100〜300（約40〜120円）", "荷物を運んでもらった直後"],
                  ["客室清掃スタッフ", "LKR 200〜500（約80〜200円）/泊", "毎朝またはチェックアウト時"],
                  ["コンシェルジュ・フロントスタッフ", "LKR 500〜1,000（約200〜400円）", "特別な手配をしてもらった後"],
                  ["プール・ビーチスタッフ", "LKR 200〜500（約80〜200円）", "サービス後"],
                  ["ホテル全体（まとめて）", "LKR 1,500〜2,500（約600〜1,000円）/泊", "チェックアウト時にフロントへ"],
                ].map(([staff, amount, timing], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{staff}</td>
                    <td className="px-4 py-3 text-[oklch(0.35_0.12_155)] font-bold border-b border-gray-100">{amount}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <H3 index={0}>チップボックスがある場合</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          最近のスリランカのホテルでは、フロントや客室にチップボックスが設置されているケースが増えています。チップボックスがある場合は、そこに入れるだけでOKです。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          チップボックスに入れた金額は通常スタッフ間で分配されます。特定のスタッフに感謝を伝えたい場合は、直接手渡しするほうが確実です。
        </p>

        <H3 index={1}>高級ホテルでのチップ</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          5つ星ホテルや高級リゾートでも、スタッフへのチップは歓迎されます。ホテルの格が上がっても、スタッフの基本給が大幅に上がるわけではないため、チップの重要性は変わりません。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          高級ホテルでは、サービス料（10%）が請求書に自動加算されていることがあります。その場合でも、特別に良いサービスを受けたスタッフには個別にチップを渡すと喜ばれます。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ レストランでのチップ相場
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>4. レストランでのチップ相場</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          スリランカのレストランでは、請求書にサービス料（10%）が含まれているケースが多いです。まず請求書を確認し、サービス料が含まれているかどうかを確認しましょう。
        </p>

        {/* レストランチップ相場表 */}
        <div className="overflow-x-auto mb-8 -mx-4 sm:mx-0">
          <div className="min-w-[480px] sm:min-w-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[oklch(0.35_0.12_155)] text-white">
                  <th className="px-4 py-3 text-left font-semibold">レストランの種類</th>
                  <th className="px-4 py-3 text-left font-semibold">チップの目安</th>
                  <th className="px-4 py-3 text-left font-semibold">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["観光客向けレストラン・ホテルダイニング", "請求書確認後、追加で100〜200ルピー", "10%サービス料が含まれていることが多い"],
                  ["地元のローカル食堂", "LKR 100〜300（約40〜120円）", "サービス料なし。端数を切り上げるのも可"],
                  ["カフェ・軽食店", "LKR 50〜100（約20〜40円）", "任意。小銭を置いていく程度でOK"],
                  ["高級レストラン", "請求額の10〜15%", "サービス料込みでも追加チップは歓迎される"],
                ].map(([type, amount, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{type}</td>
                    <td className="px-4 py-3 text-[oklch(0.35_0.12_155)] font-bold border-b border-gray-100">{amount}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <H3 index={0}>サービス料の確認方法</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          請求書に「Service Charge 10%」や「SC 10%」と記載されていれば、サービス料が含まれています。その場合、追加のチップは任意ですが、特に良いサービスを受けた場合はLKR 100〜200を追加するのが一般的です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          サービス料が含まれていない場合は、請求額の10%程度を目安にチップを渡しましょう。テーブルに現金を置いて帰るか、会計時に「Keep the change（おつりはいらない）」と伝える方法が一般的です。
        </p>

        <H3 index={1}>ローカル食堂でのチップ</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          地元の人が利用するローカル食堂では、チップの習慣はあまり一般的ではありません。しかし、観光客が訪れる食堂では、LKR 100〜300程度のチップを渡すと喜ばれます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          金額が少額でも、「ありがとう」という気持ちを込めて渡すことが大切です。無理に高額のチップを渡す必要はありません。
        </p>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ その他のシーン別チップ相場
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>5. その他のシーン別チップ相場</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          ドライバー・ホテル・レストラン以外にも、スリランカ旅行ではチップを渡す場面があります。以下のシーン別相場を参考にしてください。
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: "🐘",
              title: "象乗り・アクティビティガイド",
              body: "LKR 500〜1,000（約200〜400円）。サファリガイドや象乗りのスタッフへは、体験終了後に渡すのが一般的です。",
            },
            {
              icon: "💆",
              title: "アーユルヴェーダ・スパ",
              body: "施術料の10%程度。LKR 500〜1,000が目安。施術者に直接渡すか、受付に預けます。",
            },
            {
              icon: "🏛️",
              title: "寺院・遺跡のガイド",
              body: "LKR 300〜500（約120〜200円）。無料で案内してくれる現地ガイドには、感謝の気持ちとしてチップを渡しましょう。",
            },
            {
              icon: "🛺",
              title: "トゥクトゥク（三輪タクシー）",
              body: "端数を切り上げる程度でOK。LKR 50〜100が目安。長距離の場合はLKR 200〜300程度。",
            },
            {
              icon: "🎭",
              title: "文化ショー・パフォーマー",
              body: "LKR 200〜500（約80〜200円）。キャンディアンダンスなどのショー後に、パフォーマーへ直接渡します。",
            },
            {
              icon: "📸",
              title: "写真撮影への協力",
              body: "LKR 100〜300（約40〜120円）。民族衣装を着た方や象使いなど、写真に協力してもらった場合に渡します。",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 flex gap-3">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80"
            alt="スリランカのサファリ体験"
            className="w-full object-cover max-h-64"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            ヤーラ国立公園のサファリガイドへのチップは、体験終了後に感謝を込めて渡そう。
          </figcaption>
        </figure>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ チップの渡し方・タイミング・注意点
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>6. チップの渡し方・タイミング・注意点</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          チップを渡す際には、いくつかのマナーと注意点があります。相手に失礼のないよう、基本的なルールを押さえておきましょう。
        </p>

        <H3 index={0}>渡し方の基本マナー</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          チップは必ず右手、または両手で渡すのがマナーです。スリランカでは左手は不浄とされているため、左手だけで渡すのは避けましょう。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          渡す際は「Thank you（ありがとう）」や「Bohoma Sthuthi（ボーホマ・ストゥーティ：シンハラ語でありがとう）」と一言添えると、より丁寧な印象を与えられます。
        </p>

        <H3 index={1}>小額紙幣を事前に準備する</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          チップを渡す際に大きな紙幣しかないと、おつりをもらう必要が生じて気まずい雰囲気になることがあります。空港や銀行で両替する際に、100ルピー・500ルピー札を多めに用意しておくと便利です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          旅行中はチップ用の小銭入れを別に用意しておくと、スムーズに渡せます。財布から大金が見えてしまうと、トラブルの原因になることもあるため注意が必要です。
        </p>

        <H3 index={2}>チップを渡さなくてもいいケース</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          チップはあくまで感謝の気持ちを表すものです。サービスに不満があった場合や、明らかに不当な要求をされた場合は、無理に渡す必要はありません。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          また、観光地の入口付近で「ガイドをする」と近づいてくる人の中には、チップ目的の非公認ガイドもいます。公認ガイドと非公認ガイドを見分けるためにも、事前に旅行会社やチャーターサービスを通じて手配することをおすすめします。
        </p>

        {/* 注意点ボックス */}
        <div className="space-y-4 mb-6">
          {[
            {
              title: "チップの強要には応じない",
              body: "「チップをくれ」と強要してくる場合は、毅然とした態度で断って構いません。正規のサービス提供者は強要しません。",
            },
            {
              title: "過剰なチップは相場を崩す",
              body: "善意から高額のチップを渡すことは、現地の相場を崩し、他の旅行者が困る原因になることがあります。相場の範囲内で渡しましょう。",
            },
            {
              title: "領収書のサービス料を確認する",
              body: "レストランやホテルで10%のサービス料が請求書に含まれている場合、追加チップは任意です。二重払いにならないよう確認しましょう。",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-amber-50 border border-amber-100 rounded-xl p-5">
              <span className="text-amber-400 text-xl flex-shrink-0 mt-0.5">⚠</span>
              <div>
                <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                <p className="text-sm leading-relaxed text-gray-700">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA（無料相談）
      ════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.12_155)] to-[oklch(0.28_0.10_155)] rounded-2xl p-8 text-center text-white mb-14">
        <p className="text-lg font-bold mb-2">スリランカ旅行の専用車チャーターを日本語で相談</p>
        <p className="text-sm opacity-90 mb-6">
          チップの相場や現地マナーについても、日本語スタッフが丁寧にお答えします。
        </p>
        <button
          onClick={() => { window.location.href = "/#contact"; }}
          className="inline-block bg-white text-[oklch(0.35_0.12_155)] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          無料で相談する →
        </button>
      </div>

      {/* ════════════════════════════════════════════════════
          H2 ⑦ まとめ
      ════════════════════════════════════════════════════ */}
      <section className="mb-10">

        <H2>7. まとめ</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカのチップ文化は、義務ではなく感謝の気持ちを表すものです。ドライバー・ホテルスタッフ・レストランそれぞれに適切な相場があり、事前に把握しておくことでスムーズな旅を楽しめます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          特に複数日にわたる専用車チャーターでは、ドライバーへのチップが旅の締めくくりとして重要です。SLTCSでは、チップの相場や渡し方についても事前にご案内しますので、初めてスリランカを訪れる方も安心してご利用いただけます。
        </p>

        {/* まとめリスト */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
          <p className="font-bold text-gray-800 mb-3">📋 チップ相場まとめ</p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "専用車ドライバー：LKR 1,500〜3,500/日（英語・日本語対応で異なる）",
              "ホテルスタッフ：LKR 100〜500（役割・サービス内容による）",
              "レストラン：サービス料確認後、LKR 100〜200追加（または10%）",
              "アクティビティガイド：LKR 500〜1,000",
              "トゥクトゥク：端数切り上げ程度",
              "渡し方：右手または両手で、「ありがとう」と一言添えて",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[oklch(0.35_0.12_155)] flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 関連記事リンク ── */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">関連記事</p>
        <ul className="space-y-2">
          {[
            { href: "/blog/taxi-charter-basics/why-taxi-charter-is-recommended", label: "スリランカ旅行でタクシーチャーターがおすすめな理由｜公共交通との違い" },
            { href: "/blog/taxi-charter-basics/price-breakdown-risks", label: "スリランカのタクシーチャーター料金の内訳とは？安いサービスには気をつけよう！" },
            { href: "/blog/travel-planning/when-to-book-charter", label: "スリランカの専用車チャーターをいつ予約すべき？｜予約タイミング完全ガイド" },
            { href: "/pricing", label: "SLTCSの料金一覧｜スリランカ専用車チャーターの価格" },
            { href: "/blog/travel-planning/best-season-guide", label: "スリランカ旅行のベストシーズンと気候完全ガイド" },
          ].map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-sm text-[oklch(0.35_0.12_155)] hover:opacity-80 underline underline-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </article>
  );
}
