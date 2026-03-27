'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EventCard from '@/components/events/EventCard';
import FilterChips from '@/components/ui/FilterChips';
import { events } from '@/data/events';
import { filterEvents } from '@/lib/filters';

const statusOptions = [
  { label: '모집중', value: 'recruiting' },
  { label: '진행중', value: 'ongoing' },
  { label: '종료', value: 'ended' },
];

const statusDotColors: Record<string, string> = {
  recruiting: 'bg-emerald-500',
  ongoing: 'bg-amber-500',
  ended: 'bg-gray-300',
};

export default function EventsPage() {
  const router = useRouter();
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  const filteredEvents = filterEvents(events, { status: selectedStatus });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold text-primary mb-4">대회 보드</h1>

      <div className="mb-6">
        <FilterChips
          options={statusOptions}
          selected={selectedStatus}
          onChange={setSelectedStatus}
        />
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-tertiary mb-4">조건에 맞는 결과가 없습니다</p>
          <button
            onClick={() => setSelectedStatus([])}
            className="px-4 py-2 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-700"
          >
            필터 초기화
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex gap-3">
              <div className="flex flex-col items-center pt-5 flex-shrink-0">
                <div className={`w-2.5 h-2.5 rounded-full ${statusDotColors[event.status] ?? 'bg-gray-300'}`} />
                <div className="w-0.5 flex-1 bg-border mt-1" />
              </div>
              <div className="flex-1 min-w-0">
                <EventCard event={event} onClick={(id) => router.push(`/events/${id}`)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
