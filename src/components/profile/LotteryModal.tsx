import { useState, useRef } from 'react';
import { X, Star, Gift } from 'lucide-react';

interface LotteryModalProps {
  onClose: () => void;
}

const prizes = [
  { label: '50积分', color: '#FFF3E0', textColor: '#E65100', isSpecial: false },
  { label: '加油券5元', color: '#FFEBEE', textColor: '#C62828', isSpecial: true },
  { label: '谢谢参与', color: '#F5F5F5', textColor: '#9E9E9E', isSpecial: false },
  { label: '100积分', color: '#E8F5E9', textColor: '#2E7D32', isSpecial: false },
  { label: '购物抵扣券', color: '#E3F2FD', textColor: '#1565C0', isSpecial: true },
  { label: '20积分', color: '#FFF8E1', textColor: '#F57F17', isSpecial: false },
  { label: '谢谢参与', color: '#F5F5F5', textColor: '#9E9E9E', isSpecial: false },
  { label: '200积分', color: '#FCE4EC', textColor: '#AD1457', isSpecial: true },
];

export default function LotteryModal({ onClose }: LotteryModalProps) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [chancesLeft, setChancesLeft] = useState(3);
  const wheelRef = useRef<HTMLDivElement>(null);

  const spin = () => {
    if (spinning || chancesLeft <= 0) return;
    setResult(null);
    setSpinning(true);
    setChancesLeft((c) => c - 1);

    const winIndex = Math.floor(Math.random() * prizes.length);
    const sliceAngle = 360 / prizes.length;
    const targetAngle = 360 * 5 + (360 - winIndex * sliceAngle - sliceAngle / 2);
    const newRotation = rotation + targetAngle;

    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      setResult(prizes[winIndex].label);
    }, 4000);
  };

  const segmentAngle = 360 / prizes.length;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-[390px] rounded-t-3xl overflow-hidden">
        <div
          className="relative px-4 pt-6 pb-4 text-center"
          style={{ background: 'linear-gradient(135deg, #C62828 0%, #E53935 100%)' }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center active:bg-white/30"
          >
            <X size={16} className="text-white" />
          </button>
          <div className="flex items-center justify-center gap-2 mb-1">
            <Gift size={18} className="text-[#FCBF49]" />
            <span className="text-white text-lg font-black">幸运大转盘</span>
          </div>
          <p className="text-white/70 text-xs">每次抽奖消耗 50积分 · 今日剩余 <span className="text-[#FCBF49] font-bold">{chancesLeft}次</span></p>
        </div>

        <div className="bg-[#FFF8E1] px-4 py-2.5 border-b border-[#FFE082]">
          <p className="text-[#7B3F00] text-xs text-center">
            抽奖奖励 <span className="font-bold text-[#C62828]">仅可用于兑换商品</span>，不可提现 · 7天有效期
          </p>
        </div>

        <div className="flex flex-col items-center py-6 px-4 bg-[#FAFAFA]">
          <div className="relative w-64 h-64">
            <div
              ref={wheelRef}
              className="w-64 h-64 rounded-full relative overflow-hidden"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
              }}
            >
              {prizes.map((prize, i) => {
                const angle = i * segmentAngle;
                const midAngle = (angle + segmentAngle / 2) * (Math.PI / 180);
                const textRadius = 80;
                const textX = 128 + textRadius * Math.sin(midAngle);
                const textY = 128 - textRadius * Math.cos(midAngle);

                const startAngle = angle * (Math.PI / 180);
                const endAngle = (angle + segmentAngle) * (Math.PI / 180);
                const x1 = 128 + 128 * Math.sin(startAngle);
                const y1 = 128 - 128 * Math.cos(startAngle);
                const x2 = 128 + 128 * Math.sin(endAngle);
                const y2 = 128 - 128 * Math.cos(endAngle);

                return (
                  <svg
                    key={i}
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d={`M 128 128 L ${x1} ${y1} A 128 128 0 0 1 ${x2} ${y2} Z`}
                      fill={prize.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                    <text
                      x={textX}
                      y={textY}
                      fill={prize.textColor}
                      fontSize="11"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${angle + segmentAngle / 2}, ${textX}, ${textY})`}
                    >
                      {prize.label}
                    </text>
                  </svg>
                );
              })}
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                <div
                  className="w-0 h-0"
                  style={{
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '20px solid #D32F2F',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  }}
                />
              </div>
              <button
                onClick={spin}
                disabled={spinning || chancesLeft <= 0}
                className="w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg active:scale-95 transition-transform disabled:opacity-70"
                style={{
                  background: 'linear-gradient(135deg, #D32F2F 0%, #C62828 100%)',
                  border: '3px solid white',
                  boxShadow: '0 4px 12px rgba(211,47,47,0.4)',
                }}
              >
                <Star size={16} className="text-[#FCBF49]" fill="#FCBF49" />
                <span className="text-white text-[10px] font-black mt-0.5">
                  {chancesLeft > 0 ? '抽奖' : '已用完'}
                </span>
              </button>
            </div>
          </div>

          {result && (
            <div className="mt-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-[#FFE082] text-center w-full">
              <p className="text-[#212529] text-sm font-bold mb-1">
                {result === '谢谢参与' ? '很遗憾，未中奖' : `恭喜获得：${result}`}
              </p>
              {result !== '谢谢参与' && (
                <p className="text-[#6C757D] text-xs">已存入积分账户，可用于兑换商品</p>
              )}
              {result === '谢谢参与' && chancesLeft > 0 && (
                <button onClick={spin} className="mt-2 text-[#D32F2F] text-xs font-bold">
                  还有 {chancesLeft} 次机会，再试一次 →
                </button>
              )}
            </div>
          )}

          {chancesLeft === 0 && !spinning && (
            <p className="mt-3 text-[#ADB5BD] text-xs text-center">今日抽奖次数已用完，明天再来</p>
          )}
        </div>

        <div className="px-4 pb-6">
          <button
            onClick={onClose}
            className="w-full bg-[#D32F2F] text-white font-bold py-3.5 rounded-2xl active:opacity-90 transition-opacity shadow-sm"
            style={{ boxShadow: '0 4px 12px rgba(211,47,47,0.3)' }}
          >
            去兑换商品
          </button>
        </div>
      </div>
    </div>
  );
}
