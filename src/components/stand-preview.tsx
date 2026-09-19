import { lazy, Suspense, useEffect, useState } from "react";
import type { StandConfig } from "@/lib/catalog";

const StandCanvas = lazy(() => import("./stand-canvas"));

export function StandPreview({ config }: { config: StandConfig }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <PreviewFallback />;
  }

  return (
    <Suspense fallback={<PreviewFallback />}>
      <StandCanvas config={config} />
    </Suspense>
  );
}

function PreviewFallback() {
  return (
    <div className="flex h-full min-h-80 w-full items-center justify-center bg-surface">
      <div className="size-24 rounded-full border border-border" />
    </div>
  );
}
