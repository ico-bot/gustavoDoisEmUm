import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Menu,
  VolumeX,
  X,
} from 'lucide-react';
import professorImage from './assets/professor.png';
import {
  audienceItems,
  benefits,
  ctaIcon,
  ctaLabel,
  faqs,
  headerLinks,
  heroStats,
  journeySteps,
  productItems,
  testimonials,
} from './data/content';

const CtaButton = ({
  compact = false,
  label = ctaLabel,
}: {
  compact?: boolean;
  label?: string;
}) => {
  const Icon = ctaIcon;
  return (
    <a
      href="#offer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink px-6 py-3 font-semibold text-white transition hover:bg-[#d0175b] ${compact ? 'px-5 py-2.5 text-sm' : 'px-8 py-3.5 text-base'}`}
    >
      {label}
      <Icon className="h-5 w-5 transition group-hover:translate-x-1" />
    </a>
  );
};

function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const prevTestimonial = () => {
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>Gustavo | Rota 10x</title>
        <meta name="description" content="Método testado e aprovado por mais de 400 mulheres para emagrecer sem dietas malucas." />
        <meta property="og:title" content="Gustavo | Rota 10x" />
        <meta property="og:description" content="Descubra um método simples para emagrecer sem sofrimento." />
        <meta property="og:type" content="website" />
      </Helmet>

      <header className="sticky top-0 z-50 border-b border-pink-200 bg-white/60 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-xl font-bold text-brand-dark">
            Gustavo <span className="text-brand-pink">Rota 10x</span>
          </a>
          <nav className="hidden items-center gap-3 text-xs font-medium text-brand-dark lg:flex xl:gap-5 xl:text-sm">
            {headerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-brand-pink">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-pink text-white shadow-sm transition hover:bg-[#d0175b] lg:hidden"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-pink-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {headerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium text-brand-dark transition hover:bg-brand-pinkLight hover:text-brand-pink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-brand-dark/10 backdrop-blur-sm lg:hidden"
        />
      )}

      <main id="hero">
        <section className="bg-brand-pinkLight px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">
              Aula: Como diminuir o número da balança sem dietas malucas e sem depender de sorte
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-brand-dark sm:text-xl">
              Clique no vídeo e veja o passo a passo de tudo que você precisa fazer para perder de 5 a 10kg em até 10 semanas! Sem Mounjaro, sem passar fome e sem ficar horas treinando!
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-pink-100 bg-white p-4 shadow-soft"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] bg-black p-1">
                <div className="aspect-video overflow-hidden rounded-[1rem] bg-black">
                  <button className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute inset-0 bg-red-600/95" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center text-white">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                        <VolumeX className="h-6 w-6" />
                      </div>
                      <p className="text-lg font-semibold">Seu vídeo já começou.</p>
                      <p className="text-sm text-white/90">Clique para assistir</p>
                    </div>
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 rounded-b-[1rem] bg-black/70 px-4 py-3 text-sm text-white">
                  O vídeo inicia mudo para evitar surpresas. Clique para ativar o áudio.
                </div>
              </div>
            </motion.div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CtaButton label="Quero transformar meu corpo em 10 Semanas "/>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {heroStats.map((stat) => (
                <span key={stat} className="rounded-full border border-brand-pink/20 bg-white px-4 py-2 text-sm font-medium text-brand-dark shadow-sm">
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="scroll-mt-20 bg-brand-pinkLight px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-pink">Depoimentos</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark sm:text-4xl">O que as alunas falam!</h2>
            <div className="mt-10 rounded-[2rem] bg-white p-6 shadow-soft sm:p-10">
              <div className="mx-auto flex max-w-3xl flex-col items-center">
                <div className="flex items-center gap-3">
                  <button onClick={prevTestimonial} className="rounded-full border border-pink-100 p-2 text-brand-pink">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="w-full rounded-[1.5rem] border border-pink-100 bg-brand-pinkLight p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-pink">{testimonials[activeTestimonial].highlight}</p>
                    <p className="mt-4 text-xl leading-8 text-brand-dark">
                      “{testimonials[activeTestimonial].text}”
                    </p>
                    <p className="mt-6 font-semibold text-brand-dark">{testimonials[activeTestimonial].name}</p>
                  </div>
                  <button onClick={nextTestimonial} className="rounded-full border border-pink-100 p-2 text-brand-pink">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-6 flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 w-2.5 rounded-full ${index === activeTestimonial ? 'bg-brand-pink' : 'bg-pink-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <CtaButton label='Quero ter acesso ao Rota 10x agora '/>
            </div>
          </div>
        </section>

        <section id="benefits" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-pink">Benefícios imediatos</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark sm:text-4xl">
                O que muda pra você desde a primeira semana
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.article
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-3xl bg-white p-6 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.5rem]" style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-brand-dark">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-gray-600">{benefit.description}</p>
                  </motion.article>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <CtaButton label='Quero recuperar minha autoestima hoje'/>
            </div>
          </div>
        </section>

        <section id="product" className="scroll-mt-20 bg-brand-pinkLight px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-pink">Por dentro do produto</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark sm:text-4xl">
                  Conheça o passo a passo do Rota 10X
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  Um método estruturado para te levar do ponto inicial ao resultado com clareza, organização e estratégia, sem promessas milagrosas.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {productItems.map((item, index) => (
                  <div key={item} className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-pink text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-gray-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <CtaButton label='Quero me sentir bem ao me olhar no espelho'/>
            </div>
          </div>
        </section>

        <section id="professor" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-[2rem] bg-brand-pinkLight p-8 text-center shadow-sm">
              <div className="mx-auto overflow-hidden rounded-full bg-white p-1 shadow-inner" style={{ width: '14rem', height: '14rem' }}>
                <img src={professorImage} alt="Professor Gustavo" className="h-full w-full rounded-full object-cover" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-brand-pink">Seu professor</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark">Gustavo</h2>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-pink">Quem será seu professor</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark sm:text-4xl">
                Formação e experiência que unem treino e nutrição
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-700">
                Formado em Educação Física e pós-graduado em Treinamento Esportivo, além de formado em Nutrição, Gustavo uniu treino e alimentação em um único método simples, acessível e pensado para mulheres que querem transformar o corpo em até 10 semanas, sem precisar gastar muito dinheiro com comida cara e treinos genéricos.
              </p>
              <p className="mt-4 text-lg font-semibold text-brand-dark">
                Hoje já ajudou mais de 400 alunas a mudarem o corpo com esse método.
              </p>
              <div className="mt-8">
                <CtaButton label='Quero emagrecer sem remédios'/>
              </div>
            </div>
          </div>
        </section>

        <section id="audience" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-pink">Para quem é</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark sm:text-4xl">Isso é pra você que...</h2>
              <div className="mt-8 space-y-4">
                {audienceItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-4">
                    <Check className="mt-0.5 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-pink-100 bg-brand-pinkLight p-8">
              <h3 className="font-display text-2xl font-bold text-brand-dark">O que você recebe ao entrar no Rota 10x</h3>
              <div className="mt-8 space-y-5">
                {journeySteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-pink text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="comparison" className="scroll-mt-20 bg-brand-pinkLight px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-brand-pinkLight p-8 shadow-sm lg:p-10">
            <div className="flex flex-col gap-10">
              <div className="relative">
                <div className="relative grid items-start gap-6 rounded-[2rem] p-1 lg:grid-cols-2">
                  <div className="flex min-h-[18rem] flex-col justify-start rounded-[1.5rem] border border-green-200 bg-green-50 p-8">
                    <h3 className="font-display text-2xl font-semibold text-green-700">Com o Rota 10x</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-green-900">
                      <li>• Treinos eficientes e dieta calculada de acordo com seu gasto calórico.</li>
                      <li>• Alimentação flexível, podendo comer arroz, feijão, pão, macarrão!</li>
                      <li>• Sem efeito sanfona! Você vai emagrecer e permanecer magra com um método sustentável.</li>
                      <li>• Treinos que se renovam a cada 4 semanas, para não estagnar e continuar evoluindo.</li>
                    </ul>
                  </div>
                  <div className="flex justify-center lg:hidden">
                    <span className="font-display text-3xl font-black text-[#FACC15] drop-shadow-sm">VS</span>
                  </div>
                  <span className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-2 font-display text-3xl font-black text-[#FACC15] shadow-md lg:block">
                    VS
                  </span>
                  <div className="flex min-h-[18rem] flex-col justify-start rounded-[1.5rem] border border-red-200 bg-red-50 p-8">
                    <h3 className="font-display text-2xl font-semibold text-red-800">Sem o Rota 10x</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-red-900">
                      <li>• Dieta restritivas que você não consegue manter por muito tempo.</li>
                      <li>• Treinos genéricos sem nenhum padrão.</li>
                      <li>• Aquela dúvida se realmente está fazendo a coisa certa!</li>
                      <li>• Depender de sorte ou força de vontade.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="offer" className="scroll-mt-20 bg-[#fdf7fa] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-brand-pink/20 bg-gradient-to-br from-brand-pink via-[#f8c1d4] to-brand-pinkLight p-8 text-center shadow-soft lg:p-12">
            <div className="mx-auto grid max-w-4xl gap-4 text-left">
              <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-950 sm:p-6">
                <span className="shrink-0 text-2xl" aria-hidden="true">❌</span>
                <p className="text-lg leading-8">
                  Para ter um Personal Trainer hoje, você pagaria no mínimo <strong>R$ 500 por mês.</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-950 sm:p-6">
                <span className="shrink-0 text-2xl" aria-hidden="true">❌</span>
                <p className="text-lg leading-8">
                  Um Nutricionista para montar sua dieta custaria cerca de <strong>R$ 200 a R$ 300.</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-red-300 bg-red-100 p-5 font-semibold text-red-950 sm:p-6">
                <span className="shrink-0 text-2xl" aria-hidden="true">❌</span>
                <p className="text-lg leading-8">
                  Isso, em 10 semanas, daria no mínimo <strong className="text-xl">R$ 1.500!</strong>
                </p>
              </div>
            </div>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-brand-dark/70">Oferta</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-dark sm:text-4xl">
Mas entrando no Rota 10x, para perder de 5 a 10kg em até 10 semanas com treinos eficientes e um cardápio todo calculado pra você, você paga somente:  
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
                <p className="text-5xl font-black text-brand-dark">12x de R$15,20</p>
                <p className="mt-2 text-sm text-brand-pink">ou R$147,00 à vista</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <CtaButton label='Quero começar agora'/>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 bg-brand-pinkLight px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-pink">Perguntas frequentes</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark sm:text-4xl">Dúvidas comuns</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={faq.question} className="rounded-2xl border border-pink-100 bg-[#fdf7fa] p-5">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="font-semibold text-brand-dark">{faq.question}</span>
                      <span className="text-2xl font-semibold text-brand-pink">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && <p className="mt-4 text-sm leading-7 text-gray-700">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-pink-100 bg [#fdf7fa] px-4 py-8 text-center text-sm text-gray-700 sm:px-6 lg:px-8">
        <p>Gustavo Rota 10x • Método estruturado para mulheres que querem emagrecer sem sofrimento.</p>
      </footer>
    </>
  );
}

export default App;
