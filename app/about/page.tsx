import Link from 'next/link';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-max-width text-center">
          <span className="text-sm tracking-widest uppercase text-gray-600">Our Story</span>
          <h1 className="text-display text-gray-900 mt-4 mb-6">About Sand Atelier</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-max-width">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-sage/20 to-accent/20 aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">✨</div>
                <p className="text-gray-600">Haute Couture Design</p>
              </div>
            </div>

            <div>
              <h2 className="text-headline mb-6 text-gray-900">Contemporary Fashion Design</h2>
              <p className="text-body text-gray-700 mb-4 leading-relaxed">
                Sand Atelier is a contemporary fashion design studio dedicated to creating pieces that celebrate innovative silhouettes and refined craftsmanship. Our work bridges the gap between runway aesthetics and wearable luxury.
              </p>
              <p className="text-body text-gray-700 mb-4 leading-relaxed">
                Founded on the principles of architectural precision and creative vision, each collection represents a thoughtful exploration of form, color, and movement. We believe fashion is an art form that deserves the same attention and care as any other creative discipline.
              </p>
              <p className="text-body text-gray-700 leading-relaxed">
                From editorial photography to curated runway selections, we celebrate the intersection of art and fashion, creating pieces that inspire and elevate.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 py-12 border-t border-b border-gray-200">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We push boundaries with contemporary designs that challenge traditional fashion norms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Craftsmanship</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every piece is crafted with attention to detail and a commitment to quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We create fashion that tells a story and inspires confidence in those who wear it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-gray-50">
        <div className="section-max-width">
          <div className="text-center mb-12">
            <h2 className="text-headline text-gray-900 mb-4">Follow Our Journey</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Stay connected with Sand Atelier across our social platforms for the latest collections, behind-the-scenes content, and exclusive previews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a
              href="https://www.instagram.com/sandatelier23/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-white rounded-lg hover:shadow-lg transition-smooth"
            >
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-sm text-gray-600 mb-4">@sandatelier23</p>
              <span className="text-sage font-medium text-sm">Visit →</span>
            </a>

            <a
              href="https://www.facebook.com/106520677909228"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-white rounded-lg hover:shadow-lg transition-smooth"
            >
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Facebook</h3>
              <p className="text-sm text-gray-600 mb-4">Sand Atelier</p>
              <span className="text-sage font-medium text-sm">Visit →</span>
            </a>

            <a
              href="https://www.tiktok.com/@dsandatelier"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-white rounded-lg hover:shadow-lg transition-smooth"
            >
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="font-semibold text-gray-900 mb-2">TikTok</h3>
              <p className="text-sm text-gray-600 mb-4">@dsandatelier</p>
              <span className="text-sage font-medium text-sm">Visit →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="section-max-width text-center">
          <h2 className="text-headline mb-6 text-gray-900">Explore Our Collections</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Discover our curated fashion pieces and contemporary designs.
          </p>
          <Link href="/collections" className="btn-primary inline-block">
            View Collections
          </Link>
        </div>
      </section>
    </div>
  );
}
