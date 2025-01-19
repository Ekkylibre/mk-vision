'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { contactFormSchema } from '@/app/lib/validations/contact';

type FormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof FormData, value: string) => {
    try {
      contactFormSchema.shape[name].parse(value);
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
      }
      return false;
    }
  };

  const isFormValid = () => {
    try {
      contactFormSchema.parse(formData);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name as keyof FormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      toast.error('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    if (isSubmitting) return;
    
    setIsSubmitting(true);

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
        // Réinitialiser le formulaire
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        
        toast.success('Message envoyé avec succès !', {
          description: 'Nous vous répondrons dans les plus brefs délais.',
          duration: 5000,
        });
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message', {
        description: error instanceof Error ? error.message : 'Veuillez réessayer plus tard.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Contact</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-gray-800'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                    errors.name ? 'focus:ring-red-500' : 'focus:ring-white/20'
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  maxLength={50}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-gray-800'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                    errors.email ? 'focus:ring-red-500' : 'focus:ring-white/20'
                  }`}
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={`w-full bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-gray-800'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                    errors.message ? 'focus:ring-red-500' : 'focus:ring-white/20'
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  maxLength={1000}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
                <p className="mt-1 text-sm text-gray-400">
                  {formData.message.length}/1000 caractères
                </p>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full bg-white text-black py-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 ${
                !isFormValid() || isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
              disabled={!isFormValid() || isSubmitting}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}