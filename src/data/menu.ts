export const COCKTAILS = [
  { name: 'Lobby Mai Tai',        description: 'House rum blend, orange curacao, fresh lime juice, orgeat, rock candy',                                                                                         featured: true,  image: '/images/drink-dsc01014.jpg'        },
  { name: 'Cobra Kai',            description: 'Jamaican pineapple pot stilled rum, Barbados rum, Falernum, fresh lime juice, fresh orange juice, Fashionola mix, dash of absinthe, Angostura bitters',         featured: true,  image: '/images/drink-cobra-kai.jpg'        },
  { name: 'Temple of Doom',       description: 'Bourbon, house rum blend, Demerara, Falernum, macadamia nut, fresh pineapple juice, fresh lemon juice',                                                         featured: true,  image: '/images/drink-temple-of-doom.jpg'   },
  { name: 'Jet Ski Money',        description: 'Tequila blanco, Falernum, fresh lime juice, cucumber, mint',                                                                                                    featured: true,  image: '/images/drink-jet-ski-money.jpg'    },
  { name: 'Concrete Jungle Bird', description: 'Mezcal, strawberry Aperol, fresh pineapple juice, fresh lime juice, Demerara',                                                                                  featured: false, image: null                                 },
  { name: 'Painkiller',           description: 'House rum blend, pineapple orange cordial, coconut cream, nutmeg',                                            note: 'Available in three levels of intensity',  featured: true,  image: '/images/drink-painkiller.jpg'       },
  { name: 'Purple Church',        description: 'Gin, Chinola, velvet Falernum, orgeat, lemon',                                                                                                                  featured: false, image: null                                 },
  { name: 'Astro Chimp',          description: 'House rum blend, coffee & banana liqueur, Coco Lopez, orgeat, cold brew',                                                                                       featured: false, image: null                                 },
  { name: 'Toucan Slam',          description: 'Dr. Bird, banana liqueur, Coco Lopez, pineapple, lime, dark rum float',                                                                                         featured: true,  image: '/images/drink-toucan-slam.jpg'      },
  { name: 'Hoot & Hollar',        description: 'White rum, Fassionola, lemon, cinnamon',                                                                                                                        featured: false, image: '/images/drink-hoot-hollar.jpg'      },
  { name: 'Level Up',             description: '10 or 12 oz Painkiller — pineapple, orange, Coco Lopez, fresh grated nutmeg',                                 note: 'Big Gulp — 10oz or 12oz',                featured: false, image: null                                 },
  { name: 'Havana Good Time',     description: 'Mango vodka, guava, lemon, simple, cava, soda',                                                               note: 'Big Gulp',                               featured: false, image: '/images/drink-havana-good-time.jpg' },
] as const;

export const NON_ALCOHOLIC = [
  { name: 'No Tai',          description: 'NA coconut rum, pineapple, orgeat, lime'                                                          },
  { name: 'Painless Killer', description: 'NA coconut rum, pineapple orange cordial, Coco Lopez, fresh grated nutmeg'                        },
  { name: 'NoJito',          description: 'NA grapefruit & basil vodka, grapefruit, mint, lime, rock candy syrup, soda'                      },
] as const;

export const DRAFT_BEER = [
  'South Mexican Lager',
  'Tropical Mist',
  'Ron Murkandy',
  'Coco IPA',
] as const;

export const CANS_BOTTLES = [
  { name: 'Michelob Ultra'             },
  { name: 'Happy Dad Seltzer'          },
  { name: 'Gin N Juice Arnold Palmer'  },
  { name: 'NA Beer'                    },
] as const;

export const WINE = [
  { name: 'Rosé'             },
  { name: 'Sauvignon Blanc'  },
  { name: 'Cava'             },
  { name: 'Cabernet'         },
] as const;

export const FOOD = [
  { name: 'Crab Rangoon',              description: 'Crispy wontons, cream cheese crab filling, sweet chili dipping sauce',                             category: 'starters', image: '/images/food-crab-rangoon.jpg'         },
  { name: 'Coconut Shrimp',            description: 'Crispy coconut-crusted shrimp with dipping sauce',                                                 category: 'starters', image: '/images/food-coconut-shrimp.jpg'        },
  { name: 'Poke Inari Bombs',          description: 'Fresh poke tucked into crispy inari tofu pockets',                                                 category: 'starters', image: '/images/food-poke-inari-bombs.jpg'      },
  { name: 'Ceviche',                   description: 'Fresh fish, citrus cure, coconut milk, habanero, crispy taro chips',                               category: 'starters', image: '/images/food-ceviche.jpg'               },
  { name: 'Pineapple Express Skewers', description: 'Grilled chicken, fresh pineapple, bell pepper, teriyaki glaze',                                    category: 'starters', image: '/images/food-pineapple-skewers.jpg'     },
  { name: 'Huli Wings',                description: 'Crispy chicken wings tossed in Hawaiian huli sauce',                                               category: 'starters', image: '/images/food-huli-wings.jpg'            },
  { name: 'SNP Wings',                 description: 'Crispy chicken wings, sweet and spicy island glaze',                                               category: 'starters', image: '/images/food-wings.jpg'                 },
  { name: 'Kalua Tacos',               description: 'Slow-roasted kalua pork, island slaw, fresh salsa, warm flour tortillas',                          category: 'tacos',    image: '/images/food-kalua-tacos.jpg'           },
  { name: 'Huli Huli Chicken',         description: 'Hawaiian-style grilled chicken with sweet teriyaki glaze',                                         category: 'entrees',  image: '/images/food-huli-huli-chicken.jpg'     },
  { name: 'Loco Moco',                 description: 'Rice, beef patty, sunny-side egg, brown gravy, island seasoning',                                  category: 'entrees',  image: '/images/food-loco-moco.jpg'             },
  { name: 'Tropicana Burger',          description: 'Beef patty, grilled pineapple, teriyaki glaze, lettuce, tomato on a brioche bun',                  category: 'entrees',  image: '/images/food-tropicana-burger.jpg'      },
  { name: 'Island Style Catch',        description: 'Fresh catch prepared island-style with seasonal accompaniments',                                    category: 'entrees',  image: '/images/food-island-catch.jpg'          },
] as const;

export const BRUNCH = [
  { name: 'Kalua Scramble',           description: 'Slow-roasted kalua pork, scrambled eggs, rice, and island seasonings',                              image: '/images/brunch-kalua-scramble.jpg'   },
  { name: 'Avocado Toast',            description: 'Smashed avocado, everything bagel seasoning, poached egg, microgreens on toasted sourdough',         image: '/images/brunch-avocado-toast.jpg'    },
  { name: 'Basic Breaky',             description: 'Two eggs any style, island potatoes, choice of protein, toast',                                      image: '/images/brunch-basic-breaky.jpg'     },
  { name: 'Coconut Rum French Toast', description: 'Thick-cut brioche, coconut rum custard, tropical fruit compote, powdered sugar',                     image: '/images/food-coconut-french-toast.jpg' },
  { name: 'Loco Moco',               description: 'Rice, beef patty, sunny-side egg, brown gravy, island seasoning',                                    image: '/images/food-loco-moco.jpg'          },
] as const;
