import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Learn of Christ',
    short_name: 'Learn of Christ',
    description:
      'Free Bible study for everyone — all 72 books, 8 translations, Christ-centered study guides, no account needed.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#F5F5F7',
    theme_color: '#007AFF',
    categories: ['books', 'education', 'lifestyle'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Read John 1',
        short_name: 'John 1',
        description: 'Start with the Word made flesh',
        url: '/bible/john/1',
      },
      {
        name: 'Read Genesis 1',
        short_name: 'Genesis 1',
        description: 'Start at the beginning',
        url: '/bible/genesis/1',
      },
      {
        name: 'Browse Bible',
        short_name: 'Bible',
        description: 'All 72 books',
        url: '/bible',
      },
    ],
  };
}
