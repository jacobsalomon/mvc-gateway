"use client";

import { useEffect, useRef } from "react";

type VideoBgProps = {
  src: string;
  poster?: string;
  opacity?: number;
  className?: string;
};

export default function VideoBg({
  src,
  poster,
  opacity = 0.12,
  className = "",
}: VideoBgProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Keep this slow and atmospheric so the motion supports the section.
    video.playbackRate = 0.72;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      className={`cinematic-video ${className}`}
      style={{ opacity }}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
