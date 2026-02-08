import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-white/70 max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
}
