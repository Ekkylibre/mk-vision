import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales de Makey Siong - Vidéaste et réalisateur. Informations légales sur l\'éditeur, l\'hébergement et la propriété intellectuelle.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.makeyvision.com/legal-notice',
  },
};

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Retour à la page d'accueil"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Mentions Légales</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Éditeur du site</h2>
            <p className="text-gray-300">
              Le site makeysiong.com est édité par :
              <br />
              Dany Xiong
              <br />
              Développeur Web
              <br />
              Email : dany.xiong.dev@outlook.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Hébergement</h2>
            <p className="text-gray-300">
              Ce site est hébergé par Vercel Inc.
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789
              <br />
              États-Unis
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-300">
              L&apos;ensemble des éléments présents sur ce site (textes, images, vidéos, logo, etc.) sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction ou représentation, intégrale ou partielle, par quelque procédé que ce soit, faite sans le consentement préalable et écrit de Makey SIONG est illicite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Protection des données personnelles</h2>
            <p className="text-gray-300">
              Les informations recueillies via le formulaire de contact sont destinées à Makey SIONG pour la seule finalité de répondre à vos demandes. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, vous pouvez nous contacter via le formulaire de contact du site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Crédits</h2>
            <p className="text-gray-300">
              Photographies et vidéos : © Makey SIONG
              <br />
              Conception et développement : Dany XIONG
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Mise à jour</h2>
            <p className="text-gray-300">
              Les présentes mentions légales peuvent être modifiées à tout moment. Dernière mise à jour le {new Date().toLocaleDateString('fr-FR')}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}