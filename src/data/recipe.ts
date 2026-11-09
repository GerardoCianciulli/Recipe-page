export type LabelledItem = {
  label: string
  text: string
}

export type Nutrient = {
  name: string
  value: string
}

export const recipe = {
  title: 'Simple Omelette Recipe',
  description:
    'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  image: {
    alt: 'A golden folded omelette filled with spinach, mushrooms and herbs, served on a plate',
  },
  preparation: [
    { label: 'Total', text: 'Approximately 10 minutes' },
    { label: 'Preparation', text: '5 minutes' },
    { label: 'Cooking', text: '5 minutes' },
  ] satisfies LabelledItem[],
  ingredients: [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ],
  instructions: [
    {
      label: 'Beat the eggs',
      text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      label: 'Heat the pan',
      text: 'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      label: 'Cook the omelette',
      text: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      label: 'Add fillings (optional)',
      text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      label: 'Fold and serve',
      text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      label: 'Enjoy',
      text: 'Serve hot, with additional salt and pepper if needed.',
    },
  ] satisfies LabelledItem[],
  nutritionIntro:
    'The table below shows nutritional values per serving without the additional fillings.',
  nutrition: [
    { name: 'Calories', value: '277kcal' },
    { name: 'Carbs', value: '0g' },
    { name: 'Protein', value: '20g' },
    { name: 'Fat', value: '22g' },
  ] satisfies Nutrient[],
}
