'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-primary text-sm uppercase tracking-widest">Développeur</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-light text-text mb-8 tracking-tight leading-none">
            Guillaume
            <span className="block text-primary text-glow font-medium">BOZEC</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Je transforme vos idées en solutions concrètes et fonctionnelles.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-6 justify-center mb-16"
          >
            <a href="#projects" className="px-8 py-4 bg-primary text-background rounded-full hover:glow transition-all duration-300 font-medium">
              Voir mes projets
            </a>
            <a href="#contact" className="px-8 py-4 border border-primary/30 text-primary rounded-full hover:bg-primary/10 transition-all duration-300">
              Contact
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a href="https://github.com/guillaumebozec33" target="_blank" rel="noopener noreferrer" className="p-3 text-textSecondary hover:text-primary transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bozec-guillaume" target="_blank" rel="noopener noreferrer" className="p-3 text-textSecondary hover:text-primary transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:guillaume.bozec@epitech.eu" className="p-3 text-textSecondary hover:text-primary transition-colors duration-300">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-float"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown size={32} />
      </motion.a>
    </section>
  );
}