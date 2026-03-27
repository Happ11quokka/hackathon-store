import type { Metadata } from 'next';
import '@/styles/globals.css';
import AppShell from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: '해커톤스토어 - 대학생 프로젝트 경험 플랫폼',
  description: '대한민국 모든 대학생의 프로젝트 경험을 연결하는 플랫폼',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen bg-surface text-primary">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
