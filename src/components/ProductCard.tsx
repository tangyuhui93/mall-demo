import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'hero' | 'wide';
}

const tagStyles: Record<string, string> = {
  orange: 'bg-[#F77F00] text-white',
  blue: 'bg-[#0077B6] text-white',
  green: 'bg-[#38B000] text-white',
  teal: 'bg-[#38B000] text-white',
  gold: 'bg-[#FCBF49] text-[#212529]',
  pink: 'bg-[#D62828] text-white',
  purple: 'bg-[#9D4EDD] text-white',
};

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  if (variant === 'wide') {
    return (
      <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-[#E9ECEF] hover:shadow-md transition-shadow active:scale-[0.98]">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#F8F9FA]">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {product.tag && (
            <span className={`absolute top-1 left-1 ${tagStyles[product.tagColor || 'orange']} text-[9px] font-bold px-1.5 py-0.5 rounded-full`}>
              {product.tag}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#212529] font-semibold text-sm truncate">{product.name}</p>
          <p className="text-[#ADB5BD] text-xs mt-0.5 truncate">{product.description}</p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-1">
              {product.cashAmount !== undefined && product.cashAmount > 0 && (
                <span className="text-[#495057] text-xs">{product.cashAmount}元+</span>
              )}
              <span className="text-[#F77F00] font-black text-base leading-none">{product.points.toLocaleString()}</span>
              <span className="text-[#ADB5BD] text-xs">积分</span>
              {product.originalPrice && (
                <span className="text-[#ADB5BD] text-xs line-through">价值{product.originalPrice}元</span>
              )}
            </div>
            <button className="bg-[#D62828] text-white text-[11px] font-bold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity active:scale-95">
              兑换
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-[#E9ECEF] hover:shadow-md transition-shadow active:scale-[0.98]">
        <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {product.tag && (
            <span className={`absolute top-2.5 left-2.5 ${tagStyles[product.tagColor || 'orange']} text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm`}>
              {product.tag}
            </span>
          )}
        </div>
        {product.redeemProgress !== undefined && product.stock !== undefined && (
          <div className="bg-[#212529] px-3 py-1.5 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-[#E9ECEF] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#D62828] rounded-full transition-all"
                style={{ width: `${product.redeemProgress}%` }}
              />
            </div>
            <span className="text-[#F8F9FA] text-[10px] font-bold whitespace-nowrap flex-shrink-0">
              {product.redeemProgress}% | <span className="text-[#D62828]">剩{product.stock}件</span>
            </span>
          </div>
        )}
        <div className="p-3">
          <p className="text-[#212529] font-bold text-sm leading-snug truncate">{product.name}</p>
          <p className="text-[#FFC107] text-xs font-medium mt-0.5 leading-snug line-clamp-2" style={{ minHeight: '2.6em' }}>
            {product.tagline ? `"${product.tagline}"` : ''}
          </p>
          <div className="mt-2 flex items-center justify-between gap-1">
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-baseline gap-1">
                <span className="text-[#F77F00] font-black text-xl leading-none">{product.points.toLocaleString()}</span>
                <span className="text-[#ADB5BD] text-xs">积分</span>
              </div>
              {product.originalPrice && (
                <span className="text-[#ADB5BD] text-xs leading-tight line-through">价值{product.originalPrice}元</span>
              )}
            </div>
            <button className="flex-shrink-0 bg-[#D62828] text-white text-xs font-bold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity active:scale-95">
              兑换
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-[#E9ECEF] hover:shadow-md transition-shadow active:scale-[0.98] flex flex-col">
      <div className="relative bg-[#F8F9FA] overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        {product.tag && (
          <span className={`absolute top-2 left-2 ${tagStyles[product.tagColor || 'orange']} text-[10px] font-bold px-2 py-0.5 rounded-md`}>
            {product.tag}
          </span>
        )}
        {product.discount && (
          <span className="absolute top-2 right-2 bg-[#FCBF49] text-[#212529] text-[10px] font-bold px-1.5 py-0.5 rounded-md">
            {product.discount}
          </span>
        )}
      </div>
      {product.redeemProgress !== undefined && product.stock !== undefined && (
        <div className="bg-[#212529] px-3 py-1.5 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-[#E9ECEF] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D62828] rounded-full transition-all"
              style={{ width: `${product.redeemProgress}%` }}
            />
          </div>
          <span className="text-[#F8F9FA] text-[10px] font-bold whitespace-nowrap flex-shrink-0">
            {product.redeemProgress}% | <span className="text-[#D62828]">剩{product.stock}件</span>
          </span>
        </div>
      )}
      <div className="p-3 flex flex-col flex-1">
        <div className="flex-1">
          {product.tagline && (
            <p className="text-[#FFC107] text-xs font-medium mb-0.5 leading-snug">"{product.tagline}"</p>
          )}
          <p className="text-[#212529] font-bold text-sm leading-snug truncate">{product.name}</p>
        </div>
        <div className="mt-2 flex items-center justify-between gap-1">
          <div className="flex items-baseline gap-1 flex-wrap min-w-0 flex-1">
            {product.cashAmount !== undefined && product.cashAmount > 0 && (
              <span className="text-[#495057] text-xs">{product.cashAmount}元+</span>
            )}
            <span className="text-[#F77F00] font-black text-lg leading-none">{product.points.toLocaleString()}</span>
            <span className="text-[#ADB5BD] text-xs">积分</span>
            {product.originalPrice && (
              <span className="text-[#ADB5BD] text-xs line-through">价值{product.originalPrice}元</span>
            )}
            {product.originalPoints && (
              <span className="text-[#ADB5BD] text-xs line-through">{product.originalPoints.toLocaleString()}</span>
            )}
          </div>
          <button className="flex-shrink-0 bg-[#D62828] text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity active:scale-95">
            兑换
          </button>
        </div>
      </div>
    </div>
  );
}
