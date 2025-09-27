import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PromotionModal } from '@/components/PromotionModal';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-pics-prompts.com';
const SITE_NAME = 'AI Pics Prompts';
const SITE_DESCRIPTION = 'Explore thousands of stunning AI-created images across various categories. Find inspiration and copy prompts to create your own masterpieces with AI tools like Google Gemini.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AI Pics Prompts - Discover Amazing AI-Generated Images',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: 'AI images, artificial intelligence, generated art, prompts, gallery, creative, digital art, AI art, AI gallery, AI inspiration',
  authors: [{ name: 'AI Pics Prompts Team' }],
  creator: 'AI Pics Prompts',
  publisher: 'AI Pics Prompts',
  applicationName: SITE_NAME,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/assets/favicon/favicon.ico.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon/favicon2.ico.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/assets/favicon/favicon.ico.png',
    apple: [
      { url: '/assets/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'AI Pics Prompts - Discover Amazing AI-Generated Images',
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'AI Pics Prompts - Discover Amazing AI-Generated Images',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Pics Prompts - Discover Amazing AI-Generated Images',
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
    creator: '@aipicsprompts',
    site: '@aipicsprompts',
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
  alternates: {
    canonical: SITE_URL,
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/assets/favicon/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/assets/favicon/favicon.ico" sizes="96x96" />
        <link rel="apple-touch-icon" href="/assets/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI Pics Prompts',
              description: 'Discover amazing AI-generated images and prompts',
              url: 'https://ai-pics-prompts.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://ai-pics-prompts.com?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <PromotionModal />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}