# Aaira Sheikh - Portfolio Website

A modern, animated portfolio website showcasing full-stack development work with AI integration. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark-first theme with glassmorphism effects and subtle gradient backgrounds
- **Smooth Animations**: Carefully crafted animations using Framer Motion with respect for reduced motion preferences
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessible**: Built with accessibility in mind, including keyboard navigation and screen reader support
- **SEO Ready**: Optimized for search engines with proper metadata
- **Type-Safe**: Built with TypeScript for better developer experience and fewer bugs

## 📦 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (motion package)
- **Build Tool**: Vite
- **UI Components**: Radix UI primitives

## 🛠️ Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/              # Base UI components (buttons, cards, etc.)
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ...
│   │   ├── pages/               # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── WorkPage.tsx
│   │   │   ├── CaseStudyPage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   └── ContactPage.tsx
│   │   └── App.tsx              # Main app component with routing
│   ├── data/                    # Content data (single source of truth)
│   │   ├── profile.ts           # Personal information and content
│   │   └── projects.ts          # Project data and case studies
│   └── styles/                  # Global styles
│       ├── theme.css
│       ├── tailwind.css
│       └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Key Features

### Animations
- Hero entrance with staggered fade-up effects
- Scroll-triggered reveals for sections
- Project cards with tilt and spotlight effects on hover
- Smooth page transitions
- Animated gradient background mesh
- Respects `prefers-reduced-motion` for accessibility

### Components
- **Navbar**: Sticky navigation with smooth scroll and mobile menu
- **ProjectCard**: Interactive cards with glassmorphism and hover effects
- **AnimatedBackground**: Subtle animated gradient mesh
- **Footer**: Site-wide footer with links and contact info

### Pages
- **Home** (`/`): Hero, highlights, featured project, skills, and contact CTA
- **Work** (`/work`): Project grid with tag filtering
- **Case Study** (`/work/[slug]`): Detailed project case studies
- **About** (`/about`): Bio, strengths, skills, and what I'm looking for
- **Contact** (`/contact`): Contact form with mailto fallback and social links

## 🎯 Content Management

All content is managed through data files in `/src/data`:

- **profile.ts**: Personal information, bio, skills, and contact details
- **projects.ts**: Project information and detailed case study content

To update content, simply edit these files. The entire site will automatically reflect the changes.

## 🌐 Navigation

The portfolio uses hash-based routing for simplicity:
- Home: `#/`
- Work: `#/work`
- Case Study: `#/work/physical-ai-humanoid-robotics`
- About: `#/about`
- Contact: `#/contact`

## ♿ Accessibility

- Semantic HTML throughout
- Keyboard navigation support
- ARIA labels where appropriate
- Respects `prefers-reduced-motion`
- High contrast ratios for text
- Focus indicators for interactive elements

## 📱 Responsive Design

The site is fully responsive with breakpoints optimized for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🎨 Design System

### Colors
- **Primary Accent**: Purple to Blue gradient (`purple-600` to `blue-600`)
- **Background**: Black with subtle purple undertones
- **Text**: White with varying opacity for hierarchy
- **Borders**: White with low opacity for glassmorphism

### Typography
- Large, clear headings for hierarchy
- Responsive font sizes
- Comfortable line heights for readability

### Spacing
- Consistent spacing system using Tailwind's spacing scale
- Generous padding and margins for breathing room

## 📄 License

© 2026 Aaira Sheikh. All rights reserved.

## 📧 Contact

- **Email**: aairasheikh66@gmail.com
- **LinkedIn**: [linkedin.com/in/aaira-sheikh](https://www.linkedin.com/in/aaira-sheikh/)
- **GitHub**: [github.com/AairaSheikh](https://github.com/AairaSheikh)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
