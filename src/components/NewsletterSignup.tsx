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
    <div className="bg-gradient-to-r from-navy to-brown rounded-lg p-8 text-cream">
      <h3 className="font-serif text-2xl font-bold mb-2">Stay Updated</h3>
      <p className="text-cream/80 mb-6">Get weekly Bible study insights and devotionals delivered to your inbox.</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-4 py-3 rounded text-navy placeholder-navy/50 focus:outline-none"
          required
        />
        <button type="submit" className="btn-primary whitespace-nowrap">
          Subscribe
        </button>
      </form>

      {submitted && (
        <p className="text-gold text-sm mt-3">Thank you! Check your email to confirm.</p>
      )}
    </div>
  );
}
