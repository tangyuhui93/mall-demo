import { useState } from 'react';
import StatusBar from './components/StatusBar';
import SearchBar from './components/SearchBar';
import BannerCard from './components/BannerCard';
import HotSection from './components/HotSection';
import MpShop from './components/MpShop';
import BottomNav from './components/BottomNav';
import ProfilePage from './components/profile/ProfilePage';
import PointsDetailPage from './components/profile/PointsDetailPage';
import WithdrawPage from './components/profile/WithdrawPage';
import { allProducts } from './data/products';

type Tab = 'home' | 'shop' | 'profile';
type ProfileView = 'main' | 'points' | 'withdraw';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [profileView, setProfileView] = useState<ProfileView>('main');

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === 'profile') setProfileView('main');
  };

  return (
    <div className="min-h-screen bg-[#fff]">
      <div className="max-w-[390px] mx-auto min-h-screen bg-[#fff] relative overflow-x-hidden shadow-2xl">
        {activeTab !== 'profile' && <StatusBar />}
        {activeTab === 'home' && (
          <>
            <SearchBar />
            <BannerCard product={allProducts.find((p) => p.id === 'p1')!} />
            <HotSection />
          </>
        )}
        {activeTab === 'shop' && <MpShop />}
        {activeTab === 'profile' && profileView === 'main' && (
          <>
            <StatusBar />
            <ProfilePage onOpenPoints={() => setProfileView('points')} />
          </>
        )}
        {activeTab === 'profile' && profileView === 'points' && (
          <PointsDetailPage
            onBack={() => setProfileView('main')}
            onWithdraw={() => setProfileView('withdraw')}
          />
        )}
        {activeTab === 'profile' && profileView === 'withdraw' && (
          <WithdrawPage
            onBack={() => setProfileView('points')}
            onGoExchange={() => setProfileView('points')}
          />
        )}
        <div className="h-24" />
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
}

export default App;
