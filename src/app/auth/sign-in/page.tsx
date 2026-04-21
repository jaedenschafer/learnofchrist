import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/supabase/server';
import SignInWithGoogleButton from './SignInWithGoogleButton';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Sign in | Learn of Christ',
  description: 'Sign in with Google to save your reading progress, bookmark verses, and build a personal library.',
  robots: { index: false, follow: false },
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const user = await getCurrentUser();
  if (user) {
    redirect(sp.next && sp.next.startsWith('/') ? sp.next : '/account');
  }

  const next = sp.next && sp.next.startsWith('/') ? sp.next : '/';

  return (
    <div className="page-container">
      <div className="max-w-md mx-auto">
        <div className="rounded-2xl border border-[color:var(--color-separator)] bg-[color:var(--color-surface)] p-8">
          <h1 className="text-[1.5rem] font-semibold text-[color:var(--color-label)]">
            Sign in
          </h1>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-[color:var(--color-secondary-label)]">
            Save your reading progress, bookmark verses, and build a personal library across devices.
          </p>

          {sp.error && (
            <div
              role="alert"
              className="mt-4 rounded-lg border border-red-300/60 bg-red-50 px-3 py-2 text-[0.875rem] text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200"
            >
              {sp.error}
            </div>
          )}

          <div className="mt-6">
            <SignInWithGoogleButton next={next} />
          </div>

          <p className="mt-6 text-[0.8125rem] leading-relaxed text-[color:var(--color-tertiary-label)]">
            Accounts are optional — you can read every study, verse, and artwork on Learn of Christ without signing in.
            By continuing you agree to our{' '}
            <Link href="/terms" className="underline hover:text-[color:var(--color-primary)]">
              terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-[color:var(--color-primary)]">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
