import { useState } from "react";

const charterPricingPlan = {
  accentColor: "#c8a96e",
  pricing: {
    sedan: [45000, 50000, 59000, 72000, 85000, 99000, 112000],
    van: [52000, 59000, 71000, 87000, 103000, 120000, 136000],
    bigvan: [60000, 65000, 79000, 97000, 115000, 134000, 152000],
  },
};

const days = [2, 3, 4, 5, 6, 7, 8];

const vehicleTypes = [
  { key: "sedan", label: "Sedan（〜3人）" },
  { key: "van", label: "Van（3〜6人）" },
  { key: "bigvan", label: "Big Van（6〜9人）" },
] as const;

type VehicleType = (typeof vehicleTypes)[number]["key"];

export default function CharterPricingTable() {
  const [activeVehicle, setActiveVehicle] = useState<VehicleType>("sedan");

  return (
    <div className="mt-6">
      <div className="flex gap-2 mb-4 flex-wrap" aria-label="車種を選択">
        {vehicleTypes.map((vehicle) => (
          <button
            key={vehicle.key}
            type="button"
            onClick={() => setActiveVehicle(vehicle.key)}
            aria-pressed={activeVehicle === vehicle.key}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeVehicle === vehicle.key
                ? "text-[#0a1a12] shadow-md"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
            style={activeVehicle === vehicle.key ? { backgroundColor: charterPricingPlan.accentColor } : {}}
          >
            {vehicle.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th scope="col" className="text-left py-3 px-4 text-white/60 font-medium">日数</th>
              <th scope="col" className="text-right py-3 px-4 text-white/60 font-medium">料金（税込）</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day, index) => (
              <tr key={day} className={`border-b border-white/5 ${index % 2 === 0 ? "bg-white/5" : ""}`}>
                <td className="py-3 px-4 text-white/80">{day}日間</td>
                <td className="py-3 px-4 text-right font-bold" style={{ color: charterPricingPlan.accentColor }}>
                  ¥{charterPricingPlan.pricing[activeVehicle][index].toLocaleString()}〜
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
