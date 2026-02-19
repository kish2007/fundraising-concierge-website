# Fundraising Concierge Agent - Documentation Website

A professional documentation website showcasing the Fundraising Concierge Agent, an autonomous AI-powered system for institutional investor relations.

![Hero Screenshot](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## 🎯 Overview

This website provides comprehensive documentation for the Fundraising Concierge Agent, a Python-based system that automates institutional investor relations workflows including:

- Pipeline discovery via Apollo.io
- Contextual intelligence using Tavily Search
- AI-powered email generation with Claude Sonnet 4.5
- Human approval gates for compliance
- Sentiment analysis of email replies
- Compute credit tracking and reporting

## ✨ Features

- **Modern Design**: Navy and gold color scheme with IBM Plex Sans typography
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Showcase**: Tabbed module exploration with detailed specifications
- **Comprehensive Docs**: Complete installation, configuration, and usage guides
- **Custom Visuals**: AI-generated images tailored to the project theme
- **Smooth Navigation**: Sticky header with smooth scrolling to sections

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher
- pnpm 10.x or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd fundraising-concierge-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
fundraising-concierge-website/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components (shadcn/ui)
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx     # Landing page
│   │   │   └── Documentation.tsx  # Docs page
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles and theme
│   └── index.html           # HTML template
├── server/                  # Static server (production)
├── ideas.md                 # Design philosophy documentation
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Design System

### Color Palette

The website uses a sophisticated navy and gold theme:

- **Primary (Navy)**: `oklch(0.25 0.05 250)` - Deep, authoritative blue
- **Accent (Gold)**: `oklch(0.75 0.15 85)` - Premium gold highlights
- **Background**: `oklch(0.99 0 0)` - Clean off-white
- **Cards**: Pure white with soft shadows

### Typography

- **Headings**: IBM Plex Sans (600 weight) - Geometric and modern
- **Body**: Inter (300-600 weights) - Optimized for screen reading
- **Code**: System monospace for technical content

### Components

Built with [shadcn/ui](https://ui.shadcn.com/) components:
- Cards, Buttons, Badges
- Tabs for interactive content
- Responsive navigation

## 🛠️ Technology Stack

- **Framework**: React 19 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS 4.1
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Build Tool**: Vite 7
- **Package Manager**: pnpm

## 📝 Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Build
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm check            # TypeScript type checking
pnpm format           # Format code with Prettier
```

## 🌐 Deployment

### Deploy to Manus (Recommended)

This project is optimized for Manus hosting:

1. Create a checkpoint in the Manus UI
2. Click "Publish" in the Management UI
3. Configure custom domain if desired

### Deploy to Other Platforms

The built site is a static SPA that can be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/public` folder
- **GitHub Pages**: Push `dist/public` to gh-pages branch
- **Any static host**: Upload `dist/public` contents

## 📄 License

This project is part of the Fundraising Concierge Agent system.

## 🤝 Contributing

This is a documentation website for a specific project. For issues or suggestions related to the Fundraising Concierge Agent itself, please refer to the main project repository.

## 📧 Contact

For questions about implementation or custom deployments, please reach out through the contact form on the website.

---

**Built with** ❤️ **using React, TypeScript, and Tailwind CSS**
