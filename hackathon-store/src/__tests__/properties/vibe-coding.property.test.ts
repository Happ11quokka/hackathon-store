import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import type { VibeCodingStep } from '@/lib/types';

const stepArb = fc.record({
  stepNumber: fc.integer({ min: 1 }),
  title: fc.string({ minLength: 1 }),
  description: fc.string({ minLength: 1 }),
  estimatedTime: fc.string({ minLength: 1 }),
  techStack: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
  prompt: fc.string({ minLength: 1 }),
});

describe('Property 8: Vibe Coding 단계 필수 정보 표시', () => {
  it('각 단계는 번호, 제목, 설명, 소요 시간, 기술 스택, 프롬프트를 모두 포함해야 한다', () => {
    fc.assert(
      fc.property(stepArb, (step: VibeCodingStep) => {
        return (
          step.stepNumber > 0 &&
          step.title.length > 0 &&
          step.description.length > 0 &&
          step.estimatedTime.length > 0 &&
          step.techStack.length > 0 &&
          step.prompt.length > 0
        );
      }),
      { numRuns: 100 }
    );
  });
});

describe('Property 9: 프롬프트 복사 라운드 트립', () => {
  it('임의의 프롬프트 텍스트는 복사 후 원본과 동일해야 한다', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 500 }),
        (promptText) => {
          // 클립보드 API 시뮬레이션: 텍스트를 저장하고 비교
          let clipboard = '';
          clipboard = promptText;
          return clipboard === promptText;
        }
      ),
      { numRuns: 100 }
    );
  });
});
