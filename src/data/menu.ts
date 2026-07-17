import type { ImageMetadata } from 'astro';

import drinkDsc01014       from '../assets/images/drink-dsc01014.jpg';
import drinkRoosterVessel  from '../assets/images/drink-rooster-vessel.jpg';
import drinkCobraKai       from '../assets/images/drink-cobra-kai.jpg';
import drinkTempleOfDoom2  from '../assets/images/drink-temple-of-doom-2.jpg';
import drinkLobbyGlass     from '../assets/images/drink-lobby-glass.jpg';
import drinkPainkiller     from '../assets/images/drink-painkiller.jpg';
import drinkToucanSlam     from '../assets/images/drink-toucan-slam.jpg';
import drinkHootHollar     from '../assets/images/drink-hoot-hollar.jpg';
import drinkHavanaGoodTime from '../assets/images/drink-havana-good-time.jpg';

import foodCoconutShrimp     from '../assets/images/food-coconut-shrimp.jpg';
import foodPokeInariBombs    from '../assets/images/food-poke-inari-bombs.jpg';
import foodWings             from '../assets/images/food-wings.jpg';
import foodLocoMoco          from '../assets/images/food-loco-moco.jpg';
import foodTropicana         from '../assets/images/food-tropicana-burger.jpg';
import foodCubano            from '../assets/images/food-cubano.jpg';
import foodWingsBasket       from '../assets/images/food-wings-basket.jpg';
import foodCrispyChickenSando from '../assets/images/food-crispy-chicken-sando.jpg';
import foodSpamMusubi        from '../assets/images/food-spam-musubi.jpg';

import brunchKaluaScramble from '../assets/images/brunch-kalua-scramble.jpg';
import brunchAvocadoToast  from '../assets/images/brunch-avocado-toast.jpg';
import brunchBasicBreaky   from '../assets/images/brunch-basic-breaky.jpg';
import brunchBreakfastBurrito from '../assets/images/brunch-breakfast-burrito.jpg';
import brunchPowerBowl     from '../assets/images/brunch-power-bowl.jpg';

export interface CocktailItem {
  name: string;
  description: string;
  featured: boolean;
  image: ImageMetadata | null;
  note?: string;
}

export const COCKTAILS: CocktailItem[] = [
  { name: 'Lobby Mai Tai',        description: 'House rum blend, orange curacao, fresh lime juice, orgeat, rock candy',                                                                                         featured: true,  image: drinkRoosterVessel  },
  { name: 'Cobra Kai',            description: 'Jamaican pineapple pot stilled rum, Barbados rum, Falernum, fresh lime juice, fresh orange juice, Fashionola mix, dash of absinthe, Angostura bitters',         featured: true,  image: drinkCobraKai       },
  { name: 'Temple of Doom',       description: 'Bourbon, house rum blend, Demerara, Falernum, macadamia nut, fresh pineapple juice, fresh lemon juice',                                                         featured: true,  image: drinkTempleOfDoom2  },
  { name: 'Jet Ski Money',        description: 'Tequila blanco, Falernum, fresh lime juice, cucumber, mint',                                                                                                    featured: true,  image: drinkLobbyGlass     },
  { name: 'Concrete Jungle Bird', description: 'Mezcal, strawberry Aperol, fresh pineapple juice, fresh lime juice, Demerara',                                                                                  featured: false, image: null                },
  { name: 'Painkiller',           description: 'House rum blend, pineapple orange cordial, coconut cream, nutmeg',           note: 'Available in three levels of intensity',                                    featured: true,  image: drinkPainkiller     },
  { name: 'Purple Church',        description: 'Gin, Chinola, velvet Falernum, orgeat, lemon',                                                                                                                  featured: false, image: null                },
  { name: 'Astro Chimp',          description: 'House rum blend, coffee & banana liqueur, Coco Lopez, orgeat, cold brew',                                                                                       featured: false, image: null                },
  { name: 'Toucan Slam',          description: 'Dr. Bird, banana liqueur, Coco Lopez, pineapple, lime, dark rum float',                                                                                         featured: true,  image: drinkToucanSlam     },
  { name: 'Hoot & Hollar',        description: 'White rum, Fassionola, lemon, cinnamon',                                                                                                                        featured: false, image: drinkHootHollar     },
  { name: 'Level Up',             description: '10 or 12 oz Painkiller — pineapple, orange, Coco Lopez, fresh grated nutmeg', note: 'Big Gulp — 10oz or 12oz',                                                featured: false, image: null                },
  { name: 'Havana Good Time',     description: 'Mango vodka, guava, lemon, simple, cava, soda',                               note: 'Big Gulp',                                                               featured: false, image: drinkHavanaGoodTime },
];

export const NON_ALCOHOLIC = [
  { name: 'No Tai',          description: 'NA coconut rum, pineapple, orgeat, lime'                                      },
  { name: 'Painless Killer', description: 'NA coconut rum, pineapple orange cordial, Coco Lopez, fresh grated nutmeg'    },
  { name: 'NoJito',          description: 'NA grapefruit & basil vodka, grapefruit, mint, lime, rock candy syrup, soda'  },
] as const;

export const DRAFT_BEER = [
  'South Mexican Lager',
  'Tropical Mist',
  'Ron Murkandy',
  'Coco IPA',
] as const;

export const CANS_BOTTLES = [
  { name: 'Michelob Ultra'            },
  { name: 'Happy Dad Seltzer'         },
  { name: 'Gin N Juice Arnold Palmer' },
  { name: 'NA Beer'                   },
] as const;

export const WINE = [
  { name: 'Rosé'            },
  { name: 'Sauvignon Blanc' },
  { name: 'Cava'            },
  { name: 'Cabernet'        },
] as const;

export interface FoodItem {
  name: string;
  description: string;
  category: 'starters' | 'tacos' | 'entrees';
  image: ImageMetadata;
}

export const FOOD: FoodItem[] = [
  { name: 'Coconut Shrimp',       description: 'Crispy coconut-crusted shrimp with dipping sauce',                                                                                                category: 'starters', image: foodCoconutShrimp      },
  { name: 'SNP Wings',            description: 'Crispy chicken wings, sweet and spicy island glaze',                                                                                                  category: 'starters', image: foodWings              },
  { name: 'Wings',                description: '8 seasoned baked & fried wings tossed in your choice of sauce with a side of ranch',                                                                  category: 'starters', image: foodWingsBasket        },
  { name: 'Spam Musubi',          description: 'Grilled spam, steamed rice, nori, served with sriracha aioli',                                                                                        category: 'starters', image: foodSpamMusubi         },
  { name: 'Poke Bowl',            description: 'Ahi, cucumbers, avocado, pineapple, mango, cucumber, wonton, serrano, crushed wasabi peas drizzled with sriracha aioli & served on seasoned rice',    category: 'starters', image: foodPokeInariBombs     },
  { name: 'Cubano',               description: 'House braised pulled kalua pork, sliced smoked ham, swiss cheese, sweet pickles, mustard aioli, on a pressed cuban roll',                             category: 'entrees',  image: foodCubano             },
  { name: 'Crispy Chicken Sando', description: 'Fried chicken, jalapeno slaw, pickles, huli huli sauce, toasted bun served w/ fries',                                                                 category: 'entrees',  image: foodCrispyChickenSando },
  { name: "Miss B's Burger",      description: "All natural 1/3 lb. Angus beef patty, LTO, bread & butter pickles, spiced mustard, roasted garlic cilantro aioli, kolache roll, choice of cheese: cheddar, swiss or pepper jack", category: 'entrees',  image: foodTropicana          },
];

export interface BrunchItem {
  name: string;
  description: string;
  image: ImageMetadata;
}

export const BRUNCH: BrunchItem[] = [
  { name: 'Kalua Scramble',           description: 'Slow-roasted kalua pork, scrambled eggs, rice, and island seasonings',                             image: brunchKaluaScramble },
  { name: 'Avocado Toast',            description: 'Smashed avocado, everything bagel seasoning, poached egg, microgreens on toasted sourdough',        image: brunchAvocadoToast  },
  { name: 'Basic Breaky',             description: 'Two eggs any style, island potatoes, choice of protein, toast',                                     image: brunchBasicBreaky   },
  { name: 'Breakfast Burrito',        description: 'Choice of bacon or ham, scrambled eggs, pepper and onion potato hash, cheddar jack blend, sriracha aioli, house crema',      image: brunchBreakfastBurrito },
  { name: 'Loco Moco',                description: 'Rice, beef patty, sunny-side egg, brown gravy, island seasoning',                                   image: foodLocoMoco        },
  { name: 'Island Brunch Bowl',        description: 'Island-inspired brunch bowl with seasonal accompaniments, fresh herbs, and house sauce',                  image: brunchPowerBowl          },
];
