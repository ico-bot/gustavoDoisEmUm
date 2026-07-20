import { Helmet } from 'react-helmet-async';
import { PageLayout } from '../components/layout/PageLayout';
import { HeroSection } from '../components/sections/HeroSection';
import { CategoriesSection } from '../components/sections/CategoriesSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { AboutSection } from '../components/sections/AboutSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { getFeaturedProducts } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { siteConfig } from '../config/site';

export function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <PageLayout title={`${siteConfig.name} | Emagrecimento com acompanhamento`} description={siteConfig.description}>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={siteConfig.url} />
      </Helmet>
      <HeroSection />
      <CategoriesSection />
      <section id="produtos" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Produtos em destaque</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Conheça as opções principais do Projeto MSV.</h2>
            </div>
            <a href="/produtos" className="text-sm font-semibold text-emerald-700">Ver todos os produtos</a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <FinalCTA />
    </PageLayout>
  );
}
