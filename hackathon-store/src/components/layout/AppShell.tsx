'use client';

import { useState, useCallback, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import BottomTabBar from './BottomTabBar';
import CommandPalette from './CommandPalette';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      {/* Desktop sidebar */}
      <div className="hidden md:block flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={closeSidebar} />
          <div className="relative w-[220px] h-full">
            <Sidebar onClose={closeSidebar} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          onMenuClick={() => setSidebarOpen(true)}
          onSearchClick={() => setSearchOpen(!searchOpen)}
        />
        <main className="flex-1 overflow-y-auto pb-14 md:pb-0">
          {children}
        </main>
      </div>

      <BottomTabBar />
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
