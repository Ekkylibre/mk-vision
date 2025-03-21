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
    thumbnail: "https://img.youtube.com/vi/1U4eCZLyEHY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1U4eCZLyEHY&t=69s",
  },
  {
    id: 'interview-kenou',
    title: "Interview Kenou",
    thumbnail: "https://img.youtube.com/vi/vTl9nyrggYY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vTl9nyrggYY&t=1s",
  },
  {
    id: 'luci-la-grappleuse',
    title: "LUCIE La Grappleuse",
    thumbnail: "https://img.youtube.com/vi/-okndDMdOk0/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-okndDMdOk0",
  },  
  {
    id: 'aprilia-rsv4',
    title: "Aprilia RSV4 - Cinematic Video",
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