import { Users } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'hero' | 'wide';
}

const tagStyles: Record<string, string> = {
  orange: 'bg-gradient-to-r from-[#FF8C00] to-[#FFB800] text-white',
  blue: 'bg-gradient-to-r from-[#C0704A] to-[#D4895E] text-white',
  green: 'bg-gradient-to-r from-[#B05A30] to-[#C97040] text-white',
  teal: 'bg-gradient-to-r from-[#E07050] to-[#F09060] text-white',
  gold: 'bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-white',
  pink: 'bg-gradient-to-r from-[#FF3B30] to-[#FF6B6B] text-white',
};

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  if (variant === 'wide') {
    return (
      <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-[#F5EDE0] hover:shadow-md transition-shadow active:scale-[0.98]">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#FFF0E0]">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {product.tag && (
            <span className={`absolute top-1 left-1 ${tagStyles[product.tagColor || 'orange']} text-[9px] font-bold px-1.5 py-0.5 rounded-full`}>
              {product.tag}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#1A1A1A] font-semibold text-sm truncate">{product.name}</p>
          <p className="text-[#999] text-xs mt-0.5 truncate">{product.description}</p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-1">
              {product.cashAmount !== undefined && product.cashAmount > 0 && (
                <span className="text-[#555] text-xs">{product.cashAmount}元+</span>
              )}
              <span className="text-[#FF3B30] font-black text-base leading-none">{product.points.toLocaleString()}</span>
              <span className="text-[#999] text-xs">积分</span>
              {product.originalPoints && (
                <span className="text-[#CCC] text-xs line-through">{product.originalPoints.toLocaleString()}</span>
              )}
            </div>
            <button className="bg-gradient-to-r from-[#FF3B30] to-[#FF6B30] text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-sm shadow-red-100 hover:opacity-90 transition-opacity active:scale-95">
              兑换
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-[#F0E8DE] hover:shadow-lg transition-shadow active:scale-[0.98]">
        <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          {product.memberExclusive ? (
            <div className="absolute top-2 left-2 bg-[#FFF8E8] text-[#B07010] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#F0D888] shadow-sm">
              会员专享
            </div>
          ) : product.tag ? (
            <span className={`absolute top-2 left-2 ${tagStyles[product.tagColor || 'orange']} text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm`}>
              {product.tag}
            </span>
          ) : null}

          {product.savings && (
            <div className="absolute top-1.5 right-1.5 flex flex-col items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3B30] to-[#C8200C] shadow-md border border-white/20">
              <span className="text-white text-[8px] font-semibold leading-none">立省</span>
              <span className="text-white text-[10px] font-black leading-tight">¥{product.savings}</span>
            </div>
          )}

          {product.redeemedCount && (
            <div className="absolute bottom-9 left-0 right-0 px-2.5">
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-[2px] rounded-full px-2 py-0.5 w-fit">
                <Users size={8} className="text-white/80" />
                <span className="text-white text-[9px] font-semibold">已兑换 {product.redeemedCount} 件</span>
              </div>
            </div>
          )}

          {product.redeemProgress !== undefined && product.stock !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#7A3010]/90 to-[#9A4820]/90 backdrop-blur-[2px] px-2.5 py-1.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FFB800] flex-shrink-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="flex-1 h-1 bg-white/25 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFB800] rounded-full"
                  style={{ width: `${product.redeemProgress}%` }}
                />
              </div>
              <span className="text-white text-[9px] font-bold whitespace-nowrap flex-shrink-0">
                兑换进度 {product.redeemProgress}% | <span className="text-[#FFD700]">仅剩 {product.stock} 件</span>
              </span>
            </div>
          )}
        </div>

        <div className="p-3">
          <p className="text-[#1A1A1A] font-bold text-[13px] leading-snug line-clamp-2">{product.name}</p>
          {product.todayLabel && (
            <span className="inline-block mt-1 text-[#D94030] text-[10px] font-bold bg-[#FFF0EE] px-2 py-0.5 rounded-full border border-[#FFCCC8]">
              {product.todayLabel}
            </span>
          )}
          <div className="mt-2 flex items-center justify-between gap-1">
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-baseline gap-0.5">
                <span className="text-[#D94030] font-black text-xl leading-none">{product.points.toLocaleString()}</span>
                <span className="text-[#888] text-xs ml-0.5">积分</span>
              </div>
              {product.originalPoints && (
                <span className="text-[#AAAAAA] text-[10px] leading-tight mt-0.5">原{product.originalPoints.toLocaleString()} 积分 →</span>
              )}
            </div>
            <button className="flex-shrink-0 bg-gradient-to-r from-[#D94030] to-[#E85038] text-white text-xs font-black px-4 py-2 rounded-xl shadow-sm shadow-red-100 hover:opacity-90 transition-opacity active:scale-95">
              兑换
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-sm border border-[#F5EDE0] hover:shadow-md transition-shadow active:scale-[0.98]">
      <div className="relative bg-[#FFF5EC] overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        {product.tag && (
          <span className={`absolute top-2 left-2 ${tagStyles[product.tagColor || 'orange']} text-[10px] font-bold px-2 py-0.5 rounded-full`}>
            {product.tag}
          </span>
        )}
        {product.discount && (
          <span className="absolute top-2 right-2 bg-[#FF3B30] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {product.discount}
          </span>
        )}
        {product.savings && (
          <div className="absolute bottom-2 left-2 bg-black/45 backdrop-blur-sm rounded-full px-2 py-0.5">
            <span className="text-[#FFD700] text-[10px] font-bold">省约 ¥{product.savings}</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-[#1A1A1A] font-bold text-sm leading-snug line-clamp-2 min-h-[2.5rem]">{product.name}</p>
        <div className="mt-2 flex items-center justify-between gap-1">
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-baseline gap-1">
              {product.cashAmount !== undefined && product.cashAmount > 0 && (
                <span className="text-[#555] text-xs">{product.cashAmount}元+</span>
              )}
              <span className="text-[#FF3B30] font-black text-lg leading-none">{product.points.toLocaleString()}</span>
              <span className="text-[#999] text-xs">积分</span>
            </div>
            {product.originalPoints && (
              <span className="text-[#CCC] text-xs line-through leading-tight">{product.originalPoints.toLocaleString()}</span>
            )}
          </div>
          <button className="flex-shrink-0 bg-gradient-to-r from-[#FF3B30] to-[#FF6B30] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm shadow-red-100 hover:opacity-90 transition-opacity active:scale-95">
            兑换
          </button>
        </div>
      </div>
    </div>
  );
}
