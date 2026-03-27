'use client';

import { use } from 'react';
import Link from 'next/link';
import { events } from '@/data/events';
import Badge from '@/components/ui/Badge';
import { Trophy, ArrowLeft } from 'lucide-react';

const statusLabels: Record<string, { label: string; variant: 'success' | 'warning' | 'danger' }> = {
  recruiting: { label: '모집중', variant: 'success' },
  ongoing: { label: '진행중', variant: 'warning' },
  ended: { label: '종료', variant: 'danger' },
};

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">해당 항목을 찾을 수 없습니다</h1>
        <Link href="/events" className="text-brand-600 hover:underline">
          대회 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const statusInfo = statusLabels[event.status];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/events" className="text-sm text-brand-600 hover:underline mb-4 inline-flex items-center gap-1">
        <ArrowLeft size={14} /> 대회 목록
      </Link>

      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-brand-200 to-brand-400 flex items-center justify-center">
          <Trophy size={64} className="text-white" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge label={statusInfo.label} variant={statusInfo.variant} />
          </div>

          <h1 className="text-2xl font-bold text-primary mb-2">{event.title}</h1>
          <p className="text-tertiary mb-4">{event.organizer}</p>
          <p className="text-secondary mb-6">{event.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-surface rounded-lg">
              <div className="text-sm font-medium text-tertiary mb-1">일정</div>
              <div className="text-sm text-primary">{event.schedule}</div>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <div className="text-sm font-medium text-tertiary mb-1">접수 기간</div>
              <div className="text-sm text-primary">{event.registrationStart} ~ {event.registrationEnd}</div>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <div className="text-sm font-medium text-tertiary mb-1">참가 조건</div>
              <div className="text-sm text-primary">{event.eligibility}</div>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <div className="text-sm font-medium text-tertiary mb-1">상금</div>
              <div className="text-sm text-primary">{event.prize}</div>
            </div>
          </div>

          <div className="p-4 bg-surface rounded-lg mb-6">
            <div className="text-sm font-medium text-tertiary mb-1">주최 기관</div>
            <div className="text-sm text-primary">{event.organizer}</div>
          </div>

          <span className="inline-block px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors cursor-pointer">
            접수 페이지 바로가기
          </span>
        </div>
      </div>
    </div>
  );
}
