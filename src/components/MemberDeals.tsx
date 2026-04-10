import { memberProducts } from '../data/products';
import ProductCard from './ProductCard';
import { Crown, Sparkles } from 'lucide-react';

export default function MemberDeals() {
  return (
    <section className="mb-6">
      <div className="mx-4 mb-3 rounded-2xl overflow-hidden shadow-sm border border-[#E9ECEF]">
        <div className="relative bg-[#212529] p-4">
          <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute -bottom-6 left-8 w-20 h-20 rounded-full bg-white/5" />
          <div className="absolute top-2 right-4 opacity-30">
            <Sparkles size={28} className="text-[#FCBF49]" />
          </div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#F77F00]/20 flex items-center justify-center">
                <Crown size={18} className="text-[#FCBF49]" />
              </div>
              <div>
                <h2 className="text-white font-black text-base leading-tight">9号会员日</h2>
                <p className="text-[#ADB5BD] text-xs font-semibold">9折大派送 · 限时特惠</p>
              </div>
            </div>
            <button className="flex items-center gap-0.5 text-[#D62828] text-xs font-semibold">
              查看更多 <span className="text-sm ml-0.5">›</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 grid grid-cols-2 gap-3">
        {memberProducts.map((product) => (
          <ProductCard key={product.id} product={product} variant="hero" />
        ))}
      </div>
    </section>
  );
}
