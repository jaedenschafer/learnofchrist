'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-brown p-10 md:p-14 text-cream">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-3">Newsletter</p>
          <h3 className="font-serif text-3xl font-bold mb-3">Stay in the Word</h3>
          <p className="text-cream/70 max-w-md mx-auto">Get weekly Bible study insights and devotionals delivered straight to your inbox.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 rounded-xl text-navy placeholder-navy/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap shadow-lg">
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="text-gold text-sm mt-4 text-center animate-fade-in">Thank you! Check your email to confirm your subscription.</p>
        )}

        <p className="text-cream/40 text-xs text-center mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
