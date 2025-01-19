'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Mountain's Echo",
    category: "Short Film",
    thumbnail: "https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?auto=format&fit=crop&q=80",
    videoUrl: "https://example.com/video1",
  },
  {
    id: 2,
    title: "Urban Rhythms",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    videoUrl: "https://example.com/video2",
  },
  {
    id: 3,
    title: "Waves of Change",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1551373884-8a0750074df7?auto=format&fit=crop&q=80",
    videoUrl: "https://example.com/video3",
  },
  {
    id: 4,
    title: "Brand Vision",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?auto=format&fit=crop&q=80",
    videoUrl: "https://example.com/video4",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Short Film', 'Music Video', 'Documentary', 'Commercial'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Portfolio</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-video overflow-hidden rounded-lg bg-gray-900"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.category}</p>
                <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300">
                  <Play className="w-5 h-5" />
                  <span>Watch Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}