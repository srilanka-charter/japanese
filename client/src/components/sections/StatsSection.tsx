import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 399, suffix: "+", label: "累計チャーター実績" },
  { value: 4.9, suffix: "", label: "平均顧客満足度", decimal: true },
  { value: 20, suffix: "名", label: "在籍ドライバー数" },
  { value: 5, suffix: "名", label: "在籍日本語ドライバー" },
];

function CountUp({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimal]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[oklch(0.12_0.02_155)] py-12 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-[oklch(0.75_0.12_75)] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                <CountUp target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              </div>
              <div className="text-white/60 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
