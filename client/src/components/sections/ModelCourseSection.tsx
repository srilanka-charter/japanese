import { Link } from "wouter";
import { ArrowRight, MapPin, Clock, ChevronRight } from "lucide-react";

const courses = [
  {
    nights: "3泊4日",
    label: "3泊4日",
    href: "/course/3-4days",
    badge: "SHORT",
    badgeColor: "bg-[oklch(0.55_0.15_155)]",
    theme: "from-[oklch(0.12_0.02_155)] to-[oklch(0.18_0.04_155)]",
    accentColor: "text-[oklch(0.65_0.15_155)]",
    borderColor: "border-[oklch(0.55_0.15_155)/30]",
    tagBg: "bg-[oklch(0.55_0.15_155)/15]",
    tagText: "text-[oklch(0.65_0.15_155)]",
    title: "文化三角地帯と紅茶列車を体験",
    subtitle: "シーギリヤ・キャンディ・ヌワラエリヤ",
    tags: ["世界遺産", "紅茶列車", "文化遺産"],
    highlights: [
      "ダンブッラ石窟寺院（世界遺産）",
      "シーギリヤ・ロック（世界遺産）",
      "キャンディ仏歯寺",
      "紅茶列車の旅",
      "ヌワラエリヤ高原",
    ],
    description: "スリランカの文化・歴史・自然を凝縮した入門コース。世界遺産と紅茶列車を効率よく体験できます。",
  },
  {
    nights: "4泊5日",
    label: "4泊5日",
    href: "/course/4-5days",
    badge: "POPULAR",
    badgeColor: "bg-[oklch(0.75_0.12_75)]",
    theme: "from-[oklch(0.12_0.02_155)] to-[oklch(0.16_0.03_60)]",
    accentColor: "text-[oklch(0.75_0.12_75)]",
    borderColor: "border-[oklch(0.75_0.12_75)/30]",
    tagBg: "bg-[oklch(0.75_0.12_75)/15]",
    tagText: "text-[oklch(0.75_0.12_75)]",
    title: "世界遺産・紅茶列車・南部ビーチを満喫",
    subtitle: "シーギリヤ・キャンディ・エッラ・ゴール",
    tags: ["世界遺産", "紅茶列車", "ビーチ"],
    highlights: [
      "シーギリヤ・ロック（世界遺産）",
      "キャンディ仏歯寺",
      "ナインアーチブリッジ",
      "エッラの絶景",
      "ゴール要塞（世界遺産）",
    ],
    description: "スリランカの定番スポットを余裕を持って巡る人気コース。紅茶列車と南部の世界遺産を両立。",
  },
  {
    nights: "5泊6日",
    label: "5泊6日",
    href: "/course/5-6days",
    badge: "LUXURY",
    badgeColor: "bg-[oklch(0.45_0.1_300)]",
    theme: "from-[oklch(0.12_0.02_155)] to-[oklch(0.15_0.03_300)]",
    accentColor: "text-[oklch(0.7_0.1_300)]",
    borderColor: "border-[oklch(0.45_0.1_300)/30]",
    tagBg: "bg-[oklch(0.45_0.1_300)/15]",
    tagText: "text-[oklch(0.7_0.1_300)]",
    title: "世界遺産・紅茶列車・サファリを体験",
    subtitle: "シーギリヤ・キャンディ・ヌワラエリヤ・ヤーラ・ゴール",
    tags: ["世界遺産", "サファリ", "紅茶列車"],
    highlights: [
      "シーギリヤ・ロック（世界遺産）",
      "キャンディ仏歯寺",
      "紅茶列車（ナインアーチブリッジ）",
      "ヤーラ国立公園サファリ",
      "ゴール要塞（世界遺産）",
    ],
    description: "スリランカの醍醐味をすべて詰め込んだ充実コース。サファリでスリランカヒョウに出会えるかも。",
  },
];

export default function ModelCourseSection() {
  return (
    <section className="py-20 bg-[oklch(0.97_0.005_155)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[oklch(0.55_0.12_75)] text-xs tracking-[0.3em] font-semibold uppercase mb-3">
            — MODEL COURSE —
          </p>
          <h2
            className="text-3xl lg:text-4xl font-black text-[oklch(0.12_0.02_155)] mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            タクシーチャーターで巡るモデルコース
          </h2>
          <div className="w-12 h-0.5 bg-[oklch(0.75_0.12_75)] mx-auto mb-4" />
          <p className="text-[oklch(0.45_0.02_155)] text-sm max-w-xl mx-auto leading-relaxed">
            旅の日程に合わせて選べる3つのコース。すべて日本語対応の専属ドライバーが全行程をサポートします。
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-[oklch(0.9_0.005_155)] hover:border-[oklch(0.75_0.12_75)/50] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${course.theme} px-5 pt-5 pb-6`}>
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`${course.badgeColor} text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest`}
                  >
                    {course.badge}
                  </span>
                  <span className="text-white/30 text-xs font-mono">{course.nights}</span>
                </div>
                <h3
                  className="text-white font-black text-lg leading-snug mb-1"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {course.title}
                </h3>
                <p className="text-white/50 text-xs flex items-center gap-1 mt-2">
                  <MapPin size={11} className="flex-shrink-0" />
                  {course.subtitle}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-white/70 text-[10px] px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 px-5 py-4">
                <p className="text-[oklch(0.45_0.02_155)] text-xs leading-relaxed mb-4">
                  {course.description}
                </p>
                {/* Highlights */}
                <div className="space-y-1.5">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[oklch(0.35_0.02_155)]">
                      <ChevronRight size={12} className={`${course.accentColor} flex-shrink-0`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5">
                <div
                  className={`flex items-center justify-between border-t ${course.borderColor} pt-4`}
                >
                  <div className="flex items-center gap-1.5 text-[oklch(0.5_0.02_155)] text-xs">
                    <Clock size={12} />
                    <span>{course.nights}（スリランカ国内）</span>
                  </div>
                  <span
                    className={`flex items-center gap-1 ${course.accentColor} text-xs font-bold group-hover:gap-2 transition-all`}
                  >
                    詳細を見る
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-[oklch(0.5_0.02_155)] text-sm mb-4">
            ご希望に合わせてカスタマイズも可能です
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[oklch(0.12_0.02_155)] hover:bg-[oklch(0.2_0.03_155)] text-white px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md"
          >
            無料で旅を相談する
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
