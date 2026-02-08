'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { Button } from '../components/Button';
import { Badge } from '../components/ui/badge';
import { ProjectCard } from '../components/ProjectCard';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProject = projects.find(p => p.featured);
  
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  const containerVariants = prefersReducedMotion ? {} : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = prefersReducedMotion ? {} : {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge className="bg-white/10 border-white/20 backdrop-blur-sm text-white/90">
                Full-Stack Developer
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            >
              {profile.name}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/80 mb-4"
            >
              {profile.title}
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/70 mb-10 leading-relaxed max-w-3xl"
            >
              {profile.hero.bio}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button 
                variant="primary"
                onClick={() => scrollToSection('featured-work')}
              >
                {profile.hero.primaryCTA}
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
              <Button 
                variant="secondary"
                onClick={() => onNavigate('/contact')}
              >
                {profile.hero.secondaryCTA}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Quick Highlights */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {profile.quickHighlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
              >
                <Check className="w-5 h-5 text-purple-400 mb-3" />
                <p className="text-sm font-medium">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section id="featured-work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">Featured Work</h2>
            <p className="text-white/70 mb-12 max-w-2xl">
              Recent project showcasing full-stack development with AI integration
            </p>
          </motion.div>
          
          {featuredProject && (
            <ProjectCard
              project={featuredProject}
              onNavigate={(slug) => onNavigate(`/work/${slug}`)}
              index={0}
            />
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Button variant="ghost" onClick={() => onNavigate('/work')}>
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Snapshot */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">Skills</h2>
            <p className="text-white/70 mb-12 max-w-2xl">
              Core technologies and tools I work with
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(profile.skills).map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-xl mb-4 text-purple-400">{skillCategory.category}</h3>
                <ul className="space-y-3">
                  {skillCategory.items.map((item) => (
                    <li key={item} className="text-white/70 leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Strip */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Let's Work Together</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              {profile.contact.availabilityNote}
            </p>
            <Button variant="primary" onClick={() => onNavigate('/contact')}>
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
