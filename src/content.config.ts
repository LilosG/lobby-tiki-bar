import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

const singleton = (name: string) => defineCollection({
  loader: glob({ pattern: `${name}.json`, base: './src/content' }),
  schema: z.any(),
});

const orderedName = z.object({
  order: z.number(),
  name: z.string(),
});

const cocktails = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/cocktails' }),
  schema: ({ image }) => orderedName.extend({
    description: z.string(),
    featured: z.boolean(),
    image: image().nullable(),
    note: z.string().optional(),
  }),
});

const nonAlcoholicDrinks = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/nonAlcoholicDrinks' }),
  schema: orderedName.extend({ description: z.string() }),
});

const draftBeers = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/draftBeers' }),
  schema: orderedName,
});

const cansBottles = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/cansBottles' }),
  schema: orderedName,
});

const wines = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/wines' }),
  schema: orderedName,
});

const foodItem = ({ image }: any) => orderedName.extend({
  description: z.string(),
  category: z.enum(['starters', 'tacos', 'entrees']),
  image: image(),
});

const foodStarters = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/foodStarters' }),
  schema: foodItem,
});

const foodTacos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/foodTacos' }),
  schema: foodItem,
});

const foodEntrees = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/foodEntrees' }),
  schema: foodItem,
});

const brunchItems = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/brunchItems' }),
  schema: ({ image }) => orderedName.extend({
    description: z.string(),
    image: image(),
  }),
});

const weeklySpecials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/weeklySpecials' }),
  schema: z.object({
    order: z.number(),
    day: z.string(),
    short: z.string(),
    deal: z.string(),
    note: z.string(),
  }),
});

const recurringEvents = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/recurringEvents' }),
  schema: ({ image }) => orderedName.extend({
    slug: z.string(),
    day: z.string(),
    time: z.string(),
    highlight: z.string(),
    description: z.string(),
    image: image(),
  }),
});

const upcomingEvents = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/upcomingEvents' }),
  schema: orderedName.extend({
    slug: z.string(),
    date: z.string(),
    time: z.string(),
    description: z.string(),
    ticketUrl: z.string().optional(),
  }),
});

const privateEventTypes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/privateEventTypes' }),
  schema: ({ image }) => z.object({
    order: z.number(),
    slug: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    heroLabel: z.string(),
    h1: z.string(),
    summary: z.string(),
    heroImage: image(),
    heroImageAlt: z.string(),
    intro: z.array(z.string()),
    details: z.array(z.object({ label: z.string(), value: z.string() })),
    features: z.array(z.string()),
    whyTitle: z.string(),
    whyBody: z.array(z.string()),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
    illustrationTitle: z.string(),
    illustrationScriptLine: z.string(),
    illustrationSubtitle: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    gallery: z.array(z.object({ img: image(), alt: z.string() })),
  }),
});

const faqCollection = (name: string) => defineCollection({
  loader: glob({ pattern: '**/*.json', base: `./src/content/${name}` }),
  schema: z.object({
    order: z.number(),
    q: z.string(),
    a: z.string(),
  }),
});

const brunchPage = defineCollection({
  loader: glob({ pattern: 'brunchPage.json', base: './src/content' }),
  schema: ({ image }) => z.object({
    gallery: z.object({
      items: z.array(z.object({ image: image(), alt: z.string() })),
    }).passthrough(),
  }).passthrough(),
});

const venuePage = defineCollection({
  loader: glob({ pattern: 'venuePage.json', base: './src/content' }),
  schema: ({ image }) => z.object({
    gallery: z.object({
      items: z.array(z.object({ image: image(), alt: z.string() })),
    }).passthrough(),
  }).passthrough(),
});

const privateEventsIndexPage = defineCollection({
  loader: glob({ pattern: 'privateEventsIndexPage.json', base: './src/content' }),
  schema: ({ image }) => z.object({
    eventTypes: z.object({
      cardImages: z.array(image()),
    }).passthrough(),
  }).passthrough(),
});

export const collections = {
  blog,
  siteSettings: singleton('siteSettings'),
  navigation: singleton('navigation'),
  home: singleton('home'),
  about: singleton('about'),
  contact: singleton('contact'),
  reservations: singleton('reservations'),
  menuPage: singleton('menuPage'),
  happyHourPage: singleton('happyHourPage'),
  brunchPage,
  eventsIndexPage: singleton('eventsIndexPage'),
  privateEventsIndexPage,
  venuePage,
  blogIndexPage: singleton('blogIndexPage'),
  cocktails,
  nonAlcoholicDrinks,
  draftBeers,
  cansBottles,
  wines,
  foodStarters,
  foodTacos,
  foodEntrees,
  brunchItems,
  weeklySpecials,
  recurringEvents,
  upcomingEvents,
  privateEventTypes,
  faqsAbout: faqCollection('faqsAbout'),
  faqsMenu: faqCollection('faqsMenu'),
  faqsHappyHour: faqCollection('faqsHappyHour'),
  faqsBrunch: faqCollection('faqsBrunch'),
  faqsEvents: faqCollection('faqsEvents'),
  faqsPrivateEvents: faqCollection('faqsPrivateEvents'),
  faqsVenue: faqCollection('faqsVenue'),
};
