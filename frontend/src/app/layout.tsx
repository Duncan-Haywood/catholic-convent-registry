import type { Metadata } from 'next';
import { Inter, Crimson_Text } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonText = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Catholic Convent Registry',
    default: 'Catholic Convent Registry - Connect with Religious Communities',
  },
  description: 'A platform connecting lay Catholics with consecrated religious communities worldwide, making charitable giving simple, transparent, and spiritually meaningful.',
  keywords: [
    'catholic',
    'convent',
    'monastery',
    'religious community',
    'donations',
    'charity',
    'consecrated life',
    'religious order',
    'spiritual giving',
    'catholic charity',
  ],
  authors: [{ name: 'Catholic Convent Registry Team' }],
  creator: 'Catholic Convent Registry',
  publisher: 'Catholic Convent Registry',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://catholicconventregistry.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Catholic Convent Registry',
    description: 'Connect with consecrated religious communities worldwide',
    url: 'https://catholicconventregistry.org',
    siteName: 'Catholic Convent Registry',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Catholic Convent Registry - Connect with Religious Communities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catholic Convent Registry',
    description: 'Connect with consecrated religious communities worldwide',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
} 