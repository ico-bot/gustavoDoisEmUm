import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutSection() {
  return (
    <section id="sobre" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Sobre a empresa</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Mais do que um plano: um suporte para transformar hábitos.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A Gustavo2em1 atua com uma proposta prática e acolhedora para quem deseja emagrecer com mais clareza, disciplina e apoio. O foco é ajudar o público a perder de 5 a 10kg em até 10 semanas com treino e dieta individualizados.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            O processo é pensado para respeitar a realidade de cada pessoa, oferecendo uma experiência mais alinhada ao cotidiano e às metas.
          </p>
          <Link to="/sobre" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-700">
            Conhecer a proposta <ArrowRight size={18} />
          </Link>
        </div>
        <div className="rounded-[28px] bg-[linear-gradient(135deg,#ecfdf3_0%,#f8fcff_100%)] p-8">
          <h3 className="text-xl font-semibold text-slate-900">O que a marca representa</h3>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>• Proposta confiável e acolhedora para o emagrecimento.</li>
            <li>• Planejamento orientado para resultados sustentáveis.</li>
            <li>• Atendimento com foco em clareza, acompanhamento e rotina.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
