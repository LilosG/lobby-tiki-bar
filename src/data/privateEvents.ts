import type { ImageMetadata } from 'astro';
import venueInterior1 from '../assets/images/venue-interior-1.jpg';
import venueInterior2 from '../assets/images/venue-interior-2.jpg';
import venueInterior3 from '../assets/images/venue-interior-3.jpg';
import venueInterior4 from '../assets/images/venue-interior-4.jpg';
import venueBar       from '../assets/images/venue-bar.jpg';
import venueBar2      from '../assets/images/venue-bar-2.jpg';
import venueDetail    from '../assets/images/venue-detail.jpg';
import venueDetail2   from '../assets/images/venue-detail-2.jpg';

export interface PrivateEventType {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  heroLabel: string;
  h1: string;
  summary: string;
  heroImage: ImageMetadata;
  heroImageAlt: string;
  intro: string[];
  details: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  gallery: { img: ImageMetadata; alt: string }[];
}

export const PRIVATE_EVENT_TYPES: PrivateEventType[] = [
  {
    slug: 'birthday-party-oceanside',
    seoTitle: 'Birthday Party Venue Oceanside CA | The Lobby Tiki Bar',
    metaDescription: 'Book your birthday party at The Lobby Tiki Bar in Oceanside CA. Private venue, full tiki bar program, island-inspired food, 200+ capacity. 408 Pier View Way inside The Brick Hotel.',
    heroLabel: 'Private Events',
    h1: 'Birthday Parties in Oceanside',
    summary: 'Full bar program, custom packages, and a tiki atmosphere that handles the ambiance. The Lobby is the birthday venue Oceanside needed.',
    heroImage: venueInterior1,
    heroImageAlt: 'Birthday party venue at The Lobby Tiki Bar Oceanside CA',
    intro: [
      "The Lobby Tiki Bar is Oceanside's best venue for birthday parties that people actually talk about. Inside The Brick Hotel on Pier View Way, you get a tiki atmosphere built for celebration — bamboo, warm golden light, craft cocktails, and island-inspired food that sets the tone from the moment guests walk in.",
      "Whether you're looking for a partial venue reservation or a full bar buyout, we'll put together a package built around your group, your occasion, and what you want the night to feel like. Full bar program, custom drink packages, and a kitchen built to feed the whole party.",
    ],
    details: [
      { label: 'Capacity',    value: 'Up to 200+ guests'             },
      { label: 'Location',    value: '408 Pier View Way, Oceanside'  },
      { label: 'Bar Program', value: 'Full tiki cocktails + rum'     },
      { label: 'Food',        value: 'Island-inspired plates'        },
      { label: 'Options',     value: 'Partial or full buyout'        },
    ],
    faqs: [
      { q: 'How do I book a birthday party at The Lobby?',           a: "Email info@lobbytikibar.com or call (858) 304-7725 with your date, group size, and what you're looking for. We'll respond with availability and package options." },
      { q: 'What is the venue capacity for a birthday party?',       a: 'The Lobby can accommodate up to 200+ guests for a full buyout. Smaller partial reservations are available depending on the night.' },
      { q: 'Is there a food and beverage minimum?',                  a: 'Yes, minimums vary by night and group size. Contact us directly for current minimums and custom package pricing.' },
      { q: 'Can I bring a cake or outside desserts?',                a: "Outside cakes and desserts are welcome. Let us know in advance and we'll make sure there's a plan for it." },
    ],
    gallery: [
      { img: venueInterior2, alt: 'The Lobby Tiki Bar interior Oceanside — tiki atmosphere for private events' },
      { img: venueBar,       alt: 'Full bar at The Lobby Tiki Bar Oceanside private event space'               },
      { img: venueDetail,    alt: 'Tiki detail at The Lobby Tiki Bar Oceanside CA'                             },
    ],
  },
  {
    slug: 'corporate-events-oceanside',
    seoTitle: 'Corporate Event Venue Oceanside CA | The Lobby Tiki Bar',
    metaDescription: 'Corporate events and team dinners at The Lobby Tiki Bar in Oceanside CA. Private venue, full bar program, island-inspired food, 200+ capacity. 408 Pier View Way.',
    heroLabel: 'Private Events',
    h1: 'Corporate Events in Oceanside',
    summary: 'Team dinners, client entertainment, and company celebrations that people actually want to attend. Full bar and kitchen program for groups of any size.',
    heroImage: venueInterior2,
    heroImageAlt: 'Corporate event venue at The Lobby Tiki Bar Oceanside CA',
    intro: [
      "The Lobby Tiki Bar is the Oceanside corporate event venue your team will actually want to attend. Inside The Brick Hotel on Pier View Way, the space delivers tiki atmosphere, craft cocktails, and island-inspired food in a setting built for groups who want something more interesting than a conference room.",
      "Team dinners, client entertainment, company celebrations, and end-of-quarter events — we handle the atmosphere so you can focus on the people. Full bar program, custom food and drink packages, and flexible venue configuration for groups of any size.",
    ],
    details: [
      { label: 'Capacity',    value: 'Up to 200+ guests'             },
      { label: 'Location',    value: '408 Pier View Way, Oceanside'  },
      { label: 'Bar Program', value: 'Full tiki cocktails + rum'     },
      { label: 'Food',        value: 'Custom island-inspired menus'  },
      { label: 'Options',     value: 'Partial or full buyout'        },
    ],
    faqs: [
      { q: 'Does The Lobby host corporate team dinners?',             a: 'Yes. We regularly host team dinners, client events, and company celebrations. Partial and full venue options available depending on group size.' },
      { q: 'Can you accommodate dietary restrictions for groups?',    a: "Yes. Our island-inspired menu includes options for common dietary needs. Let us know your group's requirements when booking." },
      { q: 'How far in advance should we book a corporate event?',    a: 'We recommend booking at least 3–4 weeks in advance for larger groups, earlier for weekend dates which fill quickly.' },
      { q: 'Is AV equipment available?',                              a: "Basic AV arrangements can be discussed when booking. Contact us with your requirements and we'll let you know what we can accommodate." },
    ],
    gallery: [
      { img: venueInterior3, alt: 'The Lobby Tiki Bar Oceanside interior — corporate event space'         },
      { img: venueBar2,      alt: 'Bar setup at The Lobby Tiki Bar Oceanside corporate event venue'       },
      { img: venueDetail2,   alt: 'Venue detail at The Lobby Tiki Bar Oceanside CA'                       },
    ],
  },
  {
    slug: 'bar-buyout-oceanside',
    seoTitle: 'Private Bar Buyout Oceanside CA | The Lobby Tiki Bar',
    metaDescription: 'Private bar buyout at The Lobby Tiki Bar in Oceanside CA. The whole venue, all yours. Full tiki bar program, 200+ capacity. 408 Pier View Way inside The Brick Hotel.',
    heroLabel: 'Private Events',
    h1: 'Private Bar Buyout in Oceanside',
    summary: "The whole venue, all yours. Full tiki bar program, island kitchen, and exclusive access to one of Oceanside's most distinct bars.",
    heroImage: venueBar,
    heroImageAlt: 'Private bar buyout at The Lobby Tiki Bar Oceanside CA',
    intro: [
      "The whole venue, all yours. A full bar buyout at The Lobby Tiki Bar means your group gets the entire space — the full tiki bar program, island-inspired kitchen, and an atmosphere on Pier View Way that handles the vibe without any extra effort on your part.",
      "Bar buyouts work for large birthday groups, milestone celebrations, bachelorette parties, corporate events, and any occasion that calls for exclusive access to one of Oceanside's most distinct bars. We'll work with you on a custom food and drink package that fits what you have in mind.",
    ],
    details: [
      { label: 'Capacity',    value: 'Up to 200+ guests'             },
      { label: 'Exclusivity', value: 'Full venue — your group only'  },
      { label: 'Bar Program', value: 'Full tiki cocktails + rum'     },
      { label: 'Food',        value: 'Island-inspired plates'        },
      { label: 'Location',    value: '408 Pier View Way, Oceanside'  },
    ],
    faqs: [
      { q: 'What does a full bar buyout at The Lobby include?',       a: "A full buyout gives your group exclusive access to the entire venue — bar, seating, and kitchen — for the duration of your event. Custom food and drink packages are built around your headcount and preferences." },
      { q: 'What is the minimum spend for a bar buyout?',             a: 'Minimums vary based on the day of the week and expected headcount. Contact us directly for current buyout pricing.' },
      { q: 'Can we do a partial buyout for a smaller group?',         a: "Yes, partial venue reservations are available for groups that don't need exclusive access to the full space." },
      { q: 'Are bar buyouts available on weekends?',                  a: 'Yes, including Friday and Saturday nights. Weekend dates book quickly — reach out as early as possible.' },
    ],
    gallery: [
      { img: venueInterior1, alt: 'The Lobby Tiki Bar full venue Oceanside — bar buyout space'                   },
      { img: venueInterior4, alt: 'Interior of The Lobby Tiki Bar Oceanside CA during private event'             },
      { img: venueDetail,    alt: 'Tiki decor at The Lobby Tiki Bar Oceanside private bar buyout venue'          },
    ],
  },
  {
    slug: 'rehearsal-dinner-oceanside',
    seoTitle: 'Rehearsal Dinner Venue Oceanside CA | The Lobby Tiki Bar',
    metaDescription: 'Rehearsal dinner venue in Oceanside CA at The Lobby Tiki Bar. Steps from the Oceanside Pier inside The Brick Hotel. Craft tiki cocktails, island food, 200+ capacity.',
    heroLabel: 'Private Events',
    h1: 'Rehearsal Dinners in Oceanside',
    summary: 'Steps from the Oceanside Pier. Craft cocktails, island-inspired dinner plates, and a tiki atmosphere your wedding party will remember.',
    heroImage: venueInterior3,
    heroImageAlt: 'Rehearsal dinner venue at The Lobby Tiki Bar Oceanside CA',
    intro: [
      "Give your wedding party a rehearsal dinner they'll be talking about at the reception. The Lobby Tiki Bar sits inside The Brick Hotel on Pier View Way in Oceanside — steps from the pier, filled with the kind of tiki atmosphere that makes the evening feel like the celebration it is.",
      "Craft cocktails, island-inspired food, warm tiki lighting, and a space that transports your guests. Whether you're planning an intimate gathering or a full venue buyout for a larger wedding party, we'll build a package around your headcount, timeline, and what you want the night to feel like.",
    ],
    details: [
      { label: 'Capacity',    value: 'Up to 200+ guests'             },
      { label: 'Location',    value: 'Steps from the Oceanside Pier' },
      { label: 'Setting',     value: 'The Brick Hotel, Pier View Way'},
      { label: 'Bar Program', value: 'Full tiki cocktails + rum'     },
      { label: 'Food',        value: 'Island-inspired dinner plates' },
    ],
    faqs: [
      { q: 'Is The Lobby a good venue for a rehearsal dinner in Oceanside?', a: "Yes. The Lobby's tiki atmosphere, full bar program, and island-inspired food make it a memorable setting for pre-wedding gatherings. We're steps from the Oceanside Pier inside The Brick Hotel." },
      { q: 'How many guests can you accommodate for a rehearsal dinner?',    a: "The Lobby can host rehearsal dinners from intimate groups of 20 up to full venue buyouts of 200+ guests." },
      { q: 'Can you accommodate dietary restrictions?',                      a: "Yes. Let us know your group's dietary needs when inquiring and we'll work through menu options with you." },
      { q: 'Do you offer rehearsal dinner packages?',                        a: "Yes. We build custom packages based on your headcount, food and drink preferences, and event duration. Contact us to start planning." },
    ],
    gallery: [
      { img: venueInterior4, alt: 'The Lobby Tiki Bar Oceanside — rehearsal dinner venue interior' },
      { img: venueBar2,      alt: 'Bar at The Lobby Tiki Bar Oceanside rehearsal dinner venue'     },
      { img: venueDetail2,   alt: 'Venue detail at The Lobby Tiki Bar Oceanside CA'                },
    ],
  },
];
