'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [videoModal, setVideoModal] = useState<VideoModalState>({
    isOpen: false,
    projectId: null,
  });
  const [isMobile, setIsMobile] = useState(false);

  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const container = e.currentTarget.getBoundingClientRect();
      const position = ((e.clientX - container.left) / container.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    }
  };

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

  // Synchronisation des vidéos
  useEffect(() => {
    const beforeVideo = beforeVideoRef.current;
    const afterVideo = afterVideoRef.current;

    if (!beforeVideo || !afterVideo) return;

    const syncVideos = () => {
      if (Math.abs(beforeVideo.currentTime - afterVideo.currentTime) > 0.1) {
        afterVideo.currentTime = beforeVideo.currentTime;
      }
    };

    beforeVideo.addEventListener('play', syncVideos);
    beforeVideo.addEventListener('seeking', syncVideos);

    // Synchronisation toutes les secondes pour garantir
    const syncInterval = setInterval(syncVideos, 1000);

    return () => {
      beforeVideo.removeEventListener('play', syncVideos);
      beforeVideo.removeEventListener('seeking', syncVideos);
      clearInterval(syncInterval);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

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
            {/* Marge fixe de 16rem pour maintenir un espacement cohérent avec la page blog */}
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

          {/* Before/After Comparison */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Avant / Après</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center">
              Découvrez la transformation de mes projets, du tournage brut au montage final.
            </p>
            <div
              className="relative aspect-video rounded-lg overflow-hidden cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
            >
              {/* Version "Après" (Base layer) */}
              <div className="absolute inset-0">
                <video
                  ref={afterVideoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="auto"
                >
                  <source
                    src="/final-cut.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Version "Avant" (Overlay avec clip-path) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
              >
                <video
                  ref={beforeVideoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="auto"
                >
                  <source
                    src="/raw-version.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-1 h-4 bg-black rounded-full"></div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-sm text-white">
                Avant
              </div>
              <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded text-sm text-white">
                Après
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}