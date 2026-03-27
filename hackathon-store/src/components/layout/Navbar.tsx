'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/chat', label: 'AI 채팅' },
  { href: '/projects', label: '프로젝트' },
  { href: '/events', label: '대회' },
  { href: '/recruit', label: '팀원 모집' },
  { href: '/vibe-coding', label: 'Vibe Coding' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-brand-600">🎯 해커톤스토어</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-brand-600 hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors">
              로그인
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-brand-600 hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-2 px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700">
              로그인
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
