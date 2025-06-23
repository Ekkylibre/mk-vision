'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { YOUTUBE_SHORTS } from '@/app/constants';

interface YouTubeShortsCarouselProps {
  initialShortId?: string;
  onClose: () => void;
}

export default function YouTubeShortsCarousel({ initialShortId, onClose }: YouTubeShortsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Trouver l'index initial si un shortId est fourni
  useEffect(() => {
    if (initialShortId) {
      const index = YOUTUBE_SHORTS.findIndex(short => short.shortId === initialShortId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [initialShortId]);

  const currentShort = YOUTUBE_SHORTS[currentIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previousShort();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextShort();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const nextShort = () => {
    setCurrentIndex((prev) => (prev + 1) % YOUTUBE_SHORTS.length);
  };

  const previousShort = () => {
    setCurrentIndex((prev) => (prev - 1 + YOUTUBE_SHORTS.length) % YOUTUBE_SHORTS.length);
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[70vh] md:h-[75vh] lg:h-[80vh] flex flex-col">
        {/* Header avec titre et bouton fermer */}
        <div className="absolute -top-8 md:-top-10 lg:-top-12 left-0 right-0 flex justify-between items-center z-10">
          <div className="flex-1 min-w-0 pr-2 md:pr-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white truncate">
              {currentShort.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-white hover:text-gray-300 transition-colors p-1"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Video Container - Format vertical pour les shorts */}
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${currentShort.shortId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
            title={currentShort.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            aria-label={currentShort.title}
          />
        </div>

        {/* Navigation horizontale */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
          <button
            onClick={previousShort}
            className="pointer-events-auto p-2 md:p-3 text-white hover:text-gray-300 transition-colors transform -translate-x-6 md:-translate-x-8 lg:-translate-x-12"
            aria-label="Short précédent"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>
          <button
            onClick={nextShort}
            className="pointer-events-auto p-2 md:p-3 text-white hover:text-gray-300 transition-colors transform translate-x-6 md:translate-x-8 lg:translate-x-12"
            aria-label="Short suivant"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>
        </div>

        {/* Compteur de shorts */}
        <div className="absolute -bottom-8 md:-bottom-10 lg:-bottom-12 right-0 text-white">
          <p className="text-xs md:text-sm">
            {currentIndex + 1} / {YOUTUBE_SHORTS.length}
          </p>
        </div>

        {/* Indicateurs de navigation */}
        <div className="absolute -bottom-8 md:-bottom-10 lg:-bottom-12 left-0 flex gap-1 md:gap-2">
          {YOUTUBE_SHORTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Aller au short ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 