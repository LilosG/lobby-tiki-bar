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

  // `hours` = display strings used in UI components
  // `opens` / `closes` = ISO 24h format required by schema.org
  hours: [
    { day: 'Monday',    open: true,  hours: '3:00 PM – 8:00 PM',   opens: '15:00', closes: '20:00' },
    { day: 'Tuesday',   open: true,  hours: '3:00 PM – 8:00 PM',   opens: '15:00', closes: '20:00' },
    { day: 'Wednesday', open: true,  hours: '3:00 PM – 8:00 PM',   opens: '15:00', closes: '20:00' },
    { day: 'Thursday',  open: true,  hours: '3:00 PM – 9:00 PM',   opens: '15:00', closes: '21:00' },
    { day: 'Friday',    open: true,  hours: '3:00 PM – 10:00 PM',  opens: '15:00', closes: '22:00' },
    { day: 'Saturday',  open: true,  hours: '10:00 AM – 10:00 PM', opens: '10:00', closes: '22:00' },
    { day: 'Sunday',    open: true,  hours: '10:00 AM – 8:00 PM',  opens: '10:00', closes: '20:00' },
  ],

  happyHour: {
    days: 'Monday – Friday',
    hours: '3:00 PM – 5:00 PM',
    note: 'Daily specials all week. See happy hour page for full schedule.',
  },

  brunch: {
    days: 'Saturday & Sunday',
    hours: '10:00 AM – 3:00 PM',
  },

  social: {
    instagram: 'https://instagram.com/lobbytikibar',
    facebook:  'https://facebook.com/lobbytikibar',
    yelp:      'https://yelp.com/biz/the-lobby-tiki-bar-oceanside',
  },

  nav: [
    { label: 'Menu',           href: '/menu'           },
    { label: 'Brunch',         href: '/brunch'         },
    { label: 'Happy Hour',     href: '/happy-hour'     },
    { label: 'Events',         href: '/events'         },
    { label: 'Private Events', href: '/private-events' },
    { label: 'Venue',          href: '/the-lobby'      },
    { label: 'About',          href: '/about'          },
    { label: 'Blog',           href: '/blog'           },
  ],

  schema: {
    type: 'BarOrPub',
    id: 'https://lobbytikibar.com/#business',
    priceRange: '$$',
    servesCuisine: ['Tiki', 'Hawaiian', 'American'],
    geo: { lat: 33.1959, lng: -117.3795 },
    image: 'https://lobbytikibar.com/images/venue-interior-1.jpg',
    menuUrl: 'https://lobbytikibar.com/menu/',
  },
} as const;
