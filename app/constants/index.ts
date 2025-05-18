export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' }
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

export const VERTICAL_VIDEOS = [
  {
    id: 'nesquick-reel',
    title: 'Nesquick REEL',
    src: '/Nesquick REEL .mp4'
  },
  {
    id: 'ducati',
    title: 'Ducati',
    src: '/Ducati 1ère.mp4'
  },
  {
    id: 'reel-fecamp',
    title: 'REEL Fécamp',
    src: '/REEL fécamp 1.mp4'
  },
  {
    id: 'drone-robot',
    title: 'Drone Robot',
    src: '/Drone robot.mp4'
  },
  {
    id: '360',
    title: '360°',
    src: '/360.mp4'
  },
  {
    id: 'filmmaker-showreel',
    title: 'Filmmaker Showreel',
    src: '/filmmaker-showreel.mp4'
  },
  {
    id: 'kenou-teaser-1',
    title: 'KENOU Teaser 1',
    src: '/KENOU Teaser 1 format portrait.mp4'
  },
  {
    id: 'kenou-teaser-2',
    title: 'KENOU Teaser 2',
    src: '/KENOU Teaser 2 format portrait.mp4'
  },
] as const;