import { useState } from 'react';
import { ChevronLeft, Gift, ShoppingBag, TrendingUp, Clock, ChevronRight, Zap, Star } from 'lucide-react';
import LotteryModal from './LotteryModal';

interface PointsDetailPageProps {
  onBack: () => void;
  onWithdraw: () => void;
}

const exchangeProducts = [
  {
    id: 1,
    name: '星巴克拿铁券',
    points: 580,
    originalPoints: 1160,
    tag: '5折热兑',
    tagColor: '#D32F2F',
    stock: 8,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=200',
    worth: '¥38',
  },
  {
    id: 2,
    name: '加油卡充值50元',
    points: 480,
    originalPoints: 500,
    tag: '省油首选',
    tagColor: '#E65100',
    stock: 23,
    image: 'https://images.pexels.com/photos/3855963/pexels-photo-3855963.jpeg?auto=compress&cs=tinysrgb&w=200',
    worth: '¥50',
  },
  {
    id: 3,
    name: '京东E卡20元',
    points: 200,
    originalPoints: 200,
    tag: '好评热门',
    tagColor: '#D32F2F',
    stock: 156,
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=200',
    worth: '¥20',
  },
  {
    id: 4,
    name: '滴滴出行券10元',
    points: 95,
    originalPoints: 100,
    tag: '仅剩5张',
    tagColor: '#C62828',
    stock: 5,
    image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=200',
    worth: '¥10',
  },
];

const records = [
  { type: 'in', desc: '2025机动车交强险返佣', points: 3280, date: '2025-03-20', tag: '保单返积分' },
  { type: 'out', desc: '兑换星巴克拿铁券', points: -580, date: '2025-03-15', tag: '积分兑换' },
  { type: 'out', desc: '参与幸运抽奖', points: -50, date: '2025-03-10', tag: '积分抽奖' },
  { type: 'in', desc: '抽奖获得奖励', points: 100, date: '2025-03-10', tag: '活动奖励' },
  { type: 'out', desc: '兑换加油卡充值', points: -480, date: '2025-02-28', tag: '积分兑换' },
];

export default function PointsDetailPage({ onBack, onWithdraw }: PointsDetailPageProps) {
  const [activeSection, setActiveSection] = useState<'exchange' | 'records'>('exchange');
  const [showLottery, setShowLottery] = useState(false);

  return (
    <div className="bg-[#F5F5F5] min-h-screen pb-24">
      <div
        className="relative"
        style={{
          background: 'linear-gradient(145deg, #C62828 0%, #D32F2F 60%, #E53935 100%)',
          paddingBottom: '72px',
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute top-8 right-20 w-24 h-24 rounded-full bg-white/5" />
        </div>

        <div className="relative flex items-center gap-3 px-4 pt-12 pb-4">
          <button onClick={onBack} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/15 active:bg-white/25">
            <ChevronLeft size={20} className="text-white" />
          </button>
          <span className="text-white text-lg font-bold flex-1">我的积分</span>
          <button
            onClick={onWithdraw}
            className="text-white text-xs px-3 py-1.5 rounded-full border border-white/60 bg-white/15 active:bg-white/25"
          >
            提现
          </button>
        </div>

        <div className="relative px-4 text-center pb-4">
          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span className="text-white/70 text-sm">当前积分</span>
          </div>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-white text-6xl font-black tracking-tight">3,280</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
              <Star size={11} className="text-white" fill="white" />
              <span className="text-white text-xs">可抵 <span className="font-bold">¥32.8</span></span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              <span className="text-white text-xs">320分 · 12天后过期</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 -mt-12 relative z-10 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#212529] text-sm font-bold">快速使用积分</span>
            <span className="text-[#ADB5BD] text-xs">省钱好方法</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            <button
              onClick={() => setShowLottery(true)}
              className="flex flex-col items-center gap-2 p-3 rounded-xl active:scale-95 transition-transform bg-[#FFF0F0] border border-[#FFCDD2]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                <Gift size={20} className="text-[#D32F2F]" />
              </div>
              <div className="text-center">
                <p className="text-[#212529] text-xs font-bold">幸运抽奖</p>
                <p className="text-[#D32F2F] text-[10px] font-semibold">今日3次</p>
              </div>
            </button>

            <button
              onClick={() => setActiveSection('exchange')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl active:scale-95 transition-transform bg-[#FFF0F0] border border-[#FFCDD2]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                <ShoppingBag size={20} className="text-[#D32F2F]" />
              </div>
              <div className="text-center">
                <p className="text-[#212529] text-xs font-bold">积分兑换</p>
                <p className="text-[#D32F2F] text-[10px] font-semibold">超值好物</p>
              </div>
            </button>

            <button
              onClick={() => setActiveSection('records')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl active:scale-95 transition-transform bg-[#F5F5F5] border border-[#E8E8E8]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#999]/10 flex items-center justify-center">
                <TrendingUp size={20} className="text-[#555]" />
              </div>
              <div className="text-center">
                <p className="text-[#212529] text-xs font-bold">积分明细</p>
                <p className="text-[#999] text-[10px]">收支记录</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-4">
        <div className="bg-[#FFF0F0] rounded-2xl p-3.5 border border-[#FFCDD2]">
          <div className="flex items-start gap-3">
            <Zap size={16} className="text-[#D32F2F] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[#C62828] text-xs font-bold mb-0.5">积分即将过期提醒</p>
              <p className="text-[#D32F2F]/80 text-xs leading-relaxed">
                您有 <span className="font-bold text-[#C62828]">320分</span> 将在12天后自动清零。积分兑换商品无任何手续费，<span className="font-bold">提现需扣2%手续费</span>。
              </p>
              <button
                onClick={() => setActiveSection('exchange')}
                className="mt-2 bg-[#D32F2F] text-white text-[11px] font-bold px-4 py-1.5 rounded-lg active:opacity-80"
              >
                立即兑换，不浪费
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-3 flex items-center gap-0 bg-white rounded-xl p-1 shadow-sm">
        <button
          onClick={() => setActiveSection('exchange')}
          className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
            activeSection === 'exchange'
              ? 'bg-[#D32F2F] text-white shadow-sm'
              : 'text-[#6C757D]'
          }`}
        >
          积分兑换
        </button>
        <button
          onClick={() => setActiveSection('records')}
          className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
            activeSection === 'records'
              ? 'bg-[#D32F2F] text-white shadow-sm'
              : 'text-[#6C757D]'
          }`}
        >
          积分明细
        </button>
      </div>

      {activeSection === 'exchange' && (
        <div className="mx-4 space-y-3">
          {exchangeProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3 p-3">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  {product.stock <= 10 && (
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] text-center py-0.5 font-bold">
                      仅剩{product.stock}件
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded-md text-white"
                      style={{ backgroundColor: product.tagColor }}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <p className="text-[#212529] text-sm font-semibold truncate">{product.name}</p>
                  <p className="text-[#ADB5BD] text-xs mt-0.5">市场价值 {product.worth}</p>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <Star size={11} className="text-[#D32F2F]" fill="#D32F2F" />
                    <span className="text-[#D32F2F] text-base font-black">{product.points.toLocaleString()}</span>
                    <span className="text-[#ADB5BD] text-xs">积分</span>
                    {product.originalPoints !== product.points && (
                      <span className="text-[#ADB5BD] text-xs line-through">{product.originalPoints.toLocaleString()}</span>
                    )}
                  </div>
                </div>
                <button className="bg-[#D32F2F] text-white text-xs font-bold px-4 py-2 rounded-xl active:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0">
                  立即兑换
                </button>
              </div>
            </div>
          ))}
          <div className="text-center py-3">
            <button className="text-[#D32F2F] text-sm font-medium flex items-center gap-1 mx-auto">
              查看更多商品 <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {activeSection === 'records' && (
        <div className="mx-4">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {records.map((record, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3.5 border-b border-[#F5F5F5] last:border-0"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    record.type === 'in' ? 'bg-[#FFF0F0]' : 'bg-[#F5F5F5]'
                  }`}
                >
                  {record.type === 'in' ? (
                    <TrendingUp size={16} className="text-[#D32F2F]" />
                  ) : (
                    <ShoppingBag size={16} className="text-[#888]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#212529] text-sm font-medium truncate">{record.desc}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[#ADB5BD] text-xs">{record.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#DEE2E6]" />
                    <span className="text-[#ADB5BD] text-xs">{record.tag}</span>
                  </div>
                </div>
                <span
                  className={`text-sm font-bold flex-shrink-0 ${
                    record.type === 'in' ? 'text-[#D32F2F]' : 'text-[#888]'
                  }`}
                >
                  {record.type === 'in' ? '+' : ''}{record.points.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div className="py-4 text-center">
            <div className="flex items-center gap-2 justify-center text-[#ADB5BD] text-xs">
              <Clock size={12} />
              <span>仅显示最近6个月记录</span>
            </div>
          </div>
        </div>
      )}

      {showLottery && <LotteryModal onClose={() => setShowLottery(false)} />}
    </div>
  );
}
