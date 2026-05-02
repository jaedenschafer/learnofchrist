# Edge Functions

Server-side endpoints for the Learn of Christ mobile + web apps. Three
functions today:

| Function | Purpose | Auth | Secrets |
|---|---|---|---|
| `bible-translation-proxy` | API.Bible passthrough for paid translations | required | `API_BIBLE_KEY` |
| `passage-qa` | "Ask About This Passage" via Anthropic | required | `ANTHROPIC_API_KEY` |
| `subscription-receipt-validate` | StoreKit / Play / Stripe receipt validation | required | `APPLE_RECEIPT_VERIFY_KEY`, `PLAY_SERVICE_ACCOUNT_JSON`, `STRIPE_SECRET_KEY` |

App config is **not** an Edge Function — it lives in the Postgres RPC
`public.v1_app_config()` so it stays inside the same RLS-aware client
the apps already use, and so cold-launch fetches travel through PostgREST
(cached by Supabase's CDN) instead of cold-starting a function.

## Local development

```sh
supabase functions serve bible-translation-proxy --env-file .env.local
```

## Deploying

```sh
supabase functions deploy bible-translation-proxy
supabase functions deploy passage-qa
supabase functions deploy subscription-receipt-validate
```

Set secrets per environment:

```sh
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
supabase secrets set API_BIBLE_KEY=...
# etc.
```

## Production wire-up still required

The receipt-validation function ships with **stub validators** for all
three platforms so the data pipeline (RLS, `is_premium`, gating, sync)
can be exercised before launch. Before any paid release, replace the
stubs in `subscription-receipt-validate/index.ts`:

- **iOS** — verify the signed JWS with Apple's App Store Server Library.
  Pull `originalTransactionId`, `expiresDate`, `autoRenewStatus` from
  the verified payload.
- **Android** — call `purchases.subscriptionsv2.get(packageName, purchaseToken)`
  via a service-account JWT against the Play Developer API.
- **Web (Stripe)** — verify the `Stripe-Signature` header on webhook
  deliveries before dispatching, then read the subscription via
  `stripe.subscriptions.retrieve`.
