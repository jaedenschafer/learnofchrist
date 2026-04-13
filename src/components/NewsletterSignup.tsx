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
    <div className="cta-banner">
      <div className="relative z-10">
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold/80 font-semibold mb-2">Newsletter</p>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-cream">Stay in the Word</h3>
        <p className="text-cream/55 text-sm max-w-sm mx-auto mb-6">Weekly Bible study insights and devotionals delivered to your inbox.</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl text-navy text-sm placeholder-navy/35 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
            required
          />
          <button type="submit" className="btn-primary !shadow-lg whitespace-nowrap">Subscribe</button>
        </form>

        {submitted && (
          <p className="text-gold text-xs mt-3 text-center animate-fade-in">Thank you! Check your email to confirm.</p>
        )}

        <p className="text-cream/30 text-[0.65rem] text-center mt-3">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
