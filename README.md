# KIROTHON Store

**대학 프로젝트의 모든 것 — 아카이빙 + AI 추천 + 팀빌딩 통합 플랫폼**

대학생 해커톤/공모전/ICPBL 프로젝트를 탐색하고, AI 비서에게 맞춤 추천을 받을 수 있는 웹 플랫폼

> [!IMPORTANT]
> **KIROTHON 해커톤 — 우수상 수상**

[![Award](https://img.shields.io/badge/KIROTHON-우수상-C0C0C0?logo=trophy&logoColor=white)]()

![Next.js](https://img.shields.io/badge/Next.js_16-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)
![AWS Bedrock](https://img.shields.io/badge/AWS_Bedrock-232F3E?logo=amazonaws&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?logo=amazondynamodb&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?logo=shadcnui&logoColor=white)

---

## 프로젝트 개요

KIROTHON Store는 대학생들이 해커톤, ICPBL, 동아리, 공모전 등 다양한 프로젝트 활동을 탐색하고, AI 비서를 통해 맞춤형 프로젝트 추천과 기술 스택 가이드를 받을 수 있는 웹 플랫폼입니다. AWS Bedrock(Claude 3.5 Sonnet)과 OpenAI(GPT-4o-mini) 이중 AI 백엔드를 통해 안정적인 추천 서비스를 제공합니다.

---

## 담당 역할

**임동현** — AI Pipeline, Frontend, Infra

| 영역 | 기여 내용 |
|------|-----------|
| AI Pipeline | AWS Bedrock 연동, Two-Stage Prompting, RAG 기반 프로젝트 검색 |
| Frontend | Next.js App Router 기반 UI, shadcn/ui 컴포넌트, 반응형 레이아웃 |
| Infra | AWS DynamoDB 데이터베이스, Bedrock 모델 연동, 환경 설정 |
| Data | 프로젝트/이벤트 시드 데이터 구축, 자동 시딩 API |

---

## 주요 기능

| 기능 | 설명 |
|------|------|
| **AI 채팅 추천** | AWS Bedrock + OpenAI 이중 백엔드로 프로젝트/이벤트 맞춤 추천 |
| **프로젝트 탐색/필터** | 활동 유형별(해커톤, ICPBL, 동아리, 공모전) 필터링 및 텍스트 검색 |
| **이벤트 목록** | 진행 중인 해커톤/공모전 정보 제공 |
| **Vibe Coding 가이드** | AI 비서를 통한 기술 스택 추천 및 개발 가이드 |
| **프로젝트 상세** | 수상 이력, 기술 스택, GitHub/데모 링크 등 상세 정보 |

---

## 시스템 아키텍처

### 이중 AI 백엔드

| 계층 | 역할 | 기술 |
|------|------|------|
| **Primary** | AI 추천 (Full Context) | AWS Bedrock — Claude 3.5 Sonnet |
| **Fallback** | RAG 기반 추천 | OpenAI — GPT-4o-mini |
| **Local Fallback** | 규칙 기반 응답 | 키워드 매칭 + 사전 정의 응답 |

### 데이터 흐름

```
사용자 → Next.js App Router → API Routes
                                  ├── /api/chat    → Bedrock / OpenAI → AI 응답
                                  ├── /api/projects → DynamoDB / JSON Fallback
                                  └── /api/events   → DynamoDB / JSON Fallback
```

### RAG 검색 스코어링

| 조건 | 점수 |
|------|------|
| 키워드 매칭 | +2 |
| 수상 이력 보유 | +1 |
| 활동 유형 일치 (ICPBL, 해커톤 등) | +5 |
| 기술 키워드 일치 (AI/ML, Web, Mobile) | +3 |

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| **UI** | shadcn/ui, Lucide React, tw-animate-css |
| **AI** | AWS Bedrock (Claude 3.5 Sonnet), OpenAI (GPT-4o-mini) |
| **Database** | AWS DynamoDB (Fallback: JSON seed data) |
| **Markdown** | react-markdown, remark-gfm |
| **Infra** | AWS SDK v3 (Bedrock Runtime, DynamoDB) |

---

## 프로젝트 구조

```
kirothon_/
├── hackathon-store/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx                # 루트 레이아웃 (Header 포함)
│   │   │   ├── page.tsx                  # 랜딩 페이지
│   │   │   ├── chat/
│   │   │   │   └── page.tsx              # AI 채팅 인터페이스
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx              # 프로젝트 목록/필터
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx          # 프로젝트 상세
│   │   │   └── api/
│   │   │       ├── chat/route.ts         # 채팅 API
│   │   │       ├── projects/route.ts     # 프로젝트 API
│   │   │       ├── events/route.ts       # 이벤트 API
│   │   │       └── seed/route.ts         # DB 시딩 API
│   │   ├── components/
│   │   │   ├── layout/Header.tsx         # 네비게이션 헤더
│   │   │   ├── chat/
│   │   │   │   ├── ChatInterface.tsx     # 채팅 UI
│   │   │   │   ├── ChatMessage.tsx       # 메시지 렌더링
│   │   │   │   └── ProjectRecommendCard.tsx
│   │   │   ├── project/
│   │   │   │   ├── ProjectCard.tsx       # 프로젝트 카드
│   │   │   │   └── FilterBar.tsx         # 필터/검색 바
│   │   │   └── event/EventCard.tsx       # 이벤트 카드
│   │   ├── lib/
│   │   │   ├── types.ts                  # TypeScript 인터페이스
│   │   │   ├── bedrock.ts                # AWS Bedrock 연동
│   │   │   ├── ai.ts                     # OpenAI RAG 연동
│   │   │   ├── db.ts                     # DynamoDB 클라이언트
│   │   │   ├── seed.ts                   # 시드 데이터 로직
│   │   │   └── utils.ts                  # 유틸리티
│   │   └── data/
│   │       ├── seed_projects.json        # 프로젝트 시드 데이터
│   │       └── seed_events.json          # 이벤트 시드 데이터
│   ├── package.json
│   └── tsconfig.json
├── docs/                                 # 기획 문서 (git 제외)
├── data/                                 # 데이터 파일
├── .gitignore
└── README.md
```

---

## 실행 방법

```bash
# 의존성 설치
cd hackathon-store
npm install

# 개발 서버 실행
npm run dev
```

`.env.local` 파일 생성:

```env
# AWS Bedrock
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
BEDROCK_MODEL_ID=anthropic.claude-3-5-sonnet-20241022-v2:0

# OpenAI (Fallback)
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini

# DynamoDB
DYNAMODB_PROJECTS_TABLE=HackathonStore-Projects
DYNAMODB_EVENTS_TABLE=HackathonStore-Events
```

```bash
# 빌드
npm run build

# 프로덕션 실행
npm start
```

---

## 팀 정보

| 이름 | 역할 | GitHub |
|------|------|--------|
| **임동현** | AI Pipeline, Frontend, Infra | [@Happ11quokka](https://github.com/Happ11quokka) |

---

## 라이선스

MIT License
