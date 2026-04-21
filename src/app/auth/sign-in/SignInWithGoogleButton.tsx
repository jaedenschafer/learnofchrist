'use client';

import { useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser';

export default function SignInWithGoogleButton({ next }: { next: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onClick() {
    setError(null);
    setLoading(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo,
          queryParams: { access_type: 'offline', prompt: 'select_account' },
        },
      });
      if (authError) {
        setError(authError.message);
        setLoading(false);
      }
      // On success, Supabase redirects the whole window; nothing more to do.
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign-in failed');
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-3 h-11 rounded-xl bg-white border border-[color:var(--color-separator)] text-[0.9375rem] font-medium text-[#1f1f1f] hover:border-[color:var(--color-label)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        aria-label="Continue with Google"
      >
        <GoogleLogo />
        <span>{loading ? 'Redirecting…' : 'Continue with Google'}</span>
      </button>
      {error && (
        <p className="mt-3 text-[0.875rem] text-red-700 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </>
  );
}

function GoogleLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" width={18} height={18}>
      <path
        fill="#4285F4"
        d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.4672-.806 5.9564-2.1805l-2.9087-2.2581c-.806.54-1.8368.8604-3.0477.8604-2.344 0-4.3281-1.5832-5.036-3.7104H.9573v2.3318C2.4382 15.9832 5.4818 18 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418l3.0068-2.3318z"
      />
      <path
        fill="#EA4335"
        d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.4259 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.656 3.5795 9 3.5795z"
      />
    </svg>
  );
}
