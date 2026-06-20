import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 section-max-width text-center">
          <div className="mb-8 inline-block">
            <span className="text-sm tracking-widest uppercase text-gray-600">Bespoke Luxury Fashion Manufacturer</span>
          </div>

          <h1 className="text-display mb-6 text-gray-900">
            Sand<br />
            <span className="text-sage">Atelier</span>
          </h1>

          <p className="text-subheading text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Vertically integrated design and manufacturing. Bespoke quality. Made to order. Every piece crafted with uncompromising attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections" className="btn-primary inline-block">
              View Our Standards
            </Link>
            <Link href="/about" className="btn-secondary inline-block">
              Our Craft
            </Link>
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="section-padding bg-white">
        <div className="section-max-width">
          <div className="mb-16 text-center">
            <span className="text-sm tracking-widest uppercase text-gray-600">Quality Standards</span>
            <h2 className="text-headline text-gray-900 mt-3 mb-4">What We Stand For</h2>
            <div className="w-12 h-1 bg-sage mx-auto"></div>
          </div>

          <div className="grid-auto-fit">
            {/* Standard 1 */}
            <div className="group hover-lift">
              <div className="relative bg-gray-100 aspect-portrait-img mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">🧵</div>
                    Premium Materials
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethically Sourced Fabrics</h3>
              <p className="text-gray-600 text-sm mb-4">Only the finest natural fibers and sustainable materials. Every bolt vetted for durability and beauty.</p>
              <Link href="/collections/materials" className="text-sage hover:text-accent transition-smooth text-sm font-medium">
                Explore Materials →
              </Link>
            </div>

            {/* Standard 2 */}
            <div className="group hover-lift">
              <div className="relative bg-gray-100 aspect-portrait-img mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-sage/20 to-accent/20 flex items-center justify-center">
                  <span className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">🤝</div>
                    Bespoke Design
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Made to Order</h3>
              <p className="text-gray-600 text-sm mb-4">Work directly with our design team. Customized to your measurements, preferences, and vision.</p>
              <Link href="/collections/bespoke" className="text-sage hover:text-accent transition-smooth text-sm font-medium">
                Commission a Piece →
              </Link>
            </div>

            {/* Standard 3 */}
            <div className="group hover-lift">
              <div className="relative bg-gray-100 aspect-portrait-img mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <span className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">⚙️</div>
                    Vertical Integration
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">In-House Craftsmanship</h3>
              <p className="text-gray-600 text-sm mb-4">Design to finished product—every step controlled in-house. No compromises. No shortcuts.</p>
              <Link href="/collections/craftsmanship" className="text-sage hover:text-accent transition-smooth text-sm font-medium">
                Our Process →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-max-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm tracking-widest uppercase text-gray-600">About Sand Atelier</span>
              <h2 className="text-headline text-gray-900 mt-3 mb-6">Bespoke Luxury, Vertically Integrated</h2>
              <p className="text-body text-gray-700 mb-6 leading-relaxed">
                Sand Atelier is a luxury clothing designer and manufacturer committed to uncompromising quality. We control every step of production—from concept to finished garment—ensuring that each piece meets our exacting standards.
              </p>
              <p className="text-body text-gray-700 mb-8 leading-relaxed">
                Our approach is simple: no shortcuts, no outsourcing quality control, no compromises on materials. We work with clients who understand that true luxury is built on craftsmanship and attention to detail.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Our Philosophy
              </Link>
            </div>

            <div className="bg-gradient-to-br from-sage/30 to-accent/30 aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏗️</div>
                <p className="text-gray-600">Vertically Integrated Craft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect / Commissions */}
      <section className="section-padding bg-white">
        <div className="section-max-width text-center">
          <span className="text-sm tracking-widest uppercase text-gray-600">Work With Us</span>
          <h2 className="text-headline text-gray-900 mt-3 mb-12">Commission Your Bespoke Piece</h2>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/sandatelier23/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-sage hover:text-sage transition-smooth"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
            <a
              href="mailto:hello@sandatelier.com"
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-sage hover:text-sage transition-smooth"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@dsandatelier"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-sage hover:text-sage transition-smooth"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.01-.01z"/>
              </svg>
            </a>
          </div>

          <p className="text-gray-600 text-sm">
            Interested in commissioning a bespoke piece? We'd love to hear about your vision. Reach out via email or DM us on Instagram.
          </p>
        </div>
      </section>
    </div>
  );
}
