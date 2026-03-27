'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || disabled) return;
    onSend(message.trim());
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border-t border-border p-3">
      <div className="flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요..."
          disabled={disabled}
          className="flex-1 bg-transparent text-sm text-primary placeholder:text-tertiary focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="bg-brand-600 text-white rounded-lg w-8 h-8 flex items-center justify-center hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
        >
          <Send size={14} />
        </button>
      </div>
    </form>
  );
}
