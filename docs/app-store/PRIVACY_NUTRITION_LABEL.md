# Privacy Nutrition Label — Learn of Christ (iOS)

> Maps the actual app behavior to App Store Connect's structured
> privacy questionnaire. Filling this in incorrectly is the #1 way
> apps get rejected from review, so the answers below are conservative
> and cite the specific code paths that justify each answer.
>
> The schema below mirrors App Store Connect's flow as of 2026. Apple
> may add new categories — verify against the current questionnaire
> before submission.

## Summary

| Category | Answer |
|---|---|
| Data Used to Track You | **None** |
| Data Linked to You | Identifiers, Contact Info, User Content (only when signed in) |
| Data Not Linked to You | **None** in current release |

## Detail

### Do you or your third-party partners use data for tracking purposes?

**No.**

The app does not include any advertising SDKs, attribution SDKs, or
analytics that match user identifiers across apps or websites. We do
not share any data with data brokers.

### Do you collect data from this app?

**Yes** — only when the user voluntarily signs in.

When the user does NOT sign in (the default state), the app collects
no personal data. All highlights, notes, bookmarks, and reading
progress are stored locally via SwiftData and never leave the device.

When the user DOES sign in via Sign in with Apple, the following
data is collected and linked to their account:

#### Identifiers — Linked to user, NOT used for tracking

- **User ID** — the Apple-provided account identifier
  - **Purpose:** App Functionality
  - **Justification:** required to associate the user's
    annotations across their devices

#### Contact Info — Linked to user, NOT used for tracking

- **Email Address** — provided by Sign in with Apple (may be a
  private relay address)
  - **Purpose:** App Functionality
  - **Justification:** account recovery and required by the
    Sign in with Apple flow

#### User Content — Linked to user, NOT used for tracking

- **Other User Content** — the user's highlights, notes,
  bookmarks, and reading progress
  - **Purpose:** App Functionality
  - **Justification:** the entire reason the user signed in is
    to back up and sync this content
  - **Note:** notes contain free-form text the user wrote. We
    store but do not analyze, mine, share, or use them for AI.

### What data, if any, is collected automatically when the user has NOT signed in?

**None linked to the user.**

The app downloads content packs (the Bible text and study guides)
from our hosting provider over HTTPS. Our hosting provider's server
logs may contain the device's IP address as a normal part of
operating an HTTPS service, but we do not access or use those logs
to identify individuals.

### Does your app use third-party SDKs that collect data?

| SDK | Purpose | Data collected | Linked? | Tracking? |
|---|---|---|---|---|
| Sign in with Apple | Authentication | Apple ID, email | Yes | No |
| Supabase Swift SDK | Database / sync | Auth token, request data | Yes (when authed) | No |

We do not include Firebase, Crashlytics, Sentry, Amplitude, Mixpanel,
GA4, AppsFlyer, AdJust, Branch, FB SDK, Google SDK (other than
Sign in with Google when added), or any other analytics / attribution
/ ads SDK.

### Optional features that change the answers

The app includes infrastructure for the following but does NOT use
it in the current release:

- **In-app subscriptions:** schema exists in the database but no
  paid features are exposed. If subscriptions ship, this label
  must be updated to declare Purchase History as Linked, App
  Functionality.
- **Sign in with Google:** planned for the Android release. When
  added, the iOS label is unchanged (Google Sign-In is not
  offered on iOS).
- **AI features:** explicitly excluded from v1. If added, this
  label must declare any third-party data flow they require.

## Per-question App Store Connect script

When walking through the questionnaire in App Store Connect, answer
in this order:

1. **"Do you or your third-party partners use data for tracking?"**
   → No

2. **"Does your app collect any data?"**
   → Yes

3. **Data type checklist** — check ONLY:
   - Contact Info → Email Address
   - User Content → Other User Content
   - Identifiers → User ID

   Leave unchecked: name, phone number, physical address, customer
   support, gameplay content, audio data, photos, browsing history,
   search history, location, sensitive info, financial info, health
   & fitness, contacts, identifiers (Device ID), purchases (until
   subscriptions ship), usage data, diagnostics.

4. For **each** of the three checked types, answer:
   - "Is this data used to track you?" → No
   - "Is this data linked to the user's identity?" → Yes
   - "Purposes" → App Functionality only

5. Confirm.

## Drift watch

When the answers below change, this file must change first:

- Adding analytics: **Usage Data → Linked**
- Adding crash reporting: **Diagnostics → Not Linked** (if
  anonymized) or **Linked** (if not)
- Adding subscriptions: **Purchases → Purchase History → Linked**
- Adding AI features that send user text to a third party: declare
  whatever the third party processes
- Adding profile photos / display names: declare those types

Update both the answers and the App Store Connect submission, then
ship the next build. Don't let the on-store label drift.
