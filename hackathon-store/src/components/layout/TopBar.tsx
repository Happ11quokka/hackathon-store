'use client';

import { usePathname } from 'next/navigation';
import { Search, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const pathLabels: Record<string, string> = {
  '/': '홈',
  '/chat': 'AI 채팅',
  '/projects': '프로젝트',
  '/events': '대회',
  '/recruit': '팀원 모집',
  '/vibe-coding': 'Vibe Coding',
};

interface TopBarProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function TopBar({ onMenuClick, onSearchClick }: TopBarProps) {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const label = pathLabels[pathname] ?? pathname.split('/').pop();

  // Determine if dark for icon display
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <header className="h-12 border-b border-border bg-card flex items-center px-4 md:px-5 justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-1.5 rounded-lg text-tertiary hover:bg-brand-subtle transition-colors"
          aria-label="메뉴"
        >
          <Menu size={20} />
        </button>
        <span className="text-sm text-tertiary">{label}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onSearchClick}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-brand-subtle rounded-lg text-xs text-brand-600 hover:bg-brand-100 transition-colors"
        >
          <Search size={14} />
          <span>Cmd+K</span>
        </button>
        <button
          onClick={toggle}
          className="p-1.5 rounded-lg text-tertiary hover:bg-brand-subtle transition-colors"
          aria-label="테마 전환"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="w-7 h-7 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
          DH
        </div>
      </div>
    </header>
  );
}
