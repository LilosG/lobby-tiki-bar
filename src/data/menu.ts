export const COCKTAILS = [
  { name: 'Lobby Mai Tai', description: 'House rum blend, orange curacao, fresh lime juice, orgeat, rock candy', price: 10, featured: true, image: '/images/drink-dsc01014.jpg' },
  { name: 'Cobra Kai', description: 'Jamaican pineapple pot stilled rum, Barbados rum, Falernum, fresh lime juice, fresh orange juice, Fashionola mix, dash of absinthe, Angostura bitters', price: 15, featured: true, image: '/images/drink-cobra-kai.jpg' },
  { name: 'Temple of Doom', description: 'Bourbon, house rum blend, Demerara, Falernum, macadamia nut, fresh pineapple juice, fresh lemon juice', price: 15, featured: false, image: '/images/drink-dsc06012.jpg' },
  { name: 'Jet Ski Money', description: 'Tequila blanco, Falernum, fresh lime juice, cucumber, mint', price: 13, featured: false, image: '/images/drink-dsc06150.jpg' },
  { name: 'Concrete Jungle Bird', description: 'Mezcal, strawberry Aperol, fresh pineapple juice, fresh lime juice, Demerara', price: 13, featured: false, image: null },
  { name: 'Painkiller', description: 'House rum blend, pineapple orange cordial, coconut cream, nutmeg', price: 13, priceNote: 'Level 1 $13 / Level 2 $15 / Level 3 $17', featured: true, image: '/images/drink-dsc07144.jpg' },
  { name: 'Purple Church', description: 'Gin, Chinola, velvet Falernum, orgeat, lemon', price: 13, featured: false, image: null },
  { name: 'Astro Chimp', description: 'House rum blend, coffee & banana liqueur, Coco Lopez, orgeat, cold brew', price: 14, featured: false, image: null },
  { name: 'Toucan Slam', description: 'Dr. Bird, banana liqueur, Coco Lopez, pineapple, lime, dark rum float', price: 15, featured: true, image: '/images/drink-toucan-slam.jpg' },
  { name: 'Hoot & Hollar', description: 'White rum, Fassionola, lemon, cinnamon', price: 14, featured: false, image: null },
  { name: 'Level Up', description: '10 or 12 oz Painkiller — pineapple, orange, Coco Lopez, fresh grated nutmeg', price: 42, priceNote: '10oz $42 / 12oz $52 (Big Gulps)', featured: false, image: null },
  { name: 'Havana Good Time', description: 'Mango vodka, guava, lemon, simple, cava, soda', price: 58, priceNote: '$58 (Big Gulp)', featured: false, image: null },
] as const;

export const NON_ALCOHOLIC = [
  { name: 'No Tai', description: 'NA coconut rum, pineapple, orgeat, lime', price: 10 },
  { name: 'Painless Killer', description: 'NA coconut rum, pineapple orange cordial, Coco Lopez, fresh grated nutmeg', price: 10 },
  { name: 'NoJito', description: 'NA grapefruit & basil vodka, grapefruit, mint, lime, rock candy syrup, soda', price: 10 },
] as const;

export const DRAFT_BEER = [
  'South Mexican Lager',
  'Tropical Mist',
  'Ron Murkandy',
  'Coco IPA',
] as const;

export const CANS_BOTTLES = [
  { name: 'Michelob Ultra', price: 8 },
  { name: 'Happy Dad Seltzer', price: 8 },
  { name: 'Gin N Juice Arnold Palmer', price: 8 },
  { name: 'NA Beer', price: 6 },
] as const;

export const WINE = [
  { name: 'Rosé', glass: 13, bottle: 15 },
  { name: 'Sauvignon Blanc', glass: 13, bottle: 40 },
  { name: 'Cava', glass: 11, bottle: 36 },
  { name: 'Cabernet', glass: 12, bottle: 40 },
] as const;

export const FOOD = [
  { name: 'Kalua Scramble', description: 'Slow-roasted kalua pork, scrambled eggs, rice, and island seasonings', category: 'brunch', image: '/images/food-kalua-scramble.jpg' },
  { name: 'Huli Huli Chicken', description: 'Hawaiian-style grilled chicken with sweet teriyaki glaze', category: 'entrees', image: '/images/food-huli-huli-chicken-2.jpg' },
  { name: 'Coconut Shrimp', description: 'Crispy coconut-crusted shrimp with dipping sauce', category: 'starters', image: '/images/food-coconut-shrimp.jpg' },
  { name: 'Poke Inari Bombs', description: 'Fresh poke tucked into crispy inari tofu pockets', category: 'starters', image: '/images/food-poke-inari-bombs.jpg' },
] as const;
