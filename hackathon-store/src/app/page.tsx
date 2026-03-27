import Link from 'next/link';
import { MessageSquare, FolderOpen, Trophy, Users, Code2, TrendingUp, ArrowRight } from 'lucide-react';

const stats = [
  { label: '등록 프로젝트', value: '1,200+' },
  { label: '진행된 대회', value: '350+' },
  { label: '활성 사용자', value: '8,500+' },
  { label: '팀 매칭 성공', value: '2,100+' },
];

export default function HomePage() {
  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary">Welcome back</h1>
        <p className="text-sm text-tertiary mt-1">프로젝트와 대회를 탐색하세요</p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {/* AI Chat — large card */}
        <Link
          href="/chat"
          className="sm:row-span-2 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl p-5 text-white group hover:from-brand-700 hover:to-brand-600 transition-all duration-300"
        >
          <MessageSquare size={24} className="mb-3 opacity-80" />
          <div className="text-xs opacity-70 mb-1">Quick Start</div>
          <div className="font-semibold text-lg mb-1">AI 채팅</div>
          <div className="text-sm opacity-70 mb-4">맞춤형 프로젝트, 대회 추천을 받아보세요</div>
          <div className="flex items-center gap-1 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
            시작하기 <ArrowRight size={14} />
          </div>
        </Link>

        {/* Trending Projects */}
        <Link href="/projects" className="bg-card border border-border rounded-xl p-5 hover:border-brand-200 transition-colors group">
          <div className="flex items-center justify-between mb-3">
            <FolderOpen size={20} className="text-brand-600" />
            <TrendingUp size={16} className="text-tertiary" />
          </div>
          <div className="text-xs text-brand-600 font-semibold mb-1">Trending</div>
          <div className="font-semibold text-primary">인기 프로젝트</div>
          <div className="text-xs text-tertiary mt-1">10개 이상의 프로젝트 탐색</div>
        </Link>

        {/* Active Events */}
        <Link href="/events" className="bg-card border border-border rounded-xl p-5 hover:border-brand-200 transition-colors group">
          <div className="flex items-center justify-between mb-3">
            <Trophy size={20} className="text-emerald-600" />
          </div>
          <div className="text-xs text-emerald-600 font-semibold mb-1">Active</div>
          <div className="font-semibold text-primary">진행 중인 대회</div>
          <div className="text-xs text-tertiary mt-1">모집 중인 해커톤 확인</div>
        </Link>

        {/* Team Recruit */}
        <Link href="/recruit" className="sm:col-span-2 bg-card border border-border rounded-xl p-5 hover:border-brand-200 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <Users size={20} className="text-brand-600" />
          </div>
          <div className="text-xs text-brand-600 font-semibold mb-1">Team Up</div>
          <div className="font-semibold text-primary">팀원 모집</div>
          <div className="text-xs text-tertiary mt-1">함께할 팀원을 찾거나 모집 공고를 올리세요</div>
        </Link>
      </div>

      {/* Vibe Coding CTA */}
      <Link
        href="/vibe-coding"
        className="block bg-card border border-border rounded-xl p-5 mb-8 hover:border-brand-200 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-subtle rounded-lg flex items-center justify-center">
            <Code2 size={20} className="text-brand-600" />
          </div>
          <div>
            <div className="font-semibold text-primary">Vibe Coding 가이드</div>
            <div className="text-xs text-tertiary">아이디어를 AI 프롬프트로 변환하세요</div>
          </div>
          <ArrowRight size={16} className="ml-auto text-tertiary" />
        </div>
      </Link>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-brand-600">{stat.value}</div>
            <div className="text-xs text-tertiary mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
