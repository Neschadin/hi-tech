type TProps = {
  className?: string;
  open?: boolean;
};

export const ChevronDownIcon = ({ className = "", open = false }: TProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke="currentColor"
    aria-hidden="true"
    className={`h-3 w-3 transform text-neutral-grey transition duration-200 
    ${open ? "rotate-180" : ""} 
    ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
