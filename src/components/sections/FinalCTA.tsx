import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';

export function FinalCTA() {
  return (
    <section id="contato" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-slate-900 px-8 py-12 text-white shadow-2xl lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Pronto para começar?</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Receba um plano mais claro para o seu emagrecimento.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Entre em contato e descubra se o Projeto MSV faz sentido para a sua rotina e objetivo.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={createWhatsAppUrl(siteConfig.whatsappNumber, 'Olá! Quero iniciar meu processo de emagrecimento com o Projeto MSV.')} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-400">
            {siteConfig.primaryAction} <ArrowRight size={18} />
          </a>
          <a href="/contato" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-white">
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
