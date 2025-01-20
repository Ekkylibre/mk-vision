'use client';

import { Instagram, Facebook, Linkedin, Youtube, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="TikTok"
            >
              <Music2 className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Politique de confidentialité
            </a>
            <a
              href="/legal-notice"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Mentions légales
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dany XIONG. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}