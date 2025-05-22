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
      {/* Loading Spinner avec fond noir */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="relative">
            {/* Cercle extérieur */}
            <div className="w-12 h-12 border-4 border-white/20 rounded-full"></div>
            {/* Cercle animé */}
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            {/* Point central */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      )}

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