'use client';

import { useState, useRef, useEffect } from 'react';

interface ProgressiveVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  onLoad?: () => void;
}

export default function ProgressiveVideo({
  src,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  onLoad
}: ProgressiveVideoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current && autoPlay) {
              videoRef.current.play().catch(() => {
                console.log('Lecture automatique bloquée');
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlay]);

  const handleVideoLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Video */}
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload="metadata"
          onLoadedData={handleVideoLoad}
        />
      )}
    </div>
  );
} 