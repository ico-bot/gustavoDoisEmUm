import type { Product } from '../../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-sm text-slate-600">
        Nenhum produto corresponde à sua busca no momento.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
