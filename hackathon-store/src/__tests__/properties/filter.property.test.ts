import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { filterProjects, filterEvents, filterRecruits } from '@/lib/filters';
import { projects } from '@/data/projects';
import { events } from '@/data/events';
import { recruits } from '@/data/recruits';
import type { ProjectCategory, EventStatus, RecruitStatus } from '@/lib/types';

describe('Property 5: 필터 조건에 맞는 항목만 반환', () => {
  it('프로젝트 카테고리 필터 결과는 모두 해당 카테고리에 속해야 한다', () => {
    const allCategories: ProjectCategory[] = ['web', 'mobile', 'ai-ml', 'iot', 'game'];

    fc.assert(
      fc.property(
        fc.subarray(allCategories, { minLength: 1 }),
        (selectedCategories) => {
          const result = filterProjects(projects, { categories: selectedCategories }, '');
          return result.every((p) => selectedCategories.includes(p.category));
        }
      ),
      { numRuns: 100 }
    );
  });

  it('대회 상태 필터 결과는 모두 해당 상태에 속해야 한다', () => {
    const allStatuses: EventStatus[] = ['recruiting', 'ongoing', 'ended'];

    fc.assert(
      fc.property(
        fc.subarray(allStatuses, { minLength: 1 }),
        (selectedStatuses) => {
          const result = filterEvents(events, { status: selectedStatuses });
          return result.every((e) => selectedStatuses.includes(e.status));
        }
      ),
      { numRuns: 100 }
    );
  });

  it('팀원 모집 상태 필터 결과는 모두 해당 상태에 속해야 한다', () => {
    const allStatuses: RecruitStatus[] = ['open', 'closed'];

    fc.assert(
      fc.property(
        fc.subarray(allStatuses, { minLength: 1 }),
        (selectedStatuses) => {
          const result = filterRecruits(recruits, { status: selectedStatuses });
          return result.every((r) => selectedStatuses.includes(r.status));
        }
      ),
      { numRuns: 100 }
    );
  });

  it('빈 필터 조건은 전체 항목을 반환해야 한다', () => {
    expect(filterProjects(projects, {}, '')).toHaveLength(projects.length);
    expect(filterEvents(events, {})).toHaveLength(events.length);
    expect(filterRecruits(recruits, {})).toHaveLength(recruits.length);
  });
});
