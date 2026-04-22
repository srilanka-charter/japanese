import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, MessageCircle, Globe } from "lucide-react";

const modelCourses = [
  { label: "4泊5日スリランカモデルコース", href: "/course/4-5days", internal: true },
  { label: "5泊6日スリランカモデルコース", href: "/course/5-6days", internal: true },
  { label: "6泊7日スリランカモデルコース", href: "/course/6-7days", internal: true },
];

const languages = [
  { label: "English", href: "https://en.srilanka-charter.com/" },
  { label: "French", href: "https://fr.srilanka-charter.com/" },
  { label: "Spanish", href: "https://es.srilanka-charter.com/" },
  { label: "German", href: "https://de.srilanka-charter.com/" },
  { label: "Dutch", href: "https://nl.srilanka-charter.com/" },
  { label: "Russian", href: "https://ru.srilanka-charter.com/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [location] = useLocation();
  const langRef = useRef<HTMLDivElement>(null);

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

            {/* Model Course Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCourseOpen(true)}
              onMouseLeave={() => setCourseOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                モデルコース
                <ChevronDown size={14} className={`transition-transform duration-200 ${courseOpen ? "rotate-180" : ""}`} />
              </button>
              {courseOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-[oklch(0.12_0.02_155)] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                  {modelCourses.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setCourseOpen(false)}
                      className="block px-4 py-3 text-sm text-white/80 hover:bg-[oklch(0.35_0.12_155)] hover:text-[oklch(0.75_0.12_75)] transition-colors duration-150 border-b border-white/5 last:border-0"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/vehicles"
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              車両
            </Link>

            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                if (location !== "/") { window.location.href = "/#faq"; return; }
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              FAQ
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="text-white/90 hover:text-[oklch(0.75_0.12_75)] px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              お問い合わせ
            </a>

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

            <a
              href="#contact"
              onClick={scrollToContact}
              className="ml-2 flex items-center gap-2 bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.65_0.1_75)] text-[oklch(0.12_0.02_155)] px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle size={14} />
              無料で相談する
            </a>
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

            <div>
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="flex items-center justify-between w-full text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
              >
                モデルコース
                <ChevronDown size={16} className={`transition-transform ${courseOpen ? "rotate-180" : ""}`} />
              </button>
              {courseOpen && (
                <div className="pl-4 bg-black/20">
                  {modelCourses.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => { setMobileOpen(false); setCourseOpen(false); }}
                      className="block text-white/70 px-3 py-2.5 text-sm border-b border-white/5 last:border-0"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/vehicles"
              onClick={() => setMobileOpen(false)}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              車両
            </Link>

            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (location !== "/") { window.location.href = "/#faq"; return; }
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              FAQ
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="block text-white/90 px-3 py-3 text-base font-medium border-b border-white/10"
            >
              お問い合わせ
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="block mt-3 text-center bg-[oklch(0.75_0.12_75)] text-[oklch(0.12_0.02_155)] px-5 py-3 rounded-full text-base font-bold"
            >
              無料で相談する
            </a>

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
