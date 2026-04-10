import { useState } from 'react';
import { ChevronLeft, AlertTriangle, Info, ArrowRight, Star } from 'lucide-react';

interface WithdrawPageProps {
  onBack: () => void;
  onGoExchange: () => void;
}

export default function WithdrawPage({ onBack, onGoExchange }: WithdrawPageProps) {
  const [amount, setAmount] = useState('');
  const totalPoints = 3280;
  const maxCash = totalPoints / 100;
  const feeRate = 0.02;

  const inputPoints = Math.round(parseFloat(amount || '0') * 100);
  const fee = parseFloat(amount || '0') * feeRate;
  const actualAmount = parseFloat(amount || '0') - fee;

  const equivalentPoints = inputPoints;
  const exchangeSavings = fee;

  const handleAmountChange = (v: string) => {
    const num = parseFloat(v);
    if (v === '' || (num >= 0 && num <= maxCash)) {
      setAmount(v);
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen pb-24">
      <div
        className="relative px-4 pt-12 pb-5"
        style={{ background: 'linear-gradient(145deg, #424242 0%, #616161 100%)' }}
      >
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/15 active:bg-white/25"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <span className="text-white text-lg font-bold">积分提现</span>
        </div>

        <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
          <p className="text-white/60 text-xs mb-1">可提现积分</p>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-3xl font-black">{totalPoints.toLocaleString()}</span>
            <span className="text-white/60 text-sm">分</span>
            <span className="text-white/40 text-xs">≈ ¥{maxCash.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 mb-3">
        <div className="bg-[#FFF3E0] rounded-2xl p-4 border border-[#FFE082]">
          <div className="flex items-start gap-2.5">
            <AlertTriangle size={15} className="text-[#E65100] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[#7B3F00] text-xs font-bold mb-1.5">提现前请注意</p>
              <div className="space-y-1">
                {[
                  '提现将收取 2% 手续费（如提现¥32.8，实际到账¥32.14）',
                  '到账时间 3-5 个工作日',
                  '积分兑换商品 0手续费，且部分商品享5折优惠',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="text-[#E65100] text-xs font-bold flex-shrink-0">·</span>
                    <p className="text-[#A0522D] text-xs leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#212529] text-sm font-bold">提现金额</span>
            <button
              onClick={() => setAmount(maxCash.toString())}
              className="text-[#D32F2F] text-xs font-bold"
            >
              全部提现
            </button>
          </div>
          <div className="flex items-center gap-2 bg-[#F8F9FA] rounded-xl px-4 py-3 border border-[#E9ECEF]">
            <span className="text-[#212529] text-lg font-black">¥</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              placeholder="0.00"
              className="flex-1 bg-transparent text-[#212529] text-2xl font-black outline-none placeholder:text-[#CED4DA]"
              style={{ minWidth: 0 }}
            />
          </div>

          {parseFloat(amount) > 0 && (
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#6C757D]">提现金额</span>
                <span className="text-[#212529] font-medium">¥{parseFloat(amount).toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#C62828] font-medium flex items-center gap-1">
                  <Info size={11} />
                  手续费（2%）
                </span>
                <span className="text-[#C62828] font-bold">-¥{fee.toFixed(2)}</span>
              </div>
              <div className="h-px bg-[#F5F5F5]" />
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#212529] font-bold">实际到账</span>
                <span className="text-[#212529] text-sm font-black">¥{actualAmount > 0 ? actualAmount.toFixed(2) : '0.00'}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {parseFloat(amount) > 0 && (
        <div className="mx-4 mb-4">
          <div
            className="rounded-2xl p-4 border"
            style={{
              background: 'linear-gradient(135deg, #FFEBEE 0%, #FFF3E0 100%)',
              borderColor: '#FFCDD2',
            }}
          >
            <div className="flex items-start gap-2.5">
              <Star size={15} className="text-[#D32F2F] mt-0.5 flex-shrink-0" fill="#D32F2F" />
              <div className="flex-1">
                <p className="text-[#212529] text-xs font-bold mb-1">换个方式更省钱</p>
                <p className="text-[#6C757D] text-xs leading-relaxed mb-2.5">
                  您选择提现 ¥{parseFloat(amount).toFixed(2)}，将损失{' '}
                  <span className="font-bold text-[#C62828]">¥{fee.toFixed(2)}</span> 手续费。
                  用同等积分兑换商品，<span className="font-bold text-[#2E7D32]">节省 ¥{fee.toFixed(2)}</span>。
                </p>
                <button
                  onClick={onGoExchange}
                  className="flex items-center gap-1.5 bg-[#D32F2F] text-white text-xs font-bold px-4 py-2 rounded-xl active:opacity-80"
                >
                  去兑换商品，省{' '}
                  <span className="text-[#FCBF49]">¥{fee.toFixed(2)}</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#212529] text-sm font-bold">提现到</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-xl border border-[#E9ECEF]">
            <div className="w-10 h-10 rounded-xl bg-[#1DB954]/10 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#07C160">
                <path d="M8.077 2c-3.297 0-6 2.703-6 6.077 0 1.792.757 3.396 1.962 4.538L2 20l7.385-2.038a6.077 6.077 0 1 0-1.308-11.962zM16 8c0-3.314-2.686-6-6-6S4 4.686 4 8a5.989 5.989 0 0 0 2.077 4.538L4 20l7.923-2.538A5.99 5.99 0 0 0 16 14a6 6 0 0 0 0-6z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[#212529] text-sm font-semibold">微信钱包</p>
              <p className="text-[#ADB5BD] text-xs">尾号 8899 · 已绑定</p>
            </div>
            <span className="text-[#ADB5BD] text-xs">更换</span>
          </div>
        </div>
      </div>

      <div className="mx-4">
        <button
          disabled={!amount || parseFloat(amount) <= 0}
          className="w-full py-4 rounded-2xl text-sm font-bold transition-all disabled:opacity-40"
          style={{
            background:
              amount && parseFloat(amount) > 0
                ? 'linear-gradient(135deg, #616161 0%, #424242 100%)'
                : '#E9ECEF',
            color: amount && parseFloat(amount) > 0 ? 'white' : '#ADB5BD',
            boxShadow:
              amount && parseFloat(amount) > 0
                ? '0 4px 12px rgba(0,0,0,0.2)'
                : 'none',
          }}
        >
          确认提现（扣除2%手续费）
        </button>
        <p className="text-center text-[#ADB5BD] text-xs mt-3">
          提现不如兑换划算 ·{' '}
          <button onClick={onGoExchange} className="text-[#D32F2F] font-medium">
            查看兑换好物
          </button>
        </p>
      </div>
    </div>
  );
}
