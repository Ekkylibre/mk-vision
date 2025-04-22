'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { BLOG_POSTS } from '@/app/constants/blog-posts';
import { useEffect } from 'react';

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

interface BlogModalProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          className="relative w-full max-w-6xl bg-black rounded-lg overflow-hidden max-h-[90vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="overflow-y-auto flex-1">
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>

            <div className="px-8 py-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-gray-400">{post.date}</span>
                <span className="text-sm text-primary">{post.category}</span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">{post.title}</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed font-medium">
                  {post.excerpt}
                </p>
                <div className="text-gray-300 text-lg leading-relaxed mt-8 space-y-6">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 