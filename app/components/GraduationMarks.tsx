'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function GraduationMarks() {
  const [marks, setMarks] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Calculer le nombre de marques en fonction de la hauteur de la fenêtre
    const calculateMarks = () => {
      const windowHeight = window.innerHeight;
      const markSpacing = 50; // Espacement entre les marques en pixels
      const numberOfMarks = Math.ceil(windowHeight / markSpacing) + 1; // +1 pour avoir un trait au début
      setMarks(Array.from({ length: numberOfMarks }, (_, i) => i));
    };

    // Gérer la visibilité et le progrès du scroll
    const handleScroll = () => {
      if (pathname === '/') {
        setIsVisible(window.scrollY > 100);
      } else {
        setIsVisible(true);
      }

      // Calculer le progrès du scroll (0 à 1)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercent);
    };

    calculateMarks();
    window.addEventListener('resize', calculateMarks);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier l'état initial

    return () => {
      window.removeEventListener('resize', calculateMarks);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  if (!isVisible) return null;

  const getOpacity = (index: number) => {
    const markPosition = (index / (marks.length - 1)) * 100;
    const distance = Math.abs(scrollProgress - markPosition);
    const maxDistance = 20; // Distance maximale pour l'effet d'éclaircissement en pourcentage
    const opacity = Math.max(0.15, 1 - (distance / maxDistance));
    return opacity;
  };

  const getScale = (index: number) => {
    const markPosition = (index / (marks.length - 1)) * 100;
    const distance = Math.abs(scrollProgress - markPosition);
    const maxDistance = 20;
    const scale = 1 + Math.max(0, 1 - (distance / maxDistance)); // Max 2x plus grand
    return scale;
  };

  return (
    <div className="fixed right-4 top-0 bottom-0 w-8 pointer-events-none z-50 hidden md:block">
      <div className="h-full flex flex-col justify-between py-8">
        {marks.map((index) => (
          <div key={index} className="relative">
            {/* Trait principal */}
            <div
              className="absolute right-0 transition-transform duration-200"
              style={{
                height: '2px',
                width: index % 5 === 0 ? '16px' : '8px',
                backgroundColor: `rgba(255, 255, 255, ${getOpacity(index) * 0.3})`,
                transform: `scaleX(${getScale(index)})`,
                transformOrigin: 'right',
              }}
            />
            {/* Traits fins intermédiaires */}
            {index % 5 !== 0 && (
              <>
                <div
                  className="absolute right-0 transition-transform duration-200"
                  style={{
                    height: '1px',
                    width: '4px',
                    backgroundColor: `rgba(255, 255, 255, ${getOpacity(index + 0.2) * 0.15})`,
                    top: '10px',
                    transform: `scaleX(${getScale(index + 0.2)})`,
                    transformOrigin: 'right',
                  }}
                />
                <div
                  className="absolute right-0 transition-transform duration-200"
                  style={{
                    height: '1px',
                    width: '4px',
                    backgroundColor: `rgba(255, 255, 255, ${getOpacity(index + 0.4) * 0.15})`,
                    top: '20px',
                    transform: `scaleX(${getScale(index + 0.4)})`,
                    transformOrigin: 'right',
                  }}
                />
                <div
                  className="absolute right-0 transition-transform duration-200"
                  style={{
                    height: '1px',
                    width: '4px',
                    backgroundColor: `rgba(255, 255, 255, ${getOpacity(index + 0.6) * 0.15})`,
                    top: '30px',
                    transform: `scaleX(${getScale(index + 0.6)})`,
                    transformOrigin: 'right',
                  }}
                />
                <div
                  className="absolute right-0 transition-transform duration-200"
                  style={{
                    height: '1px',
                    width: '4px',
                    backgroundColor: `rgba(255, 255, 255, ${getOpacity(index + 0.8) * 0.15})`,
                    top: '40px',
                    transform: `scaleX(${getScale(index + 0.8)})`,
                    transformOrigin: 'right',
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 