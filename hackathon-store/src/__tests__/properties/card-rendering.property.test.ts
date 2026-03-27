import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import type { Project, HackathonEvent, RecruitPost, ProjectCategory, EventStatus, RecruitStatus } from '@/lib/types';

const projectArb = fc.record({
  id: fc.string({ minLength: 1 }),
  title: fc.string({ minLength: 1 }),
  description: fc.string({ minLength: 1 }),
  teamName: fc.string({ minLength: 1 }),
  members: fc.array(fc.record({ name: fc.string({ minLength: 1 }), role: fc.string({ minLength: 1 }) }), { minLength: 1 }),
  techStack: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
  category: fc.constantFrom('web', 'mobile', 'ai-ml', 'iot', 'game') as fc.Arbitrary<ProjectCategory>,
  thumbnailUrl: fc.string({ minLength: 1 }),
  likes: fc.nat(),
  screenshots: fc.array(fc.string()),
  links: fc.array(fc.record({ label: fc.string({ minLength: 1 }), url: fc.string({ minLength: 1 }) })),
});

const eventArb = fc.record({
  id: fc.string({ minLength: 1 }),
  title: fc.string({ minLength: 1 }),
  organizer: fc.string({ minLength: 1 }),
  description: fc.string({ minLength: 1 }),
  registrationStart: fc.string({ minLength: 1 }),
  registrationEnd: fc.string({ minLength: 1 }),
  status: fc.constantFrom('recruiting', 'ongoing', 'ended') as fc.Arbitrary<EventStatus>,
  prize: fc.string({ minLength: 1 }),
  posterUrl: fc.string({ minLength: 1 }),
  schedule: fc.string({ minLength: 1 }),
  eligibility: fc.string({ minLength: 1 }),
  registrationLink: fc.string({ minLength: 1 }),
});

const recruitArb = fc.record({
  id: fc.string({ minLength: 1 }),
  title: fc.string({ minLength: 1 }),
  projectName: fc.string({ minLength: 1 }),
  description: fc.string({ minLength: 1 }),
  positions: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
  techStack: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
  headcount: fc.integer({ min: 1 }),
  deadline: fc.string({ minLength: 1 }),
  status: fc.constantFrom('open', 'closed') as fc.Arbitrary<RecruitStatus>,
  author: fc.string({ minLength: 1 }),
  createdAt: fc.string({ minLength: 1 }),
});

describe('Property 4: 카드 컴포넌트 필수 정보 표시', () => {
  it('ProjectCard 데이터는 제목, 팀명, 카테고리를 포함해야 한다', () => {
    fc.assert(
      fc.property(projectArb, (project: Project) => {
        return project.title.length > 0 && project.teamName.length > 0 && project.category.length > 0;
      }),
      { numRuns: 100 }
    );
  });

  it('EventCard 데이터는 대회명, 주최 기관, 상태를 포함해야 한다', () => {
    fc.assert(
      fc.property(eventArb, (event: HackathonEvent) => {
        return event.title.length > 0 && event.organizer.length > 0 && event.status.length > 0;
      }),
      { numRuns: 100 }
    );
  });

  it('RecruitCard 데이터는 제목, 프로젝트명, 마감일을 포함해야 한다', () => {
    fc.assert(
      fc.property(recruitArb, (recruit: RecruitPost) => {
        return recruit.title.length > 0 && recruit.projectName.length > 0 && recruit.deadline.length > 0;
      }),
      { numRuns: 100 }
    );
  });
});
