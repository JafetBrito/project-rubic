"use client";

import type { ReactNode } from "react";

export default function PadButton({
  children,
  onStart,
  onEnd,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  onStart: () => void;
  onEnd: () => void;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`h-10 w-10 md:h-11 md:w-11 grid place-items-center rounded-xl text-white bg-black/40 hover:bg-black/55 backdrop-blur-md border border-white/20 active:scale-95 transition pointer-events-auto ${className}`}
      onMouseDown={onStart}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onTouchStart={(e) => {
        e.preventDefault();
        onStart();
      }}
      onTouchEnd={(e) => {
        e.preventDefault();
        onEnd();
      }}
    >
      {children}
    </button>
  );
}
