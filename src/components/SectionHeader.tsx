import { ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  onMore?: () => void;
}

export default function SectionHeader({ title, subtitle, onMore }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 mb-3">
      <div className="flex items-center gap-2">
        <div className="w-1 h-5 bg-gradient-to-b from-orange-400 to-amber-500 rounded-full" />
        <div>
          <h2 className="text-white font-bold text-base">{title}</h2>
          {subtitle && <p className="text-gray-400 text-xs">{subtitle}</p>}
        </div>
      </div>
      {onMore && (
        <button
          onClick={onMore}
          className="flex items-center gap-0.5 text-gray-400 text-xs hover:text-orange-400 transition-colors"
        >
          查看更多
          <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}
