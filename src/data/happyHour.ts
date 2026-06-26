export const WEEKLY_SPECIALS = [
  { day: 'Monday',    short: 'Mon',  deal: 'All Day Happy Hour',  note: '' },
  { day: 'Tuesday',   short: 'Tue',  deal: '$6 Tacos',            note: '$5 Wells' },
  { day: 'Wednesday', short: 'Wed',  deal: '$12 Burger and Beer', note: '' },
  { day: 'Thursday',  short: 'Thu',  deal: '$6 Mai Tais',         note: '' },
  { day: 'Friday',    short: 'Fri',  deal: '3–5PM Happy Hour',    note: '' },
] as const;

export const HAPPY_HOUR_DEALS = {
  drinks: [
    { label: 'Cocktails & Wines', price: '$10' },
    { label: 'Beers',             price: '$5' },
  ],
  food: {
    price: '$15',
    items: ['Chicken Caesar Wrap', 'Wings', 'Ceviche'],
  },
} as const;
