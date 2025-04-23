'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function Services() {
  const [lights, setLights] = useState<Array<{ x: number; y: number; size: number }>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const generateLights = () => {
      const newLights = Array.from({ length: 5 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 300 + 200,
      }));
      setLights(newLights);
    };

    generateLights();
    const interval = setInterval(generateLights, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Effet de lumière animé */}
      <div className="absolute inset-0">
        {lights.map((light, index) => (
          <div
            key={index}
            className="absolute transition-all ease-in-out"
            style={{
              left: `${light.x}%`,
              top: `${light.y}%`,
              width: `${light.size}px`,
              height: `${light.size}px`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
              transform: 'translate(-50%, -50%)',
              transition: 'all 8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-auto sm:h-screen flex flex-col sm:justify-center py-12 sm:py-0">
        {/* Paragraphe d'introduction */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16 relative z-10">
          <p className="text-lg text-white mb-4 sm:mb-6">
            Chez MakeyVision, nous accompagnons les startups, entrepreneurs et marques ambitieuses dans la création de vidéos puissantes, sincères et hautement esthétiques.
          </p>
          <p className="text-lg text-white mb-4 sm:mb-8">
            Spécialisés dans la production vidéo branding, le storytelling visuel et les formats cinématographiques, nous transformons votre vision en émotion.
          </p>
          <p className="text-lg text-white">
            🎯 Notre mission : faire rayonner votre identité grâce à une vidéo unique, impactante et alignée avec vos objectifs.
          </p>
        </div>

        {/* Bloc Services */}
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold text-center mb-8 sm:mb-12 text-white">Ce que nous proposons</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Production vidéo pour startups */}
            <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-700 ease-in-out hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary/90 transition-colors duration-700">🎥 Production vidéo de A à Z</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-700">
              Nous construisons ensemble votre projet dès la phase de réflexion. Une fois validé, vous n'avez plus qu'à vous laisser guider, on s'occupe de tout !
              </p>
            </div>

            {/* Film de marque & documentaire publicitaire */}
            <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-700 ease-in-out hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary/90 transition-colors duration-700">🎞️ Film de marque & documentaire publicitaire</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-700">
                Donnez de la profondeur à votre message à travers une réalisation soignée, portée par un storytelling émotionnel.
              </p>
            </div>

            {/* Contenu social media cinématographique */}
            <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-700 ease-in-out hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary/90 transition-colors duration-700">📱 Contenu social media</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-700">
                Des formats courts, puissants et calibrés pour captiver votre audience sur Instagram, LinkedIn ou YouTube.
              </p>
            </div>

            {/* Direction artistique & branding visuel */}
            <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-700 ease-in-out hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary/90 transition-colors duration-700">🧠 Direction artistique & branding visuel</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-700">
                Une identité visuelle cohérente et impactante pour votre marque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 