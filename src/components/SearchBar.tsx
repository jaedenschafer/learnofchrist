'use client';

import { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onChange?: (query: string) => void;
}

export default function SearchBar({ placeholder = 'Search...', onSearch, onChange }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (next: string) => {
    setQuery(next);
    onChange?.(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--color-tertiary-label)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[color:var(--color-surface)] backdrop-blur-sm border border-[color:var(--color-separator)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/40 text-[color:var(--color-label)] text-sm placeholder:text-[color:var(--color-tertiary-label)] shadow-sm transition-all"
        />
      </div>
    </form>
  );
}
