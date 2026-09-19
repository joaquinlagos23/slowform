import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QtyStepper({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (next: number) => void;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center rounded-full bg-surface", className)}>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="Decrease quantity"
        onClick={() => onChange(value - 1)}
      >
        <Minus className="size-4" />
      </Button>
      <span className="min-w-6 text-center text-sm tabular-nums">{value}</span>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="Increase quantity"
        disabled={value >= 6}
        onClick={() => onChange(value + 1)}
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
}
