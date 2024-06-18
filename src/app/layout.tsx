import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib';
import { Analytics } from '@vercel/analytics/react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aliataf.com'),
  title: {
    default: 'Ali Ataf',
    template: '%s | Ali Ataf',
  },
  description: "Ali Ataf's website",
  publisher: 'Ali Ataf',
  creator: 'Ali Ataf',
  category: 'Portfolio',
  twitter: {
    card: 'summary_large_image',
    site: '@aliataf_x',
    creator: '@aliataf_x',
    images: 'https://example.com/og.png',
    title: 'My Twitter account',
    description: 'My Twitter account',
  },
  openGraph: {
    type: 'website',
    title: 'Ali Ataf',
    siteName: "Ali Ataf's website",
    description: "Ali Ataf's website",
    url: 'https://aliataf.com',
    emails: 'ali@aliataf.com',
  },
  robots: 'index, follow',
  authors: { name: 'Ali Ataf', url: 'https://aliataf.com' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-background font-sans antialiased dark', fontSans.variable)}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
