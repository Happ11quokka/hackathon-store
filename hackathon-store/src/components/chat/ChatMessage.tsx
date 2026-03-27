interface ChatMessageProps {
  sender: 'user' | 'ai';
  content: string;
  timestamp: string;
  avatar?: string;
  senderName: string;
}

export default function ChatMessage({ sender, content, timestamp, senderName }: ChatMessageProps) {
  const isUser = sender === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div
        className={`w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 ${
          isUser
            ? 'rounded-full bg-brand-600 text-white'
            : 'rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white'
        }`}
      >
        {isUser ? '나' : 'AI'}
      </div>
      <div className={`max-w-[70%] ${isUser ? 'text-right' : ''}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-tertiary">{senderName}</span>
          <span className="text-xs text-tertiary">{timestamp}</span>
        </div>
        <div
          className={`rounded-2xl px-4 py-2 text-sm whitespace-pre-line ${
            isUser
              ? 'bg-brand-600 text-white rounded-tr-md'
              : 'bg-surface text-primary rounded-tl-md'
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
