import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const singleton = (name: string) => glob({ pattern: `${name}.json`, base: './src/content' });
const jsonCollection = (name: string) => glob({ pattern: '**/*.json', base: `./src/content/${name}` });

const pageSingleton = (name: string) => defineCollection({
  loader: singleton(name),
  schema: z.record(z.string(), z.any()),
});

const faqs = (name: string) => defineCollection({
  loader: jsonCollection(name),
  schema: z.object({ q: z.string(), a: z.string() }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.string(),
    image:       z.string(),
    imageAlt:    z.string().optional(),
  }),
});

const siteSettings = defineCollection({
  loader: singleton('siteSettings'),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    url: z.string(),
    address: z.object({
      street: z.string(), city: z.string(), state: z.string(), zip: z.string(),
      full: z.string(), mapsUrl: z.string(),
    }),
    phone: z.object({ display: z.string(), tel: z.string() }),
    email: z.string(),
    reservations: z.object({ url: z.string(), label: z.string() }),
    order: z.object({ url: z.string(), label: z.string() }),
    hours: z.array(z.object({
      day: z.string(), open: z.boolean(), hours: z.string(), opens: z.string(), closes: z.string(),
    })),
    happyHour: z.object({ days: z.string(), hours: z.string(), note: z.string() }),
    brunch: z.object({ days: z.string(), hours: z.string() }),
    social: z.object({ instagram: z.string(), facebook: z.string(), yelp: z.string() }),
    schema: z.object({
      type: z.string(), id: z.string(), priceRange: z.string(),
      servesCuisine: z.array(z.string()),
      geo: z.object({ lat: z.number(), lng: z.number() }),
      image: z.string(), menuUrl: z.string(),
    }),
  }),
});

const navigation = defineCollection({
  loader: singleton('navigation'),
  schema: z.object({ links: z.array(z.object({ label: z.string(), href: z.string() })) }),
});

const cocktails = defineCollection({
  loader: jsonCollection('cocktails'),
  schema: ({ image }) => z.object({
    name: z.string(), description: z.string(), featured: z.boolean(),
    image: image().nullable(), note: z.string().optional(),
  }),
});

const namedDescription = (name: string) => defineCollection({
  loader: jsonCollection(name),
  schema: z.object({ name: z.string(), description: z.string() }),
});

const named = (name: string) => defineCollection({
  loader: jsonCollection(name),
  schema: z.object({ name: z.string() }),
});

const food = (name: string) => defineCollection({
  loader: jsonCollection(name),
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    image: image(),
    category: z.enum(['starters', 'tacos', 'entrees']),
  }),
});

const brunchItems = defineCollection({
  loader: jsonCollection('brunchItems'),
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    image: image(),
  }),
});

const weeklySpecials = defineCollection({
  loader: jsonCollection('weeklySpecials'),
  schema: z.object({ day: z.string(), short: z.string(), deal: z.string(), note: z.string() }),
});

const recurringEvents = defineCollection({
  loader: jsonCollection('recurringEvents'),
  schema: ({ image }) => z.object({
    order: z.number(),
    slug: z.string(), name: z.string(), day: z.string(), time: z.string(),
    highlight: z.string(), description: z.string(), image: image(),
  }),
});

const upcomingEvents = defineCollection({
  loader: jsonCollection('upcomingEvents'),
  schema: z.object({
    slug: z.string(), name: z.string(), date: z.string(), time: z.string(),
    description: z.string(), ticketUrl: z.string().optional(),
  }),
});

const privateEventTypes = defineCollection({
  loader: jsonCollection('privateEventTypes'),
  schema: ({ image }) => z.object({
    order: z.number(),
    slug: z.string(), seoTitle: z.string(), metaDescription: z.string(), heroLabel: z.string(),
    h1: z.string(), summary: z.string(), heroImage: image(), heroImageAlt: z.string(),
    intro: z.array(z.string()),
    details: z.array(z.object({ label: z.string(), value: z.string() })),
    features: z.array(z.string()), whyTitle: z.string(), whyBody: z.array(z.string()),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
    illustrationTitle: z.string(), illustrationScriptLine: z.string(), illustrationSubtitle: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    gallery: z.array(z.object({ img: image(), alt: z.string() })),
  }),
});

export const collections = {
  blog,
  siteSettings,
  navigation,
  home: pageSingleton('home'),
  about: pageSingleton('about'),
  contact: pageSingleton('contact'),
  reservations: pageSingleton('reservations'),
  menuPage: pageSingleton('menuPage'),
  happyHourPage: pageSingleton('happyHourPage'),
  brunchPage: pageSingleton('brunchPage'),
  eventsIndexPage: pageSingleton('eventsIndexPage'),
  privateEventsIndexPage: pageSingleton('privateEventsIndexPage'),
  venuePage: pageSingleton('venuePage'),
  blogIndexPage: pageSingleton('blogIndexPage'),
  cocktails,
  nonAlcoholicDrinks: namedDescription('nonAlcoholicDrinks'),
  draftBeers: named('draftBeers'),
  cansBottles: named('cansBottles'),
  wines: named('wines'),
  foodStarters: food('foodStarters'),
  foodTacos: food('foodTacos'),
  foodEntrees: food('foodEntrees'),
  brunchItems,
  weeklySpecials,
  recurringEvents,
  upcomingEvents,
  privateEventTypes,
  happyHourFaqs: faqs('happyHourFaqs'),
  menuFaqs: faqs('menuFaqs'),
  brunchFaqs: faqs('brunchFaqs'),
  venueFaqs: faqs('venueFaqs'),
  aboutFaqs: faqs('aboutFaqs'),
  eventsFaqs: faqs('eventsFaqs'),
  privateEventsFaqs: faqs('privateEventsFaqs'),
};
