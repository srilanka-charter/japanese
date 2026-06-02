import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

// ─── お役立ち情報プルダウン構成 ───────────────────────────────────────────────
// セクション1: モデルコース（記事リスト形式）
const modelCourseLinks = [
  { label: "3泊4日スリランカモデルコース", href: "/course/3-4days" },
  { label: "4泊5日スリランカモデルコース", href: "/course/4-5days" },
  { label: "5泊6日スリランカモデルコース", href: "/course/5-6days" },
];

// セクション2: 観光地ガイド（既存ページへのリンク）
const sightseeingLinks = [
  { label: "シーギリヤ", href: "/sigiriya" },
  { label: "キャンディ", href: "/kandy" },
  { label: "ゴール", href: "/galle" },
  { label: "サファリ", href: "/safari" },
  { label: "紅茶列車（エッラ）", href: "/tea-train" },
];

// セクション3: 記事カテゴリー（「モデルコース」「空港送迎・都市間移動」を除く）
const blogCategories = [
  { label: "タクシーチャーターの基礎", slug: "taxi-charter-basics" },
  { label: "観光地ガイド", slug: "sightseeing-guide" },
  { label: "サファリ・自然体験", slug: "safari-nature" },
  { label: "属性別旅行", slug: "travel-by-type" },
  { label: "旅行計画・準備", slug: "travel-planning" },
  { label: "テーマ旅行", slug: "theme-travel" },
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

  const itemClass =
    "block px-4 py-2.5 text-sm text-white/80 hover:bg-[oklch(0.35_0.12_155)] hover:text-[oklch(0.75_0.12_75)] transition-colors duration-150 border-b border-white/5 last:border-0";
  const sectionLabelClass =
    "px-4 pt-3 pb-1 text-[10px] text-white/30 font-semibold tracking-widest uppercase";
  const dividerClass = "border-t border-white/10";

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

            <Link
              href="/activity"
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              アクティビティ
            </Link>

            {/* お役立ち情報 Dropdown */}
            <div
              className="relative"
              ref={blogRef}
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                お役立ち情報
                <ChevronDown size={14} className={`transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`} />
              </button>
              {blogOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-[oklch(0.12_0.02_155)] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">

                  {/* ── セクション1: モデルコース ── */}
                  <p className={sectionLabelClass}>モデルコース</p>
                  {modelCourseLinks.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setBlogOpen(false)}
                      className={itemClass}
                    >
                      {c.label}
                    </Link>
                  ))}

                  {/* ── セクション2: 観光地ガイド ── */}
                  <div className={dividerClass}>
                    <p className={sectionLabelClass}>観光地ガイド</p>
                  </div>
                  {sightseeingLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setBlogOpen(false)}
                      className={itemClass}
                    >
                      {s.label}
                    </Link>
                  ))}

                  {/* ── セクション3: 記事カテゴリー ── */}
                  <div className={dividerClass}>
                    <p className={sectionLabelClass}>記事カテゴリー</p>
                  </div>
                  {blogCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/blog/${cat.slug}`}
                      onClick={() => setBlogOpen(false)}
                      className={itemClass}
                    >
                      {cat.label}
                    </Link>
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

            <Link
              href="/activity"
              onClick={() => setMobileOpen(false)}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              アクティビティ
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
                  {/* モデルコース */}
                  <p className="px-3 pt-2 pb-0.5 text-[10px] text-white/30 font-semibold tracking-widest uppercase">モデルコース</p>
                  {modelCourseLinks.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                      className="block text-white/70 px-3 py-2.5 text-sm border-b border-white/5 last:border-0"
                    >
                      {c.label}
                    </Link>
                  ))}
                  {/* 観光地ガイド */}
                  <p className="px-3 pt-2 pb-0.5 text-[10px] text-white/30 font-semibold tracking-widest uppercase border-t border-white/10 mt-1">観光地ガイド</p>
                  {sightseeingLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                      className="block text-white/70 px-3 py-2.5 text-sm border-b border-white/5 last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                  {/* 記事カテゴリー */}
                  <p className="px-3 pt-2 pb-0.5 text-[10px] text-white/30 font-semibold tracking-widest uppercase border-t border-white/10 mt-1">記事カテゴリー</p>
                  {blogCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/blog/${cat.slug}`}
                      onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                      className="block text-white/70 px-3 py-2.5 text-sm border-b border-white/5 last:border-0"
                    >
                      {cat.label}
                    </Link>
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
