import type { Project } from '@/lib/types';

export const projects: Project[] = [
  // === 웹 (web) ===
  {
    id: 'proj-1',
    title: 'SOL 학생 로드맵',
    description: '2024 신한 해커톤 최우수상 수상작. 학생 맞춤형 금융 포트폴리오 추천 서비스로, 전공·학점·이수과목 유사도를 기반으로 선배 포트폴리오를 매칭하고 투자 로드맵을 제안합니다.',
    teamName: 'conSOLtant',
    members: [
      { name: '고다현', role: '백엔드' },
      { name: '박상욱', role: '백엔드' },
      { name: '이동열', role: '백엔드' },
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Elasticsearch', 'Gemini API'],
    category: 'web',
    thumbnailUrl: '/thumbnails/sol-roadmap.png',
    likes: 156,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/team-conSOLtant/Backend' },
    ],
  },
  {
    id: 'proj-2',
    title: '우동사리 (UdongSari)',
    description: '멋쟁이사자처럼 대경권 해커톤 대상 수상작. 동네 아마추어 사진작가와 저렴한 촬영 서비스를 원하는 사용자를 위치 기반으로 연결하는 플랫폼입니다.',
    teamName: 'UdongSari',
    members: [
      { name: '팀원 1', role: '프론트엔드' },
      { name: '팀원 2', role: '백엔드' },
      { name: '팀원 3', role: '디자인' },
    ],
    techStack: ['Vue.js', 'Vite', 'JavaScript', 'SCSS'],
    category: 'web',
    thumbnailUrl: '/thumbnails/udongsari.png',
    likes: 89,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/UdongSari/frontend' },
    ],
  },
  {
    id: 'proj-3',
    title: 'baby-care',
    description: '항해 해커톤 출품작. 부모와 베이비시터를 연결하는 올인원 중개 웹서비스입니다. 프로필 매칭, 일정 관리, 실시간 채팅 기능을 제공합니다.',
    teamName: 'Team baby-care',
    members: [
      { name: '프론트엔드 개발자', role: '프론트엔드' },
      { name: '백엔드 개발자', role: '백엔드' },
    ],
    techStack: ['TypeScript', 'React', 'Node.js'],
    category: 'web',
    thumbnailUrl: '/thumbnails/baby-care.png',
    likes: 42,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/hanghae-hackathon/baby-care' },
    ],
  },

  // === 모바일 (mobile) ===
  {
    id: 'proj-4',
    title: '긱사생 (Geek-sasaeng)',
    description: 'UMC 2기 앱 런칭 프로젝트. 대학 기숙사생을 위한 커뮤니티 앱으로, 배달 공동주문, 중고거래, 기숙사 생활 정보 공유 기능을 제공합니다.',
    teamName: 'UMC 긱사생',
    members: [
      { name: 'Android 개발자', role: 'Android' },
      { name: 'iOS 개발자', role: 'iOS' },
      { name: '서버 개발자', role: '백엔드' },
    ],
    techStack: ['Kotlin', 'Swift', 'Java', 'Spring Boot'],
    category: 'mobile',
    thumbnailUrl: '/thumbnails/geek-sasaeng.png',
    likes: 78,
    screenshots: [],
    links: [
      { label: 'GitHub (Android)', url: 'https://github.com/Geek-sasaeng/Geek_sasaeng-Android' },
      { label: 'GitHub (Server)', url: 'https://github.com/Geek-sasaeng/Geek_sasaeng-Server' },
    ],
  },
  {
    id: 'proj-5',
    title: '이거해줘 (DoChange)',
    description: 'GDGoC 2025 백야 해커톤 Team 21 프로젝트. 할 일을 미루는 사람들을 위한 동기부여 앱으로, AI가 사용자의 목표를 분석하고 실행 가능한 작은 단계로 쪼개줍니다.',
    teamName: 'Team 21 - 이거해줘',
    members: [
      { name: 'FE 개발자', role: '프론트엔드' },
      { name: 'BE 개발자', role: '백엔드' },
      { name: 'AI 개발자', role: 'AI' },
    ],
    techStack: ['JavaScript', 'Java', 'Spring Boot', 'AI/ML'],
    category: 'mobile',
    thumbnailUrl: '/thumbnails/dochange.png',
    likes: 34,
    screenshots: [],
    links: [
      { label: 'GitHub (FE)', url: 'https://github.com/GDGoC-Hackathon-2025/DoChange-FE' },
      { label: 'GitHub (BE)', url: 'https://github.com/GDGoC-Hackathon-2025/DoChange-BE' },
    ],
  },

  // === AI/ML (ai-ml) ===
  {
    id: 'proj-6',
    title: 'PhishBusters',
    description: '항해 해커톤 출품작. 보이스피싱을 실시간으로 탐지하고 차단하는 AI 서비스입니다. 통화 내용을 분석하여 피싱 패턴을 감지하고 사용자에게 경고합니다.',
    teamName: 'Team PhishBusters',
    members: [
      { name: 'AI 엔지니어', role: 'AI/ML' },
      { name: '프론트엔드 개발자', role: '프론트엔드' },
      { name: '백엔드 개발자', role: '백엔드' },
    ],
    techStack: ['JavaScript', 'Python', 'NLP', 'TensorFlow'],
    category: 'ai-ml',
    thumbnailUrl: '/thumbnails/phishbusters.png',
    likes: 203,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/hanghae-hackathon/PhishBusters' },
    ],
  },
  {
    id: 'proj-7',
    title: 'Fact-Checker',
    description: '24년 항해커톤 3팀 프로젝트. AI 기반 페이크 뉴스 탐지 서비스로, 뉴스 기사의 신뢰도를 자동 분석하고 사실 확인 결과를 제공합니다.',
    teamName: '항해커톤 3팀',
    members: [
      { name: 'FE 개발자 1', role: '프론트엔드' },
      { name: 'FE 개발자 2', role: '프론트엔드' },
      { name: 'BE 개발자', role: '백엔드' },
    ],
    techStack: ['TypeScript', 'React', 'Python', 'FastAPI'],
    category: 'ai-ml',
    thumbnailUrl: '/thumbnails/fact-checker.png',
    likes: 127,
    screenshots: [],
    links: [
      { label: 'GitHub (FE)', url: 'https://github.com/hanghae-hackathon/Fact-Checker-FE' },
      { label: 'GitHub (BE)', url: 'https://github.com/hanghae-hackathon/Fact-Checker-BE' },
    ],
  },
  {
    id: 'proj-8',
    title: 'nodong-safe (노동세이프)',
    description: '항해 해커톤 출품작. AI가 근로계약서를 분석하여 불리한 조항이나 법적 문제가 있는 부분을 자동 감지하고 수정을 제안하는 서비스입니다.',
    teamName: 'Team nodong-safe',
    members: [
      { name: 'AI 개발자', role: 'AI/ML' },
      { name: '풀스택 개발자', role: '풀스택' },
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'OpenAI API'],
    category: 'ai-ml',
    thumbnailUrl: '/thumbnails/nodong-safe.png',
    likes: 94,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/hanghae-hackathon/nodong-safe' },
    ],
  },

  // === IoT (iot) ===
  {
    id: 'proj-9',
    title: 'EyeSafer AI',
    description: '항해 해커톤 출품작. CCTV 영상에서 군중 밀집도를 실시간 계산하고, 위험 수준 도달 시 자동 경고를 발송하는 AI 기반 안전 관리 시스템입니다.',
    teamName: 'Team EyeSafer',
    members: [
      { name: 'AI 엔지니어', role: 'AI/ML' },
      { name: '백엔드 개발자', role: '백엔드' },
      { name: '프론트엔드 개발자', role: '프론트엔드' },
    ],
    techStack: ['Python', 'OpenCV', 'YOLOv8', 'Flask'],
    category: 'iot',
    thumbnailUrl: '/thumbnails/eyesafer.png',
    likes: 67,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/hanghae-hackathon/EyeSafer_AI' },
    ],
  },
  {
    id: 'proj-10',
    title: 'strawberryJAM',
    description: '항해 해커톤 Team 11 프로젝트. 디지털 문해력 증진 프로그램으로, 디지털 기기 사용이 어려운 고령층을 위한 단계별 학습 플랫폼입니다.',
    teamName: 'Team 11',
    members: [
      { name: '프론트엔드 개발자', role: '프론트엔드' },
      { name: '백엔드 개발자', role: '백엔드' },
      { name: 'UX 디자이너', role: '디자인' },
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    category: 'iot',
    thumbnailUrl: '/thumbnails/strawberryjam.png',
    likes: 31,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/hanghae-hackathon/strawberryJAM' },
    ],
  },

  // === 게임 (game) ===
  {
    id: 'proj-11',
    title: 'SPARCS Hackathon A6 - 대전 탐험',
    description: '2024 SPARCS Service Hackathon (KAIST 주관) 출품작. 대전 지역 관광지를 게이미피케이션으로 탐험하는 Android 앱입니다. 미션 수행과 포인트 획득 시스템을 갖추고 있습니다.',
    teamName: 'Team A6',
    members: [
      { name: 'Android 개발자 1', role: 'Android' },
      { name: 'Android 개발자 2', role: 'Android' },
      { name: '서버 개발자', role: '백엔드' },
    ],
    techStack: ['Kotlin', 'Android', 'Firebase'],
    category: 'game',
    thumbnailUrl: '/thumbnails/sparcs-a6.png',
    likes: 45,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/SPARCS-Service-Hackathon-2024/A6-App' },
    ],
  },
  {
    id: 'proj-12',
    title: 'UMC 3기 해커톤 - 캠퍼스 퀘스트',
    description: 'UMC 3기 해커톤 4팀 프로젝트. 대학 캠퍼스를 배경으로 한 위치 기반 퀘스트 게임으로, 신입생 오리엔테이션이나 학교 행사에서 활용할 수 있습니다.',
    teamName: 'UMC 3기 4팀',
    members: [
      { name: '기획자', role: 'PM' },
      { name: '프론트엔드', role: '프론트엔드' },
      { name: '백엔드', role: '백엔드' },
    ],
    techStack: ['React Native', 'Spring Boot', 'MySQL'],
    category: 'game',
    thumbnailUrl: '/thumbnails/umc-campus-quest.png',
    likes: 52,
    screenshots: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/University-MakeUs-Challenge/3rd-hackathon-Team4' },
    ],
  },
];
