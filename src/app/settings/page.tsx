'use client';

import { useReadingPrefs } from '@/lib/ReadingPrefsContext';
import type { Theme, FontSize } from '@/lib/ReadingPrefsContext';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export default function SettingsPage() {
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    focusMode,
    setFocusMode,
    isDark,
  } = useReadingPrefs();

  const themeOptions: { value: Theme; label: string; desc: string }[] = [
    { value: 'light', label: 'Light', desc: 'Classic bright background' },
    { value: 'dark', label: 'Dark', desc: 'Easier on the eyes at night' },
    { value: 'system', label: 'Auto', desc: 'Match your device setting' },
  ];

  const fontOptions: { value: FontSize; label: string; size: string }[] = [
    { value: 'small', label: 'Small', size: '15px' },
    { value: 'medium', label: 'Default', size: '17px' },
    { value: 'large', label: 'Large', size: '19px' },
  ];

  return (
    <div className="page-container">
      <div className="max-w-2xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Settings', href: '#' }]} />

        <div className="card-elevated mb-5 mt-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-label)] mb-1">
            Settings
          </h1>
          <p className="text-[color:var(--color-secondary-label)] text-[0.9375rem]">
            Reading preferences are saved to this browser — no account required.
          </p>
        </div>

        {/* Appearance */}
        <section className="card-elevated mb-5">
          <h2 className="section-header">Appearance</h2>
          <p className="text-[0.9375rem] text-[color:var(--color-label)] font-medium mb-1">Theme</p>
          <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] mb-3">
            Currently {isDark ? 'dark' : 'light'}.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {themeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setTheme(opt.value)}
                aria-pressed={theme === opt.value}
                className={`setting-pill text-left p-3 rounded-2xl transition-all ${
                  theme === opt.value ? 'setting-pill--active' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="setting-swatch" aria-hidden="true" data-variant={opt.value} />
                  <span className="font-semibold text-[0.9375rem]">{opt.label}</span>
                </div>
                <p className="text-[0.75rem] text-[color:var(--color-secondary-label)] leading-snug">
                  {opt.desc}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Reading */}
        <section className="card-elevated mb-5">
          <h2 className="section-header">Reading</h2>

          <p className="text-[0.9375rem] text-[color:var(--color-label)] font-medium mb-3">Font size</p>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {fontOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFontSize(opt.value)}
                aria-pressed={fontSize === opt.value}
                className={`setting-pill p-3 rounded-2xl text-center transition-all ${
                  fontSize === opt.value ? 'setting-pill--active' : ''
                }`}
              >
                <span className="block font-semibold text-[color:var(--color-label)]" style={{ fontSize: opt.size }}>
                  Aa
                </span>
                <span className="block text-[0.75rem] text-[color:var(--color-secondary-label)] mt-1">
                  {opt.label}
                </span>
              </button>
            ))}
          </div>

          <p className="text-[0.9375rem] text-[color:var(--color-label)] font-medium mb-1">Focus mode</p>
          <p className="text-[0.8125rem] text-[color:var(--color-secondary-label)] mb-3">
            Hides teaching blocks so only Scripture remains on study pages.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setFocusMode('full')}
              aria-pressed={focusMode === 'full'}
              className={`setting-pill p-3 rounded-2xl text-center transition-all ${
                focusMode === 'full' ? 'setting-pill--active' : ''
              }`}
            >
              <span className="block font-semibold text-[0.9375rem] text-[color:var(--color-label)]">Full</span>
              <span className="block text-[0.75rem] text-[color:var(--color-secondary-label)] mt-0.5">
                Scripture + teaching
              </span>
            </button>
            <button
              onClick={() => setFocusMode('focus')}
              aria-pressed={focusMode === 'focus'}
              className={`setting-pill p-3 rounded-2xl text-center transition-all ${
                focusMode === 'focus' ? 'setting-pill--active' : ''
              }`}
            >
              <span className="block font-semibold text-[0.9375rem] text-[color:var(--color-label)]">Focus</span>
              <span className="block text-[0.75rem] text-[color:var(--color-secondary-label)] mt-0.5">
                Scripture only
              </span>
            </button>
          </div>
        </section>

        {/* Privacy note */}
        <section className="card-elevated">
          <h2 className="section-header">Privacy</h2>
          <p className="text-[0.9375rem] text-[color:var(--color-label)] leading-relaxed">
            Learn of Christ has no accounts, no tracking, and no ads. These
            preferences are stored only in this browser&apos;s local storage.
            Clearing your browser data will reset them.
          </p>
        </section>
      </div>
    </div>
  );
}
