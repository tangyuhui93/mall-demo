import { useState, useEffect } from 'react';
import { ChevronRight, Shield, FileText, Headphones, Bell, Gift, Star } from 'lucide-react';

interface ProfilePageProps {
  onOpenPoints: () => void;
}

export default function ProfilePage({ onOpenPoints }: ProfilePageProps) {
  const [showExpireAlert, setShowExpireAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowExpireAlert(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F5F5F5] min-h-screen pb-24">
      <div
        className="relative px-4 pt-12 pb-6"
        style={{
          background: 'linear-gradient(145deg, #C62828 0%, #D32F2F 50%, #E53935 100%)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute top-4 right-16 w-20 h-20 rounded-full bg-white/5" />
        </div>

        <div className="relative flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40">
            <span className="text-white text-2xl font-bold">张</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-white text-lg font-bold">张先生</span>
              <span className="bg-[#FCBF49] text-[#7B3F00] text-[10px] font-black px-2 py-0.5 rounded-full">
                车险用户
              </span>
            </div>
            <p className="text-white/70 text-xs mt-0.5">手机尾号 8899 · 已验证</p>
          </div>
          <ChevronRight size={18} className="text-white/50" />
        </div>

        <button
          onClick={onOpenPoints}
          className="relative w-full rounded-2xl overflow-hidden active:scale-[0.98] transition-transform"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
            border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Star size={12} className="text-[#FCBF49]" fill="#FCBF49" />
                  <span className="text-white/80 text-xs">我的积分</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-4xl font-black tracking-tight">3,280</span>
                  <span className="text-white/60 text-sm">分</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[#FCBF49] text-sm font-bold">可抵 ¥32.8</span>
                  <span className="text-white/50 text-xs">用于购物</span>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-[#FCBF49] text-[#7B3F00] text-xs font-bold px-3 py-1.5 rounded-xl mb-2 whitespace-nowrap">
                  去兑换 →
                </div>
                <p className="text-white/50 text-[10px]">点击查看详情</p>
              </div>
            </div>

            <div
              className={`mt-3 flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-500 ${
                showExpireAlert
                  ? 'bg-red-900/40 border border-red-400/40 opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-1'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse flex-shrink-0" />
              <span className="text-[#FF9999] text-xs font-medium">
                <span className="font-bold text-[#FFAAAA]">320分</span> 将在 <span className="font-bold text-[#FFAAAA]">12天</span>后过期，用掉比较划算
              </span>
            </div>
          </div>
        </button>
      </div>

      <div className="mx-4 -mt-2 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#212529] text-sm font-bold">我的保单</span>
            <span className="text-[#D32F2F] text-xs flex items-center gap-0.5">全部 <ChevronRight size={12} /></span>
          </div>
          <div className="bg-[#FFF5F5] rounded-xl p-3 border border-[#FFD5D5]">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={14} className="text-[#D32F2F]" />
                  <span className="text-[#212529] text-sm font-semibold">机动车交强险</span>
                  <span className="bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-2 py-0.5 rounded-full">保障中</span>
                </div>
                <p className="text-[#6C757D] text-xs">沪A·8899 · 2025年保单</p>
                <p className="text-[#6C757D] text-xs mt-0.5">到期日：2026-03-15</p>
              </div>
              <div className="text-right">
                <p className="text-[#D32F2F] text-xs font-semibold">返积分</p>
                <p className="text-[#212529] text-sm font-bold">+3,280</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: <Gift size={20} />, label: '抽奖', badge: '今日3次', color: '#D32F2F' },
              { icon: <Star size={20} />, label: '兑换商品', badge: '热门', color: '#E65100' },
              { icon: <Bell size={20} />, label: '消息通知', badge: null, color: '#1565C0' },
              { icon: <Headphones size={20} />, label: '客服', badge: null, color: '#2E7D32' },
            ].map((item, i) => (
              <button
                key={i}
                onClick={i < 2 ? onOpenPoints : undefined}
                className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform"
              >
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}15` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 bg-[#D32F2F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[#495057] text-[11px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {[
            { icon: <FileText size={18} className="text-[#6C757D]" />, label: '理赔记录', sub: '查看历史理赔' },
            { icon: <Shield size={18} className="text-[#6C757D]" />, label: '续保提醒', sub: '距到期还有156天' },
            { icon: <Headphones size={18} className="text-[#6C757D]" />, label: '联系客服', sub: '7×24小时在线' },
          ].map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-3 px-4 py-3.5 border-b border-[#F5F5F5] last:border-0 active:bg-[#F8F9FA] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="text-[#212529] text-sm font-medium">{item.label}</p>
                <p className="text-[#ADB5BD] text-xs">{item.sub}</p>
              </div>
              <ChevronRight size={16} className="text-[#CED4DA]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
