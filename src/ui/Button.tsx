type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  bgClasses?: string;
};

export default function Button({
  children,
  bgClasses = "bg-primary-700 hover:bg-primary-500",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${bgClasses} flex items-center justify-around w-fit h-5 px-2 py-4 text-primary-50 rounded-lg gap-2 cursor-pointer font-medium text-sm active:scale-95  transition duration-300 ease-in-out ${className} disabled:opacity-50`}
      {...props}
    >
      {children}
    </button>
  );
}
