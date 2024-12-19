export interface Dish {
  id: number;
  chef_id: number;
  name: string;
  version_number: number;
  dish_ingredients: DishIngredient[];
}

export interface DishIngredient {
  id: number;
  dish_id: number;
  ingredient_id: number;
}

export interface Ingredient {
  id: number;
  name: string;
}
