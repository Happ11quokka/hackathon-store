'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import RecruitCard from '@/components/recruit/RecruitCard';
import RecruitForm from '@/components/recruit/RecruitForm';
import FilterChips from '@/components/ui/FilterChips';
import Modal from '@/components/ui/Modal';
import Badge from '@/components/ui/Badge';
import { recruits as initialRecruits } from '@/data/recruits';
import { filterRecruits } from '@/lib/filters';
import type { RecruitPost } from '@/lib/types';

const positionOptions = [
  { label: '프론트엔드', value: '프론트엔드' },
  { label: '백엔드', value: '백엔드' },
  { label: '디자인', value: '디자인' },
  { label: 'PM', value: 'PM' },
];

export default function RecruitPage() {
  const [recruits] = useState<RecruitPost[]>(initialRecruits);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedRecruit, setSelectedRecruit] = useState<RecruitPost | null>(null);
  const [showForm, setShowForm] = useState(false);

  const filteredRecruits = filterRecruits(recruits, { positions: selectedPositions });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-primary">팀원 모집</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors"
        >
          <Plus size={16} />
          모집 글 작성
        </button>
      </div>

      <div className="mb-4">
        <FilterChips
          options={positionOptions}
          selected={selectedPositions}
          onChange={setSelectedPositions}
        />
      </div>

      {/* List */}
      {filteredRecruits.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-tertiary mb-4">조건에 맞는 결과가 없습니다</p>
          <button
            onClick={() => setSelectedPositions([])}
            className="px-4 py-2 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-700"
          >
            필터 초기화
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {filteredRecruits.map((recruit) => (
            <RecruitCard
              key={recruit.id}
              recruit={recruit}
              onClick={(id) => {
                const r = recruits.find((rec) => rec.id === id);
                if (r) setSelectedRecruit(r);
              }}
            />
          ))}
        </div>
      )}

      {/* 상세 모달 */}
      <Modal
        isOpen={!!selectedRecruit}
        onClose={() => setSelectedRecruit(null)}
        title={selectedRecruit?.title ?? ''}
      >
        {selectedRecruit && (
          <div className="space-y-4">
            <p className="text-sm text-tertiary">{selectedRecruit.projectName}</p>
            <p className="text-sm text-secondary">{selectedRecruit.description}</p>
            <div>
              <h4 className="text-sm font-medium text-primary mb-2">모집 포지션</h4>
              <div className="flex flex-wrap gap-1">
                {selectedRecruit.positions.map((pos) => (
                  <Badge key={pos} label={pos} variant="primary" />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-primary mb-2">기술 스택</h4>
              <div className="flex flex-wrap gap-1">
                {selectedRecruit.techStack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>
            <div className="flex gap-4 text-sm text-tertiary">
              <span>모집 인원: {selectedRecruit.headcount}명</span>
              <span>마감: {selectedRecruit.deadline}</span>
            </div>
            <button className="w-full py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700">
              지원하기
            </button>
          </div>
        )}
      </Modal>

      {/* 작성 폼 모달 */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)} title="모집 글 작성">
        <RecruitForm
          onSubmit={() => setShowForm(false)}
          onCancel={() => setShowForm(false)}
        />
      </Modal>
    </div>
  );
}
