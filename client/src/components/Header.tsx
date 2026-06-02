import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

// ─── お役立ち情報プルダウン構成 ───────────────────────────────────────────────
const blogMenuItems = [
  { label: "モデルコース", href: "/blog/model-course" },
  { label: "観光地ガイド", href: "/blog/sightseeing-guide" },
  { label: "タクシーチャーターの基礎", href: "/blog/taxi-charter-basics" },
  { label: "アクティビティ", href: "/activity" },
  { label: "旅行計画・準備", href: "/blog/travel-planning" },
  { label: "テーマ旅行", href: "/blog/theme-travel" },
];

const languages = [
  { label: "English", href: "https://en.srilanka-charter.com/" },
  { label: "French", href: "https://fr.srilanka-charter.com/" },
  { label: "Spanish", href: "https://es.srilanka-charter.com/" },
  { label: "German", href: "https://de.srilanka-charter.com/" },
  { label: "Dutch", href: "https://nl.srilanka-charter.com/" },
  { label: "Russian", href: "https://ru.srilanka-charter.com/" },
  { label: "Malay", href: "https://ms.srilanka-charter.com/" },
  { label: "Swedish", href: "https://sv.srilanka-charter.com/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [location] = useLocation();
  const langRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (blogRef.current && !blogRef.current.contains(e.target as Node)) {
        setBlogOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location !== "/") {
      window.location.href = "/#contact";
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.12_0.02_155)/95] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none gap-0.5">
              <span
                className="text-white text-base sm:text-lg tracking-wider leading-tight"
                style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 700 }}
              >
                スリランカタクシーチャーターサービス
              </span>
              <span
                className="text-[oklch(0.75_0.12_75)] text-[11px] tracking-[0.25em]"
                style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 500 }}
              >
                SLTCS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/plan"
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              プラン
            </Link>

            <Link
              href="/vehicles"
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              車両
            </Link>

            <Link
              href="/pricing"
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              価格
            </Link>

            {/* お役立ち情報 Dropdown（ホバーで開閉） */}
            <div
              className="relative"
              ref={blogRef}
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <span className="flex items-center gap-1 text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 cursor-default select-none">
                お役立ち情報
                <ChevronDown size={14} className={`transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`} />
              </span>
              {blogOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-[oklch(0.12_0.02_155)] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                  {blogMenuItems.map((item) => (
                    item.href.startsWith("http") ? (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setBlogOpen(false)}
                        className="block px-4 py-3 text-sm text-white/80 hover:bg-[oklch(0.35_0.12_155)] hover:text-[oklch(0.75_0.12_75)] transition-colors duration-150 border-b border-white/5 last:border-0"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setBlogOpen(false)}
                        className="block px-4 py-3 text-sm text-white/80 hover:bg-[oklch(0.35_0.12_155)] hover:text-[oklch(0.75_0.12_75)] transition-colors duration-150 border-b border-white/5 last:border-0"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              お問い合わせ
            </a>

            <Link
              href="/faq"
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              FAQ
            </Link>

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/90 hover:text-[oklch(0.75_0.12_75)] px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                <Globe size={15} />
                <ChevronDown size={13} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-36 bg-[oklch(0.12_0.02_155)] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                  {languages.map((lang) => (
                    <a
                      key={lang.href}
                      href={lang.href}
                      className="block px-4 py-2.5 text-sm text-white/80 hover:bg-[oklch(0.35_0.12_155)] hover:text-[oklch(0.75_0.12_75)] transition-colors duration-150 border-b border-white/5 last:border-0"
                    >
                      {lang.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.12_0.02_155)/98] backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/plan"
              onClick={() => setMobileOpen(false)}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              プラン
            </Link>

            <Link
              href="/vehicles"
              onClick={() => setMobileOpen(false)}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              車両
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              価格
            </Link>

            {/* Mobile お役立ち情報 */}
            <div>
              <button
                onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                className="flex items-center justify-between w-full text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
              >
                お役立ち情報
                <ChevronDown size={16} className={`transition-transform ${mobileBlogOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileBlogOpen && (
                <div className="pl-4 bg-black/20">
                  {blogMenuItems.map((item) => (
                    item.href.startsWith("http") ? (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                        className="block text-white/70 px-3 py-2.5 text-sm border-b border-white/5 last:border-0"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                        className="block text-white/70 px-3 py-2.5 text-sm border-b border-white/5 last:border-0"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              お問い合わせ
            </a>

            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              FAQ
            </Link>

            {/* Mobile Language Switcher */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 px-3 py-2 text-white/50 text-xs tracking-wider uppercase">
                <Globe size={13} />
                Other Languages
              </div>
              {languages.map((lang) => (
                <a
                  key={lang.href}
                  href={lang.href}
                  className="block text-white/70 px-3 py-2.5 text-sm border-b border-white/5 last:border-0 hover:text-[oklch(0.75_0.12_75)] transition-colors"
                >
                  {lang.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
