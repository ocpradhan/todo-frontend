type ButtonProps = {
  children: React.ReactNode;
  bgColor?: string;
  bgColorHover?: string;
};

export default function Button({
  children,
  bgColor = "bg-primary-700",
  bgColorHover = "bg-primary-600",
}: ButtonProps) {
  return (
    <button
      className={`${bgColor} flex items-center justify-around w-fit h-5 px-2 py-4 text-primary-50 rounded-lg gap-2 cursor-pointer font-medium text-sm active:scale-95 hover:${bgColorHover}`}
    >
      {children}
    </button>
  );
}
