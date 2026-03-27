'use client';

import { useState } from 'react';
import IdeaForm from '@/components/vibe-coding/IdeaForm';
import StepCard from '@/components/vibe-coding/StepCard';
import { sampleGuide } from '@/data/vibeCodingGuide';
import type { VibeCodingGuide } from '@/lib/types';

export default function VibeCodingPage() {
  const [guide, setGuide] = useState<VibeCodingGuide | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (idea: string) => {
    setIsLoading(true);
    // 목 데이터 기반 시뮬레이션
    setTimeout(() => {
      setGuide({ ...sampleGuide, idea });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-primary mb-2">Vibe Coding 가이드</h1>
      <p className="text-tertiary mb-8">
        프로젝트 아이디어를 입력하면 AI가 구현 단계와 프롬프트를 생성합니다.
      </p>

      <IdeaForm onSubmit={handleSubmit} isLoading={isLoading} />

      <div className="mt-8">
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
            <p className="text-sm text-tertiary mt-4">가이드를 생성하고 있습니다...</p>
          </div>
        )}

        {!isLoading && !guide && (
          <div className="text-center py-12 text-tertiary">
            아이디어를 입력하고 &quot;가이드 생성&quot; 버튼을 클릭해주세요.
          </div>
        )}

        {!isLoading && guide && (
          <div>
            <h2 className="text-lg font-semibold text-primary mb-4">
              &quot;{guide.idea}&quot; 구현 가이드
            </h2>
            <div className="space-y-6">
              {guide.steps.map((step) => (
                <StepCard key={step.stepNumber} step={step} stepNumber={step.stepNumber} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
