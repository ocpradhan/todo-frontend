import type { LucideIcon } from "lucide-react";

type SearchInputProps = {
  Icon?: LucideIcon;
};

export default function SearchInput({ Icon }: SearchInputProps) {
  return (
    <div
      className="flex items-center border border-border w-full min-w-fit rounded-lg px-2 focus-within:border-primary-600
    focus-within:border focus-within:shadow-primary-500 focus-within:shadow-2xl"
    >
      {Icon && <Icon className="text-gray-700" size={14} />}
      <input type="text" className="bg-inherit w-full outline-0 ms-2 text-sm" />
    </div>
  );
}
