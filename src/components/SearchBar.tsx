import { Search, Bell, ShoppingCart } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="sticky top-0 z-50 bg-[#fff] px-4 pt-1 pb-3">
      <div className="flex items-center gap-2.5">
        <div className="flex-1 flex items-center gap-2 bg-white rounded-full px-4 py-2.5 shadow-sm border border-[#EBEBEB]">
          <Search size={15} className="text-[#FFAA5A] flex-shrink-0" />
          <input
            type="text"
            placeholder="搜索好物"
            className="flex-1 bg-transparent text-sm text-[#333] placeholder-[#BBAA99] outline-none"
          />
        </div>
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-[#EBEBEB]">
          <Bell size={17} className="text-[#FF3B30]" />
          <span className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-[#FF3B30] rounded-full" />
        </button>
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-[#EBEBEB]">
          <ShoppingCart size={17} className="text-[#FF3B30]" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#FF3B30] rounded-full flex items-center justify-center">
            <span className="text-white text-[9px] font-bold leading-none">3</span>
          </span>
        </button>
      </div>
    </div>
  );
}
