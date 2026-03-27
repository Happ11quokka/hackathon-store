'use client';

import { use } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Badge from '@/components/ui/Badge';
import { ArrowLeft, Heart, Link2, Camera, FolderOpen } from 'lucide-react';

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

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">해당 항목을 찾을 수 없습니다</h1>
        <Link href="/projects" className="text-brand-600 hover:underline">
          프로젝트 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const colors = categoryGradient[project.category] ?? categoryGradient['web'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/projects" className="text-sm text-brand-600 hover:underline mb-4 inline-flex items-center gap-1">
        <ArrowLeft size={16} />
        프로젝트 목록
      </Link>

      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className={`h-48 bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
          <FolderOpen size={64} className={colors.text} />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge label={categoryLabels[project.category] ?? project.category} variant="primary" />
            <span className="text-sm text-tertiary flex items-center gap-1">
              <Heart size={14} />
              {project.likes}
            </span>
          </div>

          <h1 className="text-2xl font-bold text-primary mb-2">{project.title}</h1>
          <p className="text-tertiary mb-1">{project.teamName}</p>
          <p className="text-secondary mt-4 mb-6">{project.description}</p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-primary mb-3">팀원</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.members.map((member) => (
                <div key={member.name} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-brand-subtle flex items-center justify-center text-sm font-bold text-brand-600">
                    {member.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">{member.name}</div>
                    <div className="text-xs text-tertiary">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-primary mb-3">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} label={tech} variant="primary" />
              ))}
            </div>
          </div>

          {project.screenshots.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-primary mb-3">스크린샷</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.screenshots.map((_, i) => (
                  <div key={i} className="h-32 bg-surface rounded-lg flex items-center justify-center gap-2 text-tertiary">
                    <Camera size={16} />
                    스크린샷 {i + 1}
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.links.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-primary mb-3">관련 링크</h2>
              <div className="space-y-2">
                {project.links.map((link) => (
                  <div key={link.url} className="flex items-center gap-2">
                    <Link2 size={16} className="text-brand-600" />
                    <span className="text-sm text-brand-600 hover:underline">{link.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
