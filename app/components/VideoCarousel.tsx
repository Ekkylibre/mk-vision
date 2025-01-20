'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/app/constants';

interface VideoCarouselProps {
  initialProjectId: string;
  onClose: () => void;
}

export default function VideoCarousel({ initialProjectId, onClose }: VideoCarouselProps) {
  const [currentProjectId, setCurrentProjectId] = useState(initialProjectId);
  const modalRef = useRef<HTMLDivElement>(null);

  const currentProjectIndex = PORTFOLIO_ITEMS.findIndex(p => p.id === currentProjectId);
  const currentProject = PORTFOLIO_ITEMS[currentProjectIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
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

  const nextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % PORTFOLIO_ITEMS.length;
    setCurrentProjectId(PORTFOLIO_ITEMS[nextIndex].id);
  };

  const previousProject = () => {
    const previousIndex = (currentProjectIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setCurrentProjectId(PORTFOLIO_ITEMS[previousIndex].id);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div ref={modalRef} className="relative w-full max-w-6xl mx-4">
        {/* Header avec titre et bouton fermer */}
        <div className="absolute -top-12 left-0 right-0 flex justify-between items-center">
          {/* Conteneur du titre avec overflow */}
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-2xl font-bold text-white truncate">
              {currentProject.title}
            </h3>
          </div>
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="flex-shrink-0 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          {currentProject.videos && currentProject.videos[0] && (
            <iframe
              src={`https://www.youtube.com/embed/${currentProject.videos[0].id}?autoplay=1`}
              title={currentProject.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Navigation */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
          <button
            onClick={previousProject}
            className="pointer-events-auto p-2 text-white hover:text-gray-300 transition-colors transform -translate-x-12"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextProject}
            className="pointer-events-auto p-2 text-white hover:text-gray-300 transition-colors transform translate-x-12"
            aria-label="Next project"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Project Info and Counter */}
        <div className="absolute -bottom-12 left-0 right-0 text-white flex justify-between items-center">
          <div className="flex-1 min-w-0">
            <p className="text-lg font-medium truncate">
              {currentProject.category}
            </p>
          </div>
          <p className="flex-shrink-0 text-sm ml-4">
            {currentProjectIndex + 1} / {PORTFOLIO_ITEMS.length}
          </p>
        </div>
      </div>
    </div>
  );
}