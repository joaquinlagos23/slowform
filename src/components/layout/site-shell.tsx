import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <Toaster
        position="top-center"
        toastOptions={{
          className: "!bg-fg !text-bg !border-none !shadow-[var(--shadow-border-hover)]",
        }}
      />
    </div>
  );
}
