'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isButtonLoaded, setIsButtonLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Délai pour l'animation du bouton
    const timer = setTimeout(() => {
      setIsButtonLoaded(true);
    }, 500); // 1 seconde de délai après le h1
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black" id="home" aria-label="Accueil">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-80"
          aria-label="Vidéo de présentation"
        >
          <source
            src="/filmmaker-showreel.mp4"
            type="video/mp4"
          />
          <track
            kind="captions"
            src="/captions/home-video.vtt"
            srcLang="fr"
            label="Français"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <div
          className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-center">
            MAKEY SIONG
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 text-center tracking-wider">
            VIDEASTE / REALISATEUR
          </p>
          <div className={`text-center transform transition-all duration-1000 delay-1000 ${isButtonLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg hover:border-primary/30 hover:bg-white/20"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative text-white group-hover:text-primary/90 transition-colors duration-500">
                ✨ Une vision à transmettre ?
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}