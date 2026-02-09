import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
            <p className="text-white/60 text-sm">{profile.title}</p>
            <p className="text-white/40 text-sm mt-2">{profile.location}</p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">Navigation</h4>
            <div className="space-y-2">
              {['/', '/work', '/about', '/contact'].map((path, idx) => (
                <button
                  key={path}
                  onClick={() => onNavigate(path)}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {['Home', 'Work', 'About', 'Contact'][idx]}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">Connect</h4>
            <div className="flex gap-4">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/60 mt-4">{profile.email}</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} {profile.name}.</p>
        </div>
      </div>
    </footer>
  );
}
