import { ChevronRight, Sparkles, Gift } from 'lucide-react';

export default function PointsCard() {
  return (
    <div className="mx-4 mt-1 mb-5 space-y-3">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B30] via-[#FF5C30] to-[#FF8C00]" />
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/8 translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-4 right-6 opacity-40">
          <Sparkles size={40} className="text-yellow-200" />
        </div>
      </div>

      <div className="relative rounded-3xl overflow-hidden shadow-md bg-white border border-[#FFE8D0]">
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-[#FFF3E0] to-transparent" />
        <div className="relative flex items-center gap-4 p-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="bg-gradient-to-r from-[#FF3B30] to-[#FF8C00] text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                9折兑换
              </span>
              <span className="text-[#FF8C00] text-[10px] font-semibold">限时优惠</span>
            </div>
            <p className="text-[#1A1A1A] font-bold text-base">农家土猪腊肉礼盒 500g</p>
            <p className="text-[#999] text-xs mt-0.5">柴火熏制 · 产地直发</p>
            <p className="text-[#CCC] text-xs line-through mt-0.5">价值128元</p>
            <button className="mt-3 bg-gradient-to-r from-[#FF3B30] to-[#FF6B30] text-white text-xs font-bold px-5 py-2 rounded-full shadow-md shadow-red-200 hover:opacity-90 transition-opacity active:scale-95">
              立即兑换
            </button>
          </div>
          <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
            <img
              src="https://images.pexels.com/photos/1927385/pexels-photo-1927385.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="农家土猪腊肉礼盒"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
