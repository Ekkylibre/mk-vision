'use client';

import { Instagram, Facebook, Linkedin, Youtube, Music2, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
            href="mailto:makey-sg@makeyvision.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            target='_blank'>
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/mksg0411/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/people/Makey-Siong/pfbid01EiFLkLiQHMv2MRTaB1dVjR6JmDogYCfF5YjWBF5UAejRM53xn1hK5tys4kacw9ol/?locale=fr_FR://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/makey-siong-071924287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@makey_sg04?referer_url=localhost%3A3000%2F&refer=embed&embed_source=121374463%2C121468991%2C121439635%2C121433650%2C121404358%2C121351166%2C121331973%2C120811592%2C120810756%3Bnull%3Bembed_masking&referer_video_id=7384837467305790753"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="TikTok"
            >
              <Music2 className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@makeysiong"
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