import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PromotionModal } from '@/components/PromotionModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Pics Prompts - Discover Amazing AI-Generated Images',
  description: 'Explore thousands of stunning AI-created images across various categories. Find inspiration and copy prompts to create your own masterpieces with AI tools like Google Gemini.',
  keywords: 'AI images, artificial intelligence, generated art, prompts, gallery, creative, digital art',
  authors: [{ name: 'AI Pics Prompts Team' }],
  creator: 'AI Pics Prompts',
  publisher: 'AI Pics Prompts',
  icons: {
    icon: [
      { url: '/assets/favicon/favicon.ico.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon/favicon2.ico.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/assets/favicon/favicon.ico.png',
    apple: '/assets/favicon/favicon.ico.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-pics-prompts.com',
    title: 'AI Pics Prompts - Discover Amazing AI-Generated Images',
    description: 'Explore thousands of stunning AI-created images across various categories.',
    siteName: 'AI Pics Prompts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Pics Prompts - Discover Amazing AI-Generated Images',
    description: 'Explore thousands of stunning AI-created images across various categories.',
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