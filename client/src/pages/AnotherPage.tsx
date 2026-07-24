import { CheckCircle, Home, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

// このページにはGoogle Adsコンバージョンタグを設置しない。
// チャーター日数が1〜2日の場合にリダイレクトされるサンクスページ。
export default function AnotherPage() {
  useSEO({
    title: "お申し込みありがとうございます｜SLTCS スリランカタクシーチャーターサービス",
    description: "お申し込みを受け付けました。担当者より近日中にご連絡いたします。",
    path: "/another",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.01_155)] flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-10 text-center">
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-[oklch(0.35_0.12_155)]/10 rounded-full p-5">
            <CheckCircle className="text-[oklch(0.35_0.12_155)]" size={56} strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-2xl lg:text-3xl font-black text-[oklch(0.15_0.01_60)] mb-4 leading-snug"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          お問い合わせ<br />ありがとうございました
        </h1>

        {/* Message */}
        <p className="text-[oklch(0.4_0.02_155)] text-base leading-relaxed mb-2">
          担当者から<strong>24時間以内</strong>に連絡しますので<br />お待ちください。
        </p>
        <p className="text-sm text-[oklch(0.6_0.02_155)] mb-8">
          ご入力のメールアドレスに確認メールをお送りしました。<br />
          届かない場合は迷惑メールフォルダをご確認ください。
        </p>

        {/* キャリアメール注意書き */}
        <p className="text-sm text-red-600 font-bold leading-relaxed mb-6 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          docomo・au・softbankのメールアドレスは担当者からのメールが届かない可能性があります。お手数をおかけし申し訳ありませんが、これらのアドレスを入力された方は別のメールアドレスをご入力ください。
        </p>

        {/* Divider */}
        <div className="border-t border-[oklch(0.9_0.01_155)] mb-8" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <button className="flex items-center justify-center gap-2 bg-[oklch(0.55_0.15_155)] hover:bg-[oklch(0.45_0.12_155)] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto">
              <Home size={16} />
              トップページへ戻る
            </button>
          </Link>
          <Link href="/#contact">
            <button className="flex items-center justify-center gap-2 border border-[oklch(0.35_0.12_155)] text-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.35_0.12_155)]/5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 w-full sm:w-auto">
              <MessageCircle size={16} />
              別のお問い合わせ
            </button>
          </Link>
        </div>
      </div>

      {/* SLTCS branding */}
      <p className="mt-8 text-sm text-[oklch(0.6_0.02_155)]">
        SLTCS — Sri Lanka Private Charter Service
      </p>
    </div>
  );
}
