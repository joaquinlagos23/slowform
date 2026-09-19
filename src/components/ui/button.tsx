import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none transition-[transform,background-color,color,box-shadow,opacity] duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg shadow-[var(--shadow-border)] hover:bg-primary/90",
        secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:bg-stone",
        outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface",
        ghost: "text-fg hover:bg-surface",
        inverse: "bg-fg text-bg hover:bg-fg/90",
      },
      size: {
        default: "h-11 px-5 text-sm rounded-full",
        sm: "h-9 px-3.5 text-sm rounded-full",
        lg: "h-12 px-6 text-base rounded-full",
        icon: "size-11 rounded-full",
        "icon-sm": "size-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
