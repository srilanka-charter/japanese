import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    startDate: "", endDate: "", startLocation: "",
    adults: "", children: "0名", carType: "", course: ""
  });

  const sendMutation = trpc.contact.send.useMutation({
    onSuccess: () => {
      setSubmitted(true);
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

          {/* Right: Features */}
          <div>
            <div className="mb-8">
              <span className="section-label">WHY SLTCS</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] mt-2 leading-tight" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                選ばれる5つの理由
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "🛡️",
                  title: "政府公認ドライバーの安心感",
                  desc: "スリランカ政府公認のTourist Driver・Chauffeur Guide Driverのみを厳選。安全運転と高い接客スキルを両立したプロフェッショナルが対応します。"
                },
                {
                  icon: "💬",
                  title: "日本語で安心のフルサポート",
                  desc: "予約から旅行終了まで、日本語に堪能なスタッフが一貫してサポート。言語の壁を感じることなく、安心して旅を楽しめます。"
                },
                {
                  icon: "🚗",
                  title: "完全プライベートの自由な旅",
                  desc: "ツアーバスと違い、あなただけの専属チャーター。出発時間・訪問地・滞在時間すべてを自由にカスタマイズできます。"
                },
                {
                  icon: "🗺️",
                  title: "観光地の深い知識と案内",
                  desc: "Chauffeur Guide Driverは歴史・文化・グルメに精通したガイドでもあります。教科書には載っていない現地の魅力を余すことなく伝えてくれます。"
                },
                {
                  icon: "🚌",
                  title: "人数に合わせた最適な車両",
                  desc: "2名様のカップルから10名様の大型グループまで、ご人数に合わせた最適な車両で、長距離移動も快適にご案内します。"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-[oklch(0.9_0.01_155)] hover:border-[oklch(0.35_0.12_155)]/30 hover:bg-[oklch(0.35_0.12_155)]/5 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.35_0.12_155)]/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[oklch(0.15_0.01_60)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[oklch(0.5_0.02_155)] leading-relaxed">{item.desc}</p>
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
