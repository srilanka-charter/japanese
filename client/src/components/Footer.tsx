import { Link } from "wouter";

export default function Footer() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.08_0.02_155)] text-white/60 py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div
              className="text-white text-xl mb-0.5 tracking-wider leading-tight"
              style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 700 }}
            >
              スリランカタクシーチャーターサービス
            </div>
            <div
              className="text-[oklch(0.75_0.12_75)] text-sm tracking-[0.25em] mb-4"
              style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 500 }}
            >
              SLTCS
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              スリランカ全土を日本語対応の専属ドライバーと巡る完全プライベートチャーターサービス。
            </p>
          </div>
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">ナビゲーション</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/plan" className="hover:text-[oklch(0.75_0.12_75)] transition-colors">プラン</Link></li>
              <li>
                <a href="https://srilanka-charter.com/4-5days.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.75_0.12_75)] transition-colors">
                  4泊5日モデルコース
                </a>
              </li>
              <li>
                <a href="https://srilanka-charter.com/5-6days.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.75_0.12_75)] transition-colors">
                  5泊6日モデルコース
                </a>
              </li>
              <li>
                <a href="https://srilanka-charter.com/6-7days.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.75_0.12_75)] transition-colors">
                  6泊7日モデルコース
                </a>
              </li>
              <li><Link href="/vehicles" className="hover:text-[oklch(0.75_0.12_75)] transition-colors">車両</Link></li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-[oklch(0.75_0.12_75)] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" onClick={scrollToContact} className="hover:text-[oklch(0.75_0.12_75)] transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">お問い合わせ</h4>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-block bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.65_0.1_75)] text-[oklch(0.12_0.02_155)] px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200"
            >
              無料で相談する
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30">
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <Link href="/privacy" className="hover:text-[oklch(0.75_0.12_75)] transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-[oklch(0.75_0.12_75)] transition-colors">
              利用規約および免責事項
            </Link>
          </div>
          Copyright © スリランカタクシーチャーターサービス All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
