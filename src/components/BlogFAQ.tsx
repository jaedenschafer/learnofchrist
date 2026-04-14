'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function BlogFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-0">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border-b border-[rgba(60,60,67,0.08)] ${i === 0 ? 'border-t' : ''}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[0.9375rem] font-semibold text-[#1D1D1F] pr-4 leading-snug">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-[#86868B] flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-[#86868B] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
