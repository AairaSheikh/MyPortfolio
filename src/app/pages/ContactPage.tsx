'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Contact"
            subtitle="Let's discuss your next project or opportunity."
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white/80 mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-purple-500 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white/80 mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-purple-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white/80 mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-purple-500 text-white min-h-[150px]"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
              
              <p className="text-sm text-white/60 text-center">
                This will open your email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg">Email</h3>
              </div>
              <p className="text-white/70 mb-4">{profile.email}</p>
              <Button
                variant="secondary"
                onClick={handleCopyEmail}
                className="w-full"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-lg mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/90">LinkedIn</p>
                    <p className="text-sm text-white/60">Professional profile</p>
                  </div>
                </a>
                
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                    <Github className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/90">GitHub</p>
                    <p className="text-sm text-white/60">Code repositories</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Availability */}
            <div className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
              <h3 className="text-lg mb-2">Availability</h3>
              <p className="text-white/70 leading-relaxed">
                {profile.contact.availabilityNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
