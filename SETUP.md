# Movitalis Landing Page - Setup Guide

## Quick Start

This is a Next.js 14 landing page for movitalis.app.

### 1. Install Dependencies

```bash
npm install
npm install clsx tailwind-merge lucide-react
```

### 2. Implementation Plan

The full implementation plan is at: `/Users/david/.claude/plans/immutable-mixing-moler.md`

### 3. Next Steps (In Order)

1. **Configure Tailwind** - Add brand colors (#FF6B35, #FF8C42) to `tailwind.config.ts`
2. **Create `next.config.ts`** - Set up static export for Firebase Hosting
3. **Create `lib/constants.ts`** - All app content, links, and features
4. **Create `lib/utils.ts`** - Utility function for Tailwind classes
5. **Build UI components** - Button, Card, AppStoreButton
6. **Build layout components** - Header, Footer, Container
7. **Build section components** - Hero, Features, CallToAction, Disclaimer
8. **Create pages** - Home, Privacy, Terms
9. **Download assets** - Logo, App Store badge
10. **Configure Firebase Hosting** - `firebase.json`, `.firebaserc`

### Key Info

- **Domain**: movitalis.app
- **App Store URL**: https://apps.apple.com/ro/app/movitalis/id6470913447
- **Logo URL**: https://firebasestorage.googleapis.com/v0/b/movitalis.firebasestorage.app/o/SoraWhite.png?alt=media&token=7fa995e5-922b-4620-b259-e60352109dc7
- **Brand Colors**:
  - Primary: #FF6B35
  - Secondary: #FF8C42
- **Social**:
  - Instagram: https://www.instagram.com/movitalis
  - TikTok: https://www.tiktok.com/@movitalis
- **Support**: support@movitalis.app

### Content from Existing Page

From https://automata.ltd/article/movitalis-info.html:
- **Headline**: "Your new favourite workout tracker"
- **Tagline**: "The first activity tracker that focuses on longevity - not performance"
- **Social Proof**: Product Hunt #1 Health & Fitness
- **Key Features**: VO₂ max tracking, strength/mobility, Apple Watch integration, automatic workout analysis

### Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Firebase Hosting
- Static export (no server needed)

### Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Deploy to Firebase
npm run deploy  # (after adding this script)
```
