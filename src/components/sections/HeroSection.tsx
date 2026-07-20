import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroIllustration from '../../assets/hero-illustration.svg';
import { siteConfig } from '../../config/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';

export function HeroSection() {
  return (
    <section id="inicio" className="bg-[linear-gradient(135deg,#f8fff8_0%,#eefaf3_45%,#f9fcff_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Programa MSV para emagrecimento com acompanhamento
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Emagrecimento mais simples, com orientação real e resultados em foco.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={createWhatsAppUrl(siteConfig.whatsappNumber, 'Olá! Quero saber mais sobre o Projeto MSV.')} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-700">
              {siteConfig.primaryAction} <ArrowRight size={18} />
            </a>
            <Link to="/produtos" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700">
              <Play size={18} /> Ver produtos
            </Link>
          </div>
          <div className="mt-8 rounded-[24px] border border-emerald-100 bg-white/80 p-4 text-sm text-slate-600 shadow-sm">
            <p className="font-semibold text-slate-900">Acompanhe um plano pensado para sua rotina e para o seu objetivo.</p>
          </div>
        </div>
        <img src={heroIllustration} alt="Ilustração de um plano fitness e emagrecimento" className="w-full max-w-xl rounded-[32px] shadow-2xl" loading="eager" />
      </div>
    </section>
  );
}
