'use client';

import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { PORTFOLIO_ITEMS, VERTICAL_VIDEOS } from '@/app/constants';
import VideoCarousel from '@/app/components/VideoCarousel';
import VerticalVideoCarousel from '@/components/VerticalVideoCarousel';
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
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <main className="bg-black min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Portfolio</h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Découvrez mes réalisations vidéo, du film corporate au documentaire, en passant par les contenus pour les réseaux sociaux.
          </p>

          {/* Carrousel Vertical - Masqué en mobile */}
          {!isMobile && (
            <div className="h-screen mb-20">
              <VerticalVideoCarousel videos={VERTICAL_VIDEOS} />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
                  <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
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
      </main>
      <Footer />
    </>
  );
}