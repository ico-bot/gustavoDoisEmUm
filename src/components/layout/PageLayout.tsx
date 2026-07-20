import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
