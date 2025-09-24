import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Pics Prompts - Discover Amazing AI-Generated Images',
  description: 'Explore thousands of stunning AI-created images across various categories. Find inspiration and copy prompts to create your own masterpieces with AI tools like Google Gemini.',
  keywords: 'AI images, artificial intelligence, generated art, prompts, gallery, creative, digital art',
  authors: [{ name: 'AI Pics Prompts Team' }],
  creator: 'AI Pics Prompts',
  publisher: 'AI Pics Prompts',
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}