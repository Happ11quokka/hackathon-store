import { describe, it, expect } from 'vitest';
import { projects } from '@/data/projects';
import { events } from '@/data/events';
import { recruits } from '@/data/recruits';
import { chatResponses } from '@/data/chatResponses';
import { sampleGuide } from '@/data/vibeCodingGuide';
import type { ChatCategory } from '@/lib/types';

describe('목 데이터 검증', () => {
  it('프로젝트 목 데이터가 10개 이상이어야 한다', () => {
    expect(projects.length).toBeGreaterThanOrEqual(10);
  });

  it('프로젝트 카테고리별 최소 2개씩 존재해야 한다', () => {
    const categories = ['web', 'mobile', 'ai-ml', 'iot', 'game'] as const;
    for (const cat of categories) {
      const count = projects.filter((p) => p.category === cat).length;
      expect(count).toBeGreaterThanOrEqual(2);
    }
  });

  it('프로젝트 데이터에 필수 필드가 포함되어야 한다', () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.teamName).toBeTruthy();
      expect(p.members.length).toBeGreaterThan(0);
      expect(p.techStack.length).toBeGreaterThan(0);
      expect(p.category).toBeTruthy();
      expect(typeof p.thumbnailUrl).toBe('string');
      expect(typeof p.likes).toBe('number');
    }
  });

  it('대회 목 데이터가 8개 이상이어야 한다', () => {
    expect(events.length).toBeGreaterThanOrEqual(8);
  });

  it('대회 상태별 최소 2개씩 존재해야 한다', () => {
    const statuses = ['recruiting', 'ongoing', 'ended'] as const;
    for (const status of statuses) {
      const count = events.filter((e) => e.status === status).length;
      expect(count).toBeGreaterThanOrEqual(2);
    }
  });

  it('대회 데이터에 필수 필드가 포함되어야 한다', () => {
    for (const e of events) {
      expect(e.id).toBeTruthy();
      expect(e.title).toBeTruthy();
      expect(e.organizer).toBeTruthy();
      expect(e.description).toBeTruthy();
      expect(e.registrationStart).toBeTruthy();
      expect(e.registrationEnd).toBeTruthy();
      expect(e.status).toBeTruthy();
      expect(e.prize).toBeTruthy();
      expect(typeof e.posterUrl).toBe('string');
    }
  });

  it('팀원 모집 목 데이터가 6개 이상이어야 한다', () => {
    expect(recruits.length).toBeGreaterThanOrEqual(6);
  });

  it('팀원 모집 데이터에 필수 필드가 포함되어야 한다', () => {
    for (const r of recruits) {
      expect(r.id).toBeTruthy();
      expect(r.title).toBeTruthy();
      expect(r.projectName).toBeTruthy();
      expect(r.positions.length).toBeGreaterThan(0);
      expect(r.techStack.length).toBeGreaterThan(0);
      expect(r.headcount).toBeGreaterThan(0);
      expect(r.deadline).toBeTruthy();
    }
  });

  it('AI 채팅 응답이 5개 카테고리 모두 포함해야 한다', () => {
    const requiredCategories: ChatCategory[] = ['project', 'event', 'team', 'vibe-coding', 'general'];
    for (const cat of requiredCategories) {
      expect(chatResponses.some((r) => r.category === cat)).toBe(true);
    }
  });

  it('Vibe Coding 가이드 데이터에 5단계 이상이 포함되어야 한다', () => {
    expect(sampleGuide.steps.length).toBeGreaterThanOrEqual(5);
    for (const step of sampleGuide.steps) {
      expect(step.stepNumber).toBeGreaterThan(0);
      expect(step.title).toBeTruthy();
      expect(step.description).toBeTruthy();
      expect(step.estimatedTime).toBeTruthy();
      expect(step.techStack.length).toBeGreaterThan(0);
      expect(step.prompt).toBeTruthy();
    }
  });
});
