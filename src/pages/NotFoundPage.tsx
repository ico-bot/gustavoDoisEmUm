import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';

export function NotFoundPage() {
  return (
    <PageLayout title={`Página não encontrada | ${siteConfig.name}`} description="A página solicitada não foi encontrada.">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Erro 404</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Página não encontrada</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">A rota acessada não existe ou foi alterada. Você pode retornar ao início ou visitar os produtos.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white">Voltar ao início</Link>
            <Link to="/produtos" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700">Ver produtos</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
