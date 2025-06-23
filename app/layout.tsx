import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootLayoutClient from './RootLayoutClient';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import GraduationMarks from '@/app/components/GraduationMarks';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.makeyvision.com/'),
  title: {
    default: 'Makey Siong | Vidéaste & Réalisateur Professionnel',
    template: '%s | Makey Siong'
  },
  description: 'Vidéaste et réalisateur professionnel spécialisé dans le film corporate, documentaire et communication de marques. Basé à Brétigny-sur-Orge, Essonne. Création de vidéos créatives et impactantes.',
  keywords: [
    'vidéaste',
    'réalisateur',
    'film corporate',
    'documentaire',
    'communication de marques',
    'vidéo marketing',
    'Brétigny-sur-Orge',
    'Essonne',
    'réalisation vidéo',
    'production audiovisuelle',
    'storytelling',
    'branding vidéo',
    'film institutionnel',
    'vidéo publicitaire',
    'motion design',
    'cinématographie',
  ],
  authors: [
    { name: 'Makey Siong', url: 'https://www.makeyvision.com' },
    { name: 'Dany Xiong', url: 'https://portfolio-dany-xiong-dev.vercel.app/' }
  ],
  creator: 'Dany Xiong',
  publisher: 'Makey Siong',
  alternates: {
    canonical: 'https://www.makeyvision.com',
    languages: {
      'fr-FR': 'https://www.makeyvision.com',
      'en-US': 'https://www.makeyvision.com/en'
    }
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Makey Siong | Vidéaste & Réalisateur Professionnel',
    description: 'Vidéaste et réalisateur professionnel spécialisé dans le film corporate, documentaire et communication de marques. Basé à Brétigny-sur-Orge, Essonne. Création de vidéos créatives et impactantes.',
    url: 'https://www.makeyvision.com',
    siteName: 'Makey Siong',
    images: [
      {
        url: '/makey-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Makey Siong - Réalisateur & Directeur de la Photographie',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makey Siong | Réalisateur & Filmmaker',
    description: 'Vidéaste et réalisateur professionnel spécialisé dans le film corporate, documentaire et communication de marques. Basé à Brétigny-sur-Orge, Essonne.',
    images: ['/makey-profile.jpg'],
    creator: '@makeysiong',
    site: '@makeysiong',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.makeyvision.com" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Makey Siong",
              "jobTitle": "Vidéaste & Réalisateur",
              "description": "Vidéaste et réalisateur professionnel spécialisé dans le film corporate, documentaire et communication de marques",
              "url": "https://www.makeyvision.com",
              "image": "https://www.makeyvision.com/makey-profile.jpg",
              "sameAs": [
                "https://www.youtube.com/@makeysiong",
                "https://www.instagram.com/makey_sg04",
                "https://www.tiktok.com/@makey_sg04"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brétigny-sur-Orge",
                "addressRegion": "Essonne",
                "addressCountry": "FR"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Makey Vision"
              },
              "knowsAbout": [
                "Film corporate",
                "Documentaire",
                "Communication de marques",
                "Réalisation vidéo",
                "Production audiovisuelle",
                "Storytelling",
                "Cinématographie"
              ]
            })
          }}
        />
        
        {/* Données structurées pour l'organisation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Makey Vision",
              "url": "https://www.makeyvision.com",
              "logo": "https://www.makeyvision.com/makey-profile.jpg",
              "description": "Studio de production audiovisuelle spécialisé dans le film corporate et la communication de marques",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brétigny-sur-Orge",
                "addressRegion": "Essonne",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "French"
              },
              "sameAs": [
                "https://www.youtube.com/@makeysiong",
                "https://www.instagram.com/makey_sg04"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <GraduationMarks />
        <RootLayoutClient>{children}</RootLayoutClient>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EKE1WFZT6R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EKE1WFZT6R', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}