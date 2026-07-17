import { createElement } from "react";
import { collection, config, fields, singleton } from "@keystatic/core";

import siteSettingsData from "./src/content/siteSettings.json";
import navigationData from "./src/content/navigation.json";
import homeData from "./src/content/home.json";
import aboutData from "./src/content/about.json";
import contactData from "./src/content/contact.json";
import reservationsData from "./src/content/reservations.json";
import menuPageData from "./src/content/menuPage.json";
import happyHourPageData from "./src/content/happyHourPage.json";
import brunchPageData from "./src/content/brunchPage.json";
import eventsIndexPageData from "./src/content/eventsIndexPage.json";
import privateEventsIndexPageData from "./src/content/privateEventsIndexPage.json";
import venuePageData from "./src/content/venuePage.json";
import blogIndexPageData from "./src/content/blogIndexPage.json";

type ImageStorage = "public" | "asset";
type SchemaContext = {
  namespace: string;
  path: string[];
  imageStorage: ImageStorage;
};

const humanize = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

const fieldLabels: Record<string, string> = {
  seo: "Search Engine Settings",
  hero: "Hero Section",
  title: "Section Heading",
  subtitle: "Supporting Text",
  label: "Small Section Label",
  body: "Section Text",
  scriptLine: "Script Accent Text",
  imageAlt: "Image Description for Accessibility",
  q: "Question",
  a: "Answer",
  href: "Link Destination",
  url: "Website Address",
  mapsUrl: "Google Maps Link",
  tel: "Phone Number for Links",
  opens: "Opening Time",
  closes: "Closing Time",
  faqs: "Frequently Asked Questions",
  stats: "Venue Statistics",
  lat: "Latitude",
  lng: "Longitude",
  h1: "Main Page Heading",
  seoTitle: "Search Result Title",
  metaDescription: "Search Result Description",
  ticketUrl: "Ticket Link",
  heroImage: "Hero Image",
  heroImageAlt: "Hero Image Description for Accessibility",
  image: "Image",
  img: "Gallery Image",
  order: "Display Order",
  slug: "Page URL",
  featured: "Feature This Item",
};

function labelFor(key: string, path: string[]) {
  const fullPath = [...path, key].join(".");
  if (fullPath === "seo.title") return "Search Result Title";
  if (fullPath === "seo.description") return "Search Result Description";
  if (fullPath === "hero.title") return "Main Page Heading";
  return fieldLabels[key] ?? humanize(key);
}

function descriptionFor(key: string, path: string[], value: unknown) {
  const fullPath = [...path, key].join(".");
  const label = labelFor(key, path).toLowerCase();

  if (fullPath === "seo.title" || key === "seoTitle") {
    return "Title shown in search results. Keep it concise and specific.";
  }
  if (fullPath === "seo.description" || key === "metaDescription") {
    return "Summary shown in search results. Aim for one clear sentence about this page.";
  }
  if (fullPath === "hero.title" || key === "h1") {
    return "Large main heading shown at the top of this page.";
  }
  if (key === "imageAlt" || key.endsWith("ImageAlt") || key === "alt") {
    return "Describe what is visible in the image for screen readers and search engines.";
  }
  if (key === "slug")
    return "Controls the page URL. Do not change it after publishing unless instructed.";
  if (key === "order")
    return "Controls display order. Lower numbers appear first.";
  if (key === "q")
    return "Question displayed in the frequently asked questions section.";
  if (key === "a") return "Answer displayed with this question.";
  if (key === "href")
    return "Enter an internal path such as /contact or a complete external web address.";
  if (key.toLowerCase().includes("url"))
    return `Enter the complete web address used for the ${label}.`;
  if (Array.isArray(value))
    return `Add, edit, remove, or reorder the ${label}.`;
  if (typeof value === "object" && value !== null)
    return `Edit the ${label} used on the website.`;
  if (typeof value === "boolean")
    return `Controls whether the ${label} setting is enabled.`;
  if (typeof value === "number")
    return `Enter the numeric value used for the ${label}.`;
  return `Edit the ${label} shown on the website.`;
}

/**
 * The only image-field constructor in this config.
 * `namespace` is intentionally required and has no default. Every call receives a
 * full content-area/field-path namespace, which makes its storage path unique.
 */
function requiredImageField(
  namespace: string,
  storage: ImageStorage,
  label: string,
  description: string,
) {
  const assetRoot = `images/cms/${namespace}`;
  return fields.image({
    label,
    description,
    directory:
      storage === "asset" ? `src/assets/${assetRoot}` : `public/${assetRoot}`,
    publicPath:
      storage === "asset" ? `../../assets/${assetRoot}/` : `/${assetRoot}/`,
    validation: { isRequired: true },
  });
}

const multilineKeys = new Set([
  "description",
  "body",
  "summary",
  "subtitle",
  "note",
  "deal",
  "short",
  "highlight",
  "metaDescription",
]);

function isImageValue(key: string, value: unknown) {
  return (
    typeof value === "string" &&
    key !== "imageAlt" &&
    key !== "heroImageAlt" &&
    key !== "illustrationImageAlt" &&
    (key === "image" || key === "img" || key.endsWith("Image"))
  );
}

function itemLabel(props: any, fallback: string) {
  return (
    props?.fields?.name?.value ||
    props?.fields?.title?.value ||
    props?.fields?.label?.value ||
    props?.fields?.day?.value ||
    props?.fields?.q?.value ||
    props?.value ||
    fallback
  );
}

function schemaFromSample(
  sample: Record<string, unknown>,
  context: SchemaContext,
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(sample).map(([key, value]) => [
      key,
      fieldFromValue(key, value, context),
    ]),
  );
}

function fieldFromValue(
  key: string,
  value: unknown,
  context: SchemaContext,
): any {
  const label = labelFor(key, context.path);
  const description = descriptionFor(key, context.path, value);
  const nextPath = [...context.path, key];

  if (isImageValue(key, value)) {
    return requiredImageField(
      [context.namespace, ...nextPath].join("/"),
      context.imageStorage,
      label,
      description,
    );
  }

  if (Array.isArray(value)) {
    const sampleItem = value[0];
    const singularLabel = humanize(key.replace(/s$/, ""));
    const element =
      typeof sampleItem === "object" && sampleItem !== null
        ? fields.object(
            schemaFromSample(sampleItem as Record<string, unknown>, {
              ...context,
              path: nextPath,
            }),
            {
              label: singularLabel,
              description: `Edit one item in the ${label.toLowerCase()} list.`,
            },
          )
        : typeof sampleItem === "number"
          ? fields.number({
              label: singularLabel,
              description: `Enter one numeric value in the ${label.toLowerCase()} list.`,
              validation: { isRequired: true },
            })
          : fields.text({
              label: singularLabel,
              description: `Enter one item in the ${label.toLowerCase()} list.`,
              multiline: multilineKeys.has(key),
              validation: { isRequired: true },
            });

    return fields.array(element, {
      label,
      description,
      itemLabel: (props) => itemLabel(props, singularLabel),
    });
  }

  if (typeof value === "object" && value !== null) {
    return fields.object(
      schemaFromSample(value as Record<string, unknown>, {
        ...context,
        path: nextPath,
      }),
      { label, description },
    );
  }

  if (typeof value === "number") {
    return fields.number({
      label,
      description,
      validation: { isRequired: true },
    });
  }
  if (typeof value === "boolean") {
    return fields.checkbox({ label, description, defaultValue: value });
  }
  return fields.text({
    label,
    description,
    multiline: multilineKeys.has(key),
    validation: { isRequired: true },
  });
}

function jsonSingleton(
  label: string,
  name: string,
  sample: Record<string, unknown>,
) {
  return singleton({
    label,
    path: `src/content/${name}`,
    format: { data: "json" },
    schema: schemaFromSample(sample, {
      namespace: name,
      path: [],
      imageStorage: "public",
    }),
  });
}

const requiredText = (label: string, description: string, multiline = false) =>
  fields.text({
    label,
    description,
    multiline,
    validation: { isRequired: true },
  });

const optionalText = (label: string, description: string, multiline = false) =>
  fields.text({
    label,
    description,
    multiline,
    validation: { isRequired: false },
  });

const nameSlug = (label: string, description: string) =>
  fields.slug({
    name: { label, description, validation: { isRequired: true } },
  });

const faqCollection = (label: string, name: string) =>
  collection({
    label,
    path: `src/content/${name}/*`,
    slugField: "q",
    format: { data: "json" },
    columns: ["q"],
    schema: {
      q: nameSlug(
        "Question",
        "Question displayed in this page’s frequently asked questions section.",
      ),
      a: requiredText(
        "Answer",
        "Answer displayed when a visitor opens this question.",
        true,
      ),
    },
  });

const namedCollection = (
  label: string,
  name: string,
  withDescription = false,
) =>
  collection({
    label,
    path: `src/content/${name}/*`,
    slugField: "name",
    format: { data: "json" },
    columns: ["name"],
    schema: {
      name: nameSlug(
        "Item Name",
        `Name displayed for this ${label.toLowerCase()} item.`,
      ),
      ...(withDescription
        ? {
            description: requiredText(
              "Item Description",
              "Short description displayed with this item.",
              true,
            ),
          }
        : {}),
    },
  });

const foodCollection = (
  label: string,
  name: string,
  category: "starters" | "tacos" | "entrees",
) =>
  collection({
    label,
    path: `src/content/${name}/*`,
    slugField: "name",
    format: { data: "json" },
    columns: ["name", "category"],
    schema: {
      name: nameSlug("Menu Item Name", "Name displayed for this food item."),
      description: requiredText(
        "Item Description",
        "Short description displayed with this food item.",
        true,
      ),
      image: requiredImageField(
        `${name}/image`,
        "asset",
        "Menu Item Image",
        "Required photo displayed with this food item.",
      ),
      category: fields.select({
        label: "Menu Category",
        description: "Menu section where this food item is displayed.",
        options: [
          { label: "Starters", value: "starters" },
          { label: "Tacos", value: "tacos" },
          { label: "Entrees", value: "entrees" },
        ],
        defaultValue: category,
      }),
    },
  });

export default config({
  storage: { kind: "cloud" },
  cloud: { project: "gph-restaurants/lobby-tiki-bar" },
  ui: {
    brand: {
      name: "Lobby Tiki Bar Website CMS",
      mark: ({ colorScheme }) =>
        createElement(
          "svg",
          {
            viewBox: "0 0 32 32",
            role: "img",
            "aria-label": "Lobby Tiki Bar",
            width: 32,
            height: 32,
          },
          createElement("rect", {
            width: 32,
            height: 32,
            rx: 8,
            fill: colorScheme === "dark" ? "#f2c879" : "#342014",
          }),
          createElement(
            "text",
            {
              x: 16,
              y: 21,
              textAnchor: "middle",
              fontFamily: "Arial, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              fill: colorScheme === "dark" ? "#342014" : "#f2c879",
            },
            "L",
          ),
        ),
    },
    navigation: {
      Website: [
        "home",
        "about",
        "contact",
        "reservations",
        "menuPage",
        "happyHourPage",
        "brunchPage",
        "eventsIndexPage",
        "privateEventsIndexPage",
        "venuePage",
        "blogIndexPage",
      ],
      Menu: [
        "cocktails",
        "nonAlcoholicDrinks",
        "draftBeers",
        "cansBottles",
        "wines",
        "foodStarters",
        "foodTacos",
        "foodEntrees",
      ],
      Brunch: ["brunchItems"],
      Events: [
        "weeklySpecials",
        "recurringEvents",
        "upcomingEvents",
        "privateEventTypes",
      ],
      FAQs: [
        "aboutFaqs",
        "menuFaqs",
        "happyHourFaqs",
        "brunchFaqs",
        "eventsFaqs",
        "privateEventsFaqs",
        "venueFaqs",
      ],
      Blog: ["blog"],
      "Site Settings": ["siteSettings", "navigation"],
    },
  },
  singletons: {
    siteSettings: jsonSingleton(
      "Site Settings",
      "siteSettings",
      siteSettingsData,
    ),
    navigation: jsonSingleton("Navigation", "navigation", navigationData),
    home: jsonSingleton("Home", "home", homeData),
    about: jsonSingleton("About", "about", aboutData),
    contact: jsonSingleton("Contact", "contact", contactData),
    reservations: jsonSingleton(
      "Reservations",
      "reservations",
      reservationsData,
    ),
    menuPage: jsonSingleton("Menu Page", "menuPage", menuPageData),
    happyHourPage: jsonSingleton(
      "Happy Hour Page",
      "happyHourPage",
      happyHourPageData,
    ),
    brunchPage: jsonSingleton("Brunch Page", "brunchPage", brunchPageData),
    eventsIndexPage: jsonSingleton(
      "Events Index Page",
      "eventsIndexPage",
      eventsIndexPageData,
    ),
    privateEventsIndexPage: jsonSingleton(
      "Private Events Index Page",
      "privateEventsIndexPage",
      privateEventsIndexPageData,
    ),
    venuePage: jsonSingleton("Venue Page", "venuePage", venuePageData),
    blogIndexPage: jsonSingleton(
      "Blog Index Page",
      "blogIndexPage",
      blogIndexPageData,
    ),
  },
  collections: {
    cocktails: collection({
      label: "Cocktails",
      path: "src/content/cocktails/*",
      slugField: "name",
      format: { data: "json" },
      columns: ["name", "featured"],
      schema: {
        name: nameSlug("Cocktail Name", "Name displayed for this cocktail."),
        description: requiredText(
          "Cocktail Description",
          "Ingredients or short description displayed with this cocktail.",
          true,
        ),
        featured: fields.checkbox({
          label: "Feature This Cocktail",
          description:
            "Show this cocktail in featured areas when its required photo is available.",
          defaultValue: false,
        }),
        image: requiredImageField(
          "cocktails/image",
          "asset",
          "Cocktail Photo",
          "Required photo displayed with this cocktail.",
        ),
        note: optionalText(
          "Cocktail Note",
          "Optional short note displayed with this cocktail.",
          true,
        ),
      },
    }),
    nonAlcoholicDrinks: namedCollection(
      "Non-Alcoholic Drinks",
      "nonAlcoholicDrinks",
      true,
    ),
    draftBeers: namedCollection("Draft Beers", "draftBeers"),
    cansBottles: namedCollection("Cans & Bottles", "cansBottles"),
    wines: namedCollection("Wines", "wines"),
    foodStarters: foodCollection("Food Starters", "foodStarters", "starters"),
    foodTacos: foodCollection("Food Tacos", "foodTacos", "tacos"),
    foodEntrees: foodCollection("Food Entrees", "foodEntrees", "entrees"),
    brunchItems: collection({
      label: "Brunch Items",
      path: "src/content/brunchItems/*",
      slugField: "name",
      format: { data: "json" },
      columns: ["name"],
      schema: {
        name: nameSlug(
          "Brunch Item Name",
          "Name displayed for this brunch item.",
        ),
        description: requiredText(
          "Item Description",
          "Short description displayed with this brunch item.",
          true,
        ),
        image: requiredImageField(
          "brunchItems/image",
          "asset",
          "Brunch Item Photo",
          "Required photo displayed with this brunch item.",
        ),
      },
    }),
    weeklySpecials: collection({
      label: "Weekly Specials",
      path: "src/content/weeklySpecials/*",
      slugField: "day",
      format: { data: "json" },
      columns: ["day", "short"],
      schema: {
        day: nameSlug("Day", "Day displayed for this weekly special."),
        short: requiredText(
          "Short Special Name",
          "Brief name used in compact weekly-special displays.",
        ),
        deal: requiredText(
          "Deal Description",
          "Full description of the weekly deal.",
          true,
        ),
        note: requiredText(
          "Special Note",
          "Supporting timing or availability note.",
          true,
        ),
      },
    }),
    recurringEvents: collection({
      label: "Recurring Events",
      path: "src/content/recurringEvents/*",
      slugField: "slug",
      format: { data: "json" },
      columns: ["name", "day", "time", "order"],
      schema: {
        slug: nameSlug(
          "Page URL",
          "Controls this event page URL. Do not change it after publishing unless instructed.",
        ),
        order: fields.number({
          label: "Display Order",
          description: "Controls display order. Lower numbers appear first.",
          validation: { isRequired: true, min: 0 },
        }),
        name: requiredText(
          "Event Name",
          "Name displayed for this recurring event.",
        ),
        day: requiredText(
          "Day",
          "Day or recurrence schedule displayed for this event.",
        ),
        time: requiredText("Time", "Time displayed for this event."),
        highlight: requiredText(
          "Highlighted Detail",
          "Short highlighted offer or event detail.",
        ),
        description: requiredText(
          "Event Description",
          "Summary displayed on the event page and cards.",
          true,
        ),
        image: requiredImageField(
          "recurringEvents/image",
          "asset",
          "Event Photo",
          "Required photo displayed for this recurring event.",
        ),
      },
    }),
    upcomingEvents: collection({
      label: "Upcoming Events",
      path: "src/content/upcomingEvents/*",
      slugField: "slug",
      format: { data: "json" },
      columns: ["name", "date", "time"],
      schema: {
        slug: nameSlug(
          "Page URL",
          "Controls this event identifier. Do not change it after publishing unless instructed.",
        ),
        name: requiredText(
          "Event Name",
          "Name displayed for this upcoming event.",
        ),
        date: requiredText(
          "Event Date",
          "Date displayed for this upcoming event.",
        ),
        time: requiredText(
          "Event Time",
          "Time displayed for this upcoming event.",
        ),
        description: requiredText(
          "Event Description",
          "Summary displayed with this upcoming event.",
          true,
        ),
        ticketUrl: optionalText(
          "Ticket Link",
          "Optional complete web address for tickets or registration.",
        ),
      },
    }),
    privateEventTypes: collection({
      label: "Private Event Types",
      path: "src/content/privateEventTypes/*",
      slugField: "slug",
      format: { data: "json" },
      columns: ["h1", "order"],
      schema: {
        slug: nameSlug(
          "Page URL",
          "Controls this private event page URL. Do not change it after publishing unless instructed.",
        ),
        order: fields.number({
          label: "Display Order",
          description: "Controls display order. Lower numbers appear first.",
          validation: { isRequired: true, min: 0 },
        }),
        seoTitle: requiredText(
          "Search Result Title",
          "Title shown in search results. Keep it concise and specific.",
        ),
        metaDescription: requiredText(
          "Search Result Description",
          "Summary shown in search results. Aim for one clear sentence.",
          true,
        ),
        heroLabel: requiredText(
          "Small Hero Label",
          "Short label shown above the main page heading.",
        ),
        h1: requiredText(
          "Main Page Heading",
          "Large main heading shown at the top of this page.",
        ),
        summary: requiredText(
          "Introductory Summary",
          "Short summary shown near the top of this page.",
          true,
        ),
        heroImage: requiredImageField(
          "privateEventTypes/heroImage",
          "asset",
          "Hero Image",
          "Required large image shown at the top of this page.",
        ),
        heroImageAlt: requiredText(
          "Hero Image Description for Accessibility",
          "Describe the hero image for screen readers and search engines.",
        ),
        intro: fields.array(
          requiredText("Paragraph", "Enter one introductory paragraph.", true),
          {
            label: "Introduction Paragraphs",
            description:
              "Add, edit, remove, or reorder the introductory paragraphs.",
            itemLabel: (props) => itemLabel(props, "Paragraph"),
          },
        ),
        details: fields.array(
          fields.object(
            {
              label: requiredText(
                "Detail Label",
                "Short label displayed for this event detail.",
              ),
              value: requiredText(
                "Detail Value",
                "Value displayed for this event detail.",
              ),
            },
            {
              label: "Event Detail",
              description: "One key planning detail for this event type.",
            },
          ),
          {
            label: "Event Details",
            description: "Add, edit, remove, or reorder key event details.",
            itemLabel: (props) => itemLabel(props, "Event Detail"),
          },
        ),
        features: fields.array(
          requiredText("Feature", "Enter one included feature."),
          {
            label: "Features",
            description:
              "Add, edit, remove, or reorder features for this event type.",
            itemLabel: (props) => itemLabel(props, "Feature"),
          },
        ),
        whyTitle: requiredText(
          "Why Choose Us Heading",
          "Heading for the reasons-to-book section.",
        ),
        whyBody: fields.array(
          requiredText(
            "Paragraph",
            "Enter one reasons-to-book paragraph.",
            true,
          ),
          {
            label: "Why Choose Us Paragraphs",
            description:
              "Add, edit, remove, or reorder the reasons-to-book paragraphs.",
            itemLabel: (props) => itemLabel(props, "Paragraph"),
          },
        ),
        stats: fields.array(
          fields.object(
            {
              value: requiredText(
                "Displayed Value",
                "Highlighted statistic value.",
              ),
              label: requiredText(
                "Statistic Label",
                "Supporting label for this statistic.",
              ),
            },
            {
              label: "Statistic",
              description: "One highlighted venue statistic.",
            },
          ),
          {
            label: "Venue Statistics",
            description:
              "Add, edit, remove, or reorder highlighted venue statistics.",
            itemLabel: (props) => itemLabel(props, "Statistic"),
          },
        ),
        illustrationTitle: requiredText(
          "Illustration Heading",
          "Heading displayed with the illustration section.",
        ),
        illustrationScriptLine: requiredText(
          "Illustration Script Accent",
          "Script-style accent shown in the illustration section.",
        ),
        illustrationSubtitle: requiredText(
          "Illustration Supporting Text",
          "Supporting text displayed with the illustration section.",
        ),
        faqs: fields.array(
          fields.object(
            {
              q: requiredText(
                "Question",
                "Question displayed in this page’s frequently asked questions section.",
              ),
              a: requiredText(
                "Answer",
                "Answer displayed when a visitor opens this question.",
                true,
              ),
            },
            {
              label: "Frequently Asked Question",
              description: "One question and answer for this event page.",
            },
          ),
          {
            label: "Frequently Asked Questions",
            description: "Add, edit, remove, or reorder this page’s questions.",
            itemLabel: (props) => itemLabel(props, "Question"),
          },
        ),
        gallery: fields.array(
          fields.object(
            {
              img: requiredImageField(
                "privateEventTypes/gallery/img",
                "asset",
                "Gallery Image",
                "Required photo displayed in this page gallery.",
              ),
              alt: requiredText(
                "Image Description for Accessibility",
                "Describe this gallery image for screen readers and search engines.",
              ),
            },
            {
              label: "Gallery Image",
              description: "One required image and accessibility description.",
            },
          ),
          {
            label: "Image Gallery",
            description:
              "Add, edit, remove, or reorder this page’s gallery images.",
            itemLabel: (props) => itemLabel(props, "Gallery Image"),
          },
        ),
      },
    }),
    aboutFaqs: faqCollection("About FAQs", "aboutFaqs"),
    menuFaqs: faqCollection("Menu FAQs", "menuFaqs"),
    happyHourFaqs: faqCollection("Happy Hour FAQs", "happyHourFaqs"),
    brunchFaqs: faqCollection("Brunch FAQs", "brunchFaqs"),
    eventsFaqs: faqCollection("Events FAQs", "eventsFaqs"),
    privateEventsFaqs: faqCollection(
      "Private Events FAQs",
      "privateEventsFaqs",
    ),
    venueFaqs: faqCollection("Venue FAQs", "venueFaqs"),
    blog: collection({
      label: "Blog Posts",
      path: "src/content/blog/*",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      previewUrl: "/blog/{slug}",
      columns: ["title", "date"],
      schema: {
        title: nameSlug(
          "Post Title",
          "Headline shown on the article and in the blog list.",
        ),
        description: requiredText(
          "Search Result Description",
          "Summary shown in search results and blog cards.",
          true,
        ),
        date: fields.date({
          label: "Publication Date",
          description: "Date this post is first shown as published.",
          validation: { isRequired: true },
        }),
        image: requiredImageField(
          "blog/image",
          "public",
          "Main Post Image",
          "Required large landscape image shown with this article.",
        ),
        imageAlt: requiredText(
          "Image Description for Accessibility",
          "Describe the post image for screen readers and search engines.",
        ),
        content: fields.mdx({
          label: "Post Content",
          description:
            "Main article content. Use headings to organize longer posts.",
        }),
      },
    }),
  },
});
