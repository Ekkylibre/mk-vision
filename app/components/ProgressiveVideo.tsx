'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ProgressiveVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  onLoad?: () => void;
}

export default function ProgressiveVideo({
  src,
  poster,
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
      {/* Poster/Thumbnail */}
      {poster && isLoading && (
        <div className="absolute inset-0">
          <Image
            src={poster}
            alt="Vidéo thumbnail"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
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