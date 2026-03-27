import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import { filterProjects, matchesSearch } from '@/lib/filters';
import { projects } from '@/data/projects';

describe('Property 6: 검색어 매칭 필터링', () => {
  it('검색 결과의 모든 프로젝트는 제목 또는 설명에 검색어를 포함해야 한다', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 10 }),
        (query) => {
          const result = filterProjects(projects, {}, query);
          return result.every(
            (p) =>
              matchesSearch(p.title, query) || matchesSearch(p.description, query)
          );
        }
      ),
      { numRuns: 100 }
    );
  });

  it('빈 검색어는 전체 프로젝트를 반환해야 한다', () => {
    fc.assert(
      fc.property(
        fc.constant(''),
        (query) => {
          const result = filterProjects(projects, {}, query);
          return result.length === projects.length;
        }
      ),
      { numRuns: 1 }
    );
  });

  it('matchesSearch는 대소문자를 무시해야 한다', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 20 }),
        fc.string({ minLength: 1, maxLength: 20 }),
        (text, query) => {
          const lower = matchesSearch(text, query.toLowerCase());
          const upper = matchesSearch(text, query.toUpperCase());
          return lower === upper;
        }
      ),
      { numRuns: 100 }
    );
  });
});
