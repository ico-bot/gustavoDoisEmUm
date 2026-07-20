import { Search } from 'lucide-react';
import type { ChangeEvent } from 'react';
import { productCategories } from '../../data/products';

interface ProductFiltersProps {
  query: string;
  category: string;
  sortOrder: string;
  maxPrice?: number;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onClear: () => void;
  resultCount: number;
}

export function ProductFilters({
  query,
  category,
  sortOrder,
  maxPrice,
  onQueryChange,
  onCategoryChange,
  onSortChange,
  onPriceChange,
  onClear,
  resultCount,
}: ProductFiltersProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex-1">
          <label htmlFor="search" className="mb-2 block text-sm font-semibold text-slate-700">
            Buscar produtos
          </label>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
            <Search size={18} className="text-slate-400" />
            <input
              id="search"
              type="search"
              value={query}
              onChange={(event: ChangeEvent<HTMLInputElement>) => onQueryChange(event.target.value)}
              placeholder="Pesquisar por nome ou palavra-chave"
              className="w-full border-none bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:min-w-[540px]">
          <div>
            <label htmlFor="category" className="mb-2 block text-sm font-semibold text-slate-700">
              Categoria
            </label>
            <select
              id="category"
              value={category}
              onChange={(event) => onCategoryChange(event.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
            >
              <option value="">Todas</option>
              {productCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="price" className="mb-2 block text-sm font-semibold text-slate-700">
              Faixa de preço
            </label>
            <select
              id="price"
              value={maxPrice ?? ''}
              onChange={(event) => onPriceChange(event.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
            >
              <option value="">Todos os valores</option>
              <option value="150">Até R$ 150</option>
              <option value="250">Até R$ 250</option>
              <option value="400">Até R$ 400</option>
            </select>
          </div>

          <div>
            <label htmlFor="sort" className="mb-2 block text-sm font-semibold text-slate-700">
              Ordenar por
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(event) => onSortChange(event.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
            >
              <option value="featured">Destaque</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
              <option value="name">Ordem alfabética</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">{resultCount} resultado{resultCount === 1 ? '' : 's'} encontrado{resultCount === 1 ? '' : 's'}</p>
        <button type="button" onClick={onClear} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700">
          Limpar filtros
        </button>
      </div>
    </section>
  );
}
