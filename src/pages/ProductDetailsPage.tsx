import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductPrice } from '../components/product/ProductPrice';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { siteConfig } from '../config/site';
import { createProductWhatsAppUrl } from '../lib/whatsapp';

export function ProductDetailsPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <PageLayout title="Produto não encontrado | Gustavo2em1" description="O produto solicitado não foi encontrado.">
        <div className="px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-slate-900">Produto não encontrado</h1>
          <p className="mt-4 text-lg text-slate-600">Não encontramos esse item no catálogo. Volte para a página de produtos e explore outras opções.</p>
          <Link to="/produtos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white">
            <ArrowLeft size={18} /> Voltar aos produtos
          </Link>
        </div>
      </PageLayout>
    );
  }

  const relatedProducts = getRelatedProducts(product.slug);

  return (
    <PageLayout title={`${product.name} | ${siteConfig.name}`} description={product.shortDescription}>
      <Helmet>
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            category: product.category,
            image: product.images,
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'BRL',
              price: product.promotionalPrice ?? product.price ?? 0,
            },
          })}
        </script>
      </Helmet>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-emerald-700">Início</Link>
            <ChevronRight size={16} />
            <Link to="/produtos" className="hover:text-emerald-700">Produtos</Link>
            <ChevronRight size={16} />
            <span className="text-slate-700">{product.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ProductGallery images={product.images} name={product.name} />
            <div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {product.category}
              </span>
              <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">{product.name}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">{product.description}</p>
              <div className="mt-6">
                <ProductPrice price={product.price} promotionalPrice={product.promotionalPrice} />
              </div>
              <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Disponibilidade</p>
                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  {product.available ? 'Disponível para início' : 'Consulte disponibilidade'}
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={createProductWhatsAppUrl(product.name)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                  Pedir pelo WhatsApp
                </a>
                <Link to="/contato" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700">
                  Falar com a equipe
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Características</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3"><CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-600" />{feature}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Especificações</h2>
              <dl className="mt-6 space-y-4 text-sm text-slate-600">
                {product.specifications ? Object.entries(product.specifications).map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                    <dt className="font-semibold text-slate-700">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                )) : <p>Nenhuma especificação informada no momento.</p>}
              </dl>
            </div>
          </div>

          {relatedProducts.length ? (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-slate-900">Produtos relacionados</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {relatedProducts.map((related) => (
                  <div key={related.id} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900">{related.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{related.shortDescription}</p>
                    <Link to={`/produto/${related.slug}`} className="mt-5 inline-flex text-sm font-semibold text-emerald-700">Ver detalhes</Link>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </PageLayout>
  );
}
