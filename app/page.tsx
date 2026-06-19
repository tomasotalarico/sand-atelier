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
            <span className="text-sm tracking-widest uppercase text-gray-600">Contemporary Fashion Design</span>
          </div>

          <h1 className="text-display mb-6 text-gray-900">
            Sand<br />
            <span className="text-sage">Atelier</span>
          </h1>

          <p className="text-subheading text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Curated collections of contemporary fashion with an emphasis on innovative silhouettes and refined craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections" className="btn-primary inline-block">
              Explore Collections
            </Link>
            <Link href="/about" className="btn-secondary inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding bg-white">
        <div className="section-max-width">
          <div className="mb-16 text-center">
            <span className="text-sm tracking-widest uppercase text-gray-600">Featured</span>
            <h2 className="text-headline text-gray-900 mt-3 mb-4">Latest Collections</h2>
            <div className="w-12 h-1 bg-sage mx-auto"></div>
          </div>

          <div className="grid-auto-fit">
            {/* Collection Card 1 */}
            <div className="group hover-lift">
              <div className="relative bg-gray-100 aspect-portrait-img mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">👗</div>
                    Collection 1
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Spring Geometric</h3>
              <p className="text-gray-600 text-sm mb-4">Faceted silhouettes with contemporary edge</p>
              <Link href="/collections/spring-geometric" className="text-sage hover:text-accent transition-smooth text-sm font-medium">
                View Collection →
              </Link>
            </div>

            {/* Collection Card 2 */}
            <div className="group hover-lift">
              <div className="relative bg-gray-100 aspect-portrait-img mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-sage/20 to-accent/20 flex items-center justify-center">
                  <span className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">👠</div>
                    Collection 2
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Editorial Series</h3>
              <p className="text-gray-600 text-sm mb-4">Curated pieces from runway to closet</p>
              <Link href="/collections/editorial-series" className="text-sage hover:text-accent transition-smooth text-sm font-medium">
                View Collection →
              </Link>
            </div>

            {/* Collection Card 3 */}
            <div className="group hover-lift">
              <div className="relative bg-gray-100 aspect-portrait-img mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <span className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">✨</div>
                    Collection 3
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Essentials</h3>
              <p className="text-gray-600 text-sm mb-4">Timeless pieces with modern sensibility</p>
              <Link href="/collections/essentials" className="text-sage hover:text-accent transition-smooth text-sm font-medium">
                View Collection →
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
              <h2 className="text-headline text-gray-900 mt-3 mb-6">Contemporary Luxury Fashion</h2>
              <p className="text-body text-gray-700 mb-6 leading-relaxed">
                Sand Atelier is a contemporary fashion design studio dedicated to crafting innovative pieces that bridge runway aesthetics with wearable luxury. Each collection showcases our commitment to architectural silhouettes and refined craftsmanship.
              </p>
              <p className="text-body text-gray-700 mb-8 leading-relaxed">
                From editorial photography to curated runway selections, we celebrate the intersection of art and fashion.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Our Story
              </Link>
            </div>

            <div className="bg-gradient-to-br from-sage/30 to-accent/30 aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-gray-600">Haute Couture Aesthetic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Connect */}
      <section className="section-padding bg-white">
        <div className="section-max-width text-center">
          <span className="text-sm tracking-widest uppercase text-gray-600">Connect With Us</span>
          <h2 className="text-headline text-gray-900 mt-3 mb-12">Follow Sand Atelier</h2>

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
              href="https://www.facebook.com/106520677909228"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-sage hover:text-sage transition-smooth"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
            Join our community of fashion enthusiasts and stay updated with the latest collections.
          </p>
        </div>
      </section>
    </div>
  );
}
