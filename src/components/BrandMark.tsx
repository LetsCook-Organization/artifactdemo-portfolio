interface BrandMarkProps {
  className?: string;
}

/**
 * Custom vector monogram replacing the broken external logo URL from Stitch HTML.
 */
export function BrandMark({ className = 'h-9 w-9' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ag-cyan-violet" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="55%" stopColor="#7bd0ff" />
          <stop offset="100%" stopColor="#d0bcff" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill="#0c0e13"
        stroke="url(#ag-cyan-violet)"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <path
        d="M9.5 28L15.2 12H17.8L21.6 22.8"
        stroke="url(#ag-cyan-violet)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6 22.5H18.4"
        stroke="#00f2fe"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30.5 16.5C29.4 13.8 27 12 24.3 12C20.5 12 18 15.1 18 20C18 24.9 20.6 28 24.6 28C28.2 28 30.5 25.4 30.5 21.5V20.5H24.8"
        stroke="#d0bcff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
