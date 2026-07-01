import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function TermsPage() {
  useSEO({
    title: "利用規約・免責事項｜SLTCS スリランカタクシーチャーターサービス",
    description: "SLTCS（スリランカタクシーチャーターサービス）の利用規約および免責事項。サービスの性質、利用条件、責任の限界について説明しています。",
    path: "/terms",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[oklch(0.12_0.03_155)] pt-32 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-[oklch(0.75_0.12_75)] transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white/60">利用規約および免責事項</span>
          </div>
          <h1
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            利用規約および免責事項
          </h1>
          <p className="text-white/50 text-sm mt-3">
            スリランカタクシーチャーターサービス（SLTCS）<br />
            施行日：2026年2月7日
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-10 text-[oklch(0.25_0.02_155)] text-[0.95rem] leading-relaxed">

            {/* 1 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第1条　規約への同意
              </h2>
              <p>
                本ウェブサイト（以下「本サイト」）をご利用いただくことにより、お客様は本利用規約（以下「本規約」）の全条項に同意したものとみなされます。本規約に同意いただけない場合は、本サイトおよび当社サービスのご利用をお控えください。
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第2条　用語の定義
              </h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[oklch(0.15_0.03_155)]">「当社」／「SLTCS」</dt>
                  <dd className="mt-1 pl-4">Sri Lanka Taxi Charter Service International Limited（CR No. 78456401、香港法人）をいいます。</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[oklch(0.15_0.03_155)]">「本サービス」</dt>
                  <dd className="mt-1 pl-4">スリランカ国内の陸上輸送チャーターを希望するお客様と、観光運転免許を保有するドライバー（またはドライバー管理事業者）との間を取り次ぐ紹介・連絡調整サービスをいいます。当社は運送事業者ではなく、輸送契約の当事者にはなりません（第3条参照）。</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[oklch(0.15_0.03_155)]">「ドライバー」</dt>
                  <dd className="mt-1 pl-4">スリランカ当局が発行する有効な Tourist Driver Licence（観光運転免許）を保有する独立した第三者をいいます。</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[oklch(0.15_0.03_155)]">「当社サービス料」</dt>
                  <dd className="mt-1 pl-4">当社が本サービス（紹介・連絡取次・予約調整）の対価として受領するプラットフォーム利用料をいいます。</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[oklch(0.15_0.03_155)]">「ドライバー運賃」</dt>
                  <dd className="mt-1 pl-4">お客様とドライバーが直接合意し、スリランカ現地でお支払いいただく輸送費用をいいます。</dd>
                </div>
              </dl>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第3条　サービスの性質（仲介者としての立場）
              </h2>
              <p>
                当社はお客様とドライバー（またはドライバー管理事業者）の間を取り次ぐ仲介者として機能します。輸送に関する契約はお客様とドライバーとの間で直接成立するものであり、当社は運送サービスを提供せず、法令が求める範囲を超えてドライバーの行為について責任を負いません。
              </p>
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                <p className="font-semibold text-amber-800">重要なご案内</p>
                <p className="mt-1 text-amber-700">当社は宿泊・航空券・鉄道・観光施設チケット・ガイドの手配は行いません。本サービスはスリランカ国内の陸上輸送の紹介・連絡取次に限定されます。</p>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第4条　利用資格
              </h2>
              <p>
                本サービスをご利用いただくには、（i）満18歳以上であること、および（ii）お客様の居住地の法令のもとで有効に契約を締結できる法的能力を有することが必要です。
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第5条　予約・お支払い
              </h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-[oklch(0.15_0.03_155)]">(a) 当社サービス料（カード決済）</p>
                  <p className="mt-1">当社サービス料は日本円建てのカード決済のみでお支払いいただきます。決済処理は PCI DSS レベル1認定の事業者が担い、香港の当社口座に精算されます。</p>
                </div>
                <div>
                  <p className="font-semibold text-[oklch(0.15_0.03_155)]">(b) ドライバー運賃（現地精算）</p>
                  <p className="mt-1">ドライバー運賃はお客様とドライバーが直接合意し、スリランカ現地にてお支払いください。当社はドライバーへの報酬の回収・保管・配分を行わず、顧客資金口座や信託口座も運用しません。運賃の最終条件はお客様とドライバーの間で決定されます。</p>
                </div>
                <div>
                  <p className="font-semibold text-[oklch(0.15_0.03_155)]">(c) 予約確定</p>
                  <p className="mt-1">当社サービス料の決済が完了し、確認メールが送信された時点で当社による取次受付が完了します。輸送契約の成立はドライバーがお客様の申込みを承諾した時点となります。</p>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第6条　キャンセルおよび返金
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mt-2">
                  <thead>
                    <tr className="bg-[oklch(0.12_0.03_155)] text-white">
                      <th className="text-left p-3 font-semibold">キャンセルのタイミング</th>
                      <th className="text-left p-3 font-semibold">当社サービス料の取扱い</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">チャーター開始の7日前まで</td>
                      <td className="p-3">返金可（決済処理実費を差し引いた金額）</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-3">チャーター開始の2〜6日前</td>
                      <td className="p-3">返金不可（全額キャンセル料）</td>
                    </tr>
                    <tr>
                      <td className="p-3">前日以降・当日・無連絡不参加</td>
                      <td className="p-3">返金不可（全額キャンセル料）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-[oklch(0.45_0.02_155)]">
                ※ドライバー運賃はお客様とドライバーの直接精算のため、当社の返金対象外です。
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第7条　お客様の義務
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>正確な乗客情報・旅程情報をご提供ください。</li>
                <li>現地の法令およびドライバーの安全指示に従ってください。</li>
                <li>暴言・違法行為・危険物・禁止品の持ち込みはお控えください。</li>
                <li>当社が提示するルート・所要時間はあくまで参考情報です。旅程の最終判断はお客様ご自身で行ってください。</li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第8条　禁止行為
              </h2>
              <p>以下の行為を禁止します。</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>本サイトのリバースエンジニアリングまたは不正アクセス</li>
                <li>名誉毀損・わいせつ・権利侵害となるコンテンツの投稿・送信</li>
                <li>当社の書面による事前承諾なく、本サービスを第三者への再販・転売・代理手配目的で利用すること</li>
              </ul>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第9条　知的財産権
              </h2>
              <p>
                本サイト上のすべてのコンテンツ（ロゴ・テキスト・画像・グラフィック等）は当社またはライセンサーに帰属し、国際的な著作権法および商標法により保護されています。当社の書面による事前許可なく、複製・転載・二次利用することはできません。
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第10条　外部リンク
              </h2>
              <p>
                本サイトには外部ウェブサイトへのリンクが含まれる場合があります。当社はリンク先のコンテンツ・プライバシー慣行・サービスについて一切の責任を負いません。
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第11条　免責事項
              </h2>
              <p>
                本サービスは「現状有姿（as is）」で提供されます。当社は、特定目的への適合性・正確性・非侵害性を含む一切の保証（明示・黙示を問わず）を行いません。
              </p>
              <p className="mt-3">
                法令が許容する最大限の範囲において、当社の損害賠償責任は、当該請求の原因となった予約について実際にお支払いいただいた当社サービス料を上限とします。当社は以下について責任を負いません。
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>間接損害・逸失利益・結果的損害</li>
                <li>ドライバー（またはドライバー管理事業者）の行為・不作為</li>
                <li>交通渋滞・天候・自然災害・不可抗力による遅延・キャンセル</li>
              </ul>
              <p className="mt-3 text-sm text-[oklch(0.45_0.02_155)]">
                ※詐欺・故意の不正行為・法令上排除できない責任については、上記制限は適用されません。
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第12条　補償
              </h2>
              <p>
                お客様は、本規約への違反または本サービスの不正利用に起因して生じる一切の請求・損害・費用（合理的な弁護士費用を含む）から当社・役員・従業員・関連会社を免責・防御・補償することに同意します。
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第13条　規約の変更
              </h2>
              <p>
                当社は本規約を随時改定することがあります。重要な変更は、本ページに新たな「施行日」とともに掲載します。改定後に本サイトを継続してご利用いただいた場合、変更内容に同意したものとみなされます。
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第14条　準拠法および管轄裁判所
              </h2>
              <p>
                本規約は香港法に準拠し、同法に従って解釈されます。本規約に関連して生じる一切の紛争は、香港の裁判所の専属的管轄に服します。
              </p>
            </div>

            {/* 15 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第15条　お問い合わせ
              </h2>
              <div className="bg-[oklch(0.97_0.01_155)] rounded-xl p-5 text-sm space-y-1">
                <p className="font-semibold text-[oklch(0.15_0.03_155)]">Sri Lanka Taxi Charter Service International Limited</p>
                <p>Unit 2A, 17/F, Glenealy Tower, No. 1 Glenealy, Central, Hong Kong S.A.R.</p>
                <p>E-mail：<a href="mailto:contact@srilankataxicharterservice.com" className="text-[oklch(0.45_0.15_155)] hover:underline">contact@srilankataxicharterservice.com</a></p>
                <p className="mt-2 text-[oklch(0.45_0.02_155)]">
                  ※当社サービス料・予約手続きに関するお問い合わせは当社まで。運賃・輸送内容（遅延・事故・忘れ物等）に関する一次対応はドライバーへ直接お申し出ください。必要に応じ当社が連絡を取り次ぎます。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
