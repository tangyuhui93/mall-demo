import { useState } from 'react';
import { Search, SlidersHorizontal, Star, Clock, MapPin, ShieldCheck } from 'lucide-react';

const categories = ['全部', '新鲜水果', '粮油', '白酒', '日用品'];

const products = [
  {
    id: 1,
    name: '红富士苹果礼盒 5kg',
    points: 980,
    originalPoints: 1200,
    category: '新鲜水果',
    rating: 4.9,
    reviews: 2341,
    stock: 30,
    saveAmount: '24',
    img: 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '产地直供',
    tagColor: 'bg-[#FFF0E0] text-[#C06030]',
    badge: 'origin',
  },
  {
    id: 2,
    name: '冰糖心苹果 新疆阿克苏 3kg',
    points: 760,
    originalPoints: 900,
    category: '新鲜水果',
    rating: 4.8,
    reviews: 1876,
    stock: 50,
    saveAmount: '14',
    img: 'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '热门',
    tagColor: 'bg-[#FEEBEC] text-[#B71C1C]',
    badge: 'origin',
  },
  {
    id: 3,
    name: '压榨花生油 5L 桶装',
    points: 1580,
    originalPoints: 1900,
    category: '粮油',
    rating: 4.9,
    reviews: 3102,
    stock: 80,
    saveAmount: '33',
    img: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300',
    tag: '产地直供',
    tagColor: 'bg-[#FFF0E0] text-[#C06030]',
    badge: 'origin',
  },
  {
    id: 4,
    name: '花生油礼盒 2瓶装 1.8L×2',
    points: 1280,
    originalPoints: 1500,
    category: '粮油',
    rating: 4.7,
    reviews: 987,
    stock: 40,
    saveAmount: '22',
    img: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '礼盒装',
    tagColor: 'bg-[#FDF3DC] text-[#B07820]',
    badge: null,
  },
  {
    id: 5,
    name: '酱香型白酒 53度 500ml',
    points: 2200,
    originalPoints: 2600,
    category: '白酒',
    rating: 4.8,
    reviews: 1542,
    stock: 20,
    saveAmount: '40',
    img: 'https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '正品溯源',
    tagColor: 'bg-[#FDF3DC] text-[#B07820]',
    badge: 'authentic',
  },
  {
    id: 6,
    name: '浓香型白酒 52度 礼盒装',
    points: 1860,
    originalPoints: 2200,
    category: '白酒',
    rating: 4.7,
    reviews: 1123,
    stock: 15,
    saveAmount: '34',
    img: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '限量',
    tagColor: 'bg-[#FEEBEC] text-[#B71C1C]',
    badge: 'authentic',
  },
  {
    id: 7,
    name: '清香型白酒 42度 500ml×2瓶',
    points: 1480,
    originalPoints: null,
    category: '白酒',
    rating: 4.6,
    reviews: 764,
    stock: 35,
    saveAmount: null,
    img: 'https://images.pexels.com/photos/3407779/pexels-photo-3407779.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '新品',
    tagColor: 'bg-[#FFF0E0] text-[#C06030]',
    badge: 'authentic',
  },
  {
    id: 8,
    name: '炒花生礼包 500g×4袋',
    points: 680,
    originalPoints: 800,
    category: '日用品',
    rating: 4.8,
    reviews: 2108,
    stock: 200,
    saveAmount: '12',
    img: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '推荐',
    tagColor: 'bg-[#FFF0E0] text-[#C06030]',
    badge: null,
  },
];

function BadgeTag({ badge }: { badge: string | null }) {
  if (!badge) return null;
  if (badge === 'origin') {
    return (
      <div className="flex items-center gap-0.5 text-[#A06040] mt-1">
        <MapPin size={9} />
        <span style={{ fontSize: 10 }}>产地直发</span>
      </div>
    );
  }
  if (badge === 'authentic') {
    return (
      <div className="flex items-center gap-0.5 text-[#B07820] mt-1">
        <ShieldCheck size={9} />
        <span style={{ fontSize: 10 }}>正品溯源</span>
      </div>
    );
  }
  return null;
}

export default function MpShop() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === '全部' || p.category === activeCategory;
    const matchSearch = p.name.includes(search);
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-[#FFF5EC] min-h-full">
      <div className="bg-[#FFF8F3] px-4 pt-3 pb-3 sticky top-0 z-10 border-b border-[#F0E8DE]">
        <h1 className="text-base font-bold text-[#1A1A1A] mb-2.5">积分商城</h1>

        <div className="bg-[#FFF0E0] border border-[#F5DECA] rounded-xl px-3 py-2 flex items-center gap-2 mb-2.5">
          <Clock size={13} className="text-[#E06030] flex-shrink-0" />
          <p className="text-[#C05030] text-xs font-medium flex-1">
            您有 <span className="font-bold">2,400</span> 积分将于{' '}
            <span className="font-bold">30天</span> 后过期，快去兑换好物！
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-[#F5EDE0] rounded-xl px-3 py-2">
            <Search size={14} className="text-[#BBA090]" />
            <input
              className="bg-transparent flex-1 text-xs text-[#1A1A1A] outline-none placeholder-[#BBA090]"
              placeholder="搜索商品..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="w-9 h-9 bg-[#F5EDE0] rounded-xl flex items-center justify-center">
            <SlidersHorizontal size={15} className="text-[#8B6050]" />
          </button>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-[#D32F2F] text-white shadow-sm shadow-red-200'
                  : 'bg-white text-[#8B6050] border border-[#EDE0D4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F5EDE0] active:scale-[0.97] transition-transform"
            >
              <div className="relative">
                <img src={p.img} alt={p.name} className="w-full h-32 object-cover" />
                {p.tag && (
                  <span className={`absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full font-semibold ${p.tagColor}`}>
                    {p.tag}
                  </span>
                )}
                {p.stock <= 20 && (
                  <span className="absolute top-2 right-2 bg-black/45 text-white text-[10px] px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    仅剩{p.stock}件
                  </span>
                )}
                {p.saveAmount && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-2 py-1.5">
                    <span className="text-white" style={{ fontSize: 10 }}>
                      兑换可省约{' '}
                      <span className="font-bold text-[#FFD700]">¥{p.saveAmount}</span>
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-[#1A1A1A] text-xs font-semibold leading-tight mb-0.5 line-clamp-2">
                  {p.name}
                </p>
                <BadgeTag badge={p.badge} />
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <Star size={10} className="text-[#F5A623] fill-[#F5A623]" />
                  <span className="text-[#8B6050] text-xs">{p.rating}</span>
                  <span className="text-[#D0C0B0] text-xs">({p.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#D32F2F] text-sm font-black">{p.points.toLocaleString()}</span>
                    <span className="text-[#D32F2F] text-xs ml-0.5">积分</span>
                    {p.originalPoints && (
                      <span className="text-[#CCC] text-xs line-through ml-1">{p.originalPoints.toLocaleString()}</span>
                    )}
                  </div>
                  <button className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white text-[11px] px-3 py-1.5 rounded-full font-bold shadow-sm shadow-red-100 active:opacity-80 transition-opacity">
                    兑换
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-[#BBA090]">
            <Search size={32} className="mb-3 opacity-40" />
            <p className="text-sm">暂无相关商品</p>
          </div>
        )}
      </div>
    </div>
  );
}
