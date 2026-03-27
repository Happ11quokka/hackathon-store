'use client';

interface FilterChipsProps {
  options: { label: string; value: string }[];
  selected: string[];
  onChange: (values: string[]) => void;
  allLabel?: string;
}

export default function FilterChips({ options, selected, onChange, allLabel = '전체' }: FilterChipsProps) {
  const isAll = selected.length === 0;

  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="flex gap-1.5 flex-wrap">
      <button
        onClick={() => onChange([])}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
          isAll
            ? 'bg-brand-600 text-white'
            : 'bg-card border border-border text-secondary hover:bg-brand-subtle'
        }`}
      >
        {allLabel}
      </button>
      {options.map((opt) => {
        const active = selected.includes(opt.value);
        return (
          <button
            key={opt.value}
            onClick={() => toggle(opt.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              active
                ? 'bg-brand-600 text-white'
                : 'bg-card border border-border text-secondary hover:bg-brand-subtle'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
