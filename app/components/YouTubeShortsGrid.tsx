'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { YOUTUBE_SHORTS } from '@/app/constants';
import YouTubeShortsCarousel from './YouTubeShortsCarousel';
import Image from 'next/image';

interface ShortsModalState {
  isOpen: boolean;
  shortId: string | null;
}

export default function YouTubeShortsGrid() {
  const [shortsModal, setShortsModal] = useState<ShortsModalState>({
    isOpen: false,
    shortId: null,
  });

  const handleKeyDown = (e: React.KeyboardEvent, shortId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openShortsModal(shortId);
    }
  };

  const openShortsModal = (shortId: string) => {
    setShortsModal({ isOpen: true, shortId });
  };

  const closeShortsModal = () => {
    setShortsModal({ isOpen: false, shortId: null });
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
        {YOUTUBE_SHORTS.map((short) => (
          <div
            key={short.id}
            className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
            onClick={() => openShortsModal(short.shortId)}
            onKeyDown={(e) => handleKeyDown(e, short.shortId)}
            tabIndex={0}
            role="button"
            aria-label={`Regarder le short ${short.title}`}
          >
            <Image
              src={short.thumbnail}
              alt={`Aperçu du short ${short.title}`}
              width={300}
              height={533}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <div className="bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300">
                  <Play className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </div>
                <p className="text-xs md:text-sm text-white text-center px-1 md:px-2">
                  {short.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal des Shorts */}
      {shortsModal.isOpen && shortsModal.shortId && (
        <YouTubeShortsCarousel
          initialShortId={shortsModal.shortId}
          onClose={closeShortsModal}
        />
      )}
    </div>
  );
} 