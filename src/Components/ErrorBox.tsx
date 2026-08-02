type ErrorBoxProps = {
  message: string;
};

export default function ErrorBox({ message }: ErrorBoxProps) {
  return (
    <div
      dir="rtl"
      className="animate-fade-in flex items-center gap-2.5 bg-red-50 border border-red-300 text-red-700 rounded-xl px-4 py-3 shadow-sm max-w-md"
    >
      <svg
        className="w-5 h-5 shrink-0 text-red-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}