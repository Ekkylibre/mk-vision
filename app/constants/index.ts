export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 'mountains-echo',
    title: "Mountain's Echo",
    category: "Short Film",
    thumbnail: "https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?auto=format&fit=crop&q=80",
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Behind the Scenes' },
      { id: 'ScMzIvxBSi4', title: 'Main Film' },
      { id: '6stlCkUDG_s', title: 'Director\'s Cut' }
    ]
  },
  {
    id: 'urban-rhythms',
    title: "Urban Rhythms",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Music Video' },
      { id: 'ScMzIvxBSi4', title: 'Making Of' }
    ]
  },
  {
    id: 'waves-change',
    title: "Waves of Change",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1551373884-8a0750074df7?auto=format&fit=crop&q=80",
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Part 1' },
      { id: 'ScMzIvxBSi4', title: 'Part 2' },
      { id: '6stlCkUDG_s', title: 'Extended Interviews' }
    ]
  },
  {
    id: 'brand-vision',
    title: "Brand Vision",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?auto=format&fit=crop&q=80",
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'TV Spot' },
      { id: 'ScMzIvxBSi4', title: 'Extended Cut' }
    ]
  }
] as const;

export const SERVICES = [
  {
    id: 'film-production',
    title: "Film Production",
    description: "From concept to final cut, we bring your story to life with professional film production services.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80"
  },
  {
    id: 'commercial-videos',
    title: "Commercial Videos",
    description: "Elevate your brand with compelling commercial content that resonates with your audience.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80"
  },
  {
    id: 'music-videos',
    title: "Music Videos",
    description: "Creative music video production that captures the essence of your musical vision.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
  },
  {
    id: 'documentary',
    title: "Documentary",
    description: "Authentic storytelling that brings real stories to life through documentary filmmaking.",
    image: "https://images.unsplash.com/photo-1517799094725-e3453440724e?auto=format&fit=crop&q=80"
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