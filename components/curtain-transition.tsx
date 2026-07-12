"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type CurtainContextValue = {
  navigateWithCurtain: (href: string) => void;
  transitioning: boolean;
};

const CurtainContext = createContext<CurtainContextValue | null>(null);
const CURTAIN_DURATION_MS = 300;

// Keeps the two "doors" mounted above the app while Next swaps routes beneath
// them. This recreates Motion's curtains/doors cover-then-reveal transition.
export function CurtainTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const startingPath = useRef(pathname);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [phase, setPhase] = useState<"idle" | "covering" | "revealing">("idle");

  const clearTimer = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  }, []);

  useEffect(() => clearTimer, [clearTimer]);

  useEffect(() => {
    if (phase !== "covering" || pathname === startingPath.current) return;
    setPhase("revealing");
    clearTimer();
    timer.current = setTimeout(() => setPhase("idle"), CURTAIN_DURATION_MS);
  }, [clearTimer, pathname, phase]);

  const navigateWithCurtain = useCallback(
    (href: string) => {
      if (phase !== "idle" || href === pathname) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }

      startingPath.current = pathname;
      setPhase("covering");
      clearTimer();
      timer.current = setTimeout(() => router.push(href), CURTAIN_DURATION_MS);
    },
    [clearTimer, pathname, phase, router],
  );

  return (
    <CurtainContext.Provider value={{ navigateWithCurtain, transitioning: phase !== "idle" }}>
      {children}
      <div className={`curtain-doors curtain-doors--${phase}`} aria-hidden="true">
        <div className="curtain-door curtain-door--left" />
        <div className="curtain-door curtain-door--right" />
      </div>
    </CurtainContext.Provider>
  );
}

export function useCurtainTransition() {
  const context = useContext(CurtainContext);
  if (!context) {
    throw new Error("useCurtainTransition must be used inside CurtainTransitionProvider");
  }
  return context;
}
