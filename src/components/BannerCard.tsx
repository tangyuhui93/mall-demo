import { Flame, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface BannerCardProps {
  product: Product;
}

export default function BannerCard({ product }: BannerCardProps) {
  return (
    <div className="mx-4 mb-4 rounded-3xl overflow-hidden shadow-lg border border-[#F0E4D0] relative bg-[#1C0F06]" style={{ minHeight: 200 }}>
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        style={{ filter: 'saturate(1.15) contrast(1.05)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 p-4 flex flex-col justify-between h-full" style={{ minHeight: 200 }}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-1 bg-gradient-to-r from-[#FF3B30] to-[#FF6B30] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                <Flame size={9} className="fill-white" />
                热门
              </span>
              <span className="flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                限时优惠
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#FFB800] to-[#E07800] shadow-lg border-2 border-white/20 flex-shrink-0">
            <span className="text-white text-[8px] font-bold leading-none">9折</span>
            <span className="text-white text-[9px] font-black leading-none mt-0.5">兑换</span>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-1.5 mb-1">
            <ShieldCheck size={10} className="text-[#FFD700]" />
            <span className="text-[#FFD700] text-[10px] font-semibold tracking-wide">柴火慢熏 · 精选土猪肉 · 传统工艺</span>
          </div>
          <h3 className="text-white font-black text-xl leading-tight drop-shadow-md" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
            {product.name}
          </h3>
          <p className="text-white/60 text-xs font-medium mt-0.5 mb-3">{product.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-[#FF6B30] font-black text-2xl leading-none drop-shadow">{product.points.toLocaleString()}</span>
                <span className="text-white/70 text-xs font-medium">积分</span>
              </div>
              {product.originalPoints && (
                <span className="text-white/40 text-[11px] line-through">原 {product.originalPoints.toLocaleString()} 积分</span>
              )}
            </div>
            <button className="relative overflow-hidden bg-gradient-to-r from-[#FF3B30] to-[#FF6040] text-white font-black text-sm px-6 py-2.5 rounded-2xl shadow-lg shadow-red-900/40 active:scale-95 transition-transform border border-white/10">
              <span className="relative z-10">立即兑换</span>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
