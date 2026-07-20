import { slugify } from '../lib/formatters';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price?: number;
  promotionalPrice?: number;
  images: string[];
  features: string[];
  specifications?: Record<string, string>;
  featured?: boolean;
  available?: boolean;
}

export const productCategories = ['Plano alimentar', 'Treino', 'Acompanhamento'];

export const products: Product[] = [
  {
    id: 'msv-1',
    slug: slugify('Projeto MSV - Plano alimentar'),
    name: 'Projeto MSV',
    category: 'Plano alimentar',
    shortDescription: 'Estratégia personalizada para perder peso com mais controle e menos improviso.',
    description:
      'O Projeto MSV reúne uma abordagem prática para emagrecimento com orientação sobre alimentação, rotina e escolhas mais sustentáveis. O foco é ajudar você a construir resultados duradouros com acompanhamento próximo.',
    price: 199,
    promotionalPrice: 149,
    images: ['/src/assets/meal-guide.svg', '/src/assets/fitness-plan.svg'],
    features: ['Estratégia alimentar personalizada', 'Planejamento simples e prático', 'Orientação para manter consistência'],
    specifications: {
      'Formato': 'Online',
      'Duração': 'A definir conforme plano',
      'Acesso': 'Material e acompanhamento',
    },
    featured: true,
    available: true,
  },
  {
    id: 'msv-2',
    slug: slugify('Projeto MSV - Treino personalizado'),
    name: 'Treino personalizado',
    category: 'Treino',
    shortDescription: 'Programa de treino adaptado à sua rotina e objetivo de emagrecimento.',
    description:
      'O plano de treino é montado com base nas suas condições, disponibilidade e metas, para que o processo seja mais eficiente e seguro.',
    price: 249,
    images: ['/src/assets/fitness-plan.svg', '/src/assets/hero-illustration.svg'],
    features: ['Treino individualizado', 'Rotina organizada', 'Foco em desempenho e emagrecimento'],
    specifications: {
      'Formato': 'Online',
      'Nível': 'Adaptável',
      'Objetivo': 'Emagrecimento e condicionamento',
    },
    featured: true,
    available: true,
  },
  {
    id: 'msv-3',
    slug: slugify('Projeto MSV - Acompanhamento completo'),
    name: 'Acompanhamento completo',
    category: 'Acompanhamento',
    shortDescription: 'Suporte próximo para manter a motivação e ajustar o plano conforme necessário.',
    description:
      'Com acompanhamento especializado, você recebe orientação contínua para manter o progresso com mais confiança e menos frustração.',
    price: 399,
    promotionalPrice: 329,
    images: ['/src/assets/coach-support.svg', '/src/assets/hero-illustration.svg'],
    features: ['Acompanhamento contínuo', 'Ajustes durante o processo', 'Orientação para rotina e alimentação'],
    specifications: {
      'Formato': 'Online',
      'Suporte': 'Mensal',
      'Ideal para': 'Quem quer acompanhamento próximo',
    },
    featured: true,
    available: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    const haystack = [product.name, product.category, product.shortDescription, product.description, ...(product.features ?? [])]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function filterProductsByCategory(category: string): Product[] {
  if (!category) {
    return products;
  }

  return products.filter((product) => product.category === category);
}

export function filterProductsByPrice(productsToFilter: Product[], maxPrice?: number): Product[] {
  if (!maxPrice) {
    return productsToFilter;
  }

  return productsToFilter.filter((product) => {
    const price = product.promotionalPrice ?? product.price;
    return typeof price === 'number' && price <= maxPrice;
  });
}

export function sortProducts(productsToSort: Product[], order: string): Product[] {
  const copy = [...productsToSort];

  switch (order) {
    case 'price-asc':
      return copy.sort((a, b) => (a.promotionalPrice ?? a.price ?? 999999) - (b.promotionalPrice ?? b.price ?? 999999));
    case 'price-desc':
      return copy.sort((a, b) => (b.promotionalPrice ?? b.price ?? 0) - (a.promotionalPrice ?? a.price ?? 0));
    case 'name':
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return copy;
  }
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(currentSlug: string): Product[] {
  return products.filter((product) => product.slug !== currentSlug).slice(0, 3);
}
