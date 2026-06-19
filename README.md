# Sand Atelier — Contemporary Fashion Website

A modern, elegant website built for **Sand Atelier**, a contemporary fashion design studio. This site showcases collections with a refined, haute couture aesthetic.

## Overview

Sand Atelier is a fashion-forward website featuring:
- **Minimalist Design**: Clean, elegant typography and layout
- **Haute Couture Aesthetic**: Sage green accent colors with sophisticated dark typography
- **Responsive Layout**: Mobile-first, works seamlessly on all devices
- **Collections Showcase**: Grid-based portfolio for displaying fashion pieces
- **Social Integration**: Links to Instagram, Facebook, and TikTok

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Font Family**: 
  - Headers: Playfair Display (serif)
  - Body: Inter (sans-serif)
- **Deployment Ready**: Static export or Node.js server

## Project Structure

```
sand-atelier/
├── app/
│   ├── page.tsx                 # Homepage (hero + featured collections)
│   ├── about/page.tsx           # About page
│   ├── collections/
│   │   ├── page.tsx             # Collections listing
│   │   └── [id]/page.tsx        # Individual collection detail
│   ├── contact/page.tsx         # Contact form
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles & custom utilities
├── components/
│   ├── Navigation.tsx           # Header navigation
│   └── Footer.tsx               # Footer
├── public/                      # Static assets
├── package.json
└── next.config.ts
```

## Features

### Pages

1. **Home** (`/`)
   - Hero section with brand statement
   - Featured collections grid
   - Call-to-action for exploration
   - Social media links

2. **Collections** (`/collections`)
   - Browse all collections
   - Grid layout with previews
   - Click-through to details

3. **Collection Detail** (`/collections/[id]`)
   - Featured collection images (placeholder)
   - Collection description
   - Related pieces grid
   - Inquire/contact CTA
   - Social share buttons

4. **About** (`/about`)
   - Brand story
   - Core values (Innovation, Craftsmanship, Vision)
   - Social media links

5. **Contact** (`/contact`)
   - Contact form (name, email, message)
   - Social media connections
   - Quick links

### Design Elements

**Color Palette:**
- **Dark Text**: `#1a1a1a` (charcoal)
- **Accent Green (Sage)**: `#8ec9a5`
- **Accent Green (Light)**: `#a8d5ad`
- **Background**: White with light gray overlays

**Typography:**
- Playfair Display for headings (serif, luxurious)
- Inter for body text (sans-serif, modern)

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Adding Images

1. Place images in `public/` directory
2. Import and use in components:
   ```tsx
   import Image from 'next/image';
   
   <Image 
     src="/collection-1.jpg" 
     alt="Collection" 
     width={600} 
     height={800}
     className="aspect-portrait-img rounded-lg"
   />
   ```

### Updating Collections

Edit `/home/tamaso/sand-atelier-website/app/collections/page.tsx`:

```tsx
const collections = [
  {
    id: 'your-collection-id',
    name: 'Collection Name',
    description: 'Brief description',
    year: '2024',
    pieces: 12,
  },
  // ... add more
];
```

### Modifying Colors

Edit `app/globals.css`:

```css
:root {
  --color-accent: #a8d5ad;  /* Change accent green */
  --color-sage: #8ec9a5;    /* Change sage green */
  /* ... */
}
```

### Social Media Links

Update in:
- `app/page.tsx` (home page)
- `app/about/page.tsx` (about page)
- `components/Footer.tsx` (footer)
- `components/Navigation.tsx` (navigation, if needed)

Replace URLs with your social accounts:
```tsx
<a href="https://www.instagram.com/sandatelier23/" target="_blank">
  Instagram
</a>
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build Docker image
docker build -t sand-atelier .

# Run container
docker run -p 3000:3000 sand-atelier
```

### Self-Hosted (Linux/systemd)

1. Clone repository on server
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Create systemd service file at `/etc/systemd/system/sand-atelier.service`:

```ini
[Unit]
Description=Sand Atelier Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/sand-atelier
ExecStart=/usr/bin/node /var/www/sand-atelier/.next/standalone/server.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

5. Start service:
```bash
sudo systemctl start sand-atelier
sudo systemctl enable sand-atelier
```

## Email & Contact Form

Currently, the contact form is a placeholder. To enable actual email sending:

1. Choose a service (SendGrid, Mailgun, Resend, etc.)
2. Create an API endpoint at `app/api/contact/route.ts`:

```tsx
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  // Send email via your service
  return Response.json({ success: true });
}
```

3. Update contact form to submit to this endpoint

## Performance & SEO

- ✅ Static page generation (fast)
- ✅ Image optimization with Next.js Image component
- ✅ Meta tags for SEO
- ✅ Mobile-responsive design
- ✅ Minimal CSS with Tailwind

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Proprietary — Sand Atelier 2024

## Support & Further Customization

For design updates, additional pages, e-commerce integration, or other customizations, contact your development team.

---

**Website designed and built for elegance, performance, and conversion.**
