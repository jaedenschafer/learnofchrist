import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Account | Learn of Christ',
  description: 'Your Learn of Christ account — reading progress, bookmarks, saved artworks, and private notes.',
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/account');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, avatar_url, created_at')
    .eq('id', user.id)
    .maybeSingle();

  const [{ count: bookmarkCount }, { count: artSaveCount }, { count: noteCount }, { count: progressCount }] =
    await Promise.all([
      supabase
        .from('user_verse_bookmarks')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id),
      supabase
        .from('user_artwork_saves')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id),
      supabase
        .from('user_verse_notes')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id),
      supabase
        .from('user_reading_progress')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id),
    ]);

  const displayName =
    profile?.display_name ||
    (user.user_metadata?.full_name as string | undefined) ||
    (user.user_metadata?.name as string | undefined) ||
    user.email ||
    'there';
  const avatar = profile?.avatar_url || (user.user_metadata?.avatar_url as string | undefined);
  const initial = displayName.trim().charAt(0).toUpperCase() || '?';

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Account', href: '#' }]} />

        <header className="mt-4 flex items-center gap-4">
          {avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatar}
              alt=""
              width={64}
              height={64}
              className="rounded-full border border-[color:var(--color-separator)] object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-white font-semibold"
              style={{ width: 64, height: 64, fontSize: 28 }}
            >
              {initial}
            </span>
          )}
          <div>
            <h1 className="text-[1.5rem] font-semibold text-[color:var(--color-label)]">
              {displayName}
            </h1>
            {user.email && (
              <p className="text-[0.875rem] text-[color:var(--color-secondary-label)]">
                {user.email}
              </p>
            )}
          </div>
        </header>

        <section className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Bookmarks" value={bookmarkCount ?? 0} />
          <StatCard label="Saved art" value={artSaveCount ?? 0} />
          <StatCard label="Notes" value={noteCount ?? 0} />
          <StatCard label="Chapters read" value={progressCount ?? 0} />
        </section>

        <section className="mt-10">
          <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)] mb-3">
            Your library
          </h2>
          <div className="rounded-2xl border border-[color:var(--color-separator)] bg-[color:var(--color-surface)] p-6">
            <p className="text-[0.9375rem] text-[color:var(--color-secondary-label)]">
              Bookmarks, saved artworks, and private notes will appear here as
              you build your library across Learn of Christ. Sync is active on
              any device you sign into.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)] mb-3">
            Sign out
          </h2>
          <form action="/auth/sign-out" method="post">
            <button
              type="submit"
              className="inline-flex items-center h-10 px-4 rounded-full border border-[color:var(--color-separator)] text-[0.875rem] font-medium text-[color:var(--color-label)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] transition-colors"
            >
              Sign out of this device
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-[color:var(--color-separator)] bg-[color:var(--color-surface)] px-4 py-3">
      <p className="text-[1.75rem] font-semibold text-[color:var(--color-label)] tabular-nums">
        {value}
      </p>
      <p className="text-[0.75rem] uppercase tracking-wide text-[color:var(--color-tertiary-label)] mt-0.5">
        {label}
      </p>
    </div>
  );
}
