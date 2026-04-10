import { Flame, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface BannerCardProps {
  product: Product;
}

export default function BannerCard({ product }: BannerCardProps) {
  return (
    <div className="mx-4 mb-4 rounded-2xl overflow-hidden shadow-md border border-[#E9ECEF] relative bg-[#1A1A1A]" style={{ minHeight: 200 }}>
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/85 via-[#333333]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />

      <div className="relative z-10 p-4 flex flex-col justify-between h-full" style={{ minHeight: 200 }}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-1 bg-[#D62828] text-white text-[10px] font-black px-2.5 py-0.5 rounded-md">
                <Flame size={9} className="fill-white" />
                热门
              </span>
              <span className="flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/25 text-[#F0F0F0] text-[10px] font-semibold px-2.5 py-0.5 rounded-md">
                限时优惠
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[52px] h-[52px] rounded-full bg-[#FCBF49] shadow-lg border-2 border-white/20 flex-shrink-0">
            <span className="text-[#212529] text-[8px] font-bold leading-none">9折</span>
            <span className="text-[#212529] text-[9px] font-black leading-none mt-0.5">兑换</span>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-1.5 mb-1">
            <ShieldCheck size={10} className="text-[#38B000]" />
            <span className="text-[#F0F0F0] text-[10px] font-semibold tracking-wide">柴火慢熏 · 精选土猪肉 · 传统工艺</span>
          </div>
          <h3 className="text-white font-black text-xl leading-tight">
            {product.name}
          </h3>
          <p className="text-[#F0F0F0]/70 text-xs font-medium mt-0.5 mb-3">{product.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-[#F77F00] font-black text-2xl leading-none">{product.points.toLocaleString()}</span>
                <span className="text-[#E0E0E0] text-xs font-medium">积分</span>
              </div>
              {product.originalPrice && (
                <span className="text-[#E0E0E0]/60 text-[11px] line-through">价值{product.originalPrice}元</span>
              )}
            </div>
            <button className="bg-[#D62828] text-white font-black text-sm px-6 py-2.5 rounded-lg shadow-md active:scale-95 transition-transform">
              立即兑换
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
