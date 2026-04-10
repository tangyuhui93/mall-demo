import { Search, Bell, ShoppingCart } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm px-4 pt-2 pb-3">
      <div className="flex items-center gap-2.5">
        <div className="flex-1 flex items-center gap-2 bg-[#F5F5F5] rounded-2xl px-3.5 py-2.5 border border-[#EBEBEB]">
          <Search size={15} className="text-[#999] flex-shrink-0" />
          <input
            type="text"
            placeholder="搜索好物"
            className="flex-1 bg-transparent text-sm text-[#333] placeholder-[#BBBBBB] outline-none"
          />
        </div>
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#F5F5F5] border border-[#EBEBEB]">
          <Bell size={17} className="text-[#555]" />
          <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#FF3B30] rounded-full flex items-center justify-center">
            <span className="text-white text-[9px] font-black leading-none">3</span>
          </span>
        </button>
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#FF3B30]">
          <ShoppingCart size={17} className="text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFEB3B] rounded-full flex items-center justify-center">
            <span className="text-[#B00] text-[9px] font-black leading-none">3</span>
          </span>
        </button>
      </div>
    </div>
  );
}
