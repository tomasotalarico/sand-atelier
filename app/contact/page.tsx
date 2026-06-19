'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-max-width text-center">
          <span className="text-sm tracking-widest uppercase text-gray-600">Get In Touch</span>
          <h1 className="text-display text-gray-900 mt-4 mb-6">Contact Us</h1>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto font-light">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="section-max-width">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-headline mb-8 text-gray-900">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sage transition-smooth"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sage transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sage transition-smooth resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-headline mb-8 text-gray-900">Connect With Us</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                  <div className="space-y-2">
                    <p>
                      <a
                        href="https://www.instagram.com/sandatelier23/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage hover:text-accent transition-smooth"
                      >
                        Instagram: @sandatelier23
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.facebook.com/106520677909228"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage hover:text-accent transition-smooth"
                      >
                        Facebook: Sand Atelier
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.tiktok.com/@dsandatelier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage hover:text-accent transition-smooth"
                      >
                        TikTok: @dsandatelier
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">
                    We typically respond to inquiries within 24-48 hours. Thank you for your patience.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/" className="text-sage hover:text-accent transition-smooth">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/collections" className="text-sage hover:text-accent transition-smooth">
                        Collections
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-sage hover:text-accent transition-smooth">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
