import venueInterior1 from '../assets/images/venue-interior-1.jpg';
import venueInterior2 from '../assets/images/venue-interior-2.jpg';
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
    highlight: '30% Off All Rum',
    description: '30% off all rum drinks every Tuesday. Pair your favorite tiki cocktail with island-inspired tacos. Oceanside\'s best weekly ritual.',
    image: venueInterior1,
  },
  {
    slug: 'happy-hour',
    name: 'Happy Hour',
    day: 'Tuesday – Friday',
    time: '3:00 PM – 6:00 PM',
    highlight: 'Daily Deals',
    description: 'Discounted cocktails, beers, wine and bites every weekday afternoon. The best way to start the evening on Pier View Way.',
    image: venueInterior2,
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
