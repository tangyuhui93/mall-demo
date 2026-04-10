import { useState } from 'react';
import { allProducts, tabs, priceFilters } from '../data/products';
import ProductCard from './ProductCard';
import { Gift } from 'lucide-react';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('all');
  const [activePriceFilter, setActivePriceFilter] = useState('all');

  const filteredProducts = allProducts.filter((p) => {
    if (p.id === 'p1') return false;
    if (activeTab !== 'all') {
      const catMap: Record<string, string[]> = {
        recommend: ['电子', '娱乐'],
        food: ['美食'],
        daily: ['日用'],
        clean: ['清洁'],
        appliance: ['家电'],
      };
      if (!catMap[activeTab]?.includes(p.category)) return false;
    }
    if (activePriceFilter !== 'all') {
      if (activePriceFilter === '3000+') {
        if (p.points < 3000) return false;
      } else {
        const [min, max] = activePriceFilter.split('-').map(Number);
        if (p.points < min || p.points >= max) return false;
      }
    }
    return true;
  });

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 px-4 mb-3">
        <Gift size={18} className="text-[#D32F2F]" />
        <h2 className="text-[#212529] font-black text-base">轻松兑好礼</h2>
      </div>

      <div className="px-4 mb-3">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#D32F2F] text-white shadow-sm'
                  : 'bg-white text-[#495057] border border-[#E9ECEF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 grid grid-cols-2 gap-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-2 py-12 text-center">
            <p className="text-[#ADB5BD] text-sm">暂无相关商品</p>
          </div>
        )}
      </div>
    </section>
  );
}
