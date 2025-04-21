'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Vérification de sécurité supplémentaire côté client
      if (formData.message.includes('<script>') || formData.message.includes('javascript:')) {
        throw new Error('Contenu non autorisé détecté');
      }

      // Récupération des variables d'environnement
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Vérification de la présence des variables d'environnement
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuration EmailJS manquante');
      }

      // Envoi du message via EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Makey Siong',
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        toast.success('Message envoyé avec succès !', {
          description: 'Nous vous répondrons dans les plus brefs délais.',
          duration: 5000,
        });
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Erreur lors de l\'envoi du message', {
        description: error instanceof Error ? error.message : 'Veuillez réessayer plus tard.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Contact</h2>
          <p className="text-gray-300 text-center mb-12">
            Une idée de projet ? N&apos;hésitez pas à me contacter pour en discuter.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                    errors.name ? 'focus:ring-red-500' : 'focus:ring-primary/30'
                  } transition-all duration-300`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  maxLength={100}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                    errors.email ? 'focus:ring-red-500' : 'focus:ring-primary/30'
                  } transition-all duration-300`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  maxLength={100}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={`w-full bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                    errors.message ? 'focus:ring-red-500' : 'focus:ring-primary/30'
                  } transition-all duration-300 resize-none`}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  maxLength={1000}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all duration-500 ease-in-out ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary/90'
                  } rounded-lg text-white`}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </span>
                </button>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 mt-4"
                >
                  Message envoyé avec succès !
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-500 mt-4"
                >
                  Une erreur est survenue. Veuillez réessayer.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}