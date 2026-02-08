'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [direction, setDirection] = useState(0);
  
  // Parse initial path from URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1) || '/';
    setCurrentPath(hash);
  }, []);
  
  // Handle navigation
  const handleNavigate = (path: string) => {
    setDirection(1);
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Parse path for routing
  const getPageComponent = () => {
    if (currentPath === '/') {
      return <HomePage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/work') {
      return <WorkPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/work/')) {
      const slug = currentPath.replace('/work/', '');
      return <CaseStudyPage slug={slug} onNavigate={handleNavigate} />;
    }
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    // 404 - redirect to home
    return <HomePage onNavigate={handleNavigate} />;
  };
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  
  const pageVariants = prefersReducedMotion ? {} : {
    initial: {
      opacity: 0,
      scale: 0.98
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {getPageComponent()}
        </motion.div>
      </AnimatePresence>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
