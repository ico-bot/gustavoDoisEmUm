import type { LucideIcon } from 'lucide-react';
import { Apple, Dumbbell, HeartHandshake } from 'lucide-react';
import mealGuide from '../assets/meal-guide.svg';
import fitnessPlan from '../assets/fitness-plan.svg';
import coachSupport from '../assets/coach-support.svg';

export interface CategoryItem {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image: string;
}

export const categories: CategoryItem[] = [
  {
    name: 'Plano alimentar',
    description: 'Estratégias práticas para organizar sua rotina e facilitar o emagrecimento.',
    href: '/produtos?categoria=Plano alimentar',
    icon: Apple,
    image: mealGuide,
  },
  {
    name: 'Treino',
    description: 'Programas pensados para sua realidade e para gerar mais consistência.',
    href: '/produtos?categoria=Treino',
    icon: Dumbbell,
    image: fitnessPlan,
  },
  {
    name: 'Acompanhamento',
    description: 'Orientação próxima para manter foco e ajustar o plano quando necessário.',
    href: '/produtos?categoria=Acompanhamento',
    icon: HeartHandshake,
    image: coachSupport,
  },
];
