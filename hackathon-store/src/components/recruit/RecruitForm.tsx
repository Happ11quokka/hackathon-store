'use client';

import { useState } from 'react';

interface RecruitFormData {
  title: string;
  description: string;
  positions: string[];
  techStack: string[];
  headcount: number;
  deadline: string;
}

interface RecruitFormProps {
  onSubmit: (data: RecruitFormData) => void;
  onCancel: () => void;
}

const positionOptions = ['프론트엔드', '백엔드', '디자인', 'PM', 'ML 엔지니어'];

export default function RecruitForm({ onSubmit, onCancel }: RecruitFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [positions, setPositions] = useState<string[]>([]);
  const [techStackInput, setTechStackInput] = useState('');
  const [headcount, setHeadcount] = useState(1);
  const [deadline, setDeadline] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) newErrors.title = '제목을 입력해주세요';
    if (!description.trim()) newErrors.description = '설명을 입력해주세요';
    if (positions.length === 0) newErrors.positions = '포지션을 선택해주세요';
    if (!deadline) newErrors.deadline = '마감일을 선택해주세요';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      title: title.trim(),
      description: description.trim(),
      positions,
      techStack: techStackInput.split(',').map((s) => s.trim()).filter(Boolean),
      headcount,
      deadline,
    });
  };

  const togglePosition = (pos: string) => {
    setPositions((prev) =>
      prev.includes(pos) ? prev.filter((p) => p !== pos) : [...prev, pos]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-secondary mb-1">제목 *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary mb-1">설명 *</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary mb-1">포지션 *</label>
        <div className="flex flex-wrap gap-2">
          {positionOptions.map((pos) => (
            <button
              key={pos}
              type="button"
              onClick={() => togglePosition(pos)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                positions.includes(pos)
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-card text-secondary border-border hover:border-brand-400'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>
        {errors.positions && <p className="text-xs text-red-500 mt-1">{errors.positions}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary mb-1">기술 스택 (쉼표 구분)</label>
        <input
          type="text"
          value={techStackInput}
          onChange={(e) => setTechStackInput(e.target.value)}
          placeholder="React, TypeScript, Node.js"
          className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-secondary mb-1">모집 인원</label>
          <input
            type="number"
            min={1}
            value={headcount}
            onChange={(e) => setHeadcount(Number(e.target.value))}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-secondary mb-1">마감일 *</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          {errors.deadline && <p className="text-xs text-red-500 mt-1">{errors.deadline}</p>}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm text-secondary bg-surface rounded-lg hover:bg-brand-subtle"
        >
          취소
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm text-white bg-brand-600 rounded-lg hover:bg-brand-700"
        >
          등록
        </button>
      </div>
    </form>
  );
}
