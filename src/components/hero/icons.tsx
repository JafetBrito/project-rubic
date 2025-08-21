export function ChevronUp() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M6 14l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  export function ChevronDown() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M18 10l-6 6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  export function ChevronLeft() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  export function ChevronRight() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  export function PlusIcon() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  
  export function MinusIcon() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  
  export function ResetIcon() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M3 12a9 9 0 1 0 3-6.7M3 5v4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  export function FovIcon({ minus }: { minus?: boolean }) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {minus ? <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> : null}
      </svg>
    );
  }
  
  export function PauseIcon() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M8 5h3v14H8zM13 5h3v14h-3z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  
  export function PlayIcon() {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M8 5l10 7-10 7V5z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  