'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Get in Touch</h1>
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center space-x-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <Mail className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="text-white font-medium">Email</h3>
              <p className="text-gray-400">contact@jamesmiller.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <Phone className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="text-white font-medium">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <MapPin className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="text-white font-medium">Location</h3>
              <p className="text-gray-400">Los Angeles, CA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}