'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '../components/Button';
import { Badge } from '../components/ui/badge';

interface CaseStudyPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function CaseStudyPage({ slug, onNavigate }: CaseStudyPageProps) {
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Button onClick={() => onNavigate('/work')}>Back to Work</Button>
        </div>
      </div>
    );
  }
  
  const { caseStudy } = project;
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('/work')}
            className="mb-8 -ml-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Button>
        </motion.div>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-white/20">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-6">{project.title}</h1>
          
          <div className="flex gap-4 mb-8">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          </div>
          
          <p className="text-xl text-white/80 leading-relaxed">
            {project.summary}
          </p>
        </motion.div>
        
        {/* Content sections */}
        <div className="space-y-16">
          <Section title="Overview" delay={0.1}>
            <p className="text-white/70 leading-relaxed whitespace-pre-line">{caseStudy.overview}</p>
          </Section>
          
          <Section title="Problem" delay={0.15}>
            <p className="text-white/70 leading-relaxed whitespace-pre-line">{caseStudy.problem}</p>
          </Section>
          
          <Section title="Goal" delay={0.2}>
            <p className="text-white/70 leading-relaxed whitespace-pre-line">{caseStudy.goal}</p>
          </Section>
          
          <Section title="My Role" delay={0.25}>
            <p className="text-white/70 leading-relaxed whitespace-pre-line">{caseStudy.myRole}</p>
          </Section>
          
          <Section title="Solution" delay={0.3}>
            <p className="text-white/70 leading-relaxed whitespace-pre-line mb-8">{caseStudy.solution}</p>
            
            <h3 className="text-2xl mb-6 text-purple-400">Key Features</h3>
            <ul className="space-y-3">
              {caseStudy.keyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </Section>
          
          <Section title="Architecture" delay={0.35}>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(caseStudy.architecture).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <h4 className="text-sm font-medium text-purple-400 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p className="text-white/70 text-sm">{value}</p>
                </motion.div>
              ))}
            </div>
          </Section>
          
          <Section title="Technical Highlights" delay={0.4}>
            <ul className="space-y-3">
              {caseStudy.technicalHighlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </Section>
          
          <Section title="Outcome" delay={0.45}>
            <ul className="space-y-3">
              {caseStudy.outcome.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </Section>
          
          <Section title="What I'd Add Next" delay={0.5}>
            <ul className="space-y-3">
              {caseStudy.nextSteps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 text-white/60"
                >
                  <span className="text-purple-400/60 mt-1">•</span>
                  <span>{step}</span>
                </motion.li>
              ))}
            </ul>
          </Section>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md text-center"
        >
          <h2 className="text-3xl mb-4">Interested in working together?</h2>
          <p className="text-white/70 mb-8">
            Let's discuss how I can help with your next project.
          </p>
          <Button variant="primary" onClick={() => onNavigate('/contact')}>
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ 
  title, 
  children, 
  delay = 0 
}: { 
  title: string; 
  children: React.ReactNode; 
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      <h2 className="text-3xl mb-6">{title}</h2>
      {children}
    </motion.section>
  );
}
