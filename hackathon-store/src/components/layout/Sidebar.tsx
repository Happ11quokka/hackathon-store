'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, FolderOpen, Trophy, Users, Code2 } from 'lucide-react';

const mainLinks = [
  { href: '/', label: '홈', icon: Home },
  { href: '/chat', label: 'AI 채팅', icon: MessageSquare },
  { href: '/projects', label: '프로젝트', icon: FolderOpen },
  { href: '/events', label: '대회', icon: Trophy },
];

const communityLinks = [
  { href: '/recruit', label: '팀원 모집', icon: Users },
  { href: '/vibe-coding', label: 'Vibe Coding', icon: Code2 },
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  const renderLink = (link: typeof mainLinks[0]) => {
    const isActive = pathname === link.href;
    const Icon = link.icon;
    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={onClose}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
          isActive
            ? 'bg-sidebar-active text-brand-200 font-medium'
            : 'text-sidebar-text hover:bg-sidebar-active hover:text-brand-200'
        }`}
      >
        <Icon size={18} />
        {link.label}
      </Link>
    );
  };

  return (
    <aside className="w-[220px] bg-sidebar-bg h-full flex flex-col p-3 gap-1">
      <Link href="/" className="text-white font-bold text-lg px-3 py-2 mb-4" onClick={onClose}>
        HackStore
      </Link>

      <span className="text-[10px] uppercase tracking-wider text-sidebar-muted px-3 mb-1">Main</span>
      {mainLinks.map(renderLink)}

      <span className="text-[10px] uppercase tracking-wider text-sidebar-muted px-3 mt-4 mb-1">Community</span>
      {communityLinks.map(renderLink)}

      <div className="mt-auto px-3 py-2 border-t border-sidebar-border text-[11px] text-sidebar-muted">
        Cmd+K to search
      </div>
    </aside>
  );
}
