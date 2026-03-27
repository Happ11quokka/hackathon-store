import { Clock } from 'lucide-react';
import type { VibeCodingStep } from '@/lib/types';
import Badge from '@/components/ui/Badge';
import PromptBlock from './PromptBlock';

interface StepCardProps {
  step: VibeCodingStep;
  stepNumber: number;
}

export default function StepCard({ step, stepNumber }: StepCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
          {stepNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
          <p className="text-sm text-secondary mb-3">{step.description}</p>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs text-tertiary flex items-center gap-1"><Clock size={12} className="text-tertiary" /> {step.estimatedTime}</span>
            <div className="flex flex-wrap gap-1">
              {step.techStack.map((tech) => (
                <Badge key={tech} label={tech} variant="primary" />
              ))}
            </div>
          </div>

          <PromptBlock prompt={step.prompt} />
        </div>
      </div>
    </div>
  );
}
