export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-1 bg-[#FFE8D0]">
      <span className="text-[#1A1A1A] text-[13px] font-semibold tracking-tight">15:57</span>
      <div className="flex items-center gap-1.5">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.6" fill="#1A1A1A" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.6" fill="#1A1A1A" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.6" fill="#1A1A1A" />
          <rect x="13.5" y="0" width="2.5" height="12" rx="0.6" fill="#1A1A1A" opacity="0.3" />
        </svg>
        <span className="text-[#1A1A1A] text-[11px] font-bold">4G</span>
        <div className="flex items-center gap-0.5">
          <div className="relative w-[22px] h-[11px] rounded-[3px] border-[1.5px] border-[#1A1A1A] flex items-center px-0.5">
            <div className="w-full h-full bg-[#1A1A1A] rounded-[1.5px]" />
            <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[5px] bg-[#1A1A1A] rounded-r-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
