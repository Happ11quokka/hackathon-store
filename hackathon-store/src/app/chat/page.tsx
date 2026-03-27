'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatSidebar from '@/components/chat/ChatSidebar';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';
import TypingIndicator from '@/components/chat/TypingIndicator';
import { findChatResponse } from '@/data/chatResponses';
import type { ChatMessage as ChatMessageType, ChatConversation, ChatCategory } from '@/lib/types';

const quickChips: { label: string; category: ChatCategory }[] = [
  { label: '프로젝트 추천', category: 'project' },
  { label: '대회 추천', category: 'event' },
  { label: '팀원 매칭', category: 'team' },
  { label: 'Vibe Coding 가이드', category: 'vibe-coding' },
  { label: '일반 대화', category: 'general' },
];

const defaultConversations: ChatConversation[] = [
  { id: 'conv-1', title: '새 대화', lastMessage: '안녕하세요!', timestamp: '방금' },
];

function createTimestamp(): string {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

export default function ChatPage() {
  const [conversations] = useState<ChatConversation[]>(defaultConversations);
  const [activeConvId, setActiveConvId] = useState('conv-1');
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addAiResponse = (userMessage: string) => {
    setIsTyping(true);
    const response = findChatResponse(userMessage);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}`,
          sender: 'ai',
          content: response.response,
          timestamp: createTimestamp(),
          senderName: 'AI 어시스턴트',
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = (text: string) => {
    const userMsg: ChatMessageType = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      content: text,
      timestamp: createTimestamp(),
      senderName: '나',
    };
    setMessages((prev) => [...prev, userMsg]);
    addAiResponse(text);
  };

  const handleChipClick = (category: ChatCategory) => {
    const chipLabels: Record<ChatCategory, string> = {
      project: '프로젝트를 추천해줘',
      event: '대회 추천해줘',
      team: '팀원을 찾고 싶어',
      'vibe-coding': 'Vibe Coding 가이드 알려줘',
      general: '안녕하세요!',
    };
    handleSend(chipLabels[category]);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-8">
              <div className="w-12 h-12 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-600">
                <MessageSquare size={24} />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-primary">무엇이든 물어보세요</p>
                <p className="text-sm text-tertiary mt-1">AI 어시스턴트가 도와드릴게요</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {quickChips.map((chip) => (
                  <button
                    key={chip.category}
                    onClick={() => handleChipClick(chip.category)}
                    className="bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-secondary hover:bg-brand-subtle transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  sender={msg.sender}
                  content={msg.content}
                  timestamp={msg.timestamp}
                  senderName={msg.senderName}
                  avatar={msg.avatar}
                />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>

      <div className="hidden lg:block">
        <ChatSidebar
          conversations={conversations}
          activeId={activeConvId}
          onSelect={setActiveConvId}
        />
      </div>
    </div>
  );
}
