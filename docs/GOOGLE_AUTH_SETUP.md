# Google Sign-in setup

The app-side code for Google sign-in is shipped. To turn it on in production
you need to do two pieces of dashboard work that can't live in the repo.

Takes about 10 minutes.

---

## 1. Create a Google OAuth client

1. Go to <https://console.cloud.google.com/apis/credentials>
2. Pick (or create) a project called `Learn of Christ`.
3. If you've never set up OAuth on this project, Google will ask you to
   configure the **OAuth consent screen** first:
    - User type: **External**
    - App name: `Learn of Christ`
    - User support email: your email
    - Developer contact: your email
    - Authorized domains: `learnofchrist.com`, `supabase.co`
    - Scopes: the default `userinfo.email`, `userinfo.profile`, `openid` are
      all you need.
    - Test users: add your own email while the app is in "Testing" mode so
      you can sign in before Google verifies it. Once you submit for
      verification or publish the app, any Google account can sign in.
4. Back on **Credentials**, click **Create credentials → OAuth client ID**.
    - Application type: **Web application**
    - Name: `Learn of Christ — web`
    - Authorized JavaScript origins:
        - `https://learnofchrist.com`
        - `http://localhost:3000` (for dev)
    - Authorized redirect URIs:
        - `https://uqcgieillyvefzmohzpn.supabase.co/auth/v1/callback`
        - `http://localhost:54321/auth/v1/callback` (only if you run Supabase locally)
5. Save. Google shows you a **Client ID** and **Client secret** — keep
   that tab open.

---

## 2. Turn Google on in the Supabase dashboard

1. Go to <https://supabase.com/dashboard/project/uqcgieillyvefzmohzpn/auth/providers>
2. Scroll to **Google**, toggle it **Enabled**.
3. Paste the **Client ID** and **Client secret** from the previous step.
4. In the **Additional scopes** field, leave blank (default scopes are fine).
5. Click **Save**.

While you're in the Auth dashboard, also do this once:

- **Auth → URL Configuration**
  - **Site URL:** `https://learnofchrist.com`
  - **Redirect URLs:** add `https://learnofchrist.com/auth/callback`
    (and `http://localhost:3000/auth/callback` for dev)

---

## 3. Smoke test

1. Open <https://learnofchrist.com> in a logged-out browser.
2. Click **Sign in** in the top nav.
3. Click **Continue with Google**.
4. Pick your account. You should land back on the site, signed in, avatar
   visible in the nav.
5. Click your avatar → **Account**. You should see your name, email, and
   four zeroed-out stats.
6. Click **Sign out of this device** at the bottom of Account. You should
   be bounced back to the homepage, signed out.

If step 4 errors with `redirect_uri_mismatch`, the redirect URI in step 1.4
doesn't match what Supabase is sending — double-check the exact string
`https://uqcgieillyvefzmohzpn.supabase.co/auth/v1/callback`.

---

## Phase 2 (next session)

Schema for bookmarks, reading progress, saved artworks, and per-verse notes
is already deployed via migration `019_user_accounts.sql`. Next session we
wire the API routes and UI toggles against those tables.
