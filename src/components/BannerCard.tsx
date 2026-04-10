import { Product } from '../types';

interface BannerCardProps {
  product: Product;
}

export default function BannerCard({ product }: BannerCardProps) {
  return (
    <div className="mx-4 mb-4 rounded-2xl overflow-hidden shadow-md border border-[#EEE0CC] relative bg-[#FBF3EA]" style={{ minHeight: 148 }}>
      <div className="flex h-full" style={{ minHeight: 148 }}>
        <div className="flex-1 p-4 flex flex-col justify-between z-10 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#FF3B30] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full tracking-wide">
              9折兑换
            </span>
            <span className="bg-[#FFF0E0] text-[#C05030] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#F0D0B0]">
              限时优惠
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-[#1A1A1A] font-black text-lg leading-tight mb-1">
              {product.name}
            </h3>
            <p className="text-[#8B6050] text-xs font-medium leading-relaxed">
              柴火慢熏 | 精选土猪肉 | 传统工艺
            </p>
          </div>

          <button className="mt-3 self-start relative overflow-hidden bg-gradient-to-r from-[#D94030] to-[#E85038] text-white font-black text-sm px-5 py-2 rounded-xl shadow-md shadow-red-200 active:scale-95 transition-transform">
            <span className="relative z-10">立即兑换</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent" />
          </button>
        </div>

        <div className="relative w-[52%] flex-shrink-0 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: 'saturate(1.1)', objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FBF3EA] to-transparent" />
        </div>
      </div>
    </div>
  );
}
