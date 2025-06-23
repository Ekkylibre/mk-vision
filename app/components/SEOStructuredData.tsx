'use client';

import { PORTFOLIO_ITEMS, YOUTUBE_SHORTS } from '@/app/constants';

export default function SEOStructuredData() {
  const videoData = [
    ...PORTFOLIO_ITEMS.map((item, index) => ({
      "@type": "VideoObject",
      "name": item.title,
      "description": `Vidéo de ${item.title} par Makey Siong, vidéaste et réalisateur professionnel`,
      "thumbnailUrl": item.thumbnail,
      "uploadDate": new Date().toISOString(),
      "duration": "PT5M", // Durée estimée
      "contentUrl": item.videoUrl,
      "embedUrl": `https://www.youtube.com/embed/${item.videoUrl.match(/[?&]v=([^&]+)/)?.[1] || ''}`,
      "creator": {
        "@type": "Person",
        "name": "Makey Siong"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Makey Vision"
      }
    })),
    ...YOUTUBE_SHORTS.map((short, index) => ({
      "@type": "VideoObject",
      "name": short.title,
      "description": `YouTube Short de ${short.title} par Makey Siong`,
      "thumbnailUrl": short.thumbnail,
      "uploadDate": new Date().toISOString(),
      "duration": "PT1M", // Durée estimée pour les shorts
      "contentUrl": short.videoUrl,
      "embedUrl": `https://www.youtube.com/embed/${short.shortId}`,
      "creator": {
        "@type": "Person",
        "name": "Makey Siong"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Makey Vision"
      }
    }))
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Portfolio vidéo de Makey Siong",
          "description": "Collection de vidéos et réalisations de Makey Siong, vidéaste et réalisateur professionnel",
          "numberOfItems": videoData.length,
          "itemListElement": videoData.map((video, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": video
          }))
        })
      }}
    />
  );
} 