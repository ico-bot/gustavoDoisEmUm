import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';

export function AboutPage() {
  return (
    <PageLayout title={`Sobre | ${siteConfig.name}`} description="Conheça a proposta da Gustavo2em1, seus diferenciais e o posicionamento da marca.">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Sobre</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Seu emagrecimento com mais clareza e apoio.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A Gustavo2em1 é uma marca voltada para mulheres que desejam perder peso de forma mais estratégica, com treinos e dieta individualizados. A proposta está ligada à confiança, acolhimento e a um plano claro para alcançar resultados em até 10 semanas.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Proposta</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Criar um caminho prático para emagrecimento com orientação personalizada e foco em hábitos sustentáveis.</p>
            </div>
            <div className="rounded-[24px] bg-emerald-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Valores</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Acolhimento, clareza, disciplina e transparência são os pilares da comunicação e da experiência do cliente.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
