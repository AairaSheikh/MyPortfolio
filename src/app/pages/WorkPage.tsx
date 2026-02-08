'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { Badge } from '../components/ui/badge';

interface WorkPageProps {
  onNavigate: (path: string) => void;
}

export function WorkPage({ onNavigate }: WorkPageProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  
  // Get all unique tags
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  // Filter projects
  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedTag));
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Work"
            subtitle="Projects showcasing full-stack development, AI integration, and product-minded design."
          />
        </motion.div>
        
        {/* Tag filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className="group"
            >
              <Badge
                variant={selectedTag === tag ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-transparent'
                    : 'border-white/20 hover:border-white/40 bg-transparent'
                }`}
              >
                {tag}
              </Badge>
            </button>
          ))}
        </motion.div>
        
        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onNavigate={(slug) => onNavigate(`/work/${slug}`)}
              index={index}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/60">No projects found with this tag.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
