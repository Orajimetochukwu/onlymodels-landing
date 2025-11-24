# OnlyModels Landing Page

A premium, high-end landing page for OnlyModels - an elite OnlyFans agency focused on transparency, security, and creator growth.

## Features

### Sections Built:
- ✅ **Hero Section** - Bold headline with animated gradient background
- ✅ **Featured In** - Infinite scrolling logo strip with hover effects
- ✅ **Top 0.1% Creators** - Stats showcase with staggered animations
- ✅ **Why OnlyModels** - 4-card feature grid with hover lift effects
- ✅ **Transparency** - Promise list with checkmarks
- ✅ **U.S. Chatters** - Interactive chat interface with typing animation
- ✅ **Anti-Leak Protection** - Multi-layer security features
- ✅ **Marketing** - Platform orbit visualization with services grid
- ✅ **Testimonials** - Carousel slider with smooth transitions
- ✅ **Consulting** - Strategy session details with progress visualization
- ✅ **Strategic Growth** - 4-step process with connecting arrows
- ✅ **In-House Chatters** - Elite team features with conversion stats
- ✅ **Boundary Control** - Detailed boundary framework
- ✅ **Creator Struggles** - Problem/solution cards
- ✅ **FAQ** - Accordion with smooth expand/collapse
- ✅ **Refer a Friend** - Referral link with copy functionality
- ✅ **Final CTA** - Strong call-to-action with trust badges
- ✅ **Footer** - Complete site navigation with social links

### Technologies Used:
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Professional animations
- **Lucide React** - Beautiful icons

### Design Features:
- 🎨 Premium purple/gold gradient color scheme
- ✨ Smooth scroll-triggered animations
- 📱 Fully responsive (mobile-first)
- 🌊 Parallax effects and subtle background animations
- 💫 Hover effects on all interactive elements
- 🎯 Optimized for conversion with clear CTAs

## Getting Started

### Development Server

The server is already running! Open your browser to:

```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
Only Models 2/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Hero.tsx
│   ├── FeaturedIn.tsx
│   ├── TopCreators.tsx
│   ├── WhyOnlyModels.tsx
│   ├── Transparency.tsx
│   ├── USChatters.tsx
│   ├── AntiLeak.tsx
│   ├── Marketing.tsx
│   ├── Testimonials.tsx
│   ├── Consulting.tsx
│   ├── StrategicGrowth.tsx
│   ├── InHouseChatters.tsx
│   ├── BoundaryControl.tsx
│   ├── CreatorStruggles.tsx
│   ├── FAQ.tsx
│   ├── ReferFriend.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── tailwind.config.ts      # Tailwind configuration
├── next.config.mjs         # Next.js configuration
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- `primary` - Main purple gradient
- `accent` - Gold/champagne accents
- `dark` - Background colors

### Fonts
Fonts are configured in `app/layout.tsx`:
- Headings: Montserrat
- Body: Inter

### Content
All copy can be edited directly in the component files in the `components/` folder.

### Animations
Animation timings and effects can be customized in:
- Individual component files (Framer Motion props)
- `tailwind.config.ts` (keyframes and animation utilities)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the production version:
```bash
npm run build
```

The output will be in the `.next` folder, ready to deploy to any Node.js hosting platform.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
- Optimized images and fonts
- Code splitting with Next.js
- Lazy loading of components
- Minimal JavaScript bundle size

## License
Private - All rights reserved

---

**Built with care for OnlyModels** 🚀
