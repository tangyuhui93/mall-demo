import { Search, Bell, ShoppingCart } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="sticky top-0 z-50 bg-white px-4 pt-1 pb-3 border-b border-[#E9ECEF]">
      <div className="flex items-center gap-2.5">
        <div className="flex-1 flex items-center gap-2 bg-[#F8F9FA] rounded-full px-4 py-2.5 border border-[#E9ECEF]">
          <Search size={15} className="text-[#ADB5BD] flex-shrink-0" />
          <input
            type="text"
            placeholder="搜索好物"
            className="flex-1 bg-transparent text-sm text-[#212529] placeholder-[#ADB5BD] outline-none"
          />
        </div>
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#F8F9FA] border border-[#E9ECEF]">
          <Bell size={17} className="text-[#495057]" />
          <span className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-[#D62828] rounded-full" />
        </button>
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#F8F9FA] border border-[#E9ECEF]">
          <ShoppingCart size={17} className="text-[#495057]" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#D62828] rounded-full flex items-center justify-center">
            <span className="text-white text-[9px] font-bold leading-none">3</span>
          </span>
        </button>
      </div>
    </div>
  );
}
