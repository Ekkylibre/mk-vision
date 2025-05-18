'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoCarouselProps {
  videos: string[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(2); // Commencer au milieu
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Initialiser les refs pour chaque vidéo
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos]);

  const handleScroll = (direction: 'up' | 'down') => {
    if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else if (direction === 'down' && currentIndex < videos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    // Gérer la lecture des vidéos
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play();
          video.loop = true;
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-4">
        {videos.map((video, index) => {
          const isCenter = index === currentIndex;
          const isAdjacent = Math.abs(index - currentIndex) === 1;
          const isFar = Math.abs(index - currentIndex) >= 2;

          return (
            <motion.div
              key={video}
              className={`relative ${
                isCenter ? 'w-[80%] h-[70vh]' :
                isAdjacent ? 'w-[60%] h-[50vh]' :
                'w-[40%] h-[30vh]'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isFar ? 0.3 : 1,
                y: 0,
                scale: isCenter ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            >
              <video
                ref={el => videoRefs.current[index] = el}
                src={video}
                className="w-full h-full object-cover rounded-lg"
                playsInline
                muted
              />
            </motion.div>
          );
        })}
      </div>

      {/* Contrôles de navigation */}
      <button
        onClick={() => handleScroll('up')}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white p-2 rounded-full"
        disabled={currentIndex === 0}
      >
        ↑
      </button>
      <button
        onClick={() => handleScroll('down')}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white p-2 rounded-full"
        disabled={currentIndex === videos.length - 1}
      >
        ↓
      </button>
    </div>
  );
} 