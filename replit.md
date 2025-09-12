# Surya's Solar - React Vite Application

## Overview
This is a React + Vite frontend application for a solar energy company website. The project includes multiple pages (Home, About, Services, Portfolio, Contact, Blog) with modern UI components using Tailwind CSS and Radix UI.

## Project Architecture
- **Frontend Framework**: React 18 with TypeScript support
- **Build Tool**: Vite 4.x
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives
- **Routing**: React Router DOM for client-side navigation
- **Animations**: Framer Motion

## Recent Changes (September 12, 2025)
- ✅ Configured Vite for Replit environment with host 0.0.0.0 and port 5000
- ✅ Fixed CSS import order (Google Fonts import moved before Tailwind directives)
- ✅ Set up development workflow for frontend server
- ✅ Configured deployment settings for production (autoscale with npm start)
- ✅ Added serve package for production static file serving

## Development Configuration
- **Dev Server**: Runs on 0.0.0.0:5000 with HMR enabled
- **Workflow**: "Frontend Server" workflow configured for npm run dev
- **Proxy Support**: Configured for Replit's iframe proxy environment

## Deployment Configuration
- **Type**: Autoscale deployment
- **Build**: npm run build (creates dist/ folder)
- **Run**: npm start (serves static files via serve package on port 5000)

## Key Files
- `vite.config.js`: Vite configuration with Replit proxy settings
- `src/index.css`: Main stylesheet with proper import order
- `package.json`: Scripts and dependencies configured for Replit
- `tailwind.config.js`: Tailwind CSS configuration
- `src/App.jsx`: Main application component with routing

## User Preferences
- Clean, modern design with solar energy theme
- Responsive design for mobile and desktop
- Performance-optimized with proper caching headers