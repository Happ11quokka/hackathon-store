import type { ChatResponse } from '@/lib/types';

export const chatResponses: ChatResponse[] = [
  {
    category: 'project',
    triggers: ['프로젝트', '추천', '아이디어', '뭐 만들'],
    response:
      '현재 인기 있는 프로젝트 분야를 추천해 드릴게요!\n\n1. **AI 기반 학습 도우미** - GPT API를 활용한 개인 맞춤형 학습 서비스\n2. **캠퍼스 커뮤니티 앱** - 같은 학교 학생들을 위한 익명 커뮤니티\n3. **친환경 생활 트래커** - 탄소 발자국을 추적하는 ESG 프로젝트\n\n프로젝트 아카이브에서 더 많은 영감을 얻어보세요!',
  },
  {
    category: 'event',
    triggers: ['대회', '해커톤', '공모전', '대회 추천'],
    response:
      '현재 모집 중인 대회를 안내해 드릴게요!\n\n🔥 **2026 서울 AI 해커톤** (서울특별시)\n- 접수: ~2026.03.20 | 상금: 1,000만원\n\n🔥 **네이버 클라우드 해커톤** (네이버 클라우드)\n- 접수: ~2026.03.10 | 상금: 2,000만원 + 인턴십\n\n🔥 **공공데이터 활용 해커톤** (한국정보화진흥원)\n- 접수: ~2026.04.05 | 상금: 1,200만원\n\n대회 보드에서 전체 목록을 확인해보세요!',
  },
  {
    category: 'team',
    triggers: ['팀원', '팀 매칭', '같이 할 사람', '모집', '구인'],
    response:
      '팀원 매칭을 도와드릴게요!\n\n현재 활발하게 모집 중인 공고:\n\n👥 **프론트엔드 개발자 모집** - 캠퍼스 푸드 매칭 v2 (React/Next.js)\n👥 **AI/ML 엔지니어 모집** - 감정 일기 AI 2.0 (Python/PyTorch)\n👥 **UI/UX 디자이너** - 서울 AI 해커톤 참가팀 (Figma)\n\n팀원 모집 게시판에서 더 많은 공고를 확인하고 지원해보세요!',
  },
  {
    category: 'vibe-coding',
    triggers: ['바이브', 'vibe', '코딩 가이드', '구현 가이드', '프롬프트'],
    response:
      'Vibe Coding 가이드를 소개해 드릴게요! 🎯\n\nVibe Coding은 AI를 활용하여 프로젝트 아이디어를 단계별 구현 가이드로 변환하는 서비스입니다.\n\n**사용 방법:**\n1. 프로젝트 아이디어를 입력하세요\n2. AI가 구현 단계를 자동으로 생성합니다\n3. 각 단계별 AI 프롬프트를 복사하여 활용하세요\n\nVibe Coding 가이드 페이지에서 직접 체험해보세요!',
  },
  {
    category: 'general',
    triggers: ['안녕', '안녕하세요', '도움', '도와줘', '뭐 할 수 있어'],
    response:
      '안녕하세요! 해커톤스토어 AI 어시스턴트입니다. 😊\n\n제가 도와드릴 수 있는 것들:\n\n🔍 **프로젝트 추천** - 관심사에 맞는 프로젝트 아이디어 제안\n🏆 **대회 추천** - 현재 모집 중인 해커톤/공모전 안내\n👥 **팀원 매칭** - 함께할 팀원 찾기 도움\n💻 **Vibe Coding 가이드** - AI 기반 구현 단계 생성\n\n무엇이든 편하게 물어보세요!',
  },
];

export function findChatResponse(message: string): ChatResponse {
  const lowerMessage = message.toLowerCase();
  const matched = chatResponses.find((r) =>
    r.triggers.some((trigger) => lowerMessage.includes(trigger.toLowerCase()))
  );
  return matched ?? chatResponses[chatResponses.length - 1];
}
