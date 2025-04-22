import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/app/components/Footer';

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="animate-fade-in">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-white mb-6">Page non trouvée</h2>
            <p className="text-xl text-gray-300 mb-12">
              La page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            
            <div className="animate-fade-in-delayed">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour à l&apos;accueil</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 