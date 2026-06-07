import type { LucideIcon } from "lucide-react";

type InputProps = {
  Icon?: LucideIcon;
  placeholder?: string;
  className?: string;
};

export default function Input({ Icon, placeholder, className }: InputProps) {
  return (
    <div
      className={`items-center border border-border rounded-lg px-2 focus-within:border-primary-600 h-8
    focus-within:border focus-within:ring-2 focus-within:ring-blue-500/50 flex transition-colors bg-page ${className}`}
    >
      {Icon && <Icon className="text-muted" size={14} />}
      <input
        type="text"
        className="bg-inherit  outline-0 ms-2 text-sm text-body placeholder:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
