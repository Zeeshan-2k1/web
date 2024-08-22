import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';
import { ThemeProviderWrapper } from '@/providers/ThemeProviders';
import { NavProvider } from '@/context/NavContext';

const font = Syne({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zeeshan Ashraf',
  description: 'Hi there! I am Zeeshan Ashraf.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavProvider>
            <main className="-z-40">{children}</main>
          </NavProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
