import { Sparkles } from 'lucide-react';

export default function PointsCard() {
  return (
    <div className="mx-4 mt-1 mb-5 space-y-3">
      <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E9ECEF]">
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-[#F8F9FA] to-transparent" />
        <div className="relative flex items-center gap-4 p-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="bg-[#FCBF49] text-[#212529] text-[10px] font-black px-2 py-0.5 rounded-md">
                9折兑换
              </span>
              <span className="text-[#D62828] text-[10px] font-semibold">限时优惠</span>
            </div>
            <p className="text-[#212529] font-bold text-base">农家土猪腊肉礼盒 500g</p>
            <p className="text-[#ADB5BD] text-xs mt-0.5">柴火熏制 · 产地直发</p>
            <p className="text-[#ADB5BD] text-xs line-through mt-0.5">价值128元</p>
            <button className="mt-3 bg-[#D62828] text-white text-xs font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity active:scale-95">
              立即兑换
            </button>
          </div>
          <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-[#E9ECEF]">
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
