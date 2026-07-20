import { HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';

const benefits = [
  {
    title: 'Método claro',
    description: 'Uma proposta objetiva para quem deseja emagrecer com mais organização e foco.',
    icon: Sparkles,
  },
  {
    title: 'Apoio real',
    description: 'Orientação personalizada para deixar o processo mais leve e consistente.',
    icon: HeartPulse,
  },
  {
    title: 'Confiança',
    description: 'Trabalho com uma abordagem acolhedora e profissional, sem promessas exageradas.',
    icon: ShieldCheck,
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Diferenciais</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Por que o trabalho é diferente.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
