'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and tagline */}
          <div className="flex flex-col">
            <button
              onClick={() => handleLinkClick('/')}
              className="text-xl font-semibold text-white hover:text-purple-400 transition-colors"
            >
              {profile.name}
            </button>
            <span className="hidden md:block text-xs text-white/60 mt-0.5">
              {profile.navTagline}
            </span>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`relative text-sm transition-colors ${
                  currentPath === link.path ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                {currentPath === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleLinkClick(link.path)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPath === link.path
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
