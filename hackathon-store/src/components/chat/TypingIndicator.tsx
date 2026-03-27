export default function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
        AI
      </div>
      <div className="bg-surface rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1">
        <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
