export default function Checkbox({ ...props }) {
  return (
    <div className="relative w-full flex gap-2">
      <input
        className="
        peer  appearance-none shrink-0 w-4 h-4 border border-border rounded-sm mt-1 bg-white
        focus:outline-none focus:ring-offset-0  
        checked:bg-primary-700 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400 checked:ring-blue-500/50 checked:ring-2 transition-colors
      "
        type="checkbox"
        {...props}
      />
      <svg
        className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
