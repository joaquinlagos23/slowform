import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="8.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="18.2" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12.4 14.2c1.2-1.6 2.3-2.4 3.6-2.4s2.4.8 3.6 2.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
