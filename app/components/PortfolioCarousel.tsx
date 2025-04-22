'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { videos } from '@/app/constants/videos';

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(6);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const getPreviousIndex = () => (currentIndex - 1 + videos.length) % videos.length;
  const getNextIndex = () => (currentIndex + 1) % videos.length;
  const getPreviousPreviousIndex = () => (currentIndex - 2 + videos.length) % videos.length;
  const getNextNextIndex = () => (currentIndex + 2) % videos.length;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return videos.length - 1;
      if (newIndex >= videos.length) return 0;
      return newIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      paginate(1);
    } else if (isRightSwipe) {
      paginate(-1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handlePrevious = () => {
    setDirection(-1);
    paginate(-1);
  };

  const handleNext = () => {
    setDirection(1);
    paginate(1);
  };

  return (
    <>
      {/* Version Desktop */}
      <div className="hidden md:block">
        <div className="relative h-[600px] w-full max-w-[1200px] mx-auto overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-center gap-4">
            {/* Vidéo précédente précédente */}
            <motion.div
              className="relative h-[300px] w-[150px] cursor-pointer"
              onClick={() => paginate(-2)}
              whileHover={{ 
                scale: 1.05,
                opacity: 0.5,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              initial={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <video
                src={videos[getPreviousPreviousIndex()].src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-white text-xs font-semibold">
                  {videos[getPreviousPreviousIndex()].title}
                </h3>
              </motion.div>
            </motion.div>

            {/* Vidéo précédente */}
            <motion.div
              className="relative h-[400px] w-[200px] cursor-pointer"
              onClick={() => paginate(-1)}
              whileHover={{ 
                scale: 1.05,
                opacity: 0.8,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              initial={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <video
                src={videos[getPreviousIndex()].src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-white text-sm font-semibold">
                  {videos[getPreviousIndex()].title}
                </h3>
              </motion.div>
            </motion.div>

            {/* Vidéo principale */}
            <div className="relative h-[600px] w-[300px]">
              <video
                src={videos[currentIndex].src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">
                  {videos[currentIndex].title}
                </h3>
              </div>
            </div>

            {/* Vidéo suivante */}
            <motion.div
              className="relative h-[400px] w-[200px] cursor-pointer"
              onClick={() => paginate(1)}
              whileHover={{ 
                scale: 1.05,
                opacity: 0.8,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <video
                src={videos[getNextIndex()].src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-white text-sm font-semibold">
                  {videos[getNextIndex()].title}
                </h3>
              </motion.div>
            </motion.div>

            {/* Vidéo suivante suivante */}
            <motion.div
              className="relative h-[300px] w-[150px] cursor-pointer"
              onClick={() => paginate(2)}
              whileHover={{ 
                scale: 1.05,
                opacity: 0.5,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <video
                src={videos[getNextNextIndex()].src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-white text-xs font-semibold">
                  {videos[getNextNextIndex()].title}
                </h3>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <motion.button
              onClick={() => paginate(-1)}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 1.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <motion.button
              onClick={() => paginate(1)}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 1.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Version Mobile */}
      <div className="md:hidden">
        <div 
          className="relative h-[600px] w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <video
                src={videos[currentIndex].src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="text-white text-lg font-semibold">
                  {videos[currentIndex].title}
                </h3>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Contrôles tactiles */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
            <motion.button
              onClick={handlePrevious}
              className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Vidéo précédente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Vidéo suivante"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Indicateur de position */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
            {videos.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 