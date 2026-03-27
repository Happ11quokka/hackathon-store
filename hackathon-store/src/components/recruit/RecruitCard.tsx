import type { RecruitPost } from '@/lib/types';
import Badge from '@/components/ui/Badge';

interface RecruitCardProps {
  recruit: RecruitPost;
  onClick: (id: string) => void;
}

export default function RecruitCard({ recruit, onClick }: RecruitCardProps) {
  const isOpen = recruit.status === 'open';

  return (
    <div
      onClick={() => onClick(recruit.id)}
      className="bg-card border border-border rounded-xl p-4 hover:border-brand-200 transition-colors cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <Badge label={isOpen ? '모집중' : '마감'} variant={isOpen ? 'success' : 'danger'} />
            <span className="text-xs text-tertiary">마감: {recruit.deadline}</span>
          </div>
          <h3 className="font-semibold text-primary mb-0.5 truncate">{recruit.title}</h3>
          <p className="text-sm text-tertiary mb-3">{recruit.projectName}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {recruit.positions.map((pos) => (
              <Badge key={pos} label={pos} variant="primary" />
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {recruit.techStack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
        </div>
        <div className="text-right flex-shrink-0 ml-4">
          <div className="text-xl font-bold text-brand-600">{recruit.headcount}</div>
          <div className="text-[10px] text-tertiary">spots left</div>
        </div>
      </div>
    </div>
  );
}
