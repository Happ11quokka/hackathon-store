import type { VibeCodingGuide } from '@/lib/types';

export const sampleGuide: VibeCodingGuide = {
  idea: '대학생을 위한 중고 교재 거래 플랫폼',
  steps: [
    {
      stepNumber: 1,
      title: '프로젝트 초기 설정',
      description:
        'Next.js 프로젝트를 생성하고 Tailwind CSS, TypeScript를 설정합니다. 기본 디렉토리 구조와 라우팅을 구성합니다.',
      estimatedTime: '30분',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      prompt:
        'Next.js 15 프로젝트를 생성해줘. App Router, TypeScript, Tailwind CSS를 사용하고, src 디렉토리 구조를 적용해줘. 메인 페이지에는 "중고 교재 거래 플랫폼"이라는 제목을 표시해줘.',
    },
    {
      stepNumber: 2,
      title: '데이터 모델 및 타입 정의',
      description:
        '교재, 사용자, 거래 등 핵심 데이터 모델을 TypeScript 인터페이스로 정의합니다.',
      estimatedTime: '20분',
      techStack: ['TypeScript'],
      prompt:
        '중고 교재 거래 플랫폼에 필요한 TypeScript 타입을 정의해줘. Book(id, title, author, isbn, condition, price, sellerName, images, category, createdAt), User(id, name, university, department), Transaction(id, bookId, buyerId, sellerId, status) 인터페이스를 만들어줘.',
    },
    {
      stepNumber: 3,
      title: '공통 UI 컴포넌트 구현',
      description:
        '버튼, 카드, 뱃지, 모달 등 재사용 가능한 공통 UI 컴포넌트를 구현합니다.',
      estimatedTime: '45분',
      techStack: ['React', 'Tailwind CSS'],
      prompt:
        'Tailwind CSS를 사용하여 다음 공통 컴포넌트를 만들어줘: 1) Button - primary/secondary/outline 변형, 2) Card - 호버 효과가 있는 카드 래퍼, 3) Badge - 상태 표시용 뱃지, 4) Modal - 오버레이가 있는 모달 컴포넌트. 모든 컴포넌트는 TypeScript로 작성해줘.',
    },
    {
      stepNumber: 4,
      title: '교재 목록 및 검색 페이지',
      description:
        '교재 목록을 카드 그리드로 표시하고 카테고리, 가격, 상태별 필터링과 검색 기능을 구현합니다.',
      estimatedTime: '1시간',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      prompt:
        '/books 경로에 교재 목록 페이지를 만들어줘. 목 데이터 10개를 만들고, 카드 그리드로 표시해줘. 각 카드에는 제목, 저자, 가격, 상태(최상/상/중/하) 뱃지를 표시해줘. 왼쪽에 카테고리(전공/교양/어학/기타), 상태, 가격대 필터 패널을 추가하고, 상단에 검색 바를 넣어줘.',
    },
    {
      stepNumber: 5,
      title: '교재 상세 및 거래 페이지',
      description:
        '교재 상세 정보 페이지와 구매 요청 기능을 구현합니다. 이미지 갤러리와 판매자 정보를 표시합니다.',
      estimatedTime: '1시간',
      techStack: ['React', 'Next.js'],
      prompt:
        '/books/[id] 경로에 교재 상세 페이지를 만들어줘. 교재 이미지 갤러리, 상세 정보(제목, 저자, ISBN, 상태, 가격, 설명), 판매자 정보(이름, 학교, 학과)를 표시해줘. "구매 요청" 버튼을 추가하고 클릭 시 확인 모달을 표시해줘.',
    },
    {
      stepNumber: 6,
      title: '레이아웃, 네비게이션 및 마무리',
      description:
        '공통 네비게이션 바, 푸터를 구현하고 전체 페이지를 통합합니다. 반응형 레이아웃을 적용합니다.',
      estimatedTime: '45분',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      prompt:
        '공통 레이아웃을 만들어줘. Navbar에는 로고, 메뉴(홈, 교재 목록, 교재 등록, 내 거래), 로그인 버튼을 넣어줘. 모바일에서는 햄버거 메뉴로 전환되게 해줘. Footer에는 서비스 소개와 저작권 정보를 넣어줘. 모든 페이지에 공통으로 적용해줘.',
    },
  ],
};
