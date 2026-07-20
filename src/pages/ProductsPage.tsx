import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageLayout } from '../components/layout/PageLayout';
import { ProductFilters } from '../components/product/ProductFilters';
import { ProductGrid } from '../components/product/ProductGrid';
import { filterProductsByCategory, filterProductsByPrice, searchProducts, sortProducts } from '../data/products';
import { siteConfig } from '../config/site';

export function ProductsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const filteredProducts = useMemo(() => {
    let result = searchProducts(query);

    if (category) {
      result = filterProductsByCategory(category);
    }

    if (maxPrice) {
      result = filterProductsByPrice(result, Number(maxPrice));
    }

    result = sortProducts(result, sortOrder);
    return result;
  }, [category, maxPrice, query, sortOrder]);

  const handleClear = () => {
    setQuery('');
    setCategory('');
    setSortOrder('featured');
    setMaxPrice('');
  };

  return (
    <PageLayout title={`Produtos | ${siteConfig.name}`} description="Conheça os produtos e categorias do Projeto MSV e peça pelo WhatsApp.">
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="bg-[linear-gradient(135deg,#f7fff8_0%,#f4faff_100%)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Produtos</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Explore os produtos do Projeto MSV.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Encontre opções para alimentação, treino e acompanhamento, com a possibilidade de conversar pelo WhatsApp para mais detalhes.
            </p>
          </div>
          <div className="mt-10">
            <ProductFilters
              query={query}
              category={category}
              sortOrder={sortOrder}
              maxPrice={maxPrice ? Number(maxPrice) : undefined}
              onQueryChange={setQuery}
              onCategoryChange={setCategory}
              onSortChange={setSortOrder}
              onPriceChange={setMaxPrice}
              onClear={handleClear}
              resultCount={filteredProducts.length}
            />
          </div>
          <div className="mt-10">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
