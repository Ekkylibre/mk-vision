'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  readonly id: string;
  readonly title: string;
  readonly src: string;
}

interface VerticalVideoCarouselProps {
  videos: readonly Video[];
}

export default function VerticalVideoCarousel({ videos }: VerticalVideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const playPromises = useRef<Promise<void>[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
    
    // Configuration de l'Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const timer = setTimeout(() => {
              setIsInitialLoad(false);
            }, 2000);
            return () => clearTimeout(timer);
          } else {
            setIsVisible(false);
            // Pause toutes les vidéos quand le carrousel n'est pas visible
            videoRefs.current.forEach((video) => {
              if (video) {
                video.pause();
              }
            });
          }
        });
      },
      {
        threshold: 0.5, // Le carrousel est considéré comme visible quand 50% est dans la vue
        rootMargin: '100px' // Déclenche un peu avant que le carrousel soit complètement visible
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [videos]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
    } else {
      setCurrentIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
    }
  };

  const playVideo = useCallback(async (video: HTMLVideoElement) => {
    if (!isVisible) return; // Ne pas jouer la vidéo si le carrousel n'est pas visible
    
    try {
      playPromises.current.forEach(promise => {
        if (promise) {
          // @ts-ignore - La propriété 'abort' existe sur les promesses AbortController
          promise.abort?.();
        }
      });
      playPromises.current = [];

      const playPromise = video.play();
      playPromises.current.push(playPromise);
      await playPromise;
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        console.log('Erreur de lecture vidéo:', error);
      }
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return; // Ne pas gérer les vidéos si le carrousel n'est pas visible

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          playVideo(video);
          video.loop = true;
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex, isVisible, playVideo]);

  const getVisibleVideos = () => {
    const visibleCount = 5;
    const totalVideos = videos.length;
    
    const indices = Array.from({ length: visibleCount }, (_, i) => {
      const offset = i - 2;
      let index = currentIndex + offset;
      
      if (index < 0) {
        index = totalVideos + index;
      } else if (index >= totalVideos) {
        index = index - totalVideos;
      }
      
      return index;
    });

    return indices.map(index => videos[index]);
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center gap-2 px-20">
        {getVisibleVideos().map((video, index) => {
          const offset = index - 2;
          const isCenter = offset === 0;
          const isAdjacent = Math.abs(offset) === 1;
          const isFar = Math.abs(offset) >= 2;

          const initialAnimation = isInitialLoad ? {
            x: isCenter ? 0 : (offset > 0 ? -100 : 100),
            scale: isCenter ? 1 : 0.8,
            opacity: isCenter ? 1 : 0
          } : false;

          const navigationAnimation = {
            x: 0,
            scale: isCenter ? 1 : 0.8,
            opacity: isFar ? 0.3 : 1
          };

          return (
            <motion.div
              key={video.id}
              className={`relative ${
                isCenter ? 'w-[60%] h-[70vh]' :
                isAdjacent ? 'w-[45%] h-[50vh]' :
                'w-[30%] h-[30vh]'
              }`}
              style={{
                zIndex: isInitialLoad ? (
                  isCenter ? 3 :
                  isAdjacent ? 2 :
                  1
                ) : 1
              }}
              initial={initialAnimation}
              animate={navigationAnimation}
              whileHover={{
                scale: isCenter ? 1 : 0.9,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: isInitialLoad ? 0.6 : 0.3,
                ease: isInitialLoad ? [0.4, 0, 0.2, 1] : "easeInOut",
                delay: isInitialLoad ? (
                  isCenter ? 0 :
                  isAdjacent ? 0.3 :
                  0.6
                ) : 0
              }}
            >
              <video
                ref={el => {
                  const actualIndex = (currentIndex + offset + videos.length) % videos.length;
                  videoRefs.current[actualIndex] = el;
                }}
                src={video.src}
                className="w-full h-full object-cover rounded-lg"
                playsInline
                muted
                preload="metadata"
              />
            </motion.div>
          );
        })}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ 
          delay: isInitialLoad ? 1.2 : 0,
          duration: 0.8,
          ease: "easeOut"
        }}
        onClick={() => handleScroll('left')}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
      >
        <ChevronLeft className="w-8 h-8" />
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ 
          delay: isInitialLoad ? 1.2 : 0,
          duration: 0.8,
          ease: "easeOut"
        }}
        onClick={() => handleScroll('right')}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
      >
        <ChevronRight className="w-8 h-8" />
      </motion.button>
    </div>
  );
} 