import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ChevronDown, ChevronRight, MessageCircle } from "lucide-react";

const FAQ_TITLE = "スリランカタクシーチャーターサービスのよくある質問（FAQ）";
const FAQ_DESC =
  "SLTCS（スリランカタクシーチャーターサービス）に関するよくある質問をまとめました。料金・支払い・ドライバー・チップ・キャンセルなど、旅行前に気になる疑問にお答えします。";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "SLTCS（スリランカタクシーチャーターサービス）とはどのようなサービスですか？",
    a: (
      <>
        <p>
          SLTCS（スリランカタクシーチャーターサービス）は、香港法人{" "}
          <strong>Sri Lanka Taxi Charter Service International Limited</strong>{" "}
          が運営する、<strong>オンライン地上輸送マッチングサービス</strong>です。
          日本人旅行者と、スリランカ観光開発庁（SLTDA）に登録した観光ドライバーをつなぐ紹介・連絡取次サービスとして機能しています。
        </p>
        <p className="mt-2">
          輸送契約（運送契約）はお客様とドライバー（またはドライバー管理事業者）の間で直接成立し、当社は運送を行いません。
        </p>
        <p className="mt-2 text-amber-700 bg-amber-50 rounded-lg px-3 py-2 text-xs">
          ※重要：当社は宿泊・観光施設・アクティビティ・鉄道等の予約／販売／手配（代行）は行いません。本FAQに記載の情報は参考情報であり、各サービスの契約はお客様と提供者の間で直接成立します。
        </p>
      </>
    ),
  },
  {
    q: "チップはどのくらい渡せばよいですか？タイミングはいつですか？",
    a: (
      <>
        <p>
          チップの目安は<strong>1日あたり2,000〜4,000ルピー（約1,000〜2,000円）</strong>です。
          その日の行程が終わったタイミングでお渡しいただくのが一般的です。
          ひと言感謝の言葉を添えると、翌日以降もより気持ちのよいサービスにつながります。
        </p>
        <p className="mt-2 text-sm text-gray-500">※チップは任意です。</p>
      </>
    ),
  },
  {
    q: "日本語で旅程の相談やルート提案をしてもらえますか？",
    a: (
      <p>
        はい、可能です。ご希望の行程・訪問地をお伝えいただければ、現地事情を踏まえた<strong>移動ルート案・所要時間の目安</strong>をご案内します（参考情報の範囲）。
        旅程の最終決定はお客様ご自身が行います。
      </p>
    ),
  },
  {
    q: "サファリやホエールウォッチングなどのアクティビティ手配はお願いできますか？",
    a: (
      <>
        <p>
          <strong>シルバープラン以上</strong>をご利用の場合、サファリ（ジープツアー）やホエールウォッチングの手配については、ドライバー経由でのご依頼が可能です（現地実費）。
          ただし、予約・支払い・契約はお客様とドライバーの間で直接行ってください。
        </p>
        <p className="mt-2">
          アーユルヴェーダなどその他のアクティビティについては、現地到着後にドライバーへご相談いただくことは可能ですが、予約代行・販売は当社では行っておりません。
          ご不安な場合は事前のオンライン予約をご検討ください。
        </p>
      </>
    ),
  },
  {
    q: "ドライバーの運転技術や時間厳守は信頼できますか？",
    a: (
      <>
        <p>
          当社は資格・実績などの基準に基づいてドライバーを選定し、日本人ゲストが重視するポイント（時間厳守・安全運転・清潔感など）を事前に共有しています。
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ※輸送の提供者はドライバーであり、当社は運送品質を保証するものではありません。
        </p>
      </>
    ),
  },
  {
    q: "ベビーシートやチャイルドシートは用意してもらえますか？",
    a: (
      <p>
        可能な範囲でご案内いたします（在庫・地域によって異なります）。
        ご利用をご希望の場合は、<strong>事前にお問い合わせ</strong>いただけますようお願いいたします。
      </p>
    ),
  },
  {
    q: "ドライバーとの合流はスムーズにできますか？",
    a: (
      <>
        <p>
          出発前にドライバーの連絡先をお伝えしますので、事前にコンタクトが可能です。
          万一の事態が発生した場合も、メールや連絡窓口を通じてサポートいたします。
        </p>
        <p className="mt-2 text-sm text-gray-500">※合流の結果を保証するものではありません。</p>
      </>
    ),
  },
  {
    q: "観光地でのガイドや解説もしてもらえますか？",
    a: (
      <>
        <p>
          スリランカには、乗客輸送を担う「Tourist Driver」と、案内・解説まで対応できる上位資格「Chauffeur Guide Driver」の2種類があります。
        </p>
        <p className="mt-2">
          <strong>シルバープラン以上</strong>では、Chauffeur Guide Driver資格を持つドライバーが観光地での同行・解説に対応します。
          ただし、専門ガイドとは異なりますので、より詳細な解説が必要な場合はお客様ご自身で専門ガイドを手配いただくことをおすすめします。
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ※当社は専門ガイドの予約・販売・手配（代行）は行いません。
        </p>
      </>
    ),
  },
  {
    q: "お支払い方法について教えてください",
    a: (
      <>
        <p>
          当社へのお支払い（サービス料・予約取次手数料）はオンラインでのカード決済となります。
          <strong>ドライバー運賃は全額、現地でドライバーへ直接お支払い</strong>ください。
          当社はドライバー運賃の受領・保管・分配は行いません。
        </p>
      </>
    ),
  },
  {
    q: "料金に含まれるものと含まれないものを教えてください",
    a: (
      <>
        <p className="font-semibold text-gray-700 mb-1">料金に含まれるもの：</p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5 mb-3">
          <li>日本製車両の車代（セダン・バン・ビッグバン）</li>
          <li>ドライバーの人件費</li>
          <li>ドライバーの食事代・宿泊代</li>
          <li>車両保険料</li>
          <li>高速道路料金・駐車料金</li>
        </ul>
        <p className="font-semibold text-gray-700 mb-1">料金に含まれないもの：</p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5">
          <li>チップ（任意）</li>
          <li>観光地の入場料</li>
          <li>サファリ・アクティビティ等の料金</li>
        </ul>
        <p className="mt-3 text-xs text-gray-500">
          ※当日の行程変更・追加要望・時間延長等により運賃条件が変わる場合があります（お客様とドライバー間で協議）。
        </p>
      </>
    ),
  },
  {
    q: "紅茶列車の予約ができなかった場合、手配してもらえますか？",
    a: (
      <>
        <p>
          鉄道の予約はお客様ご自身でのオンライン手配をお願いしております。予約サイトは「<strong>12Go.Asia</strong>」のご利用がおすすめです。
        </p>
        <p className="mt-2">
          万が一予約が取れなかった場合でも、立ち席でも楽しめる区間の目安など、移動の観点から参考情報をご案内することは可能です。
        </p>
        <p className="mt-2 text-sm text-gray-500">※当社は鉄道等の予約代行・販売は行いません。</p>
      </>
    ),
  },
  {
    q: "直前で旅程や予定が変更になった場合はどうなりますか？",
    a: (
      <>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>
            <strong>旅行開始の7日前まで：</strong>キャンセル料0円。お支払い済みのサービス料は返金いたします（決済手数料等の実費を差し引く場合があります）。
          </li>
          <li>
            <strong>旅行開始の2〜6日前：</strong>サービス料の返金はいたしません（キャンセル料として申し受けます）。
          </li>
          <li>
            <strong>前日以降・当日：</strong>いかなる理由でも返金不可となります。
          </li>
        </ul>
        <p className="mt-2 text-xs text-gray-500">
          ※ドライバー運賃は現地での直接精算のため、当社の返金対象外です。
        </p>
      </>
    ),
  },
  {
    q: "初日の到着が深夜になる場合でも移動できますか？",
    a: (
      <>
        <p>
          基本的には対応可能ですが、ドライバーの稼働状況・安全面・道路状況等によっては難しい場合もあります。
          深夜到着の移動をご希望の場合は、<strong>事前にご相談ください</strong>。可能な限り柔軟に対応いたします。
        </p>
      </>
    ),
  },
  {
    q: "ドライバーのご紹介について教えてください",
    a: (
      <>
        <p>
          <strong>シルバープラン以上</strong>の場合、SLTDA（スリランカ観光開発庁）登録の観光ドライバーをご紹介します。
          日本語対応ドライバーのご希望には可能な範囲で対応しますが、供給状況等により確約できない場合があります。
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ※供給状況により、法令に適合する運送事業者（タクシー／ハイヤー等）をご案内する場合があります。
        </p>
      </>
    ),
  },
  {
    q: "海外旅行保険への加入は必要ですか？",
    a: (
      <>
        <p>
          <strong>加入を強くおすすめします。</strong>スリランカでは法令により全車両への保険加入が義務付けられていますが、補償水準は低く、死亡事故でも補償金は日本円換算で約30万円程度にとどまります。
        </p>
        <p className="mt-2">
          旅行中の治療費・物損・賠償等に備えるためには、お客様ご自身による海外旅行保険への加入が最も確実な手段です。
          クレジットカードに付帯の保険が利用できる場合もありますので、ご利用のカード会社の規約をご確認ください。
        </p>
      </>
    ),
  },
];

export default function FaqArticlePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = FAQ_TITLE;
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = FAQ_DESC;
    return () => {
      document.title = "スリランカタクシーチャーターサービス｜観光専用車で周遊しよう";
      metaDesc!.content = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[oklch(0.12_0.02_155)] pt-28 pb-14 text-center">
        <span className="section-label">FAQ</span>
        <h1
          className="text-3xl lg:text-4xl font-black text-white mt-3"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          よくあるご質問
        </h1>
        <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm">
          スリランカタクシーチャーターサービス（SLTCS）に関するよくある疑問にお答えします
        </p>
        {/* Breadcrumb */}
        <nav className="mt-6 flex items-center justify-center gap-1 text-xs text-white/40">
          <Link href="/" className="hover:text-white/70 transition-colors">
            ホーム
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/60">FAQ</span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Intro text */}
        <p className="text-sm text-gray-600 leading-relaxed mb-10 border-l-4 border-[oklch(0.35_0.12_155)] pl-4">
          以下は、SLTCS（スリランカタクシーチャーターサービス）をご検討・ご利用のお客様からよくいただくご質問をまとめたものです。
          ご不明な点がございましたら、お気軽にお問い合わせください。
        </p>

        {/* Table of contents */}
        <div className="bg-gray-50 rounded-2xl p-5 mb-10 border border-gray-200">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">目次</p>
          <ol className="space-y-1.5">
            {faqs.map((faq, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setOpenIndex(i);
                    document.getElementById(`faq-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="text-left text-sm text-[oklch(0.35_0.12_155)] hover:underline"
                >
                  {i + 1}. {faq.q}
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              id={`faq-${i}`}
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between px-5 py-4 text-left hover:bg-[oklch(0.35_0.12_155)]/5 transition-colors duration-200 gap-3"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[oklch(0.35_0.12_155)] text-white text-xs font-bold flex items-center justify-center">
                    Q
                  </span>
                  <span className="font-semibold text-gray-800 text-sm leading-snug">{faq.q}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`shrink-0 mt-0.5 text-[oklch(0.35_0.12_155)] transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pt-3 border-t border-gray-100 text-sm text-gray-700 leading-relaxed">
                  <div className="flex gap-3">
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">
                      A
                    </span>
                    <div className="flex-1">{faq.a}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-[oklch(0.12_0.02_155)] rounded-2xl p-8 text-center">
          <p className="text-white/80 text-sm mb-2">まだ疑問が解決しない場合は</p>
          <p className="text-white font-bold text-lg mb-5">お気軽にお問い合わせください</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[oklch(0.55_0.15_155)] hover:bg-[oklch(0.48_0.15_155)] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-200 shadow"
          >
            <MessageCircle className="w-4 h-4" />
            無料で相談する
          </Link>
        </div>
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
