'use client';

import React from 'react';
import { motion } from 'motion/react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/ui/badge';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const featuredProject = projects.find(p => p.featured);
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title={profile.about.header.title}
            subtitle={profile.about.header.subtitle}
          />
        </motion.div>
        
        {/* Bio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-xl text-white/80 leading-relaxed">
            {profile.about.bio}
          </p>
        </motion.section>
        
        {/* Core Strengths */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl mb-8">Core Strengths</h2>
          <div className="space-y-6">
            {profile.about.coreStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-xl text-purple-400 mb-2">{strength.title}</h3>
                <p className="text-white/70">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Skills Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl mb-8">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(profile.skills).map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-lg mb-4 text-purple-400">{skillCategory.category}</h3>
                <ul className="space-y-2">
                  {skillCategory.items.map((item) => (
                    <li key={item} className="text-sm text-white/70 leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Resume Bullets - from featured project */}
        {featuredProject && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl mb-4">Key Achievements</h2>
            <p className="text-white/60 mb-8">
              From {featuredProject.title}
            </p>
            <div className="space-y-4">
              {featuredProject.caseStudy.resumeBullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <p className="text-white/70 leading-relaxed">{bullet}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
        
        {/* What I'm Looking For */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md"
        >
          <h2 className="text-2xl mb-4">What I'm Looking For</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            {profile.contact.availabilityNote}
          </p>
          <p className="text-white/60 leading-relaxed">
            I'm eager to join a team where I can contribute to meaningful products, 
            collaborate with experienced developers, and continue growing my skills 
            in full-stack development and AI integration.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
