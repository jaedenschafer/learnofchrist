#!/usr/bin/env node
/**
 * Regenerate the app's icon PNGs from public/logo.svg.
 *
 * Outputs:
 *   public/logo.png             — 512px, transparent (navbar/footer)
 *   public/icon-192.png          — PWA icon (192)
 *   public/icon-512.png          — PWA icon (512)
 *   public/icon-maskable-512.png — PWA maskable, terracotta bg with 10% safe-zone padding
 *   src/app/icon.png             — Next.js favicon fallback (Next prefers icon.svg)
 *   src/app/apple-icon.png       — iOS home-screen icon (180)
 *
 * Re-run after changing the source SVG color.
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';

const svg = readFileSync('public/logo.svg');
const TERRACOTTA = { r: 200, g: 81, b: 58, alpha: 1 }; // #C8513A

const sizes = [
  { out: 'public/logo.png',              size: 512, transparent: true },
  { out: 'public/icon-192.png',          size: 192, transparent: true },
  { out: 'public/icon-512.png',          size: 512, transparent: true },
  { out: 'public/icon-maskable-512.png', size: 512, transparent: false },
  { out: 'src/app/icon.png',             size: 64,  transparent: true },
  { out: 'src/app/apple-icon.png',       size: 180, transparent: true },
];

for (const { out, size, transparent } of sizes) {
  const padding = transparent ? 0 : Math.round(size * 0.10);
  const inner = size - padding * 2;

  // density=72 keeps the rasterized SVG within sharp's pixel limit;
  // we then resize to the target which downsamples cleanly.
  const innerBuf = await sharp(svg, { density: 72, limitInputPixels: false })
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  if (padding === 0) {
    await sharp(innerBuf).toFile(out);
  } else {
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: TERRACOTTA,
      },
    })
      .composite([{ input: innerBuf, top: padding, left: padding }])
      .png()
      .toFile(out);
  }
  console.log('  wrote', out);
}
