'use client';

import { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/app/constants';
import VideoCarousel from '@/app/components/VideoCarousel';
import Image from 'next/image';

interface VideoModalState {
  isOpen: boolean;
  projectId: string | null;
}

export default function Portfolio() {
  const [videoModal, setVideoModal] = useState<VideoModalState>({
    isOpen: false,
    projectId: null,
  });

  const handleKeyDown = (e: React.KeyboardEvent, projectId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openVideoModal(projectId);
    }
  };

  const openVideoModal = (projectId: string) => {
    setVideoModal({ isOpen: true, projectId });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, projectId: null });
  };

  return (
    <section id="portfolio" className="bg-black py-20" aria-label="Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-video overflow-hidden rounded-lg bg-gray-900"
            >
              <Image
                src={project.thumbnail}
                alt={`Aperçu du projet ${project.title}`}
                width={800}
                height={450}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <button
                  onClick={() => openVideoModal(project.id)}
                  onKeyDown={(e) => handleKeyDown(e, project.id)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
                  aria-label={`Regarder le projet ${project.title}`}
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {videoModal.isOpen && videoModal.projectId && (
          <VideoCarousel
            initialProjectId={videoModal.projectId}
            onClose={closeVideoModal}
          />
        )}
      </div>
    </section>
  );
}