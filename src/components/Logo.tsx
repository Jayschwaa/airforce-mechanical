export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 52" className={className} aria-hidden="true">
      <g fill="#6dcff6">
        <path d="M21 9 2 2c1 9 7 16 19 18Z" />
        <path d="M21 22 7 19c2 7 7 11 14 12Z" />
        <path d="m22 33-9-1c2 5 6 8 11 8Z" />
        <path d="M51 9 70 2c-1 9-7 16-19 18Z" />
        <path d="m51 22 14-3c-2 7-7 11-14 12Z" />
        <path d="m50 33 9-1c-2 5-6 8-11 8Z" />
      </g>
      <path
        d="M36 2 54 8v18c0 11-7 19-18 24C25 45 18 37 18 26V8Z"
        fill="#071f2e"
        stroke="#6dcff6"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="m36 9 1.5 3.2 3.5.4-2.6 2.4.7 3.4-3.1-1.7-3.1 1.7.7-3.4-2.6-2.4 3.5-.4Z" fill="#6dcff6" />
      <path
        d="M27 37 32.5 22h7L45 37h-4.6l-.9-2.8h-7l-.9 2.8Zm6.6-6.4h4.8L36 23.4Z"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] font-bold uppercase tracking-[0.04em] text-white">
          Air Force
        </span>
        <span className="mt-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.36em] text-sky-400">
          Mechanical
        </span>
      </span>
    </span>
  );
}
