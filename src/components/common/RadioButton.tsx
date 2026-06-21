type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  className?: string;
};

const commonStyles = `appearance-none before:content-['•']  before:text-3xl before:me-1 after:text-body w-18 h-10 border border-border text-center rounded-xl px-2 cursor-pointer flex items-center checked:border-primary-700 transition duration-300 checked:bg-primary-50"`;

function RadioButton({ type, className, ...props }: RadioButtonProps) {
  if (type === "high")
    return (
      <input
        type="radio"
        name="priority"
        id="high"
        className={`before:text-danger after:content-['High'] ${commonStyles} ${className}`}
        {...props}
      />
    );
  else if (type === "medium")
    return (
      <input
        type="radio"
        name="priority"
        id="high"
        className={`before:text-warning after:content-['Medium'] ${commonStyles} ${className}`}
        {...props}
      />
    );
  else if (type === "low")
    return (
      <input
        type="radio"
        name="priority"
        id="high"
        className={`before:text-success after:content-['Low'] ${commonStyles} ${className}`}
        {...props}
      />
    );
}

export default RadioButton;
