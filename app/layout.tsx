import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootLayoutClient from './RootLayoutClient';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.makeyvision.com/'),
  title: 'Makey Siong | Réalisateur & Cinematographer',
  description: 'Réalisateur créatif spécialisé dans la production de films, documentaires et contenus audiovisuels innovants. De la conception à la réalisation, donnez vie à votre vision avec une narration visuelle unique et impactante.',
  keywords: [
    'réalisateur',
    'filmmaker',
    'vidéaste',
    'videographer',
    'directeur photo',
    'cinematographer',
    'production vidéo',
    'réalisation film',
    'film maker',
    'video maker',
    'paris',
    'france'
  ],
  authors: [
    { name: 'Makey Siong', url: 'https://www.makeyvision.com' },
    { name: 'Dany Xiong', url: 'https://portfolio-project-glougsyiv-danys-projects-420b837d.vercel.app/' }
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
    title: 'Makey Siong | Réalisateur & Directeur de la Photographie',
    description: 'Réalisateur créatif spécialisé dans la production de films, documentaires et contenus audiovisuels innovants. De la conception à la réalisation, donnez vie à votre vision avec une narration visuelle unique et impactante.',
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
    description: 'Réalisateur créatif spécialisé dans la production de films, documentaires et contenus audiovisuels innovants. De la conception à la réalisation, donnez vie à votre vision avec une narration visuelle unique et impactante.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.makeyvision.com" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
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