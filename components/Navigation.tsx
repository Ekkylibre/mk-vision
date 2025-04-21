'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (item: { id: string; label: string }) => {
    if (pathname === '/') {
      // Si nous sommes sur la page d'accueil, utiliser le scroll pour les sections
      if (item.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (item.id === 'portfolio' || item.id === 'blog') {
        window.location.href = `/${item.id}`;
      } else {
        scrollToSection(item.id);
      }
    } else {
      // Si nous sommes sur une autre page, rediriger vers la page d'accueil avec la section
      if (item.id === 'home') {
        window.location.href = '/';
      } else if (item.id === 'portfolio' || item.id === 'blog') {
        window.location.href = `/${item.id}`;
      } else {
        window.location.href = `/#${item.id}`;
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-wider"
          >
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={48}
              height={48}
              quality={100}
              className="w-12 h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                  pathname === `/${item.id}` ? 'text-white' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white p-2 -mr-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6 transform transition-transform duration-300 rotate-0" />
            ) : (
              <Menu className="h-6 w-6 transform transition-transform duration-300 rotate-0" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transform transition-transform duration-300 flex flex-col items-center">
            {NAVIGATION_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`text-gray-300 hover:text-white block px-3 py-2 text-base w-full text-center transform transition-all duration-300 ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4 opacity-0'
                } ${
                  pathname === `/${item.id}` ? 'text-white' : ''
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}