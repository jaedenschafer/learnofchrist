/**
 * Per-source image loader helpers for next/image.
 *
 * For sources that expose URL-based resizing (Wikimedia thumb endpoint,
 * Met IIIF), we ask the source for exactly the size we need. That keeps
 * the bytes on the wire small without relying on Next's own optimizer
 * (which is great but adds latency and CDN cost on cold cache).
 *
 * For everything else we fall back to the original URL and let
 * <Image> + Next's default optimizer handle resizing.
 */

import type { ImageLoaderProps } from 'next/image';

/**
 * Wikimedia Commons thumb pattern.
 *
 * Originals live at:
 *   https://upload.wikimedia.org/wikipedia/commons/<a>/<ab>/<File>
 * Thumbs live at:
 *   https://upload.wikimedia.org/wikipedia/commons/thumb/<a>/<ab>/<File>/<W>px-<File>
 *
 * Special:FilePath redirects also resolve to the same upload.wikimedia.org URL.
 * We only rewrite when we already see /commons/ (or /commons/thumb/) in the path —
 * otherwise we hand the URL back unchanged.
 */
export function wikimediaLoader({ src, width }: ImageLoaderProps): string {
  try {
    const url = new URL(src);
    if (url.hostname !== 'upload.wikimedia.org') return src;
    const parts = url.pathname.split('/');
    // Accept: /wikipedia/commons/<a>/<ab>/<File>
    //   and: /wikipedia/commons/thumb/<a>/<ab>/<File>/<W>px-<File>
    const wikiIdx = parts.indexOf('wikipedia');
    if (wikiIdx === -1) return src;
    const project = parts[wikiIdx + 1]; // 'commons' or e.g. 'en'
    if (!project) return src;
    const isThumb = parts[wikiIdx + 2] === 'thumb';
    const base = parts.slice(wikiIdx + (isThumb ? 3 : 2)); // ['<a>', '<ab>', '<File>', ...]
    if (base.length < 3) return src;
    const a = base[0];
    const ab = base[1];
    const file = base[2];
    if (!file) return src;
    // SVGs need a rasterized output filename: <W>px-<File>.png
    const outName = file.toLowerCase().endsWith('.svg')
      ? `${width}px-${file}.png`
      : `${width}px-${file}`;
    return `${url.protocol}//${url.hostname}/wikipedia/${project}/thumb/${a}/${ab}/${file}/${outName}`;
  } catch {
    return src;
  }
}

/**
 * Met Museum IIIF — resize via /full/<width>,/0/default.jpg.
 *
 * Met image URLs come in two shapes:
 *   https://images.metmuseum.org/CRDImages/.../web-large/DT100.jpg   (CDN-served)
 *   https://collectionapi.metmuseum.org/.../iiif/<id>/full/<W>,/0/default.jpg (IIIF)
 *
 * We rewrite the IIIF form. The CDN form has only fixed sizes — we leave it.
 */
export function metLoader({ src, width }: ImageLoaderProps): string {
  if (!src.includes('/iiif/')) return src;
  // Replace any existing /full/<...>/0/default.<ext> with /full/<width>,/0/default.jpg
  return src.replace(/\/full\/[^/]+\/0\/default\.[a-z]+$/i, `/full/${width},/0/default.jpg`);
}

/**
 * Rijksmuseum / micr.io IIIF — same IIIF rewrite trick.
 */
export function rijksLoader({ src, width }: ImageLoaderProps): string {
  if (!src.includes('iiif')) return src;
  if (!src.match(/\/full\/[^/]+\/0\/default\.[a-z]+$/i)) return src;
  return src.replace(/\/full\/[^/]+\/0\/default\.[a-z]+$/i, `/full/${width},/0/default.jpg`);
}

/**
 * Universal loader — picks the right per-host strategy and falls back to
 * `src` for unknown hosts (so Next.js' own optimizer handles them).
 */
export function artImageLoader(props: ImageLoaderProps): string {
  const { src } = props;
  if (src.includes('upload.wikimedia.org')) return wikimediaLoader(props);
  if (src.includes('metmuseum.org')) return metLoader(props);
  if (src.includes('micr.io') || src.includes('rijksmuseum.nl')) return rijksLoader(props);
  return src;
}

/**
 * Generate a 1x1 base64 PNG of a single hex color.
 * Used as next/image's blurDataURL placeholder, so the card has the
 * artwork's dominant tone behind it before bytes arrive.
 *
 * Hex must be in '#rrggbb' form. Falls back to a neutral gray on bad input.
 */
export function hexToBlurDataURL(hex: string | null | undefined): string {
  const fallback = '#d4d4d8'; // zinc-300
  const value = (hex && /^#[0-9a-fA-F]{6}$/.test(hex)) ? hex : fallback;
  const r = parseInt(value.slice(1, 3), 16);
  const g = parseInt(value.slice(3, 5), 16);
  const b = parseInt(value.slice(5, 7), 16);

  // Hand-rolled 1x1 PNG. RFC-correct chunks (signature, IHDR, IDAT, IEND).
  // Easier than spinning up canvas server-side. The IDAT here is pre-built
  // for a 1x1 RGB image — we only need to splice in the color bytes.
  const png = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
    // IHDR length=13
    0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52,
    0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x02, 0x00, 0x00, 0x00,
    0x90, 0x77, 0x53, 0xde, // IHDR CRC
    // IDAT length=12
    0x00, 0x00, 0x00, 0x0c, 0x49, 0x44, 0x41, 0x54,
    0x08, 0x99, 0x63,
    r, g, b, 0x00, 0x00, 0x00, 0x05, 0x00, 0x01,
    0x0d, 0x0a, 0x2d, 0xb4, // IDAT CRC (placeholder; computed below)
    // IEND length=0
    0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44,
    0xae, 0x42, 0x60, 0x82,
  ]);
  // Note: the IDAT CRC above is approximate — but for a blurred 1x1
  // placeholder browsers don't validate strictly. If a browser does refuse
  // it, we degrade gracefully because next/image tolerates a missing
  // blurDataURL. To avoid the ambiguity we instead emit an inline SVG of
  // the same color, which is universally accepted:
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'><rect width='1' height='1' fill='${value}'/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}
