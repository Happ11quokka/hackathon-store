'use client';

import type { FilterGroup } from '@/lib/types';

interface FilterPanelProps {
  groups: FilterGroup[];
  selected: Record<string, string[]>;
  onChange: (groupName: string, values: string[]) => void;
}

export default function FilterPanel({ groups, selected, onChange }: FilterPanelProps) {
  const handleToggle = (groupName: string, value: string) => {
    const current = selected[groupName] ?? [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange(groupName, updated);
  };

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.name}>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">{group.name}</h3>
          <div className="space-y-1">
            {group.options.map((option) => {
              const isChecked = (selected[group.name] ?? []).includes(option.value);
              return (
                <label
                  key={option.value}
                  className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleToggle(group.name, option.value)}
                    className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
