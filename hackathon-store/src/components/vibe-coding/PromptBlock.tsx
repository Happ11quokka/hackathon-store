'use client';

import { useState } from 'react';

interface PromptBlockProps {
  prompt: string;
}

export default function PromptBlock({ prompt }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = prompt;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        alert('복사에 실패했습니다. 직접 선택하여 복사해주세요');
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="relative bg-sidebar-bg text-brand-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-sidebar-muted">AI 프롬프트</span>
        <button
          onClick={handleCopy}
          className="px-2 py-1 text-xs bg-sidebar-border hover:bg-sidebar-muted/30 text-sidebar-text rounded transition-colors"
        >
          {copied ? '복사 완료!' : '복사'}
        </button>
      </div>
      <pre className="text-sm whitespace-pre-wrap font-mono">{prompt}</pre>
    </div>
  );
}
