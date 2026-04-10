import { hotProducts } from '../data/products';
import ProductCard from './ProductCard';
import { Flame } from 'lucide-react';

export default function HotSection() {
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between px-4 mb-3">
        <div className="flex items-center gap-1.5">
          <Flame size={18} className="text-[#D32F2F]" />
          <h2 className="text-[#212529] font-black text-base">热门兑换</h2>
        </div>
        <button className="flex items-center gap-0.5 text-[#D32F2F] text-xs font-semibold">
          查看更多 <span className="ml-0.5 text-sm">›</span>
        </button>
      </div>
      <div className="px-4 grid grid-cols-2 gap-3">
        {hotProducts.map((product) => (
          <ProductCard key={product.id} product={product} variant="hero" />
        ))}
      </div>
    </section>
  );
}
