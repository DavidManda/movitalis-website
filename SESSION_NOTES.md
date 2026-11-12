# Movitalis Website - Session Notes

**Last Updated:** December 4, 2025

## Current Deployment Status

✅ **Live Site:** https://movitalis.web.app
⚠️ **Custom Domain:** https://movitalis.app (needs DNS verification - see below)

---

## Recent Accomplishments

### 1. Font Upgrade (Completed)
- **Replaced:** Geist Sans/Mono → Inter + Instrument Sans
- **Implementation:**
  - Inter: Body text and UI elements
  - Instrument Sans: Headlines and brand name (h1-h6)
- **Files Modified:**
  - `/app/layout.tsx` - Font imports
  - `/app/globals.css` - CSS variables and heading styles
  - `/public/og-template.html` - OG image fonts

### 2. OG Image (Completed)
- **Created:** Custom 1200x630px social sharing image
- **Location:** `/public/og-image.png`
- **Features:**
  - New Inter + Instrument Sans fonts
  - Movitalis logo and brand name
  - Headline: "Train for a longer life, not just faster times"
  - VO₂ max badge with heart icon
  - iPhone screenshot
- **Metadata:** Added to OpenGraph and Twitter cards in `/app/layout.tsx`

### 3. SEO Implementation (Completed)
- **Sitemap:** `/app/sitemap.ts` with all pages (/, /faq, /privacy, /terms)
- **Robots.txt:** `/app/robots.ts` allowing search engines
- **Structured Data:**
  - Organization schema in `/app/layout.tsx`
  - SoftwareApplication schema in `/components/seo/software-application-schema.tsx`
  - FAQPage schema in `/app/faq/page.tsx`
- **Metadata:**
  - Page-specific titles and descriptions
  - Canonical URLs
  - Keywords targeting
  - Icons (favicon, Apple touch icon, Android Chrome icons)

### 4. Hero Section Enhancements (Completed)
- **iPhone Screenshot:** Increased size to 200% with overflow allowed
- **Position:** Moved right (48px) and up (32px)
- **Grid:** Adjusted to [1.5fr_1fr] to maintain 2-line headline
- **VO₂ Max Badge:** Added with Heart icon in hero section

### 5. Favicon (Completed)
- Replaced all favicon files with Movitalis logo
- Supports all platforms (iOS, Android, browsers)

### 6. Build Configuration (Fixed)
- **Fixed TypeScript Error:** Updated Button component to use `HTMLMotionProps<'button'>`
- **Fixed Static Export:** Added `export const dynamic = 'force-static'` to sitemap.ts and robots.ts
- **Build Status:** ✅ Successful (97 files exported to `/out`)

---

## Pending Tasks

### Custom Domain Setup (movitalis.app)
**Status:** Needs DNS verification in Firebase Console

**Steps Required:**
1. Go to Firebase Console → Hosting → Add custom domain
2. Enter `movitalis.app`
3. Firebase will provide DNS records (A records or CNAME)
4. Add these records to your domain registrar (e.g., Namecheap, Google Domains)
5. Wait for DNS propagation and SSL certificate provisioning (can take up to 24 hours)

**Check Current DNS:**
```bash
dig movitalis.app
# or
nslookup movitalis.app
```

---

## Project Structure

### Key Files
```
movitalis-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, Organization schema
│   ├── page.tsx            # Homepage with SoftwareApplication schema
│   ├── globals.css         # CSS variables, Tailwind theme, font families
│   ├── sitemap.ts          # XML sitemap generation
│   ├── robots.ts           # robots.txt generation
│   ├── faq/
│   │   ├── layout.tsx      # FAQ metadata
│   │   └── page.tsx        # FAQ with FAQPage schema
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── sections/hero.tsx   # Hero section with enhanced iPhone
│   ├── ui/button.tsx       # Fixed for Framer Motion types
│   └── seo/
│       └── software-application-schema.tsx
├── public/
│   ├── og-image.png        # 1200x630 social sharing image
│   ├── og-template.html    # Template used to generate OG image
│   ├── logo.png
│   ├── favicon.ico
│   └── (various favicon sizes)
├── firebase.json           # Firebase Hosting config
└── next.config.ts          # output: 'export'
```

### Fonts
- **Inter:** 400, 500, 600, 700 weights
- **Instrument Sans:** 400, 500, 600, 700 weights
- Loaded via `next/font/google` for optimization

### Color Scheme
- **Primary:** #FF6B35 (orange)
- **Secondary:** #FF8C42 (lighter orange)
- **Background:** White/Cream tones
- **Gradient:** Orange gradient for hero and OG image

---

## Deployment Commands

### Build
```bash
npm run build
# Outputs to /out directory
```

### Deploy to Firebase
```bash
firebase deploy --only hosting
```

### Check Firebase Projects
```bash
firebase projects:list
```

### Check Hosting Channels
```bash
firebase hosting:channel:list
```

---

## Technical Notes

### Static Export Configuration
- `next.config.ts`: `output: 'export'`
- All routes must export `const dynamic = 'force-static'` if using MetadataRoute

### Firebase Hosting
- **Public Directory:** `out` (Next.js build output)
- **Clean URLs:** Enabled
- **Trailing Slash:** Disabled
- **Cache Headers:** 1 year for images, JS, CSS

### TypeScript Fixes Applied
- Button component: Changed from `React.ButtonHTMLAttributes` to `HTMLMotionProps<'button'>`
- Sitemap/Robots: Added `export const dynamic = 'force-static'`

---

## Future Considerations

1. **Analytics:** Consider adding Google Analytics or Plausible
2. **Performance:** Monitor Core Web Vitals after deployment
3. **A/B Testing:** Test different hero headlines or CTAs
4. **Blog/Content:** Consider adding a blog section for SEO content
5. **Email Capture:** Add newsletter signup for user engagement

---

## Contact & Support
- **Firebase Console:** https://console.firebase.google.com/project/movitalis
- **Domain:** Configure at your registrar (add Firebase DNS records)
- **Email:** support@movitalis.app

---

## Quick Reference

### Check if Site is Live
```bash
curl -I https://movitalis.web.app
curl -I https://movitalis.app
```

### Rebuild and Redeploy
```bash
npm run build && firebase deploy --only hosting
```

### View Build Output
```bash
ls -la out/
```

---

**Session Complete!** 🎉

All major features implemented and deployed. Only DNS configuration remains for custom domain.
