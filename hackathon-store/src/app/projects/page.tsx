'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProjectCard from '@/components/projects/ProjectCard';
import FilterChips from '@/components/ui/FilterChips';
import { projects } from '@/data/projects';
import { filterProjects } from '@/lib/filters';

const categoryOptions = [
  { label: '웹', value: 'web' },
  { label: '모바일', value: 'mobile' },
  { label: 'AI/ML', value: 'ai-ml' },
  { label: 'IoT', value: 'iot' },
  { label: '게임', value: 'game' },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const filteredProjects = filterProjects(projects, selectedFilters, searchQuery);

  const handleFilterChange = (groupName: string, values: string[]) => {
    setSelectedFilters((prev) => ({ ...prev, [groupName]: values }));
  };

  const resetFilters = () => {
    setSelectedFilters({});
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-primary">프로젝트 아카이브</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="프로젝트 검색..."
          className="bg-card border border-border rounded-xl px-4 py-2 text-sm text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div className="mb-6">
        <FilterChips
          options={categoryOptions}
          selected={selectedFilters['categories'] ?? []}
          onChange={(values) => handleFilterChange('categories', values)}
        />
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-tertiary mb-4">조건에 맞는 결과가 없습니다</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-700"
          >
            필터 초기화
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(id) => router.push(`/projects/${id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
