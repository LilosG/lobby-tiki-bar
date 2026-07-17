import foodKaluaTacos2 from '../assets/images/food-kalua-tacos-2.jpg';
import drinkDsc06150   from '../assets/images/drink-dsc06150.jpg';
import type { ImageMetadata } from 'astro';

export interface RecurringEvent {
  slug: string;
  name: string;
  day: string;
  time: string;
  highlight: string;
  description: string;
  image: ImageMetadata;
}

export const RECURRING_EVENTS: RecurringEvent[] = [
  {
    slug: 'tiki-taco-tuesday',
    name: 'Tiki Taco Tuesday',
    day: 'Every Tuesday',
    time: '3:00 PM – Close',
    highlight: '$6 Tacos · $5 Wells',
    description: '$6 tacos and $5 wells every Tuesday. Pair your favorite tiki cocktail with island-inspired tacos. Oceanside\'s best weekly ritual.',
    image: foodKaluaTacos2,
  },
  {
    slug: 'happy-hour',
    name: 'Happy Hour',
    day: 'Monday – Friday',
    time: 'Mon: All Day · Tue–Fri: 3:00 PM – 5:00 PM',
    highlight: 'Daily Deals',
    description: 'Discounted cocktails, beers, wine and bites Monday through Friday. Monday is all-day happy hour; Tuesday through Friday runs 3:00 PM to 5:00 PM.',
    image: drinkDsc06150,
  },
];

export const UPCOMING_EVENTS: {
  slug: string;
  name: string;
  date: string;
  time: string;
  description: string;
  ticketUrl?: string;
}[] = [];
