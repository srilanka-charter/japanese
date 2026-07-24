import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useLocation } from "wouter";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    startDate: "", endDate: "", startLocation: "",
    adults: "", children: "0名", carType: "", course: ""
  });

  const [, navigate] = useLocation();

  const sendMutation = trpc.contact.send.useMutation({
    onSuccess: () => {
      // チャーター日数を計算してリダイレクト先を振り分け
      // diffDays: 0 = 1日チャーター（開始日=終了日）、diffDays: 1 = 2日チャーター
      // diffDays <= 1 → /another（コンバージョンタグなし）
      // diffDays >= 2 → /thanks（コンバージョンタグあり）
      if (form.startDate && form.endDate) {
        const start = new Date(form.startDate);
        const end = new Date(form.endDate);
        const diffDays = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays <= 1) {
          navigate("/another");
          return;
        }
      }
      navigate("/thanks");
    },
    onError: (err) => {
      toast.error(err.message || "送信に失敗しました。しばらくしてから再度お試しください。");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const travelers = `大人${form.adults}・子供${form.children}`;
    const days = form.startDate && form.endDate ? `${form.startDate} 〜 ${form.endDate}` : undefined;
    const messageLines = [
      form.startLocation ? `出発地：${form.startLocation}` : "",
      form.carType ? `車種：${form.carType}` : "",
      form.course ? `コース・備考：${form.course}` : "",
    ].filter(Boolean).join("\n");

    sendMutation.mutate({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      travelers,
      days,
      plan: form.carType || undefined,
      message: messageLines || undefined,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Form */}
          <div>
            <div className="mb-8">
              <span className="section-label">CONTACT</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] mt-2 leading-tight" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                まずはお気軽に<br />ご相談ください
              </h2>
              <p className="text-[oklch(0.5_0.02_155)] mt-4 leading-relaxed">
                旅の日程・人数・ご要望をお知らせいただければ、最適なプランと見積もりをご提案します。
              </p>
            </div>

            {submitted ? (
              <div className="bg-[oklch(0.35_0.12_155)]/10 border border-[oklch(0.35_0.12_155)]/30 rounded-2xl p-10 text-center">
                <CheckCircle className="mx-auto mb-4 text-[oklch(0.35_0.12_155)]" size={48} />
                <h3 className="text-xl font-bold text-[oklch(0.15_0.01_60)] mb-2">送信が完了しました</h3>
                <p className="text-[oklch(0.5_0.02_155)]">通常24時間以内にご返信いたします。</p>
                <p className="text-sm text-[oklch(0.5_0.02_155)] mt-2">ご入力のメールアドレスに確認メールをお送りしました。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-[oklch(0.5_0.02_155)] mb-2">フォームに必要事項をご記入の上、送信してください。通常24時間以内にご返信いたします。</p>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" name="name" required placeholder="お名前"
                    value={form.name} onChange={handleChange}
                    className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" name="email" required placeholder="メールアドレス"
                      value={form.email} onChange={handleChange}
                      className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel" name="phone" required placeholder="電話番号"
                      value={form.phone} onChange={handleChange}
                      className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                      開始日 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date" name="startDate" required
                      value={form.startDate} onChange={handleChange}
                      className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                      終了日 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date" name="endDate" required
                      value={form.endDate} onChange={handleChange}
                      className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                    />
                  </div>
                </div>

                {/* Start Location */}
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                    チャーター開始場所 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="startLocation" required
                    value={form.startLocation} onChange={handleChange}
                    className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                  >
                    <option value="">選択してください</option>
                    <option value="コロンボ空港（BIA）">コロンボ空港（BIA）</option>
                    <option value="コロンボ市内">コロンボ市内</option>
                    <option value="ネゴンボ">ネゴンボ</option>
                    <option value="キャンディ">キャンディ</option>
                    <option value="シーギリヤ">シーギリヤ</option>
                    <option value="ヌワラエリヤ">ヌワラエリヤ</option>
                    <option value="ゴール">ゴール</option>
                    <option value="その他（備考欄に記載）">その他（備考欄に記載）</option>
                  </select>
                </div>

                {/* Adults + Children */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                      大人の人数 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="adults" required
                      value={form.adults} onChange={handleChange}
                      className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                    >
                      <option value="">選択</option>
                      {["1名","2名","3名","4名","5名","6名","7名以上"].map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">子供の人数</label>
                    <select
                      name="children"
                      value={form.children} onChange={handleChange}
                      className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                    >
                      {["0名","1名","2名","3名","4名以上"].map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                </div>

                {/* Car Type */}
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                    車種 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="carType" required
                    value={form.carType} onChange={handleChange}
                    className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)]"
                  >
                    <option value="">選択してください</option>
                    <option value="セダン（〜3名）">セダン（〜3名）</option>
                    <option value="バン（〜6名）">バン（〜6名）</option>
                    <option value="ビッグバン（〜10名）">ビッグバン（〜10名）</option>
                    <option value="おまかせ">おまかせ</option>
                  </select>
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.25_0.05_155)] mb-1">
                    観光地・周遊コース（その他選択時は記載）
                  </label>
                  <textarea
                    name="course" rows={4}
                    placeholder="ご希望の観光地やコースがあればご記入ください"
                    value={form.course} onChange={handleChange}
                    className="w-full border border-[oklch(0.9_0.01_155)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_155)] bg-[oklch(0.98_0_0)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sendMutation.isPending}
                  className="w-full flex items-center justify-center gap-2 bg-[oklch(0.55_0.15_155)] hover:bg-[oklch(0.45_0.12_155)] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {sendMutation.isPending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      送信する
                    </>
                  )}
                </button>
                <p className="text-xs text-[oklch(0.6_0.02_155)] text-center">
                  上記送信ボタンを押すことでプライバシーポリシーへの同意となります。
                </p>
              </form>
            )}
          </div>

          {/* Right: Features - リッチデザイン */}
          <div>
            {/* セクションヘッダー */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[oklch(0.72_0.12_85)]" />
                <span className="text-xs font-bold tracking-[0.3em] text-[oklch(0.72_0.12_85)] uppercase">WHY SLTCS</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[oklch(0.72_0.12_85)]" />
              </div>
              {/* 装飾ダイヤモンド */}
              <div className="flex justify-center mb-3">
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <path d="M12 0L14 6H24L16 10L18 16L12 12L6 16L8 10L0 6H10L12 0Z" fill="oklch(0.72 0.12 85)" fillOpacity="0.6" />
                </svg>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] leading-tight" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                選ばれる5つの理由
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  svgIcon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                      <path d="M20 4L8 9v10c0 7.18 5.16 13.9 12 15.5C27.84 32.9 33 26.18 33 19V9L20 4z" fill="oklch(0.25 0.08 155)" />
                      <path d="M16 20l3 3 6-6" stroke="oklch(0.72 0.12 85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  num: "01",
                  title: "政府公認ドライバーの安心感",
                  desc: "スリランカ政府公認のTourist Driver・Chauffeur Guide Driverを厳選。安全運転と高い接客スキルを両立したプロフェッショナルが対応します。"
                },
                {
                  svgIcon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                      <circle cx="20" cy="20" r="14" fill="oklch(0.25 0.08 155)" />
                      <text x="13" y="22" fontSize="11" fontWeight="bold" fill="oklch(0.72 0.12 85)" fontFamily="serif">あ</text>
                      <text x="21" y="26" fontSize="9" fontWeight="bold" fill="white" fontFamily="sans-serif">A</text>
                    </svg>
                  ),
                  num: "02",
                  title: "日本語で安心のフルサポート",
                  desc: "予約から旅行終了まで、日本語に堪能なスタッフが一貫してサポート。言語の壁を感じることなく、安心して旅を楽しめます。"
                },
                {
                  svgIcon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                      <rect x="6" y="16" width="28" height="14" rx="4" fill="oklch(0.25 0.08 155)" />
                      <rect x="10" y="12" width="20" height="8" rx="3" fill="oklch(0.35 0.08 155)" />
                      <circle cx="12" cy="30" r="3" fill="oklch(0.72 0.12 85)" />
                      <circle cx="28" cy="30" r="3" fill="oklch(0.72 0.12 85)" />
                    </svg>
                  ),
                  num: "03",
                  title: "完全プライベートの自由な旅",
                  desc: "ツアーバスと違い、あなただけの専属チャーター。出発時間・訪問地・滞在時間すべてを自由にカスタマイズできます。"
                },
                {
                  svgIcon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                      <rect x="6" y="8" width="28" height="22" rx="2" fill="oklch(0.25 0.08 155)" />
                      <path d="M14 18l4 4 8-8" stroke="oklch(0.72 0.12 85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="26" cy="28" r="3" fill="oklch(0.72 0.12 85)" />
                    </svg>
                  ),
                  num: "04",
                  title: "観光地の深い知識と案内",
                  desc: "Chauffeur Guide Driverは歴史・文化・グルメに精通したガイドでもあります。教科書には載っていない現地の魅力を余すことなく伝えてくれます。"
                },
                {
                  svgIcon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                      <rect x="4" y="16" width="32" height="14" rx="4" fill="oklch(0.25 0.08 155)" />
                      <rect x="8" y="12" width="24" height="8" rx="3" fill="oklch(0.35 0.08 155)" />
                      <circle cx="11" cy="30" r="3" fill="oklch(0.72 0.12 85)" />
                      <circle cx="20" cy="30" r="3" fill="oklch(0.72 0.12 85)" />
                      <circle cx="29" cy="30" r="3" fill="oklch(0.72 0.12 85)" />
                    </svg>
                  ),
                  num: "05",
                  title: "人数に合わせた最適な車両",
                  desc: "2名様のカップルから10名様の大型グループまで、ご人数に合わせた最適な車両で、長距離移動も快適にご案内します。"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[oklch(0.9_0.02_85)] shadow-sm hover:shadow-md hover:border-[oklch(0.72_0.12_85)]/40 transition-all duration-200"
                  style={{ boxShadow: '2px 2px 0 oklch(0.72 0.12 85 / 0.15), 0 1px 3px rgba(0,0,0,0.08)' }}>
                  {/* アイコン円 */}
                  <div className="w-14 h-14 rounded-full border-2 border-[oklch(0.72_0.12_85)]/40 bg-[oklch(0.97_0.02_85)] flex items-center justify-center flex-shrink-0">
                    {item.svgIcon}
                  </div>
                  {/* 番号 */}
                  <div className="text-2xl font-black text-[oklch(0.72_0.12_85)] flex-shrink-0 w-8 text-center" style={{ fontFamily: "'Georgia', serif" }}>
                    {item.num}
                  </div>
                  {/* テキスト */}
                  <div className="flex-1 border-l border-[oklch(0.9_0.02_85)] pl-4">
                    <h3 className="font-bold text-[oklch(0.15_0.01_60)] mb-1 text-base">{item.title}</h3>
                    <p className="text-sm text-[oklch(0.45_0.02_155)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
