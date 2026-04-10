type Tab = 'home' | 'shop' | 'profile';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-[#F8F9FA] border-t border-[#E9ECEF] z-50">
      <div className="flex items-stretch">
        <NavItem active={activeTab === 'home'} onClick={() => onTabChange('home')}>
          <HomeIcon active={activeTab === 'home'} />
          <span className={`text-xs mt-0.5 ${activeTab === 'home' ? 'font-bold text-[#D62828]' : 'text-[#ADB5BD]'}`}>首页</span>
          {activeTab === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] mt-0.5" />}
        </NavItem>

        <NavItem active={activeTab === 'shop'} onClick={() => onTabChange('shop')}>
          <ShopIcon active={activeTab === 'shop'} />
          <span className={`text-xs mt-0.5 ${activeTab === 'shop' ? 'font-bold text-[#D62828]' : 'text-[#ADB5BD]'}`}>商城</span>
          {activeTab === 'shop' && <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] mt-0.5" />}
        </NavItem>

        <NavItem active={activeTab === 'profile'} onClick={() => onTabChange('profile')}>
          <ProfileIcon active={activeTab === 'profile'} />
          <span className={`text-xs mt-0.5 ${activeTab === 'profile' ? 'font-bold text-[#D62828]' : 'text-[#ADB5BD]'}`}>我的</span>
          {activeTab === 'profile' && <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] mt-0.5" />}
        </NavItem>
      </div>
      <div className="h-safe-area-inset-bottom" style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
    </div>
  );
}

function NavItem({ children, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button className="flex-1 flex flex-col items-center justify-center py-2 gap-0" onClick={onClick}>
      {children}
    </button>
  );
}

function HomeIcon({ active }: { active?: boolean }) {
  const color = active ? '#D62828' : '#ADB5BD';
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 11L13 3L22.5 11V22C22.5 22.5523 22.0523 23 21.5 23H16.5V17H9.5V23H4.5C3.94772 23 3.5 22.5523 3.5 22V11Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9.5 23V17H16.5V23" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function ShopIcon({ active }: { active?: boolean }) {
  const color = active ? '#D62828' : '#ADB5BD';
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 7H19L20.5 19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5L7 7Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 7C10 5.34315 11.3431 4 13 4C14.6569 4 16 5.34315 16 7"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="10.5" cy="13.5" r="1" fill={color} />
      <circle cx="15.5" cy="13.5" r="1" fill={color} />
      <path
        d="M10.5 16.5C10.5 16.5 11.2 17.5 13 17.5C14.8 17.5 15.5 16.5 15.5 16.5"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProfileIcon({ active }: { active?: boolean }) {
  const color = active ? '#D62828' : '#ADB5BD';
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="9" r="4" stroke={color} strokeWidth="1.7" />
      <path
        d="M5 22C5 18.134 8.13401 15 12 15H14C17.866 15 21 18.134 21 22"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
