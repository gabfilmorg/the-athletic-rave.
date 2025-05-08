import type { ReactNode } from 'react';
import '../../app/globals.css';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans min-h-screen flex flex-col">
        <header>
          <Header />
        </header>
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
} 