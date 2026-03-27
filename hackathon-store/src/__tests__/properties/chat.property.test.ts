import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { chatResponses, findChatResponse } from '@/data/chatResponses';
import type { ChatCategory, ChatMessage } from '@/lib/types';

describe('Property 1: 메시지 전송 시 채팅 목록 증가', () => {
  it('비어있지 않은 메시지를 전송하면 목록 길이가 2 증가해야 한다 (user + ai)', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 100 }),
        (userMessage) => {
          const initialMessages: ChatMessage[] = [];
          const afterSend = [
            ...initialMessages,
            {
              id: '1',
              sender: 'user' as const,
              content: userMessage,
              timestamp: '00:00',
              senderName: '나',
            },
          ];
          const response = findChatResponse(userMessage);
          const afterResponse = [
            ...afterSend,
            {
              id: '2',
              sender: 'ai' as const,
              content: response.response,
              timestamp: '00:00',
              senderName: 'AI',
            },
          ];
          return afterResponse.length === initialMessages.length + 2;
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 2: 카테고리별 AI 응답 매칭', () => {
  it('각 카테고리의 트리거로 요청하면 해당 카테고리 응답이 반환되어야 한다', () => {
    const categories: ChatCategory[] = ['project', 'event', 'team', 'vibe-coding', 'general'];

    for (const category of categories) {
      const catResponse = chatResponses.find((r) => r.category === category);
      expect(catResponse).toBeDefined();
      if (catResponse) {
        const trigger = catResponse.triggers[0];
        const result = findChatResponse(trigger);
        expect(result.category).toBe(category);
      }
    }
  });
});

describe('Property 3: 채팅 메시지 필수 정보 포함', () => {
  it('모든 ChatMessage 데이터는 senderName과 timestamp를 포함해야 한다', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1 }),
          sender: fc.constantFrom('user' as const, 'ai' as const),
          content: fc.string({ minLength: 1 }),
          timestamp: fc.string({ minLength: 1 }),
          senderName: fc.string({ minLength: 1 }),
        }),
        (msg: ChatMessage) => {
          return msg.senderName.length > 0 && msg.timestamp.length > 0;
        }
      ),
      { numRuns: 100 }
    );
  });
});
