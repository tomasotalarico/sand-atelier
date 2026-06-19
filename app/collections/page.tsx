import Link from 'next/link';

export default function Collections() {
  const collections = [
    {
      id: 'spring-geometric',
      name: 'Spring Geometric',
      description: 'Faceted silhouettes with contemporary edge. Inspired by architectural forms and geometric precision.',
      year: '2024',
      pieces: 12,
    },
    {
      id: 'editorial-series',
      name: 'Editorial Series',
      description: 'Curated pieces from runway to closet. Professional selections for the modern aesthetic.',
      year: '2024',
      pieces: 8,
    },
    {
      id: 'essentials',
      name: 'Essentials',
      description: 'Timeless pieces with modern sensibility. The foundation of contemporary style.',
      year: '2024',
      pieces: 15,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-max-width text-center">
          <span className="text-sm tracking-widest uppercase text-gray-600">Browse</span>
          <h1 className="text-display text-gray-900 mt-4 mb-6">Collections</h1>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto font-light">
            Explore our curated collections of contemporary fashion.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding">
        <div className="section-max-width">
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link key={collection.id} href={`/collections/${collection.id}`}>
                <div className="group cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="relative bg-gray-100 aspect-portrait-img mb-6 overflow-hidden rounded-lg">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-sage/30 group-hover:to-accent/30 transition-smooth">
                      <span className="text-gray-400 text-center">
                        <div className="text-6xl mb-3">✨</div>
                        <p>{collection.name}</p>
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-sage transition-smooth">
                        {collection.name}
                      </h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {collection.year}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {collection.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{collection.pieces} pieces</span>
                      <span className="text-sage font-medium text-sm group-hover:translate-x-1 transition-smooth inline-block">
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="section-max-width text-center">
          <h2 className="text-headline mb-6">Ready to Explore?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Follow us on social media for the latest updates, behind-the-scenes looks, and exclusive previews.
          </p>
          <Link href="/" className="inline-block px-8 py-3 bg-sage text-gray-900 font-semibold hover:bg-accent transition-smooth rounded-lg">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
