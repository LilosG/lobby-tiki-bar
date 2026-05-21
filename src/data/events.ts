export const RECURRING_EVENTS = [
  {
    slug: 'tiki-taco-tuesday',
    name: 'Tiki Taco Tuesday',
    day: 'Every Tuesday',
    time: '3:00 PM – Close',
    highlight: '30% Off All Rum',
    description: '30% off all rum drinks every Tuesday. Pair your favorite tiki cocktail with island-inspired tacos. Oceanside\'s best weekly ritual.',
    image: '/images/venue-interior-1.jpg',
  },
  {
    slug: 'happy-hour',
    name: 'Happy Hour',
    day: 'Tuesday – Friday',
    time: '3:00 PM – 6:00 PM',
    highlight: 'Daily Deals',
    description: 'Discounted cocktails, beers, wine and bites every weekday afternoon. The best way to start the evening on Pier View Way.',
    image: '/images/venue-interior-2.jpg',
  },
] as const;

export const UPCOMING_EVENTS: {
  slug: string;
  name: string;
  date: string;
  time: string;
  description: string;
  ticketUrl?: string;
}[] = [];
