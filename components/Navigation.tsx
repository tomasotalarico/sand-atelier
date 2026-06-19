'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold serif">
              <span className="text-gray-900">Sand</span>
              <span className="text-sage">Atelier</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/collections" className="text-sm font-medium text-gray-700 hover:text-sage transition-smooth">
              Collections
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-sage transition-smooth">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-sage transition-smooth">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <Link href="/collections" className="block py-3 text-sm font-medium text-gray-700 hover:text-sage">
              Collections
            </Link>
            <Link href="/about" className="block py-3 text-sm font-medium text-gray-700 hover:text-sage">
              About
            </Link>
            <Link href="/contact" className="block py-3 text-sm font-medium text-gray-700 hover:text-sage">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
