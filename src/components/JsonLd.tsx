import { headers } from 'next/headers';

/**
 * Renders a JSON-LD <script> with the per-request CSP nonce attached.
 * Server component — read by Next.js layout/page server code only.
 */
export default async function JsonLd({ data }: { data: unknown }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;
  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
