import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[oklch(0.35_0.12_155)] hover:bg-[oklch(0.25_0.1_155)] text-white px-5 py-3 rounded-full shadow-2xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
    >
      <MessageCircle size={18} />
      無料で相談する
    </button>
  );
}
