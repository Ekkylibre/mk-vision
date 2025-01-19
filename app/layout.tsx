import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootLayoutClient from './RootLayoutClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.makeyvision.com/'),
  title: 'Makey Siong | Filmmaker & Cinematographer',
  description: 'Cinéaste et directeur de la photographie professionnel basé à Paris. Spécialisé dans la production de films, documentaires et contenus commerciaux.',
  keywords: ['filmmaker', 'cinematographer', 'réalisateur', 'directeur photo', 'production vidéo', 'film', 'documentaire'],
  authors: [{ name: 'Makey Siong' }],
  creator: 'Makey Siong',
  publisher: 'Makey Siong',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Makey Siong | Filmmaker & Cinematographer',
    description: 'Cinéaste et directeur de la photographie professionnel basé à Paris. Spécialisé dans la production de films, documentaires et contenus commerciaux.',
    url: 'https://makeysiong.com',
    siteName: 'Makey Siong',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67',
        width: 1200,
        height: 630,
        alt: 'Makey Siong - Filmmaker & Cinematographer',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makey Siong | Filmmaker & Cinematographer',
    description: 'Cinéaste et directeur de la photographie professionnel basé à Paris. Spécialisé dans la production de films, documentaires et contenus commerciaux.',
    images: ['https://images.unsplash.com/photo-1601506521793-dc748fc80b67'],
    creator: '@makeysiong',
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
        <link rel="canonical" href="https://makeysiong.com" />
      </head>
      <body className={inter.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}