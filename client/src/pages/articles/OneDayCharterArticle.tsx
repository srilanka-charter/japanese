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
export default function OneDayCharterArticle() {
  return (
    <article className="text-gray-800">

      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        スリランカを1日だけ専用車でめぐりたい——そんなご要望をお持ちの方に向けて、この記事では1日チャーターの活用方法と、実際の予約手順をわかりやすく解説します。
        短い滞在でも、自分のペースで観光地を回れる専用車チャーターは、スリランカ旅行をより充実させる手段のひとつです。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "1日チャーターとはどんなサービスか"],
            ["2", "1日チャーターで利用できるプラットフォームの紹介"],
            ["3", "WhatsAppの事前準備について"],
            ["4", "予約方法①：特定のドライバーに直接リクエストを送る"],
            ["5", "予約方法②：複数のドライバーに一括で見積もりを依頼する"],
            ["6", "困ったときの対処法"],
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
          H2 ① 1日チャーターとはどんなサービスか
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>1. 1日チャーターとはどんなサービスか</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          スリランカの専用車チャーターは、旅行者が希望する行程に合わせてドライバーが終日対応するサービスです。
          公共交通機関では難しいルートや、複数の観光地を効率よく回りたい場合に特に力を発揮します。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          1日チャーターの場合、出発地から目的地までの移動だけでなく、観光中の待機・次の目的地への移動も含めて、ドライバーが一日を通してサポートします。
          スケジュールの変更も柔軟に対応できるため、天候や体調に合わせて旅程を調整しやすいのも特徴です。
        </p>

        {/* アイキャッチ画像 */}
        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/U5GFZm3GAbGuGjN2pLu33k/one-day-charter-hero-Cve9iXTzSsRjWGWujMNXLY.webp"
            alt="スリランカ1日チャーターのイメージ"
            className="w-full object-cover"
            fetchPriority="high"
            loading="eager"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            スリランカの専用車チャーターは1日から利用可能。自分だけのペースで観光を楽しめる。
          </figcaption>
        </figure>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          なお、SLTCSでは現在、需要の増加に伴い1日チャーターの直接受付を一時的に停止しています。
          ただし、弊社が提携しているプラットフォームを通じて、引き続き1日チャーターをご利用いただける環境を整えています。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          このプラットフォームでは、複数のドライバーや旅行会社が登録しており、お客様が直接やり取りをしながら予約を進める仕組みになっています。
          日本語スタッフによるサポートはありませんが、英語でのコミュニケーションが可能であれば、費用を抑えながら専用車を手配できます。
        </p>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 1日チャーターで利用できるプラットフォームの紹介
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>2. 1日チャーターで利用できるプラットフォームの紹介</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          弊社が海外向けに提供しているプラットフォームでは、スリランカ国内で活動する多数のドライバーや旅行会社が登録しています。
          1日チャーターを含む短期間の手配に対応しており、ドライバーとの直接交渉が可能です。
        </p>

        <div className="bg-[oklch(0.97_0.02_155)] border border-[oklch(0.85_0.05_155)] rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-[oklch(0.35_0.12_155)] mb-2">プラットフォームURL</p>
          <a
            href="https://srilankacarhirewithprivatedriver.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[oklch(0.35_0.12_155)] underline underline-offset-2 break-all"
          >
            https://srilankacarhirewithprivatedriver.com/
          </a>
        </div>

        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/platform-top_6c3b990b.png"
            alt="スリランカタクシーチャータープラットフォームのトップ画面"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            プラットフォームには多数のドライバーが登録。条件に合ったドライバーを検索できる。
          </figcaption>
        </figure>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          登録ドライバーの中には、スリランカ政府が認定する観光ドライバー資格（Tourist Driver License）やChauffeur Guide Driver Licenseを保有している方も多くいます。
          各ドライバーのプロフィールページでライセンスの種類を確認できますので、安心できるドライバーを選ぶ際の参考にしてください。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          政府公認のライセンスを持つドライバーは、観光地の案内知識や安全運転に関する研修を受けており、旅行者への対応にも慣れています。
          初めてスリランカを訪れる方でも、資格保有ドライバーを選ぶことで安心感が高まります。
        </p>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ WhatsAppの事前準備について
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>3. WhatsAppの事前準備について</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          このプラットフォームを利用してドライバーと連絡を取るには、WhatsAppのインストールと初期設定が必要です。
          スリランカのドライバーとの連絡手段として、WhatsAppは事実上の標準ツールとなっています。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          日本ではLINEが主流ですが、海外ではWhatsAppが広く使われています。
          予約リクエストを送った後、ドライバーからの返信もWhatsApp経由で届くため、出発前に必ず設定を済ませておきましょう。
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-amber-800 mb-2">⚠️ 出発前に必ず確認</p>
          <ul className="space-y-1.5 text-sm text-amber-700">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0">•</span>
              <span>WhatsAppをスマートフォンにインストールする</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0">•</span>
              <span>電話番号での認証を完了させる</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0">•</span>
              <span>プロフィール名を設定しておく（ドライバーが識別しやすくなる）</span>
            </li>
          </ul>
        </div>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          WhatsAppの設定方法については、別途解説記事をご用意しています。初めて使う方はそちらも参考にしてください。
        </p>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ 予約方法①：特定のドライバーに直接リクエストを送る
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>4. 予約方法①：特定のドライバーに直接リクエストを送る</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          プラットフォームには2種類の予約方法があります。最初に紹介するのは、気に入ったドライバーを選んで直接Booking Requestを送る方法です。
          ドライバーのプロフィールや評価、対応言語などを事前に確認できるため、特定の条件を重視する方にはこちらの方法がおすすめです。
        </p>

        <H3 index={0}>ドライバーを検索して選ぶ</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          プラットフォームのトップページから「Search All Drivers」を選択すると、登録ドライバーの一覧が表示されます。
          対応言語・車種・活動エリアなどの条件で絞り込みができるため、日本語対応を希望する場合は「Japanese」で検索してみましょう。
        </p>

        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/driver-search_f3f4826c.png"
            alt="ドライバー検索画面"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            ドライバー一覧から条件に合った候補を絞り込める。
          </figcaption>
        </figure>

        <H3 index={1}>ドライバーの詳細を確認してBookingを送る</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          気になるドライバーが見つかったら「Detail」ボタンをクリックして詳細ページを確認しましょう。
          ライセンスの種類・過去の評価・対応可能な車両などが記載されています。
        </p>

        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/driver-detail_76731d38.png"
            alt="ドライバー詳細画面"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            ドライバーの詳細ページでライセンスや評価を確認できる。
          </figcaption>
        </figure>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          「Book」ボタンを押すと予約入力画面に進みます。
          表示される金額は1日150kmの走行距離を基準とした目安額です。
          1日チャーターでは移動距離が長くなりやすく、超過距離分の追加料金が発生することがほとんどですので、あらかじめドライバーと走行距離の見込みを確認しておくことをおすすめします。
        </p>

        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/booking1_d7187956.png"
            alt="予約入力画面①"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            予約画面では旅程の詳細を入力する。料金は走行距離によって変動する。
          </figcaption>
        </figure>

        <H3 index={2}>お客様情報を入力してリクエストを送信する</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          「Continue」を押すと、お名前・連絡先・WhatsApp番号などの入力画面に移ります。
          WhatsApp番号はドライバーとの連絡に使用するため、正確に入力してください。
        </p>

        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/booking2_b670f3ee.png"
            alt="予約入力画面②（お客様情報）"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            お客様情報の入力画面。WhatsApp番号を正確に入力することが重要。
          </figcaption>
        </figure>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          「Booking Request」を送信すると、ドライバーに通知が届きます。
          ドライバーが承認すると、WhatsAppに確認メッセージが届く仕組みです。
        </p>

        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/whatsapp-notify_55e3d28c.png"
            alt="WhatsAppへの通知画面"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            ドライバーが承認するとWhatsAppに通知が届く。
          </figcaption>
        </figure>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          最終的な金額や旅程の詳細についてドライバーと合意できない場合は、マイページから1クリックでキャンセルが可能です。
          事前のキャンセルは費用が発生しないため、複数のドライバーに問い合わせてから決める方法も有効です。
        </p>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑤ 予約方法②：複数のドライバーに一括で見積もりを依頼する
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>5. 予約方法②：複数のドライバーに一括で見積もりを依頼する</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          特定のドライバーを選ばずに、登録ドライバー全体に向けて旅程を公開し、複数の見積もりを受け取る方法もあります。
          価格を比較しながら最適なドライバーを選びたい方に向いています。
        </p>

        <H3 index={0}>「Get Multiple Quotes」から旅程を入力する</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          プラットフォームのトップページにある「Get Multiple Quotes」ボタンを押すと、旅程の入力フォームに進みます。
        </p>

        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/get-multiple-quotes_54fed1f6.png"
            alt="Get Multiple Quotesボタン"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            トップページの「Get Multiple Quotes」から一括見積もりを依頼できる。
          </figcaption>
        </figure>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          フォームには希望の出発日・出発地・目的地・人数・車種などを入力します。
          旅程の詳細をできるだけ具体的に記載することで、ドライバーからより正確な見積もりが届きます。
        </p>

        <figure className="mb-7 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/manus-storage/multiple-quotes-form_eddad78a.png"
            alt="Get Multiple Quotes入力フォーム"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-xs text-gray-400 mt-2 pb-1">
            旅程の詳細を入力して送信すると、複数のドライバーから見積もりが届く。
          </figcaption>
        </figure>

        <H3 index={1}>見積もりを確認してドライバーを決定する</H3>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          「Create account and Submit」を押すと、登録ドライバーにリクエストが届きます。
          興味を持ったドライバーからWhatsApp経由で見積もりの連絡が来ます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          金額・対応言語・評価などを比較して納得のいくドライバーが見つかったら、マイページの「View quotes」から「Accept」を押して予約を確定させます。
          その後、ドライバーから最終確認の連絡がWhatsApp経由で届きます。
        </p>

      </section>

      {/* ════════════════════════════════════════════════════
          H2 ⑥ 困ったときの対処法
      ════════════════════════════════════════════════════ */}
      <section className="mb-14">

        <H2>6. 困ったときの対処法</H2>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          プラットフォームの利用中に不明な点が生じた場合は、サイト内のサポート窓口からお問い合わせいただけます。
          また、ドライバーとの交渉がうまくいかない場合は、キャンセルして別のドライバーを探すことも可能です。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          なお、プラットフォームを通じた予約はドライバーとお客様の直接契約となります。
          SLTCSによる日本語サポートが必要な方は、複数日チャーターのプランをご検討ください。
          日本語スタッフが旅程の相談から当日のトラブル対応まで一貫してサポートします。
        </p>

        <div className="bg-[oklch(0.97_0.02_155)] border border-[oklch(0.85_0.05_155)] rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-[oklch(0.35_0.12_155)] mb-3">プラットフォームへの問い合わせ先</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[oklch(0.35_0.12_155)] flex-shrink-0">•</span>
              <span>プラットフォームサイト内のContactページからメールで問い合わせ可能</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[oklch(0.35_0.12_155)] flex-shrink-0">•</span>
              <span>ドライバーとの合意が取れない場合はマイページからキャンセルを実行</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[oklch(0.35_0.12_155)] flex-shrink-0">•</span>
              <span>SLTCSへのご相談は下記のお問い合わせフォームから</span>
            </li>
          </ul>
        </div>

      </section>

      {/* ════════════════════════════════════════════════════
          CTA（無料相談）
      ════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.12_155)] to-[oklch(0.28_0.10_155)] rounded-2xl p-8 text-center text-white mb-14">
        <p className="text-lg font-bold mb-2">スリランカ旅行の専用車チャーターを日本語で相談</p>
        <p className="text-sm opacity-90 mb-6">
          複数日チャーターをご検討の方は、日本語スタッフが旅程の組み立てから当日のサポートまで丁寧にお答えします。
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
          スリランカでの1日チャーターは、短い滞在でも自分のペースで観光を楽しみたい方にとって有効な選択肢です。
          プラットフォームを活用することで、複数のドライバーから条件を比較しながら手配を進めることができます。
        </p>

        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          ただし、ドライバーとの直接交渉が基本となるため、英語でのコミュニケーションや事前のWhatsApp準備が欠かせません。
          日本語サポートを希望する場合や、複数日にわたる旅程をご検討の場合は、SLTCSのプランもあわせてご確認ください。
        </p>

        {/* まとめリスト */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
          <p className="font-bold text-gray-800 mb-3">📋 1日チャーター利用のポイント</p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "プラットフォームから1日チャーターのドライバーを直接手配できる",
              "政府公認ライセンス保有ドライバーを選ぶと安心感が高まる",
              "WhatsAppの事前インストール・設定が必須",
              "表示料金は150km基準の目安額。超過距離分の追加費用が発生しやすい",
              "特定のドライバーへの直接リクエストと、一括見積もり依頼の2つの方法がある",
              "合意できない場合はマイページから無料でキャンセル可能",
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
            { href: "/blog/taxi-charter-basics/when-to-book-charter", label: "スリランカの専用車チャーターをいつ予約すべき？｜予約タイミング完全ガイド" },
            { href: "/blog/taxi-charter-basics/tip-manner-guide", label: "スリランカのチップ・マナー完全ガイド｜ドライバー・ホテル・レストラン別の相場" },
            { href: "/pricing", label: "SLTCSの料金一覧｜スリランカ専用車チャーターの価格" },
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
