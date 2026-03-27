import Image from 'next/image';
import type { HackathonEvent } from '@/lib/types';
import Badge from '@/components/ui/Badge';
import { Calendar, Coins } from 'lucide-react';

const statusLabels: Record<string, { label: string; variant: 'success' | 'warning' | 'danger' }> = {
  recruiting: { label: '모집중', variant: 'success' },
  ongoing: { label: '진행중', variant: 'warning' },
  ended: { label: '종료', variant: 'danger' },
};

const statusGradients: Record<string, string> = {
  recruiting: 'from-brand-600 to-brand-500',
  ongoing: 'from-amber-500 to-amber-400',
  ended: 'from-gray-400 to-gray-300',
};

interface EventCardProps {
  event: HackathonEvent;
  onClick: (id: string) => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const statusInfo = statusLabels[event.status];
  const gradient = statusGradients[event.status] ?? 'from-brand-600 to-brand-500';

  return (
    <div
      onClick={() => onClick(event.id)}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-brand-200 transition-colors cursor-pointer flex"
    >
      {event.posterUrl ? (
        <div className="w-20 h-20 sm:w-24 sm:h-auto flex-shrink-0 relative rounded-l-xl overflow-hidden">
          <Image src={event.posterUrl} alt={event.title} fill className="object-cover" sizes="96px" />
        </div>
      ) : (
        <div className={`w-20 h-20 sm:w-24 sm:h-auto bg-gradient-to-br ${gradient} flex-shrink-0 flex items-center justify-center text-white font-bold text-xs text-center leading-tight p-2 rounded-l-xl`}>
          {event.title.slice(0, 12)}
        </div>
      )}
      <div className="p-4 flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Badge label={statusInfo.label} variant={statusInfo.variant} />
        </div>
        <h3 className="font-semibold text-primary mb-0.5 truncate">{event.title}</h3>
        <p className="text-sm text-tertiary mb-2">{event.organizer}</p>
        <div className="flex flex-wrap gap-3 text-xs text-secondary">
          <span className="flex items-center gap-1"><Calendar size={12} /> {event.registrationStart} ~ {event.registrationEnd}</span>
          <span className="flex items-center gap-1"><Coins size={12} /> {event.prize}</span>
        </div>
      </div>
    </div>
  );
}
