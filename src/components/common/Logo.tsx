import { CheckSquare } from "lucide-react";

type LogoProps = {
  className?: string;
  isCollapsed?: boolean;
};

export default function Logo({ className, isCollapsed }: LogoProps) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <span className="bg-primary-700 text-primary-50 p-2 rounded-xl">
        <CheckSquare size={20} />
      </span>
      {!isCollapsed && <p className="font-semibold text-lg">TaskFlow</p>}
    </div>
  );
}
