"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { useCurtainTransition } from "@/components/curtain-transition";

type CurtainLinkProps = ComponentProps<typeof Link>;

// A normal Next.js link that uses the site's doors transition for an
// ordinary left-click while preserving new-tab and modifier-key behavior.
export default function CurtainLink({ href, onClick, ...props }: CurtainLinkProps) {
  const { navigateWithCurtain, transitioning } = useCurtainTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (
      event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey ||
      event.altKey || typeof href !== "string"
    ) return;

    event.preventDefault();
    navigateWithCurtain(href);
  };

  return <Link href={href} onClick={handleClick} aria-disabled={transitioning} {...props} />;
}
