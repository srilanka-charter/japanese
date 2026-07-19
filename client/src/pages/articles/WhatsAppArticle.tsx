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

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 my-5 text-sm text-amber-900 leading-relaxed">
      <span className="font-bold">【注意】</span> {children}
    </div>
  );
}

export default function WhatsAppArticle() {
  useSEO({
    title: "WhatsAppのダウンロードと設定方法をわかりやすく説明します | SLTCS",
    description:
      "スリランカ旅行に必須のWhatsApp（ワッツアップ）のインストール方法・初期設定・ドライバーへの連絡方法をわかりやすく解説。旅行前に準備しておきましょう。",
    path: "/blog/whats-app",
    noindex: false,
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "WhatsAppのダウンロードと設定方法をわかりやすく説明します",
        description:
          "スリランカ旅行に必須のWhatsAppのインストール方法・初期設定・ドライバーへの連絡方法をわかりやすく解説。",
        author: { "@type": "Organization", name: "SLTCS" },
        datePublished: "2026-04-07",
        inLanguage: "ja",
      },
    ],
    jsonLdIdPrefix: "whatsapp-article",
  });

  return (
    <article className="text-gray-800">
      {/* ── リード文 ── */}
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-6">
        日本では日常的なやりとりにLINEが広く使われていますが、このアプリが定番として機能するのは国内に限られます。
        海外に目を向けると、FacebookのMessengerや<strong className="text-gray-900">WhatsApp</strong>が人々の間で標準的なコミュニケーション手段となっています。
      </p>
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-4">
        スリランカにおいてはWhatsAppの普及率が非常に高く、現地で最もよく利用される連絡方法です。
      </p>
      <p className="text-base sm:text-lg leading-[1.9] text-gray-700 mb-10">
        あらかじめインストールして使える状態にしておけば、車の手配先とのメッセージのやりとりはもちろん、
        飲食店やアクティビティの予約連絡にも幅広く対応できるため、旅行者にとって欠かせない存在といえます。
        本記事では、WhatsAppの入手から初期設定までの手順をわかりやすく解説していきます。
      </p>

      {/* ── 目次 ── */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-12">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">目次</p>
        <ol className="space-y-1.5 text-sm">
          {[
            ["1", "WhatsAppのインストール方法"],
            ["2", "初期設定"],
            ["3", "自分の連絡先を登録"],
            ["4", "Driverと連絡を取る"],
          ].map(([num, label]) => (
            <li key={num} className="flex items-start gap-2 text-gray-600">
              <span className="text-[oklch(0.35_0.12_155)] font-bold flex-shrink-0">{num}.</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════
          H2 ① インストール方法
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section1">
        <H2 id="section1">WhatsAppのインストール方法</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          まずはダウンロードをしましょう。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          iPhoneならApple Store、アンドロイドならGoogle Playで「<strong className="text-gray-900">ワッツアップ</strong>」と日本語で検索すれば、ダウンロード画面が表示されます。
        </p>
        <NoteBox>
          WhatsApp Businessというアプリがあります。<strong>WhatsApp Businessではなく、WhatsApp Messenger</strong>を間違えずに選択してダウンロードしましょう。
        </NoteBox>

        {/* ストアリンクカード */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <a
            href="https://apps.apple.com/jp/app/whatsapp-messenger/id310633997"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900 text-white rounded-xl p-4 hover:bg-gray-800 transition-colors"
          >
            <div className="text-3xl">🍎</div>
            <div>
              <p className="text-xs text-gray-400">App Store</p>
              <p className="font-bold">iPhone でダウンロード</p>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-700 text-white rounded-xl p-4 hover:bg-green-600 transition-colors"
          >
            <div className="text-3xl">▶</div>
            <div>
              <p className="text-xs text-green-300">Google Play</p>
              <p className="font-bold">Android でダウンロード</p>
            </div>
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ② 初期設定
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section2">
        <H2 id="section2">初期設定</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          次に初期設定に移っていきましょう。
        </p>
        <div className="space-y-3">
          <StepCard step={1} title="言語を選択">
            最初の画面で<strong>日本語</strong>を選択します。
          </StepCard>
          <StepCard step={2} title="利用規約に同意">
            内容を確認して「同意して実行」をタップします。
          </StepCard>
          <StepCard step={3} title="通知を許可">
            通知の許可設定も忘れずに行っておきましょう。日頃あまり使い慣れていないアプリだと、メッセージが届いても見落としてしまうことがあります。
            少なくとも<strong>旅行期間中は通知をオンにしておくことをおすすめします</strong>。
          </StepCard>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ③ 自分の連絡先を登録
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section3">
        <H2 id="section3">自分の連絡先を登録</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          次に自分の連絡先の登録になります。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          「次へ」をタップするとSMSで認証コードが届きますので、それを入力して登録手続きを完了させましょう。
          続いてプロフィールの設定画面に移ります。
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
          お名前はローマ字表記で「<strong>Ichiro Suzuki</strong>」のように入力してください。
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          H2 ④ Driverと連絡を取る
      ════════════════════════════════════════════════════ */}
      <section className="mb-14" id="section4">
        <H2 id="section4">Driverと連絡を取る</H2>
        <p className="text-base leading-[1.9] text-gray-700 mb-4">
          次にお伝えするドライバーとの連絡先を元に、ドライバーと連絡する手順をお伝えします。
        </p>
        <p className="text-base leading-[1.9] text-gray-700 mb-6">
          ドライバーには以下の通りピックアップ場所とともに連絡していただければと思います。
        </p>

        {/* 日本語メッセージ例 */}
        <div className="mb-6">
          <p className="text-sm font-bold text-gray-600 mb-2">日本語版メッセージ例：</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-800 leading-relaxed font-mono whitespace-pre-line">
{`こんにちは！私の名前はYuki Tanakiです。
SLTCSで予約をしました。9/13〜9/17の5日間よろしくお願いします。
今回の旅程は以下です。

9/13 11:00 Flight番号SQ468 バンダラナイケ国際空港に到着。
10時半頃に空港のPaging AreaでPick Up
ダンブッラ石窟寺院を観光
ホテル シーギリヤに宿泊

9/14 早朝にピドゥンガラロックに登頂
午後から貴方経由でサファリを予約したいです
ホテル シーギリヤに宿泊

9/15 キャンディへ移動
キャンディ仏歯寺を観光
Earl's Regent Hotelに宿泊

9/16 紅茶列車にのってヌワラエリヤへ
ヘリタンス ティーファクトリーに宿泊

9/17 朝からコロンボに向けて出発
コロンボ観光
18時半の便に乗るために16時に空港へ`}
          </div>
        </div>

        <div className="bg-[oklch(0.97_0.03_155)] border border-[oklch(0.75_0.12_155)] rounded-xl p-4 mb-6 text-sm text-[oklch(0.25_0.10_155)]">
          <p className="font-bold mb-1">💡 翻訳のコツ</p>
          <p className="leading-relaxed">
            ChatGPTやDeepLで英語にしてからドライバーのチャット画面にコピー＆ペーストしましょう。
            日本語で作った上で英語にすることで、内容の確認もしやすくなります。
          </p>
        </div>

        {/* 英語メッセージ例 */}
        <div className="mb-6">
          <p className="text-sm font-bold text-gray-600 mb-2">英語版メッセージ例（翻訳後）：</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-800 leading-relaxed font-mono whitespace-pre-line">
{`Hello! My name is Yuki Tanaka.
I have made a booking with LankaRide.
I'll be in your care for 5 days from September 13th to 17th.
Here is my itinerary:

Sep 13: Arriving at Bandaranaike International Airport at 11:00, Flight SQ468.
Please pick me up at the Airport Paging Area around 10:30.
Sightseeing at Dambulla Cave Temple. Stay at Hotel Sigiriya.

Sep 14: Early morning climb at Pidurangala Rock.
I'd like to book a safari through you in the afternoon.
Stay at Hotel Sigiriya.

Sep 15: Travel to Kandy.
Visit Temple of the Tooth (Sri Dalada Maligawa).
Stay at Earl's Regent Hotel.

Sep 16: Take the tea train to Nuwara Eliya.
Stay at Heritance Tea Factory.

Sep 17: Depart for Colombo in the morning.
Sightseeing in Colombo.
Head to airport by 4:00 PM for 6:30 PM flight.`}
          </div>
        </div>
      </section>
    </article>
  );
}
