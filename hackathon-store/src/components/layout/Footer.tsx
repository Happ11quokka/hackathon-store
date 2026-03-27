import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-brand-600">🎯 해커톤스토어</span>
            <Link href="/" className="text-sm text-gray-500 hover:text-brand-600">
              서비스 소개
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © 2026 해커톤스토어. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
