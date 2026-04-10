import { hotProducts } from '../data/products';
import ProductCard from './ProductCard';
import { Flame } from 'lucide-react';

export default function HotSection() {
  return (
    <section className="mb-5">
      <div className="flex items-center justify-between px-4 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-7 h-7 rounded-xl bg-[#FF3B30] shadow-md shadow-red-200">
            <Flame size={15} className="text-white" fill="white" />
          </div>
          <h2 className="text-[#1A1A1A] font-black text-[16px] tracking-tight">热门兑换</h2>
        </div>
        <button
          className="flex items-center gap-0.5 text-[#FF3B30] text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: 'rgba(255,59,48,0.08)' }}
        >
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
