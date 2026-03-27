'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Home, MessageSquare, FolderOpen, Trophy, Users, Code2 } from 'lucide-react';

interface SearchItem {
  label: string;
  href: string;
  group: string;
  icon: React.ElementType;
}

const pages: SearchItem[] = [
  { label: '홈', href: '/', group: '페이지', icon: Home },
  { label: 'AI 채팅', href: '/chat', group: '페이지', icon: MessageSquare },
  { label: '프로젝트 아카이브', href: '/projects', group: '페이지', icon: FolderOpen },
  { label: '대회 보드', href: '/events', group: '페이지', icon: Trophy },
  { label: '팀원 모집', href: '/recruit', group: '페이지', icon: Users },
  { label: 'Vibe Coding 가이드', href: '/vibe-coding', group: '페이지', icon: Code2 },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = pages.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const navigate = (href: string) => {
    router.push(href);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      navigate(filtered[selectedIndex].href);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={18} className="text-tertiary flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="페이지, 프로젝트, 대회 검색..."
            className="flex-1 bg-transparent text-sm text-primary placeholder:text-tertiary outline-none"
          />
          <kbd className="text-[10px] text-tertiary bg-surface px-1.5 py-0.5 rounded border border-border">
            ESC
          </kbd>
        </div>
        <div className="max-h-64 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="px-3 py-6 text-center text-sm text-tertiary">
              검색 결과가 없습니다
            </div>
          ) : (
            filtered.map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.href}
                  onClick={() => navigate(item.href)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    i === selectedIndex ? 'bg-brand-subtle text-brand-600' : 'text-secondary hover:bg-surface'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
