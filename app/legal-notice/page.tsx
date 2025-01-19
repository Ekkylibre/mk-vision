'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function LegalNotice() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Retour à la page précédente"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </button>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Mentions Légales</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Informations légales</h2>
            <p className="text-gray-300">
              Le site web jamesmiller.com est édité par James Miller, entrepreneur individuel.
              <br />
              Siège social : [Adresse]
              <br />
              Email : contact@jamesmiller.com
              <br />
              Téléphone : +1 (555) 123-4567
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Hébergement</h2>
            <p className="text-gray-300">
              Ce site est hébergé par [Nom de l'hébergeur]
              <br />
              Adresse : [Adresse de l'hébergeur]
              <br />
              Téléphone : [Numéro de téléphone]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-300">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Responsabilité</h2>
            <p className="text-gray-300">
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une erreur ou ce qui peut être un dysfonctionnement, merci de bien vouloir le signaler par email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}