import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="section-max-width section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl serif font-bold text-white mb-4">
              <span className="text-sage">Sand</span>Atelier
            </h3>
            <p className="text-sm text-gray-400">Contemporary fashion design studio.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/collections" className="text-gray-400 hover:text-sage transition-smooth">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-sage transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-sage transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.instagram.com/sandatelier23/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sage transition-smooth">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/106520677909228" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sage transition-smooth">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@dsandatelier" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sage transition-smooth">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-sage transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-sage transition-smooth">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Sand Atelier. All rights reserved.</p>
            <p>Designed and curated with elegance.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
