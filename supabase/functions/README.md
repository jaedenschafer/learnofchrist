# Edge Functions

Server-side endpoints for Learn of Christ.

**Note: nothing here is required for v1.** The v1 mobile apps read static
content packs from Supabase Storage and sync user data via PostgREST
RPCs — no Edge Function is on the v1 critical path. Both functions
below are scaffolded for post-v1 features (paid translations,
in-app subscriptions) and can be deployed when those features ship.

| Function | Purpose | v1? | Secrets |
|---|---|---|---|
| `bible-translation-proxy` | API.Bible passthrough for paid translations | no | `API_BIBLE_KEY` |
| `subscription-receipt-validate` | StoreKit / Play / Stripe receipt validation | no | `APPLE_RECEIPT_VERIFY_KEY`, `PLAY_SERVICE_ACCOUNT_JSON`, `STRIPE_SECRET_KEY` |

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
supabase functions deploy subscription-receipt-validate
```

Set secrets per environment:

```sh
supabase secrets set API_BIBLE_KEY=...
# etc.
```

## Production wire-up still required

When subscriptions are reintroduced post-v1, replace the **stub
validators** in `subscription-receipt-validate/index.ts`:

- **iOS** — verify the signed JWS with Apple's App Store Server Library.
  Pull `originalTransactionId`, `expiresDate`, `autoRenewStatus` from
  the verified payload.
- **Android** — call `purchases.subscriptionsv2.get(packageName, purchaseToken)`
  via a service-account JWT against the Play Developer API.
- **Web (Stripe)** — verify the `Stripe-Signature` header on webhook
  deliveries before dispatching, then read the subscription via
  `stripe.subscriptions.retrieve`.
