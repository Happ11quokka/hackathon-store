'use client';

import type { ChatConversation } from '@/lib/types';

interface ChatSidebarProps {
  conversations: ChatConversation[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function ChatSidebar({ conversations, activeId, onSelect }: ChatSidebarProps) {
  return (
    <div className="w-[200px] bg-card border-l border-border h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-[11px] uppercase tracking-wider text-tertiary font-semibold">대화 목록</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={`w-full text-left px-4 py-3 border-b border-border hover:bg-brand-subtle transition-colors ${
              activeId === conv.id ? 'bg-brand-subtle text-brand-600 font-medium' : 'text-secondary'
            }`}
          >
            <div className="text-sm truncate">{conv.title}</div>
            <div className="text-xs text-tertiary truncate mt-1">{conv.lastMessage}</div>
            <div className="text-xs text-tertiary mt-1">{conv.timestamp}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
