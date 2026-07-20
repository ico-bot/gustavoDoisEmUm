import { formatCurrency } from '../../lib/formatters';

interface ProductPriceProps {
  price?: number;
  promotionalPrice?: number;
}

export function ProductPrice({ price, promotionalPrice }: ProductPriceProps) {
  if (!price && !promotionalPrice) {
    return <p className="text-base font-semibold text-slate-700">Consulte o valor</p>;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {promotionalPrice ? (
        <span className="text-3xl font-semibold text-slate-900">{formatCurrency(promotionalPrice)}</span>
      ) : null}
      {price ? (
        <span className={`text-lg ${promotionalPrice ? 'text-slate-400 line-through' : 'font-semibold text-slate-900'}`}>
          {formatCurrency(price)}
        </span>
      ) : null}
    </div>
  );
}
