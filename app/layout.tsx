import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Script from 'next/script';
import { MetaPixel } from '@/components/MetaPixel';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meragidecor.com'),
  title: 'Free Wedding Decor Consultation | The Meragi Decor',
  description:
    'Get honest, practical wedding decor guidance for your Kathmandu venue, date, ideas, and budget—with no pressure and no obligation.',
  icons: { icon: '/images/favicon.png' },
  openGraph: {
    title: 'Free Wedding Decor Consultation | The Meragi Decor',
    description:
      'Talk through your Kathmandu wedding venue, budget, and decor ideas. Get real answers with no pressure and no obligation.',
    type: 'website',
    locale: 'en_NP',
    siteName: 'The Meragi Decor',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Free wedding decor consultation for Kathmandu couples' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Wedding Decor Consultation | The Meragi Decor',
    description: 'Honest wedding decor guidance for your venue, date, ideas, and budget.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        {children}
        <MetaPixel />
        <Script id="reset-landing-page-position" strategy="beforeInteractive">
          {`if (window.location.pathname === '/' && window.location.hash === '#consultation') {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
            window.scrollTo(0, 0);
          }`}
        </Script>
      </body>
    </html>
  );
}
