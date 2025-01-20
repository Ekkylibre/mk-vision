'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
        
        <h1 className="text-4xl font-bold text-white mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Collecte des informations</h2>
            <p className="text-gray-300">
              Nous collectons uniquement les informations que vous nous fournissez volontairement via le formulaire de contact, à savoir :
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Votre nom</li>
              <li>Votre adresse e-mail</li>
              <li>Le contenu de votre message</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Utilisation des informations</h2>
            <p className="text-gray-300">
              Les informations que vous nous transmettez via le formulaire de contact sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Répondre à votre demande de contact</li>
              <li>Vous fournir les informations demandées</li>
              <li>Communiquer avec vous concernant nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Conservation des données</h2>
            <p className="text-gray-300">
              Les informations de contact sont conservées uniquement le temps nécessaire au traitement de votre demande. Elles sont ensuite supprimées de nos systèmes, sauf si vous nous donnez explicitement votre accord pour les conserver plus longtemps.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Protection des informations</h2>
            <p className="text-gray-300">
              Nous prenons la protection de vos données personnelles très au sérieux. Le formulaire de contact utilise une connexion sécurisée (HTTPS) pour la transmission de vos informations. Vos données sont stockées de manière sécurisée et ne sont accessibles qu'aux personnes autorisées.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Vos droits</h2>
            <p className="text-gray-300">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit d'opposition au traitement de vos données</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Pour exercer ces droits ou pour toute question concernant le traitement de vos données personnelles, vous pouvez nous contacter via le formulaire de contact du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Mise à jour</h2>
            <p className="text-gray-300">
              Cette politique de confidentialité peut être mise à jour occasionnellement. La dernière mise à jour a été effectuée le {new Date().toLocaleDateString('fr-FR')}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}