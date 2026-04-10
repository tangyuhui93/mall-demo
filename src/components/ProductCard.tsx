import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'hero' | 'wide';
}

const tagStyles: Record<string, { bg: string; text: string }> = {
  orange: { bg: 'linear-gradient(90deg, #FF8C00, #FFB800)', text: '#fff' },
  blue: { bg: 'linear-gradient(90deg, #0090FF, #00B4FF)', text: '#fff' },
  green: { bg: 'linear-gradient(90deg, #2ECC71, #27AE60)', text: '#fff' },
  teal: { bg: 'linear-gradient(90deg, #FF5722, #FF8C00)', text: '#fff' },
  gold: { bg: 'linear-gradient(90deg, #D97706, #FBBF24)', text: '#fff' },
  pink: { bg: 'linear-gradient(90deg, #FF3B30, #FF6B6B)', text: '#fff' },
};

function TagBadge({ tag, color }: { tag: string; color?: string }) {
  const style = tagStyles[color || 'orange'];
  return (
    <span
      className="text-[10px] font-black px-2 py-0.5 rounded-md shadow-sm"
      style={{ background: style.bg, color: style.text }}
    >
      {tag}
    </span>
  );
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  if (variant === 'wide') {
    return (
      <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-md border border-[#F5EDE0] hover:shadow-lg transition-shadow active:scale-[0.98]">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {product.tag && (
            <span className="absolute top-1 left-1">
              <TagBadge tag={product.tag} color={product.tagColor} />
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#1A1A1A] font-bold text-sm truncate">{product.name}</p>
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
            <button
              className="text-white text-[11px] font-black px-4 py-1.5 rounded-xl shadow-sm active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(90deg, #FF3B30, #FF5722)' }}
            >
              兑换
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow active:scale-[0.98]">
        <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {product.tag && (
            <span className="absolute top-2 left-2">
              <TagBadge tag={product.tag} color={product.tagColor} />
            </span>
          )}
          {product.savings && (
            <div className="absolute bottom-2 left-2 bg-black/55 backdrop-blur-sm rounded-lg px-2 py-0.5">
              <span className="text-[#FFEB3B] text-[11px] font-black">省约 ¥{product.savings}</span>
            </div>
          )}
        </div>
        <div className="p-3">
          <p className="text-[#1A1A1A] font-bold text-[13px] leading-snug line-clamp-2 min-h-[2.5rem]">{product.name}</p>
          <div className="mt-2 flex items-center justify-between gap-1">
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-baseline gap-0.5">
                <span className="text-[#FF3B30] font-black text-[18px] leading-none">{product.points.toLocaleString()}</span>
                <span className="text-[#999] text-xs ml-0.5">积分</span>
              </div>
              {product.originalPoints && (
                <span className="text-[#CCC] text-[11px] line-through leading-tight">{product.originalPoints.toLocaleString()}</span>
              )}
            </div>
            <button
              className="flex-shrink-0 text-white text-xs font-black px-3.5 py-1.5 rounded-xl shadow-sm active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(90deg, #FF3B30, #FF5722)' }}
            >
              兑换
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow active:scale-[0.98]">
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        {product.tag && (
          <span className="absolute top-2 left-2">
            <TagBadge tag={product.tag} color={product.tagColor} />
          </span>
        )}
        {product.discount && (
          <span
            className="absolute top-2 right-2 text-white text-[10px] font-black px-2 py-0.5 rounded-md"
            style={{ background: 'linear-gradient(90deg, #FF3B30, #FF6B30)' }}
          >
            {product.discount}
          </span>
        )}
        {product.savings && (
          <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-0.5">
            <span className="text-[#FFEB3B] text-[10px] font-black">省约 ¥{product.savings}</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-[#1A1A1A] font-bold text-[13px] leading-snug line-clamp-2 min-h-[2.5rem]">{product.name}</p>
        <div className="mt-2 flex items-center justify-between gap-1">
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-baseline gap-0.5">
              {product.cashAmount !== undefined && product.cashAmount > 0 && (
                <span className="text-[#555] text-xs">{product.cashAmount}元+</span>
              )}
              <span className="text-[#FF3B30] font-black text-[17px] leading-none">{product.points.toLocaleString()}</span>
              <span className="text-[#999] text-xs ml-0.5">积分</span>
            </div>
            {product.originalPoints && (
              <span className="text-[#CCC] text-[11px] line-through leading-tight">{product.originalPoints.toLocaleString()}</span>
            )}
          </div>
          <button
            className="flex-shrink-0 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-sm active:scale-95 transition-transform"
            style={{ background: 'linear-gradient(90deg, #FF3B30, #FF5722)' }}
          >
            兑换
          </button>
        </div>
      </div>
    </div>
  );
}
