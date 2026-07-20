import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { formatCurrency } from '../../lib/formatters';
import { createProductWhatsAppUrl } from '../../lib/whatsapp';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img src={product.images[0]} alt={product.name} className="h-48 w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {product.category}
          </span>
          {product.featured ? <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">Destaque</span> : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{product.shortDescription}</p>
        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-700">
          <CheckCircle2 size={16} className="text-emerald-600" />
          {product.available ? 'Disponível para início' : 'Consulte disponibilidade'}
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          {product.promotionalPrice ? <span className="text-xl font-semibold text-slate-900">{formatCurrency(product.promotionalPrice)}</span> : null}
          {product.price ? <span className={`text-sm ${product.promotionalPrice ? 'text-slate-400 line-through' : 'text-slate-900 font-semibold'}`}>{formatCurrency(product.price)}</span> : null}
          {!product.price && !product.promotionalPrice ? <span className="text-sm font-semibold text-slate-900">Consulte o valor</span> : null}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to={`/produto/${product.slug}`} className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700">
            Ver detalhes
          </Link>
          <a href={createProductWhatsAppUrl(product.name)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
            Pedir pelo WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
