'use client';

import Image from 'next/image';
import { BLOG_POSTS } from '@/app/constants/blog-posts';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content: string;
};

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article
      className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          className="object-cover"
          fill
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-400">{post.date}</span>
          <span className="text-sm text-primary">{post.category}</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 line-clamp-1">{post.title}</h2>
        <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
        <button className="text-primary hover:text-primary/80 transition-colors duration-300">
          Lire la suite →
        </button>
      </div>
    </article>
  );
} 