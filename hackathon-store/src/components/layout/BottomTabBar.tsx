'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, FolderOpen, Trophy, MoreHorizontal, Users, Code2 } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { href: '/', label: '홈', icon: Home },
  { href: '/chat', label: '채팅', icon: MessageSquare },
  { href: '/projects', label: '프로젝트', icon: FolderOpen },
  { href: '/events', label: '대회', icon: Trophy },
];

const moreLinks = [
  { href: '/recruit', label: '팀원 모집', icon: Users },
  { href: '/vibe-coding', label: 'Vibe Coding', icon: Code2 },
];

export default function BottomTabBar() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore && (
        <div className="fixed inset-0 z-40" onClick={() => setShowMore(false)}>
          <div className="absolute bottom-16 right-4 bg-card border border-border rounded-xl shadow-lg p-2 min-w-[160px]">
            {moreLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setShowMore(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-secondary hover:bg-brand-subtle transition-colors"
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 h-14 bg-card border-t border-border flex items-center justify-around px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors ${
                isActive ? 'text-brand-600' : 'text-tertiary'
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </Link>
          );
        })}
        <button
          onClick={() => setShowMore(!showMore)}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors ${
            ['/recruit', '/vibe-coding'].includes(pathname) ? 'text-brand-600' : 'text-tertiary'
          }`}
        >
          <MoreHorizontal size={20} />
          <span className="text-[10px] font-medium">더보기</span>
        </button>
      </nav>
    </>
  );
}
