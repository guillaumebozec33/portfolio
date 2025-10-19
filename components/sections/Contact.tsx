'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:guillaume.bozec@epitech.eu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-text mb-6">
            Travaillons
            <span className="block text-primary text-glow">ensemble</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Un projet en tête ? Discutons-en.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl glow">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-text mb-1">Email</h3>
                <p className="text-textSecondary">guillaume.bozec@epitech.eu</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-text mb-1">Localisation</h3>
                <p className="text-textSecondary">Bordeaux, France</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-medium text-text mb-4">Suivez-moi</h3>
              <div className="flex gap-4">
                <a href="https://github.com/guillaumebozec33" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-xl hover:bg-primary/10 transition-colors">
                  <Github className="text-primary" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/bozec-guillaume" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-xl hover:bg-primary/10 transition-colors">
                  <Linkedin className="text-primary" size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-6 py-4 bg-surface border border-primary/20 rounded-2xl focus:outline-none focus:border-primary text-text placeholder:text-textSecondary transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-6 py-4 bg-surface border border-primary/20 rounded-2xl focus:outline-none focus:border-primary text-text placeholder:text-textSecondary transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Sujet"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
              className="w-full px-6 py-4 bg-surface border border-primary/20 rounded-2xl focus:outline-none focus:border-primary text-text placeholder:text-textSecondary transition-all duration-300"
            />
            <textarea
              placeholder="Votre message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full px-6 py-4 bg-surface border border-primary/20 rounded-2xl focus:outline-none focus:border-primary text-text placeholder:text-textSecondary resize-none transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-background rounded-full font-medium hover:glow transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Envoyer le message
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>

        <div className="mt-24 pt-12 border-t border-primary/20 text-center">
          <p className="text-textSecondary">
            © 2025 Guillaume BOZEC. Développé avec passion à Bordeaux
          </p>
        </div>
      </div>
    </section>
  );
}