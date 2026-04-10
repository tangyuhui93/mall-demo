import { useState } from 'react';
import StatusBar from './components/StatusBar';
import SearchBar from './components/SearchBar';
import PointsCard from './components/PointsCard';
import HotSection from './components/HotSection';
import MemberDeals from './components/MemberDeals';
import ProductTabs from './components/ProductTabs';
import MpShop from './components/MpShop';
import BottomNav from './components/BottomNav';

type Tab = 'home' | 'shop' | 'profile';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FFF0F0 0%, #FFE6E0 100%)' }}>
      <div className="max-w-[390px] mx-auto min-h-screen relative overflow-x-hidden shadow-2xl" style={{ background: 'linear-gradient(180deg, #FFF0F0 0%, #FFE6E0 100%)' }}>
        <StatusBar />
        {activeTab === 'home' && (
          <>
            <SearchBar />
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
