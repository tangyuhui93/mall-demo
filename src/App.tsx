import { useState } from 'react';
import StatusBar from './components/StatusBar';
import SearchBar from './components/SearchBar';
import BannerCard from './components/BannerCard';
import PointsCard from './components/PointsCard';
import HotSection from './components/HotSection';
import MemberDeals from './components/MemberDeals';
import ProductTabs from './components/ProductTabs';
import MpShop from './components/MpShop';
import BottomNav from './components/BottomNav';
import { allProducts } from './data/products';

type Tab = 'home' | 'shop' | 'profile';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-[#fff]">
      <div className="max-w-[390px] mx-auto min-h-screen bg-[#FFE8D0] relative overflow-x-hidden shadow-2xl">
        <StatusBar />
        {activeTab === 'home' && (
          <>
            <SearchBar />
            <BannerCard product={allProducts.find((p) => p.id === 'p1')!} />
            <PointsCard />
            <HotSection />
            <MemberDeals />
            <ProductTabs />
          </>
        )}
        {activeTab === 'shop' && <MpShop />}
        {activeTab === 'profile' && (
          <div className="flex flex-col items-center justify-center h-[70vh] text-[#BBA090]">
            <p className="text-sm">个人中心开发中</p>
          </div>
        )}
        <div className="h-24" />
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
