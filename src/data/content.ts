import {
  ArrowRight,
  CircleDollarSign,
  Clock3,
  HeartHandshake,
  Home,
  Sparkles,
  TrendingUp,
  Trophy,
  UtensilsCrossed,
} from 'lucide-react';

export const heroStats = [
  'Acesso imediato após a compra',
  'Treinos gravados, no seu tempo',
  'Metodologia testada em mais de 400 alunas',
];

export const benefits = [
  {
    title: 'Chega de treinos genéricos da academia.',
    description: 'Você terá acesso a uma metodologia de treinos realmente eficiente.',
    icon: Clock3,
    color: '#6B7280',
  },
  {
    title: 'Chega de passar fome para emagrecer ',
    description: 'Você vai poder comer arroz, pão, macarrão! Tudo na quantidade exata.',
    icon: UtensilsCrossed,
    color: '#F28C28',
  },
  {
    title: 'Resultado visível em semanas',
    description: 'Em 10 semanas você verá seu corpo mudar completamente.',
    icon: TrendingUp,
    color: '#2E8B57',
  },
  {
    title: 'Até 10x mais barato',
    description: 'Tudo isso gastando 10X menos',
    icon: CircleDollarSign,
    color: '#FACC15',
  },
];

export const productItems = [
  'Faça uma avaliação com fotos e medidas para comparar seus resultados.',
  'Identifique seu nível de treinamento para saber por onde começar.',
  'Faça o cálculo do seu gasto calórico para saber exatamente quanto precisa comer.',
  'Baixe o cardápio e siga a dieta referente ao seu objetivo.',
  'Dê início aos treinos do Rota 10x, para treinar em casa ou na academia.',
];

export const audienceItems = [
  'Quer mudar o corpo, mas não sabe por onde começar.',
  'Já tentou dieta e treino por conta própria e não conseguiu manter.',
  'Não tem dinheiro para pagar personal e nutricionista separados.',
  'Treina em casa e não sabe o que treinar nem o que comer.',
  'Quer clareza de verdade, sem promessas milagrosas.',
];

export const journeySteps = [
  'Uma programação de treinos completa para você mudar seu corpo em 10 semanas, treinando em casa ou na academia.',
  'Vídeos de todos os exercícios para você não ficar perdida na academia.',
  'Treinos gravados na íntegra para treinar em casa no melhor horário pra você!',
  'Calculadora específica para saber exatamente o seu gasto calórico.',
  'Cardápio Flexível com as dietas todas calculadas, para comer na quantidade exata que você precisa.',
];

export const faqs = [
  {
    question: 'Preciso de equipamentos para treinar em casa?',
    answer:
      'Não! A maioria dos exercícios é realizado com o peso do próprio corpo! No máximo utilizamos duas garrafas com água para usar como halteres.',
  },
  {
    question: 'Funciona mesmo se eu nunca treinei antes?',
    answer:
      'Sim! Você terá treinos de adaptação, voltados para pessoas que nunca treinaram ou estão há muito tempo sem treinar.',
  },
  {
    question: 'Vou precisar cortar arroz, pão ou doce?',
    answer:
      'Não! O Cardápio é composto por alimentos do dia a dia, só que tudo calculado. Podendo incluir até um docinho sem prejudicar o processo.',
  },
  {
    question: 'Quanto tempo tenho de acesso?',
    answer: 'Você tem 1 ano de acesso completo pela plataforma ou aplicativo.',
  },
  {
    question: 'Como terei acesso aos treinos?',
    answer:
      'Você pode acessar pelo notebook, pelo celular com o aplicativo e pode até colocar na televisão para fazer os treinos em casa.',
  },
  {
    question: 'Em quanto tempo vejo resultado?',
    answer: 'Se colocar em prática o passo a passo do Rota 10x, o seu corpo vai mudar completamente em até 10 semanas.'
  }
];

export const testimonials = [
  {
    name: 'Fernanda, 32 anos',
    text: 'Eu finalmente consegui seguir uma rotina sem me sentir presa. O método trouxe clareza e resultados reais.',
    highlight: 'Transformação real em 10 semanas',
  },
  {
    name: 'Marina, 29 anos',
    text: 'Nunca achei que conseguiria treinar em casa e emagrecer sem passar fome. Hoje eu sigo com confiança.',
    highlight: 'Mais leve e muito mais confiante',
  },
  {
    name: 'Camila, 35 anos',
    text: 'O plano fechou tudo para mim: treino, alimentação e acompanhamento. O resultado apareceu de forma sustentável.',
    highlight: 'Sem efeito sanfona',
  },
];

export const headerLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Conteúdo', href: '#product' },
  { label: 'Professor', href: '#professor' },
  { label: 'Para quem é', href: '#audience' },
  { label: 'Comparativo', href: '#comparison' },
  { label: 'Oferta', href: '#offer' },
  { label: 'FAQ', href: '#faq' },
];

export const featureCards = [
  { title: 'Método estruturado', description: 'Plano claro, prático e orientado a resultados.', icon: Sparkles },
  { title: 'Acompanhamento real', description: 'Tudo pensado para que você siga com confiança.', icon: HeartHandshake },
  { title: 'Flexibilidade', description: 'Treine onde e quando quiser, sem complicação.', icon: Home },
  { title: 'Resultados duradouros', description: 'Sem passar fome nem depender da sorte.', icon: Trophy },
];

export const ctaLabel = 'Quero perder gordura sem sofrer';
export const ctaIcon = ArrowRight;
