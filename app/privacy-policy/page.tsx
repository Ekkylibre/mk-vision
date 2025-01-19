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
              Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et/ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et/ou carte de crédit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Utilisation des informations</h2>
            <p className="text-gray-300">
              Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
              <li>Fournir un contenu publicitaire personnalisé</li>
              <li>Améliorer notre site Web</li>
              <li>Améliorer le service client et vos besoins de prise en charge</li>
              <li>Vous contacter par e-mail</li>
              <li>Administrer un concours, une promotion, ou une enquête</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Confidentialité du commerce en ligne</h2>
            <p className="text-gray-300">
              Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Divulgation à des tiers</h2>
            <p className="text-gray-300">
              Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Protection des informations</h2>
            <p className="text-gray-300">
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}