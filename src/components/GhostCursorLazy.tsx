"use client";

import dynamic from "next/dynamic";

const GhostCursor = dynamic(() => import("@/components/GhostCursor"), {
  ssr: false,
});

export default function GhostCursorLazy(props: React.ComponentProps<typeof GhostCursor>) {
  return <GhostCursor {...props} />;
}
