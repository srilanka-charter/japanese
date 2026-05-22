
const destinations = [
  {
    name: "シーギリヤ",
    desc: "世界遺産の天空の宮殿。スリランカを代表する絶景スポット",
    image: "/manus-storage/sigiriya_44803162.jpg",
    size: "large",
    href: "/sigiriya",
  },
  {
    name: "キャンディ仏歯寺",
    desc: "世界遺産の聖地",
    image: "/manus-storage/kandy_temple_bfd62ffc.jpg",
    size: "small",
    href: "/kandy",
  },
  {
    name: "ヌワラエリヤ高原",
    desc: "緑広がる高原の絶景",
    image: "/manus-storage/tea_plantation_e512c982.jpg",
    size: "small",
    href: "/nuwara-eliya",
  },
  {
    name: "ゴール旧市街",
    desc: "世界遺産の要塞都市",
    image: "/manus-storage/galle_fort_0f5575ef.jpg",
    size: "medium",
    href: "/galle",
  },
  {
    name: "サファリ",
    desc: "野生のヒョウや象に出会える",
    image: "/manus-storage/yala_leopard_769d6ffa.jpg",
    size: "medium",
    href: "/safari",
  },
  {
    name: "紅茶列車（エッラ）",
    desc: "九連アーチ橋と茶畑の絶景列車の旅",
    image: "/manus-storage/ella_nine_arch_8f10f348.webp",
    size: "medium",
    href: null,
  },
];

export default function DestinationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-label">DESTINATIONS</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.15_0.01_60)] mt-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            スリランカの魅力的な<br />観光スポット
          </h2>
          <p className="text-[oklch(0.5_0.02_155)] mt-3">世界遺産から絶景ビーチまで、多彩な魅力が凝縮された島国</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Large card - Sigiriya (clickable) */}
          <a
            href="/sigiriya"
            className="col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group h-64 lg:h-96 block cursor-pointer"
          >
            <img
              src={destinations[0].image}
              alt={destinations[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-bold text-xl">{destinations[0].name}</h3>
              <p className="text-white/70 text-sm">{destinations[0].desc}</p>
              <span className="inline-block mt-2 text-xs text-amber-300 font-semibold">詳しく見る →</span>
            </div>
          </a>

          {/* Small cards */}
          {destinations.slice(1).map((d, i) => {
            const cardContent = (
              <>
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-bold text-sm">{d.name}</h3>
                  <p className="text-white/70 text-xs">{d.desc}</p>
                  {d.href && (
                    <span className="inline-block mt-1 text-xs text-amber-300 font-semibold">詳しく見る →</span>
                  )}
                </div>
              </>
            );

            return d.href ? (
              <a
                key={i}
                href={d.href}
                className="relative rounded-2xl overflow-hidden group h-44 lg:h-44 block cursor-pointer"
              >
                {cardContent}
              </a>
            ) : (
              <div key={i} className="relative rounded-2xl overflow-hidden group h-44 lg:h-44">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
