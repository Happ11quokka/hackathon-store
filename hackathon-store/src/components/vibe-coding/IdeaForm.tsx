'use client';

import { useState } from 'react';

interface IdeaFormProps {
  onSubmit: (idea: string) => void;
  isLoading: boolean;
}

export default function IdeaForm({ onSubmit, isLoading }: IdeaFormProps) {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim() || isLoading) return;
    onSubmit(idea.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-secondary mb-2">
          프로젝트 아이디어를 입력하세요
        </label>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="예: 대학생을 위한 중고 교재 거래 플랫폼"
          rows={3}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>
      <button
        type="submit"
        disabled={!idea.trim() || isLoading}
        className="px-6 py-2.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? '생성 중...' : '가이드 생성'}
      </button>
    </form>
  );
}
