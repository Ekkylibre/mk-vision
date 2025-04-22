'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { BLOG_POSTS } from '@/app/constants/blog-posts';
import BlogModal from '@/app/components/BlogModal';
import BlogCard from '@/app/components/BlogCard';
import Footer from '@/app/components/Footer';

// Définir un type générique pour les articles de blog
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content: string;
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  // Utiliser une conversion de type plus sûre
  const [posts] = useState<BlogPost[]>(BLOG_POSTS as unknown as BlogPost[]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Blog</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto text-center">
            Découvrez nos derniers articles sur la production vidéo, le marketing et les tendances du secteur.
          </p>

          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-3 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => handlePostClick(post)}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center text-gray-400 mt-8">
              Aucun article ne correspond à votre recherche.
            </div>
          )}

          {/* Modal */}
          {selectedPost && (
            <BlogModal
              post={selectedPost}
              isOpen={!!selectedPost}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
} 