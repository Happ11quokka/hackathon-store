// 프로젝트
export interface Project {
  id: string;
  title: string;
  description: string;
  teamName: string;
  members: TeamMember[];
  techStack: string[];
  category: ProjectCategory;
  thumbnailUrl: string;
  likes: number;
  screenshots: string[];
  links: ProjectLink[];
}

export type ProjectCategory = 'web' | 'mobile' | 'ai-ml' | 'iot' | 'game';

export interface TeamMember {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

// 대회
export interface HackathonEvent {
  id: string;
  title: string;
  organizer: string;
  description: string;
  registrationStart: string;
  registrationEnd: string;
  status: EventStatus;
  prize: string;
  posterUrl: string;
  schedule: string;
  eligibility: string;
  registrationLink: string;
}

export type EventStatus = 'recruiting' | 'ongoing' | 'ended';

// 팀원 모집
export interface RecruitPost {
  id: string;
  title: string;
  projectName: string;
  description: string;
  positions: string[];
  techStack: string[];
  headcount: number;
  deadline: string;
  status: RecruitStatus;
  author: string;
  createdAt: string;
}

export type RecruitStatus = 'open' | 'closed';

// AI 채팅
export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: string;
  senderName: string;
  avatar?: string;
}

export type ChatCategory = 'project' | 'event' | 'team' | 'vibe-coding' | 'general';

export interface ChatResponse {
  category: ChatCategory;
  triggers: string[];
  response: string;
}

// Vibe Coding 가이드
export interface VibeCodingStep {
  stepNumber: number;
  title: string;
  description: string;
  estimatedTime: string;
  techStack: string[];
  prompt: string;
}

export interface VibeCodingGuide {
  idea: string;
  steps: VibeCodingStep[];
}

// 필터 관련
export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  name: string;
  options: FilterOption[];
}

export interface FilterState {
  categories: string[];
  techStack: string[];
  status: string[];
  positions: string[];
}

// 채팅 대화 목록
export interface ChatConversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}
