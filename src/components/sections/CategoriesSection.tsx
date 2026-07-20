import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

export function CategoriesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Categorias</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Escolha o caminho que faz mais sentido para você.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} to={category.href} className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={category.image} alt={category.name} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{category.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1">
                    Ver produtos →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
