import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function PrivacyPolicyPage() {
  useSEO({
    title: "プライバシーポリシー｜SLTCS スリランカタクシーチャーターサービス",
    description: "SLTCS（スリランカタクシーチャーターサービス）のプライバシーポリシー。個人情報の取り扱い、利用目的、第三者提供について説明しています。",
    path: "/privacy",
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
            <span className="text-white/60">プライバシーポリシー</span>
          </div>
          <h1
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            プライバシーポリシー
          </h1>
          <p className="text-white/50 text-sm mt-3">
            スリランカタクシーチャーターサービス（SLTCS）<br />
            最終改定日：2025年7月23日
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto">
          <div className="prose prose-slate max-w-none space-y-10 text-[oklch(0.25_0.02_155)] text-[0.95rem] leading-relaxed">

            {/* 1 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第1条　適用範囲・定義・法的根拠
              </h2>
              <p>
                本プライバシーポリシー（以下「本ポリシー」）は、スリランカタクシーチャーターサービス（以下「当社」）が運営する本ウェブサイトおよびお問い合わせフォームを通じて取得する個人情報の取扱いについて定めるものです。当社は、香港法人 Sri Lanka Taxi Charter Service International Limited（CR No. 78456401）として設立されており、Personal Data (Privacy) Ordinance（Cap.486、以下「PDPO」）に定める Data Protection Principles（DPP）第1条から第6条を遵守します。
              </p>
              <p className="mt-3">
                「個人情報」とは、特定の個人を識別できる、またはその可能性のある情報であって、当社が実際にアクセス・処理可能な形式で保有するものをいいます。
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第2条　収集する情報の種類と必要性
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mt-2">
                  <thead>
                    <tr className="bg-[oklch(0.12_0.03_155)] text-white">
                      <th className="text-left p-3 font-semibold">情報の種類</th>
                      <th className="text-left p-3 font-semibold">具体的な項目</th>
                      <th className="text-left p-3 font-semibold">収集方法</th>
                      <th className="text-left p-3 font-semibold">必須／任意</th>
                      <th className="text-left p-3 font-semibold">未提供の場合</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">お客様情報</td>
                      <td className="p-3">氏名・メールアドレス・電話番号</td>
                      <td className="p-3">お問い合わせフォーム</td>
                      <td className="p-3 text-center">必須</td>
                      <td className="p-3">ご予約を承れません</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-3">旅程情報</td>
                      <td className="p-3">旅行日程・希望ルート・出発地</td>
                      <td className="p-3">お問い合わせフォーム</td>
                      <td className="p-3 text-center">必須</td>
                      <td className="p-3">手配が行えません</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">技術情報</td>
                      <td className="p-3">IPアドレス・クッキー・デバイス情報</td>
                      <td className="p-3">ブラウザ自動取得</td>
                      <td className="p-3 text-center">任意</td>
                      <td className="p-3">一部機能が制限される場合があります</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第3条　個人情報の利用目的
              </h2>
              <p>当社は、収集した個人情報を以下の目的のためにのみ利用します。</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>お問い合わせ・ご相談への回答および対応</li>
                <li>スリランカ国内における陸上輸送チャーターの手配・調整</li>
                <li>予約確認・旅程変更・緊急連絡等のご通知</li>
                <li>サービス品質の向上を目的とした統計的分析</li>
                <li>お客様が明示的に同意された場合に限るマーケティング情報の提供</li>
                <li>法令・規制・裁判所命令に基づく対応</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第4条　第三者への提供
              </h2>
              <p>当社は、業務上必要な範囲に限り、以下の者に個人情報を提供することがあります。</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>旅程を担当するスリランカ政府認定の観光ドライバー</li>
                <li>日本語サポートを担う関連会社（スリランカタクシーチャーター株式会社・横浜）</li>
                <li>PCI DSS レベル1認定の決済処理事業者</li>
                <li>秘密保持契約を締結したITベンダー・分析事業者</li>
                <li>法的義務に基づく行政機関・司法機関</li>
              </ul>
              <p className="mt-3">当社はいかなる場合も、上記以外の第三者へ個人情報を販売・貸与することはありません。</p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第5条　国際的なデータ移転
              </h2>
              <p>
                お客様の個人情報は、サービス提供のためスリランカまたは日本に移転される場合があります。当社は、TLS暗号化通信・契約条項・委託先監査等の手段により、PDPOが求める水準と同等以上の保護措置を講じます。
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第6条　保存期間
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mt-2">
                  <thead>
                    <tr className="bg-[oklch(0.12_0.03_155)] text-white">
                      <th className="text-left p-3 font-semibold">情報の種類</th>
                      <th className="text-left p-3 font-semibold">保存期間</th>
                      <th className="text-left p-3 font-semibold">根拠</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">お問い合わせ記録</td>
                      <td className="p-3">24か月</td>
                      <td className="p-3">カスタマーサポートの継続性</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-3">予約・旅程情報</td>
                      <td className="p-3">7年間</td>
                      <td className="p-3">帳簿保存義務・税務対応</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">アクセスログ・クッキー</td>
                      <td className="p-3">14か月</td>
                      <td className="p-3">Google Analytics 標準設定</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3">マーケティング同意記録</td>
                      <td className="p-3">同意撤回まで</td>
                      <td className="p-3">DPP第2条の比例原則</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第7条　クッキーおよびトラッキング技術
              </h2>
              <p>当社のウェブサイトでは以下のクッキーを使用しています。</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>必須クッキー：</strong>言語設定・セッション管理のために不可欠なもの</li>
                <li><strong>分析クッキー：</strong>Google Analytics GA4によるアクセス解析</li>
                <li><strong>マーケティングクッキー：</strong>お客様の同意を得た場合のみ使用</li>
              </ul>
              <p className="mt-3">クッキーの設定はブラウザの設定画面から変更・無効化できますが、一部の機能が正常に動作しなくなる場合があります。</p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第8条　セキュリティ対策
              </h2>
              <p>
                当社は、個人情報への不正アクセス・漏洩・改ざんを防止するため、HTTPS／TLS 1.3による通信の暗号化、AES-256による保存データの暗号化、ロールベースのアクセス制御、定期的なセキュリティ診断、ISO 27001に準拠したベンダー評価等の技術的・組織的措置を講じています。
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第9条　お客様の権利
              </h2>
              <p>
                PDPOに基づき、お客様は当社が保有する個人情報について、開示・訂正・削除・データポータビリティ（機械判読可能な形式での提供）を請求する権利を有します。また、ダイレクトマーケティングへの利用停止を求める権利もあります。当社は請求受領後40日以内に対応します。なお、開示請求には実費相当の手数料が発生する場合があります。
              </p>
              <p className="mt-3">
                当社の対応に不服がある場合は、香港個人情報保護委員会（PCPD）に苦情を申し立てることができます。
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第10条　情報漏洩時の対応
              </h2>
              <p>
                万一、お客様の権利・利益に影響を及ぼすおそれのある情報漏洩が発生した場合、当社は速やかに影響を受ける可能性のある方々およびPCPDに通知し、講じる是正措置の概要をお伝えします。
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第11条　本ポリシーの改定
              </h2>
              <p>
                当社は、法令の改正やサービス内容の変更に伴い、本ポリシーを随時改定することがあります。重要な変更を行う場合は、施行日の少なくとも14日前に本ページにてお知らせします。改定後のポリシーは、本ページへの掲載をもって効力を生じます。
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-lg font-bold text-[oklch(0.15_0.03_155)] border-l-4 border-[oklch(0.55_0.15_155)] pl-3 mb-3"
                style={{ fontFamily: "'Shippori Mincho', serif" }}>
                第12条　お問い合わせ窓口
              </h2>
              <div className="bg-[oklch(0.97_0.01_155)] rounded-xl p-5 text-sm space-y-1">
                <p className="font-semibold text-[oklch(0.15_0.03_155)]">Sri Lanka Taxi Charter Service International Limited</p>
                <p>Unit 2A, 17/F, Glenealy Tower, No. 1 Glenealy, Central, Hong Kong S.A.R.</p>
                <p>E-mail：<a href="mailto:contact@srilankataxicharterservice.com" className="text-[oklch(0.45_0.15_155)] hover:underline">contact@srilankataxicharterservice.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
