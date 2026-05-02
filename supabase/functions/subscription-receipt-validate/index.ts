// subscription-receipt-validate
// ────────────────────────────────────────────────────────────────────────────
// Validates a fresh purchase or renewal from any platform and writes a
// row to public.subscriptions. The mobile app calls this immediately
// after StoreKit / Play Billing reports a successful transaction; the
// web app calls it from a Stripe webhook (or Stripe customer portal
// "subscription updated" callback).
//
// Request:
//   POST /functions/v1/subscription-receipt-validate
//   {
//     platform: 'ios' | 'android' | 'web_stripe',
//     receipt: string,                  // platform-specific receipt
//     product_id: string,
//     environment?: 'production' | 'sandbox'
//   }
//
// Response: { ok: true, status, expires_at } or 4xx / 5xx with error.
//
// NOTE: the actual platform-side verification is intentionally stubbed
// in this skeleton — they each need their own credentials and signing
// flows (App Store JWS verification, Play Developer API, Stripe
// webhook signature). Production-wire those before launch.

import { handleOptions, jsonResponse } from '../_shared/cors.ts';
import { requireUser, HttpError } from '../_shared/auth.ts';

interface ReceiptRequest {
  platform: 'ios' | 'android' | 'web_stripe';
  receipt: string;
  product_id: string;
  environment?: 'production' | 'sandbox';
}

interface ValidationResult {
  ok: true;
  platform_transaction_id: string;
  expires_at: string | null; // ISO
  starts_at: string;
  auto_renew: boolean;
  status: 'active' | 'in_grace' | 'expired' | 'canceled' | 'refunded' | 'on_hold' | 'paused';
  raw: unknown;
}

Deno.serve(async (req) => {
  const preflight = handleOptions(req);
  if (preflight) return preflight;

  try {
    if (req.method !== 'POST') throw new HttpError(405, 'POST required');
    const { userId, serviceClient } = await requireUser(req);

    const body = (await req.json().catch(() => null)) as ReceiptRequest | null;
    if (!body?.platform || !body.receipt || !body.product_id) {
      throw new HttpError(400, 'platform, receipt, product_id required');
    }

    const result = await validateReceipt(body);

    // Upsert into subscriptions. (platform, platform_transaction_id) is
    // unique so renewals coalesce to one row.
    const { error: upsertErr } = await serviceClient
      .from('subscriptions')
      .upsert(
        {
          user_id: userId,
          platform: body.platform,
          product_id: body.product_id,
          platform_transaction_id: result.platform_transaction_id,
          status: result.status,
          environment: body.environment ?? 'production',
          starts_at: result.starts_at,
          expires_at: result.expires_at,
          auto_renew: result.auto_renew,
          last_verified_at: new Date().toISOString(),
          raw: result.raw,
        },
        { onConflict: 'platform,platform_transaction_id' }
      );

    if (upsertErr) {
      console.error('subs upsert', upsertErr);
      throw new HttpError(500, 'failed to record subscription');
    }

    return jsonResponse(
      {
        ok: true,
        status: result.status,
        expires_at: result.expires_at,
      },
      { req }
    );
  } catch (e) {
    if (e instanceof HttpError) {
      return jsonResponse({ error: e.message }, { status: e.status, req });
    }
    console.error(e);
    return jsonResponse({ error: 'internal_error' }, { status: 500, req });
  }
});

// ─── Platform-specific validators ───
// Each one is a stub that returns shape-correct data so the rest of the
// pipeline (RLS, is_premium, app gating) can be tested end-to-end before
// the real signing flows are wired in.

async function validateReceipt(req: ReceiptRequest): Promise<ValidationResult> {
  switch (req.platform) {
    case 'ios':
      return validateAppStore(req);
    case 'android':
      return validatePlayStore(req);
    case 'web_stripe':
      return validateStripe(req);
  }
}

async function validateAppStore(req: ReceiptRequest): Promise<ValidationResult> {
  // TODO: verify signed JWS receipt with Apple's App Store Server API.
  // Use App Store Server Library (Deno port) to verify the JWS, extract
  // originalTransactionId, expiresDate, autoRenewStatus.
  const _key = Deno.env.get('APPLE_RECEIPT_VERIFY_KEY');
  if (!_key) throw new HttpError(503, 'ios receipt validation not configured');

  // Stub — replace with real verification.
  return {
    ok: true,
    platform_transaction_id: req.receipt.slice(0, 64),
    starts_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
    auto_renew: true,
    status: 'active',
    raw: { stub: true, receipt_prefix: req.receipt.slice(0, 32) },
  };
}

async function validatePlayStore(req: ReceiptRequest): Promise<ValidationResult> {
  // TODO: call Play Developer API
  //   purchases.subscriptionsv2.get(packageName, purchaseToken)
  // using a service account JWT.
  const _key = Deno.env.get('PLAY_SERVICE_ACCOUNT_JSON');
  if (!_key) throw new HttpError(503, 'android receipt validation not configured');

  return {
    ok: true,
    platform_transaction_id: req.receipt.slice(0, 64),
    starts_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
    auto_renew: true,
    status: 'active',
    raw: { stub: true },
  };
}

async function validateStripe(req: ReceiptRequest): Promise<ValidationResult> {
  // TODO: stripe.subscriptions.retrieve(subscriptionId) using the secret
  // key. For webhook deliveries, verify the Stripe-Signature header
  // before dispatching here.
  const _key = Deno.env.get('STRIPE_SECRET_KEY');
  if (!_key) throw new HttpError(503, 'stripe receipt validation not configured');

  return {
    ok: true,
    platform_transaction_id: req.receipt,
    starts_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
    auto_renew: true,
    status: 'active',
    raw: { stub: true },
  };
}
