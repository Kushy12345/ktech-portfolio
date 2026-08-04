import { cn } from "@/lib/utils";

/** Geometric K monogram — the K-Tech icon mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="K-Tech Solutions mark"
      className={cn("h-9 w-9", className)}
    >
      <defs>
        <linearGradient id="ktech-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-soft)" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
        <linearGradient id="ktech-violet" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--violet-soft)" />
          <stop offset="100%" stopColor="var(--violet)" />
        </linearGradient>
      </defs>
      <path d="M8 5h8v38H8z" fill="url(#ktech-gold)" />
      <path d="M40 5H27.5L16 20.5v10L27.5 43H40L25.5 25.5 40 5z" fill="url(#ktech-violet)" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-tight text-foreground">
          K&#8209;TECH
        </span>
        <span className="text-[0.6rem] font-semibold tracking-[0.28em] text-gold">SOLUTIONS</span>
      </span>
    </span>
  );
}
