import Image from 'next/image';
import type { Project } from '@/lib/types';
import Badge from '@/components/ui/Badge';
import { FolderOpen, Heart } from 'lucide-react';

const categoryLabels: Record<string, string> = {
  web: '웹',
  mobile: '모바일',
  'ai-ml': 'AI/ML',
  iot: 'IoT',
  game: '게임',
};

const categoryGradient: Record<string, { gradient: string; text: string }> = {
  web: { gradient: 'from-brand-100 to-brand-200', text: 'text-brand-600' },
  mobile: { gradient: 'from-cyan-100 to-cyan-200', text: 'text-cyan-600' },
  'ai-ml': { gradient: 'from-amber-100 to-amber-200', text: 'text-amber-600' },
  iot: { gradient: 'from-emerald-100 to-emerald-200', text: 'text-emerald-600' },
  game: { gradient: 'from-pink-100 to-pink-200', text: 'text-pink-600' },
};

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const colors = categoryGradient[project.category] ?? categoryGradient['web'];

  return (
    <div
      onClick={() => onClick(project.id)}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-brand-200 transition-colors cursor-pointer"
    >
      {project.thumbnailUrl ? (
        <div className="h-40 relative">
          <Image src={project.thumbnailUrl} alt={project.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </div>
      ) : (
        <div className={`h-40 bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
          <FolderOpen size={40} className={colors.text} />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge label={categoryLabels[project.category] ?? project.category} variant="primary" />
        </div>
        <h3 className="font-semibold text-primary mb-1">{project.title}</h3>
        <p className="text-sm text-tertiary mb-3">{project.teamName}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
          {project.techStack.length > 3 && (
            <Badge label={`+${project.techStack.length - 3}`} />
          )}
        </div>
        <div className="flex items-center gap-1 text-sm text-secondary">
          <Heart size={14} />
          <span>{project.likes}</span>
        </div>
      </div>
    </div>
  );
}
