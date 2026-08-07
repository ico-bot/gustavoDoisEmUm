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
import testimonial5720 from '../assets/IMG_5720.PNG';
import testimonial5721 from '../assets/IMG_5721.PNG';
import testimonial5722 from '../assets/IMG_5722.PNG';
import testimonial5723 from '../assets/IMG_5723.PNG';
import testimonial5724 from '../assets/IMG_5724.PNG';
import testimonial5725 from '../assets/IMG_5725.PNG';
import testimonial5726 from '../assets/IMG_5726.PNG';
import testimonial5727 from '../assets/IMG_5727.PNG';
import testimonial5728 from '../assets/IMG_5728.PNG';
import testimonial5729 from '../assets/IMG_5729.PNG';
import testimonial5730 from '../assets/IMG_5730.PNG';
import testimonial5731 from '../assets/IMG_5731.PNG';
import visualCaseCarolIsidoro from '../assets/casosvisuais/Carol Isidoro_.jpg';
import visualCaseCarol from '../assets/casosvisuais/Carol.jpg';
import visualCaseGustavo from '../assets/casosvisuais/Gustavo.jpg';
import visualCaseJeane from '../assets/casosvisuais/Jeane_.jpg';
import visualCaseSamantha1 from '../assets/casosvisuais/Samantha (1).jpg';
import visualCaseSamantha2 from '../assets/casosvisuais/Samantha (2).jpg';
import visualCaseTamiris from "../assets/casosvisuais/Tamiris_.jpg";

export const heroStats = [
  'Acesso imediato após a compra',
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
    title: 'Tudo isso gastando 10x menos ',
    description: 'Você não precisa gastar uma forturna para emagrecer.',
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

export type Testimonial = {
  image: string;
  alt: string;
};

export const testimonials: Testimonial[] = [
  testimonial5720,
  testimonial5721,
  testimonial5722,
  testimonial5723,
  testimonial5724,
  testimonial5725,
  testimonial5726,
  testimonial5727,
  testimonial5728,
  testimonial5729,
  testimonial5730,
  testimonial5731,
].map((image, index) => ({
  image,
  alt: `Print ${index + 1} de depoimento recebido pelo WhatsApp`,
}));

export const visualCases: Testimonial[] = [
  { image: visualCaseGustavo, alt: 'Resultado visual de Gustavo' },
  { image: visualCaseCarolIsidoro, alt: 'Resultado visual de Carol Isidoro' },
  { image: visualCaseCarol, alt: 'Resultado visual de Carol' },
  { image: visualCaseJeane, alt: 'Resultado visual de Jeane' },
  { image: visualCaseSamantha1, alt: 'Primeiro resultado visual de Samantha' },
  { image: visualCaseSamantha2, alt: 'Segundo resultado visual de Samantha' },
  {image: visualCaseTamiris, alt: 'Resultado visual de Tamiris'}
];

export const headerLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Resultados', href: '#visual-cases' },
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
