'use client';

import { useState, useRef, useEffect } from 'react';
import { useDenomination, DENOMINATIONS } from '@/lib/DenominationContext';

export default function DenominationSwitcher() {
  const { denomination, setDenomination, currentDenomination } = useDenomination();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [open]);

  // Close on escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }
  }, [open]);

  const isActive = denomination !== 'none';

  return (
    <div ref={ref} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-3 rounded-2xl p-4 transition-all ${
          isActive
            ? 'bg-[#007AFF]/[0.06] border border-[#007AFF]/20'
            : 'bg-[color:var(--color-surface)] border border-transparent'
        }`}
      >
        {/* Icon */}
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isActive ? 'bg-[#007AFF]/[0.12]' : 'bg-[var(--color-bg)]'
        }`}>
          <svg className={`w-4.5 h-4.5 ${isActive ? 'text-[color:var(--color-primary)]' : 'text-[color:var(--color-secondary-label)]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Label */}
        <div className="flex-1 text-left">
          <p className="text-[0.8125rem] font-semibold text-[color:var(--color-label)]">
            {isActive ? currentDenomination.label : 'Denomination Lens'}
          </p>
          <p className="text-[0.6875rem] text-[color:var(--color-tertiary-label)] leading-snug">
            {isActive ? 'Viewing with denominational perspective' : 'Add a denominational perspective to your study'}
          </p>
        </div>

        {/* Chevron */}
        <svg className={`w-4 h-4 text-[color:var(--color-tertiary-label)] transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-[color:var(--color-surface)] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden animate-fade-in">
          <div className="p-2 max-h-[50vh] overflow-y-auto">
            {DENOMINATIONS.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setDenomination(d.id);
                  setOpen(false);
                }}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  denomination === d.id
                    ? 'bg-[#007AFF]/[0.08]'
                    : 'hover:bg-[var(--color-bg)]'
                }`}
              >
                {/* Checkmark */}
                <div className="w-5 flex items-center justify-center flex-shrink-0">
                  {denomination === d.id && (
                    <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${denomination === d.id ? 'text-[color:var(--color-primary)]' : 'text-[color:var(--color-label)]'}`}>
                    {d.label}
                  </p>
                  <p className="text-[0.6875rem] text-[color:var(--color-tertiary-label)] leading-snug truncate">
                    {d.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
