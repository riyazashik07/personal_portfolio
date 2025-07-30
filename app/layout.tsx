import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/common/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Riyaz J - Full Stack Developer',
  description: 'Portfolio of Riyaz J - Full Stack Developer specializing in modern web technologies',
  keywords: 'Riyaz J, Full Stack Developer, Web Developer, React, Next.js, Portfolio',
  authors: [{ name: 'Riyaz J' }],
  openGraph: {
    title: 'Riyaz J - Full Stack Developer',
    description: 'Portfolio of Riyaz J - Full Stack Developer specializing in modern web technologies',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}