# KIROTHON Store

**대학 프로젝트의 모든 것 - 아카이빙 + AI 추천 + 팀빌딩 통합 플랫폼**

> KIROTHON 2026 제출 프로젝트이자, 현재는 `Next.js` 기반 UI 프로토타입 중심으로 정리된 코드베이스입니다.

[![Award](https://img.shields.io/badge/KIROTHON-%EC%9A%B0%EC%88%98%EC%83%81-C0C0C0?logo=trophy&logoColor=white)]()
![Next.js](https://img.shields.io/badge/Next.js_16-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)

---

## 프로젝트 개요

Hackathon Store는 대학생이 프로젝트 경험을 탐색하고, 대회 정보를 확인하고, 팀원을 찾고, 아이디어를 빠르게 구현 흐름으로 연결할 수 있도록 설계된 플랫폼입니다.

현재 저장소는 백엔드 연동보다 **프론트엔드 UI 프로토타입**에 초점을 맞추고 있으며, 모든 화면은 `hackathon-store/` 아래의 Next.js 앱에서 동작합니다. AI 채팅, 프로젝트 탐색, 대회 보드, 팀원 모집, Vibe Coding 가이드는 모두 목(mock) 데이터 기반으로 시연됩니다.

---

## 현재 구현 범위

- 사이드바 + 탑바 + 모바일 탭바로 구성된 앱 셸
- 대시보드형 홈 화면과 Bento 스타일 진입 카드
- AI 채팅 UI, 추천 질문 칩, 타이핑 인디케이터
- 프로젝트 아카이브, 검색/필터, 상세 페이지
- 대회 보드, 상태별 탐색, 상세 페이지
- 팀원 모집 리스트, 모집 글 작성 폼, 상세 모달
- Vibe Coding 가이드와 프롬프트 블록 UI
- 다크 모드 토글, `Cmd/Ctrl + K` 커맨드 팔레트
- `Vitest` + `Testing Library` 기반 단위/속성 테스트

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| UI | Lucide React |
| Testing | Vitest, Testing Library, fast-check, jsdom |
| Data | TypeScript mock data modules |

---

## 프로젝트 구조

실제 서비스 앱은 루트가 아니라 `hackathon-store/` 폴더 안에 있습니다.

```text
.
├── hackathon-store/
│   ├── public/
│   │   ├── posters/               # 대회 포스터 이미지
│   │   └── thumbnails/            # 프로젝트 썸네일 이미지
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx           # 홈 대시보드
│   │   │   ├── chat/page.tsx
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/page.tsx
│   │   │   ├── events/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/page.tsx
│   │   │   ├── recruit/page.tsx
│   │   │   ├── vibe-coding/page.tsx
│   │   │   └── layout.tsx         # AppShell 진입점
│   │   ├── components/
│   │   │   ├── layout/            # AppShell, Sidebar, TopBar, BottomTabBar, CommandPalette
│   │   │   ├── chat/
│   │   │   ├── projects/
│   │   │   ├── events/
│   │   │   ├── recruit/
│   │   │   ├── vibe-coding/
│   │   │   └── ui/
│   │   ├── data/                  # 프로젝트/대회/채팅 mock data
│   │   ├── hooks/                 # useTheme
│   │   ├── lib/                   # 공통 타입, 필터 유틸
│   │   ├── styles/                # 전역 스타일, 디자인 토큰
│   │   └── __tests__/             # unit / property tests
│   ├── next.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── vitest.config.ts
├── .gitignore
└── README.md
```

로컬 작업용 `docs/` 폴더는 요구사항, 설계, 리디자인 문서를 담고 있으며 `.gitignore`에 포함되어 원격 저장소에는 올리지 않는 기준으로 관리합니다.

---

## 실행 방법

```bash
cd hackathon-store
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000` 에서 실행됩니다.

---

## 스크립트

```bash
cd hackathon-store

npm run dev     # 개발 서버
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 실행
npm run test    # 테스트 실행
```

---

## 작업 메모

- 현재 기준 저장소의 진입점은 루트가 아니라 `hackathon-store/` 입니다.
- `docs/` 는 기획/설계 문서 전용 로컬 폴더이며 Git 추적 대상에서 제외됩니다.
- 기존 README의 프로젝트 소개와 수상 맥락은 유지하되, 구현 구조는 최신 UI 프로토타입 기준으로 갱신했습니다.

---

## 팀원

| 이름 | 담당 | 이메일 |
|------|------|--------|
| 어준호 (Junho Uh) | Backend, Infra | djwnsgh0248@hanyang.ac.kr |
| 임동현 (Donghyun Lim) | AI Agent, Frontend | limdongxian1207@gmail.com |

---

## 라이선스

MIT License
