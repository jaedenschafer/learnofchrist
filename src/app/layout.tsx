import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TranslationProvider } from '@/lib/TranslationContext';
import { StudyLevelProvider } from '@/lib/StudyLevelContext';
import { DenominationProvider } from '@/lib/DenominationContext';
import { ReadingPrefsProvider } from '@/lib/ReadingPrefsContext';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F7' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

// Synchronous pre-hydration theme script — prevents flash of wrong theme on load.
const themeInitScript = `(function(){try{var t=localStorage.getItem('loc-theme');var r=t==='dark'||t==='light'?t:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-reader-theme',r);if(r==='dark'){document.documentElement.style.colorScheme='dark';}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL('https://learnofchrist.com'),
  title: 'Learn of Christ - Bible Study for Understanding Jesus',
  description: 'Deepen your understanding of Jesus Christ through comprehensive scripture study guides, study plans, and devotionals.',
  keywords: 'Bible study, Jesus Christ, scripture, Christian learning, devotionals',
  authors: [{ name: 'Learn of Christ' }],
  applicationName: 'Learn of Christ',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Learn of Christ',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://learnofchrist.com',
    title: 'Learn of Christ',
    description: 'Deepen your understanding of Jesus Christ through scripture study',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Learn of Christ',
              url: 'https://learnofchrist.com',
              description: 'Bible study platform with KJV, ASV, and WEB translations, chapter-by-chapter study guides, and Christ-centered commentary.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://learnofchrist.com/bible?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <TranslationProvider>
          <StudyLevelProvider>
            <DenominationProvider>
              <ReadingPrefsProvider>
                <Navbar />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </ReadingPrefsProvider>
            </DenominationProvider>
          </StudyLevelProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
