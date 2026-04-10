import { ChevronRight, MapPin, Headphones, Heart, Shield, MessageSquare, Settings } from 'lucide-react';

interface ProfilePageProps {
  onOpenPoints: () => void;
}

export default function ProfilePage({ onOpenPoints }: ProfilePageProps) {
  return (
    <div className="bg-[#F5F5F5] min-h-screen pb-24">
      <div className="bg-white px-4 pt-12 pb-4">
        <div className="flex items-center justify-between mb-5">
          <Settings size={22} className="text-[#333]" />
          <span className="text-[#333] text-base font-semibold">个人中心</span>
          <MessageSquare size={22} className="text-[#333]" />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#F0F0F0] flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[#111] text-xl font-bold">林嘉嘉</span>
            </div>
            <p className="text-[#999] text-sm">车险用户 · ID: 8829402</p>
          </div>
          <ChevronRight size={18} className="text-[#CCC]" />
        </div>
      </div>

      <div className="h-2 bg-[#F5F5F5]" />

      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[#999] text-sm">可用积分</span>
          <button
            onClick={onOpenPoints}
            className="text-[#999] text-sm bg-[#F5F5F5] px-3 py-1 rounded-full"
          >
            明细
          </button>
        </div>

        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-[#D32F2F] text-5xl font-black tracking-tight">12,850</span>
          <span className="text-[#999] text-sm">分</span>
        </div>

        <div className="flex items-center gap-2 bg-[#FFF0F0] rounded-lg px-3 py-2 mb-4 border border-[#FFCDD2]">
          <div className="w-4 h-4 rounded-full bg-[#D32F2F] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[9px] font-black">!</span>
          </div>
          <span className="text-[#D32F2F] text-xs">您的200积分将于3月31日过期，请尽快使用</span>
        </div>

        <button
          onClick={onOpenPoints}
          className="w-full bg-[#D32F2F] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 active:opacity-90 transition-opacity"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 12h6M12 9v6M3 6h18M3 6l2 14h14L21 6M3 6l2-3h14l2 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          积分商城
        </button>
      </div>

      <div className="h-2 bg-[#F5F5F5]" />

      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#111] text-sm font-bold">我的订单</span>
          <button className="text-[#999] text-xs flex items-center gap-0.5">
            全部订单 <ChevronRight size={12} />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-1">
          {[
            { label: '待付款', icon: <PayIcon />, badge: null },
            { label: '待发货', icon: <ShipIcon />, badge: null },
            { label: '待收货', icon: <TruckIcon />, badge: 2 },
            { label: '评价', icon: <StarIcon />, badge: null },
            { label: '售后', icon: <AfterIcon />, badge: null },
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center gap-2 active:opacity-70">
              <div className="relative">
                {item.icon}
                {item.badge && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#D32F2F] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[#555] text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-2 bg-[#F5F5F5]" />

      <div className="bg-white">
        <div className="px-4 pt-4 pb-1">
          <span className="text-[#111] text-sm font-bold">常用工具</span>
        </div>

        {[
          { icon: <MapPin size={18} className="text-[#888]" />, label: '收货地址' },
          { icon: <Headphones size={18} className="text-[#888]" />, label: '联系客服 / 售后' },
          { icon: <Heart size={18} className="text-[#888]" />, label: '我的收藏' },
          { icon: <Shield size={18} className="text-[#888]" />, label: '隐私设置' },
        ].map((item, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-3 px-4 py-3.5 border-t border-[#F0F0F0] active:bg-[#F8F8F8] transition-colors"
          >
            <div className="w-5 flex items-center justify-center">{item.icon}</div>
            <span className="flex-1 text-left text-[#333] text-sm">{item.label}</span>
            <ChevronRight size={16} className="text-[#CCC]" />
          </button>
        ))}
      </div>

      <div className="h-2 bg-[#F5F5F5]" />

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        <button className="relative overflow-hidden rounded-2xl h-40 active:opacity-90 transition-opacity text-left">
          <img
            src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="新品"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 p-3.5 flex flex-col justify-between">
            <div>
              <p className="text-white/60 text-[9px] font-semibold tracking-widest uppercase">Limited Edition</p>
              <p className="text-white text-lg font-black leading-tight mt-0.5">春季新品</p>
            </div>
            <button className="self-start bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
              立即查看
            </button>
          </div>
        </button>

        <button
          onClick={onOpenPoints}
          className="relative overflow-hidden rounded-2xl h-40 active:opacity-90 transition-opacity text-left"
          style={{ background: 'linear-gradient(145deg, #C62828 0%, #E53935 100%)' }}
        >
          <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 right-8 w-20 h-20 rounded-full bg-white/5" />
          <div className="absolute bottom-2 right-2 opacity-20">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="white">
              <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 4c11.1 0 20 8.9 20 20s-8.9 20-20 20S12 43.1 12 32s8.9-20 20-20zm0 6c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-2 6h4v8h6v4H30V24z"/>
            </svg>
          </div>
          <div className="absolute inset-0 p-3.5 flex flex-col justify-between">
            <div>
              <p className="text-white/70 text-[9px] font-semibold tracking-widest uppercase">Gift Guide</p>
              <p className="text-white text-lg font-black leading-tight mt-0.5">会员福利</p>
            </div>
            <button className="self-start bg-white text-[#D32F2F] text-xs font-bold px-4 py-1.5 rounded-full">
              抢先领取
            </button>
          </div>
        </button>
      </div>
    </div>
  );
}

function PayIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect x="3" y="7" width="24" height="18" rx="2" stroke="#555" strokeWidth="1.6"/>
      <path d="M3 12h24" stroke="#555" strokeWidth="1.6"/>
      <rect x="7" y="16" width="6" height="3" rx="1" fill="#555"/>
    </svg>
  );
}

function ShipIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect x="2" y="9" width="16" height="14" rx="1.5" stroke="#555" strokeWidth="1.6"/>
      <path d="M18 13h4l4 5v5h-8V13z" stroke="#555" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="8" cy="23" r="2.5" fill="white" stroke="#555" strokeWidth="1.5"/>
      <circle cx="22" cy="23" r="2.5" fill="white" stroke="#555" strokeWidth="1.5"/>
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M4 8h16v12H4z" stroke="#555" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M20 12h4l2 4v4h-6V12z" stroke="#555" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="9" cy="22" r="2" fill="white" stroke="#555" strokeWidth="1.5"/>
      <circle cx="23" cy="22" r="2" fill="white" stroke="#555" strokeWidth="1.5"/>
      <path d="M7 14h8" stroke="#555" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 5l2.8 6.2 6.7.6-5 4.7 1.5 6.6L15 20l-6 3.1 1.5-6.6-5-4.7 6.7-.6z" stroke="#555" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

function AfterIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="10" stroke="#555" strokeWidth="1.6"/>
      <path d="M15 9v6l4 3" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
