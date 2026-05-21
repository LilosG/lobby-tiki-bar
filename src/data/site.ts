export const SITE = {
  name: 'The Lobby Tiki Bar',
  tagline: 'Tiki Bar & Grill in Oceanside, CA',
  description: 'Craft tiki cocktails, island-inspired food, and Oceanside\'s best happy hour. The Lobby Tiki Bar inside The Brick Hotel on Pier View Way.',
  url: 'https://lobbytikibar.com',

  address: {
    street: '408 Pier View Way',
    city: 'Oceanside',
    state: 'CA',
    zip: '92054',
    full: '408 Pier View Way, Oceanside, CA 92054',
    mapsUrl: 'https://maps.google.com/?q=408+Pier+View+Way+Oceanside+CA+92054',
  },

  phone: {
    display: '(858) 304-7725',
    tel: '+18583047725',
  },

  email: 'info@lobbytikibar.com',

  reservations: {
    url: 'https://tables.toasttab.com/restaurants/92e5306b-e932-4406-876b-91277626cb5c/findTime',
    label: 'Reserve a Table',
  },

  order: {
    url: 'https://cococabanaoside.com/order',
    label: 'Order Online',
  },

  hours: [
    { day: 'Monday',    open: false, hours: 'Closed' },
    { day: 'Tuesday',   open: true,  hours: '3:00 PM – 9:00 PM' },
    { day: 'Wednesday', open: true,  hours: '3:00 PM – 9:00 PM' },
    { day: 'Thursday',  open: true,  hours: '3:00 PM – 10:00 PM' },
    { day: 'Friday',    open: true,  hours: '3:00 PM – 12:00 AM' },
    { day: 'Saturday',  open: true,  hours: '10:00 AM – 12:00 AM' },
    { day: 'Sunday',    open: true,  hours: '10:00 AM – 8:00 PM' },
  ],

  happyHour: {
    days: 'Tuesday – Friday',
    hours: '3:00 PM – 6:00 PM',
    tikTacoNote: '30% off all rum every Tuesday',
  },

  social: {
    instagram: 'https://instagram.com/lobbytikibar',
    facebook:  'https://facebook.com/lobbytikibar',
    yelp:      'https://yelp.com/biz/the-lobby-tiki-bar-oceanside',
  },

  nav: [
    { label: 'Menu',           href: '/menu' },
    { label: 'Happy Hour',     href: '/happy-hour' },
    { label: 'Events',         href: '/events' },
    { label: 'Private Events', href: '/private-events' },
    { label: 'The Bar',        href: '/the-lobby' },
    { label: 'About',          href: '/about' },
  ],

  schema: {
    type: 'BarOrPub',
    priceRange: '$$',
    servesCuisine: ['Tiki', 'Hawaiian', 'American'],
    geo: { lat: 33.1959, lng: -117.3795 },
  },
} as const;
