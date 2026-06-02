export default function BookingTimingArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        スリランカ旅行の計画を立てるとき、「専用車チャーターはいつ頃予約すればいいのだろう？」と疑問に思う方は多いはずです。
        結論からいえば、<strong className="text-gray-900">出発の1〜3ヶ月前</strong>が理想的なタイミングです。
        しかし、旅行の時期・日数・旅のスタイルによって最適なタイミングは異なります。
        この記事では、予約が遅れると何が起きるのか、早めに予約するとどんなメリットがあるのかを具体的に解説します。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "スリランカ旅行で専用車チャーターが必要な理由"],
            ["2", "予約が遅れると起きること"],
            ["3", "ベストな予約タイミング：時期別ガイド"],
            ["4", "予約前に決めておくべきこと"],
            ["5", "SLTCSへの予約の流れ"],
            ["6", "まとめ"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── H2: 1 ── */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-14">
        1. スリランカ旅行で専用車チャーターが必要な理由
      </h2>
      <p className="leading-[1.9] text-gray-700 mb-6">
        スリランカは公共交通機関が発達しているとはいえず、観光地間の移動は<strong>時間・快適性・安全性</strong>の面で大きな差が生まれます。
        鉄道は本数が少なく遅延が多い、バスは混雑して荷物の管理が難しい、配車アプリは長距離移動に対応していないケースがほとんどです。
      </p>
      <p className="leading-[1.9] text-gray-700 mb-6">
        一方、専用車チャーターは出発地から目的地まで直行でき、途中の立ち寄りも自由に設定できます。
        特に<a href="/sigiriya" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">シーギリヤ</a>・
        <a href="/kandy" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">キャンディ</a>・
        <a href="/galle" className="text-[oklch(0.35_0.12_155)] underline underline-offset-2 hover:opacity-80">ゴール</a>など複数の観光地を巡る場合、専用車は「移動手段」ではなく「旅の核心」になります。
      </p>
      <p className="leading-[1.9] text-gray-700 mb-10">
        だからこそ、専用車チャーターの予約は旅行計画の中でも<strong>最優先で確定させるべき要素</strong>のひとつです。
        フライトやホテルを先に押さえたとしても、移動手段が未確定では旅程全体が不安定になります。
      </p>

      {/* ── アイキャッチ画像 ── */}
      <figure className="mb-12 rounded-2xl overflow-hidden shadow-md">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/blog-booking-timing-MRqrgcQXvfYZKvH7j2ycGu.webp"
          alt="スリランカ専用車チャーターの予約タイミングを示すカレンダーとドライバー"
          className="w-full object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500 mt-2 pb-2">
          予約は早めが安心。特にハイシーズンは希望のドライバーが埋まりやすい
        </figcaption>
      </figure>

      {/* ── H2: 2 ── */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-14">
        2. 予約が遅れると起きること
      </h2>
      <p className="leading-[1.9] text-gray-700 mb-6">
        「直前でも大丈夫だろう」と思っていると、以下のような問題が起きる可能性があります。
      </p>

      <div className="space-y-4 mb-10">
        {[
          {
            title: "希望のドライバーが確保できない",
            body: "SLTCSでは日本語対応・英語対応など、お客様のニーズに合ったドライバーをご提案しています。人気のドライバーは早期に予約が埋まるため、直前では対応できないことがあります。",
          },
          {
            title: "旅程の調整が難しくなる",
            body: "専用車チャーターは旅程全体を通じて同じドライバーが担当するケースが多く、ホテルのチェックイン時間や観光地の開場時間と連動して計画を立てる必要があります。直前の予約では細かい調整が難しくなります。",
          },
          {
            title: "ハイシーズンは特に競合が激しい",
            body: "12月〜3月のスリランカは日本からの観光客が集中するハイシーズンです。この時期は専用車の需要が高まり、希望の車種・日程での手配が困難になることがあります。",
          },
          {
            title: "旅行直前の不安が増す",
            body: "移動手段が確定していない状態でフライト・ホテルだけ押さえていると、出発直前まで不安が続きます。早めに予約することで、旅行の準備全体をスムーズに進められます。",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 bg-red-50 border border-red-100 rounded-xl p-5">
            <span className="text-red-400 text-xl flex-shrink-0 mt-0.5">⚠</span>
            <div>
              <p className="font-bold text-gray-900 mb-1">{item.title}</p>
              <p className="text-sm leading-relaxed text-gray-700">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── H2: 3 ── */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-14">
        3. ベストな予約タイミング：時期別ガイド
      </h2>
      <p className="leading-[1.9] text-gray-700 mb-6">
        旅行の時期によって、推奨される予約タイミングは異なります。以下の表を参考にしてください。
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[oklch(0.35_0.12_155)] text-white">
              <th className="px-4 py-3 text-left font-semibold">旅行時期</th>
              <th className="px-4 py-3 text-left font-semibold">推奨予約タイミング</th>
              <th className="px-4 py-3 text-left font-semibold">理由</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["12月〜3月（ハイシーズン）", "出発3ヶ月前以上", "日本・欧米からの観光客が集中。人気ドライバーは早期完売"],
              ["4月・11月（移行期）", "出発2ヶ月前", "天候が不安定だが旅行者は多い。余裕を持った手配を推奨"],
              ["5月〜10月（モンスーン期）", "出発1〜2ヶ月前", "比較的空きがあるが、雨天時の旅程変更に備えた早めの相談を推奨"],
              ["年末年始・GW・お盆", "出発3ヶ月前以上", "日本の長期連休は特に需要が高く、最も早い予約が必要"],
            ].map(([period, timing, reason], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{period}</td>
                <td className="px-4 py-3 text-[oklch(0.35_0.12_155)] font-bold border-b border-gray-100">{timing}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
        <p className="font-bold text-green-800 mb-2">💡 早期予約のメリット</p>
        <ul className="space-y-1.5 text-sm text-green-900">
          {[
            "希望のドライバー・車種を確保できる",
            "旅程の細かい調整に余裕が生まれる",
            "ホテル・フライトとの連携がスムーズになる",
            "出発前の不安が軽減される",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── H2: 4 ── */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-14">
        4. 予約前に決めておくべきこと
      </h2>
      <p className="leading-[1.9] text-gray-700 mb-6">
        専用車チャーターを予約する前に、以下の項目をある程度決めておくとスムーズに手配が進みます。
        すべてが確定していなくても相談は可能ですが、大枠が決まっているほど精度の高い提案を受けられます。
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {[
          { icon: "📅", title: "旅行日程", body: "出発日・帰国日・スリランカ滞在日数" },
          { icon: "👥", title: "参加人数", body: "大人・子ども・シニアの人数（車種選定に影響）" },
          { icon: "📍", title: "訪問したい観光地", body: "シーギリヤ・キャンディ・ゴールなど希望の観光地リスト" },
          { icon: "🏨", title: "宿泊地の大まかな場所", body: "コロンボ・シーギリヤ・ゴールなど宿泊エリア" },
          { icon: "🌏", title: "言語の希望", body: "日本語対応・英語対応など" },
          { icon: "🚗", title: "車種の希望", body: "セダン・ミニバン・SUVなど人数や荷物量に応じて" },
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

      {/* ── H2: 5 ── */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-14">
        5. SLTCSへの予約の流れ
      </h2>
      <p className="leading-[1.9] text-gray-700 mb-6">
        SLTCSでは、お問い合わせから出発当日まで一貫して日本語でサポートします。
        予約の流れは以下のとおりです。
      </p>

      <ol className="space-y-4 mb-10">
        {[
          {
            step: "STEP 1",
            title: "お問い合わせフォームから相談",
            body: "旅行日程・人数・希望観光地をフォームに入力して送信するだけ。まだ旅程が固まっていなくても相談可能です。",
          },
          {
            step: "STEP 2",
            title: "旅程のご提案・お見積もり",
            body: "SLTCSのスタッフが最適なドライバー・車種・旅程をご提案します。料金の目安もこの段階でお伝えします。",
          },
          {
            step: "STEP 3",
            title: "旅程の確定・予約確定",
            body: "ご提案内容に合意いただいたら予約確定。ホテルや観光地の入場料など、追加手配が必要な場合も一括でサポートします。",
          },
          {
            step: "STEP 4",
            title: "出発当日・現地でのサポート",
            body: "空港でのお出迎えから始まり、旅行中は担当ドライバーが常にサポート。緊急時の連絡先も事前にお伝えします。",
          },
        ].map((item, i) => (
          <li key={i} className="flex gap-4">
            <div className="flex-shrink-0 w-20 text-center">
              <span className="inline-block bg-[oklch(0.35_0.12_155)] text-white text-xs font-bold px-2 py-1 rounded-full">
                {item.step}
              </span>
            </div>
            <div className="flex-1 pb-4 border-b border-gray-100">
              <p className="font-bold text-gray-900 mb-1">{item.title}</p>
              <p className="text-sm leading-relaxed text-gray-700">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* ── 2枚目画像 ── */}
      <figure className="mb-12 rounded-2xl overflow-hidden shadow-md">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/review_photo_1-Ub6Xv3Qw8sFqJtNpYmKcAE.webp"
          alt="SLTCSのドライバーと日本人観光客"
          className="w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80";
          }}
        />
        <figcaption className="text-center text-xs text-gray-500 mt-2 pb-2">
          SLTCSのドライバーは日本語・英語対応。空港から旅行中まで一貫してサポートします
        </figcaption>
      </figure>

      {/* ── H2: 6 まとめ ── */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-[oklch(0.35_0.12_155)] pl-4 mb-6 mt-14">
        6. まとめ
      </h2>
      <p className="leading-[1.9] text-gray-700 mb-6">
        スリランカの専用車チャーターは、旅行の快適さと自由度を大きく左右する重要な要素です。
        予約のベストタイミングは<strong>出発の1〜3ヶ月前</strong>。ハイシーズン（12月〜3月）や年末年始・GWは3ヶ月以上前の予約が安心です。
      </p>
      <p className="leading-[1.9] text-gray-700 mb-6">
        「まだ旅程が決まっていない」という段階でも、まずは相談だけでも早めにしておくことをおすすめします。
        SLTCSでは旅程の相談から予約確定まで、日本語で丁寧にサポートします。
      </p>

      {/* ── 関連記事リンク ── */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">関連記事</p>
        <ul className="space-y-2">
          {[
            { href: "/blog/taxi-charter-basics/why-taxi-charter-is-recommended", label: "スリランカ旅行でタクシーチャーターがおすすめな理由｜公共交通との違い" },
            { href: "/blog/model-course/course-10days", label: "スリランカを10日間で周遊する大満足モデルコース" },
          ].map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-sm text-[oklch(0.35_0.12_155)] hover:opacity-80 underline underline-offset-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.12_155)] to-[oklch(0.28_0.10_155)] rounded-2xl p-8 text-center text-white">
        <p className="text-lg font-bold mb-2">スリランカ旅行の専用車チャーターを早めに相談しませんか？</p>
        <p className="text-sm opacity-90 mb-6">
          旅程が決まっていなくてもOK。日本語スタッフが丁寧にご提案します。
        </p>
        <button
          onClick={() => {
            window.location.href = "/#contact";
          }}
          className="inline-block bg-white text-[oklch(0.35_0.12_155)] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          無料で相談する →
        </button>
      </div>

    </article>
  );
}
