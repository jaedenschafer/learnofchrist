import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TranslationProvider } from '@/lib/TranslationContext';
import { StudyLevelProvider } from '@/lib/StudyLevelContext';

export const viewport: Viewport = {
  themeColor: '#F5F5F7',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://learnofchrist.com'),
  title: 'Learn of Christ - Bible Study for Understanding Jesus',
  description: 'Deepen your understanding of Jesus Christ through comprehensive scripture study guides, study plans, and devotionals.',
  keywords: 'Bible study, Jesus Christ, scripture, Christian learning, devotionals',
  authors: [{ name: 'Learn of Christ' }],
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
    <html lang="en">
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
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </StudyLevelProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
