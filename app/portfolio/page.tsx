'use client';

import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/app/constants';
import VideoCarousel from '@/app/components/VideoCarousel';
import YouTubeShortsGrid from '@/app/components/YouTubeShortsGrid';
import SEOStructuredData from '@/app/components/SEOStructuredData';
import Image from 'next/image';
import Footer from '@/app/components/Footer';

interface VideoModalState {
  isOpen: boolean;
  projectId: string | null;
}

export default function PortfolioPage() {
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
    <>
      <SEOStructuredData />
      <main className="bg-black min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Portfolio</h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Découvrez mes réalisations vidéo, du film corporate au documentaire, en passant par les contenus pour les réseaux sociaux.
          </p>

          {/* Section YouTube Shorts */}
          <div className="mb-20">
            <YouTubeShortsGrid />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {PORTFOLIO_ITEMS.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-video overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
                onClick={() => openVideoModal(project.id)}
                onKeyDown={(e) => handleKeyDown(e, project.id)}
                tabIndex={0}
                role="button"
                aria-label={`Regarder le projet ${project.title}`}
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
                  <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                  <div className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300">
                    <Play className="w-5 h-5" />
                  </div>
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
      </main>
      <Footer />
    </>
  );
}