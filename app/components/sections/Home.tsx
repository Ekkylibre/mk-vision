'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen" id="home" aria-label="Accueil">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
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
          className={`transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-center">
            MAKEY SIONG
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 text-center tracking-wider">
            FILMMAKER & CINEMATOGRAPHER
          </p>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="animate-bounce">
            <div className="w-1 h-12 rounded-full bg-white/30 relative">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-white rounded-full animate-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}