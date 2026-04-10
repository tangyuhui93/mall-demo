import { ChevronRight, Zap } from 'lucide-react';

export default function PointsCard() {
  return (
    <div className="mx-4 mt-3 mb-5 space-y-3">
      <div className="relative rounded-[24px] overflow-hidden shadow-xl">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #FF3B30 0%, #E62E2E 100%)' }} />
        <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white/10 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/8 translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-3 right-12 w-16 h-16 rounded-full bg-white/5" />

        <div className="relative p-5 pb-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-white/80 text-xs font-semibold tracking-widest mb-2 uppercase">我的积分</p>
              <div className="flex items-end gap-2">
                <span className="text-[52px] font-black text-white tracking-tight leading-none">10,380</span>
                <span className="text-white/90 text-base mb-1.5 font-bold">分</span>
              </div>
            </div>
            <button
              className="mt-1 flex items-center gap-1.5 rounded-2xl px-4 py-2 text-[#CC0000] text-xs font-black shadow-lg active:scale-95 transition-transform"
              style={{ background: '#FFEB3B' }}
            >
              <Zap size={13} fill="#CC0000" />
              赚积分
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-2xl px-3.5 py-2.5" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <div className="w-2 h-2 rounded-full bg-[#FFEB3B] animate-pulse flex-shrink-0" />
            <p className="text-white/90 text-xs flex-1">
              积分将于 <span className="font-black text-[#FFEB3B]">2025年12月31日</span> 到期，请尽快使用
            </p>
            <ChevronRight size={13} className="text-white/70 flex-shrink-0" />
          </div>
        </div>
      </div>

      <div className="relative rounded-[20px] overflow-hidden shadow-lg bg-white">
        <div className="absolute right-0 top-0 bottom-0 w-1/2" style={{ background: 'linear-gradient(to left, #FFF3E0, transparent)' }} />
        <div className="relative flex items-center gap-4 p-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-2">
              <span
                className="text-white text-[10px] font-black px-2.5 py-1 rounded-lg"
                style={{ background: 'linear-gradient(90deg, #FF3B30, #FF6B30)' }}
              >
                9折兑换
              </span>
              <span
                className="text-white text-[10px] font-black px-2.5 py-1 rounded-lg"
                style={{ background: 'linear-gradient(90deg, #FF8C00, #FFB800)' }}
              >
                限时优惠
              </span>
            </div>
            <p className="text-[#1A1A1A] font-black text-[15px] leading-snug">农家土猪腊肉礼盒 500g</p>
            <p className="text-[#999] text-xs mt-0.5">柴火熏制 · 产地直发</p>
            <button
              className="mt-3 text-white text-xs font-black px-5 py-2 rounded-xl shadow-lg active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(90deg, #FF3B30, #FF5722)' }}
            >
              立即兑换
            </button>
          </div>
          <div className="w-[88px] h-[88px] rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
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
