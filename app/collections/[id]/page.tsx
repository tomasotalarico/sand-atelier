import Link from 'next/link';

export default function CollectionDetail({ params }: { params: { id: string } }) {
  const collectionId = params.id;
  const collections: { [key: string]: any } = {
    'spring-geometric': {
      name: 'Spring Geometric',
      year: '2024',
      description: 'Faceted silhouettes with contemporary edge. Inspired by architectural forms and geometric precision.',
      longDescription: 'This collection explores the intersection of architecture and fashion, featuring geometric cuts and innovative silhouettes. Each piece is designed to create movement and visual interest through carefully considered proportions.',
      pieces: 12,
    },
    'editorial-series': {
      name: 'Editorial Series',
      year: '2024',
      description: 'Curated pieces from runway to closet. Professional selections for the modern aesthetic.',
      longDescription: 'A carefully curated selection of pieces that bridge runway fantasy with everyday wearability. This collection represents the best of contemporary fashion design.',
      pieces: 8,
    },
    'essentials': {
      name: 'Essentials',
      year: '2024',
      description: 'Timeless pieces with modern sensibility. The foundation of contemporary style.',
      longDescription: 'Timeless wardrobe staples reimagined with modern sensibility. These pieces form the foundation of a contemporary wardrobe, designed to mix and match seamlessly.',
      pieces: 15,
    },
  };

  const collection = collections[collectionId] || collections['spring-geometric'];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-max-width">
          <div className="mb-6">
            <Link href="/collections" className="text-sage hover:text-accent transition-smooth text-sm font-medium">
              ← Back to Collections
            </Link>
          </div>

          <h1 className="text-display text-gray-900 mb-4">{collection.name}</h1>
          <div className="flex gap-6 items-center">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              {collection.year}
            </span>
            <span className="text-sm text-gray-600">{collection.pieces} pieces</span>
          </div>
        </div>
      </section>

      {/* Collection Content */}
      <section className="section-padding">
        <div className="section-max-width">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Main */}
            <div className="md:col-span-2">
              <div className="bg-gray-100 aspect-video rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-gray-600">{collection.name} Collection</p>
                </div>
              </div>

              <p className="text-subheading text-gray-700 mb-6 leading-relaxed">
                {collection.longDescription}
              </p>

              {/* Pieces Grid */}
              <div className="mt-12">
                <h2 className="text-headline text-gray-900 mb-8">Featured Pieces</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="bg-gray-100 aspect-portrait-img rounded-lg mb-4 group-hover:bg-gray-200 transition-smooth flex items-center justify-center overflow-hidden">
                        <span className="text-gray-400">Piece {i}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Piece {i}</h3>
                      <p className="text-sm text-gray-600">Featured design</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                {/* Collection Info */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Collection Details</h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-gray-600">Year</dt>
                      <dd className="font-semibold text-gray-900">{collection.year}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Total Pieces</dt>
                      <dd className="font-semibold text-gray-900">{collection.pieces}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Style</dt>
                      <dd className="font-semibold text-gray-900">Contemporary</dd>
                    </div>
                  </dl>
                </div>

                {/* CTA */}
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Inquire
                </Link>

                {/* Social Share */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm">Share</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/sandatelier23/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-sage hover:text-sage transition-smooth"
                      aria-label="Share on Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/106520677909228"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-sage hover:text-sage transition-smooth"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Collections */}
      <section className="section-padding bg-gray-50">
        <div className="section-max-width">
          <h2 className="text-headline text-gray-900 mb-8">Other Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(collections)
              .filter(([key]) => key !== collectionId)
              .slice(0, 3)
              .map(([key, coll]) => (
                <Link key={key} href={`/collections/${key}`}>
                  <div className="group cursor-pointer">
                    <div className="bg-gray-200 aspect-portrait-img rounded-lg mb-4 group-hover:bg-gray-300 transition-smooth flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400">{coll.name}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-sage transition-smooth">{coll.name}</h3>
                    <p className="text-sm text-gray-600">{coll.pieces} pieces</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
