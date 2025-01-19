export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 'phong-thao',
    title: "JE SUIS JJB - Phong Thao",
    category: "Short Film",
    thumbnail: "https://img.youtube.com/vi/1U4eCZLyEHY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1U4eCZLyEHY&t=69s",
  },
  {
    id: 'interview-kenou',
    title: "Interview Kenou",
    category: "Music Video",
    thumbnail: "https://img.youtube.com/vi/vTl9nyrggYY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vTl9nyrggYY&t=1s",
  },
  {
    id: 'qui-je-suis-?',
    title: "Qui je suis ?",
    category: "Documentary",
    thumbnail: "https://img.youtube.com/vi/GbA9Eb1D6qU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=GbA9Eb1D6qU&t=196s",
  },
  {
    id: 'aprilia-rsv4',
    title: "Aprilia RSV4 - Cinematic Video",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/0e7AgX3griQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=0e7AgX3griQ",
  }
] as const;

export const SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com',
    icon: 'Instagram'
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://facebook.com',
    icon: 'Facebook'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin'
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    url: 'https://tiktok.com',
    icon: 'TikTok'
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://youtube.com',
    icon: 'Youtube'
  }
] as const;