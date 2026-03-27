import type { Project, HackathonEvent, RecruitPost } from './types';

export function matchesSearch(text: string, query: string): boolean {
  if (!query.trim()) return true;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.toLowerCase().includes(escaped.toLowerCase());
}

export function filterProjects(
  projects: Project[],
  filters: Record<string, string[]>,
  searchQuery: string
): Project[] {
  return projects.filter((project) => {
    if (filters.categories?.length && !filters.categories.includes(project.category)) {
      return false;
    }
    if (filters.techStack?.length && !filters.techStack.some((t) => project.techStack.includes(t))) {
      return false;
    }
    if (searchQuery.trim()) {
      const matches =
        matchesSearch(project.title, searchQuery) ||
        matchesSearch(project.description, searchQuery);
      if (!matches) return false;
    }
    return true;
  });
}

export function filterEvents(
  events: HackathonEvent[],
  filters: Record<string, string[]>
): HackathonEvent[] {
  return events.filter((event) => {
    if (filters.status?.length && !filters.status.includes(event.status)) {
      return false;
    }
    if (filters.organizer?.length && !filters.organizer.includes(event.organizer)) {
      return false;
    }
    return true;
  });
}

export function filterRecruits(
  recruits: RecruitPost[],
  filters: Record<string, string[]>
): RecruitPost[] {
  return recruits.filter((recruit) => {
    if (filters.positions?.length && !filters.positions.some((p) => recruit.positions.includes(p))) {
      return false;
    }
    if (filters.techStack?.length && !filters.techStack.some((t) => recruit.techStack.includes(t))) {
      return false;
    }
    if (filters.status?.length && !filters.status.includes(recruit.status)) {
      return false;
    }
    return true;
  });
}
