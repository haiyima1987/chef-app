'use client';

import { Dish, DishIngredient, Ingredient } from '@/models';
import { add, remove } from '@/app/[id]/actions';


interface Props {
  dish: Dish;
  ingredients: Ingredient[];
}

export default function IngredientPanel({ dish, ingredients }: Props) {
  // IMPROVE: add loading for all api calls
  const handleRemove = async (id: number) => {
    const dishIngredient: DishIngredient = dish.dish_ingredients.find((di: DishIngredient) => di.ingredient_id === id);
    if (!dishIngredient) return;
    await remove(dish.id, dishIngredient.id);
  };

  return (
    <>
      <h3 className="mb-4 font-semibold">Add or remove ingredient</h3>
      <ul className="flex justify-start items-center">
        {ingredients.map((i: Ingredient) => (
          <li key={i.id}>
            {dish.dish_ingredients.map((di: DishIngredient) => di.ingredient_id).includes(i.id) ?
              <button
                onClick={() => handleRemove(i.id)}
                className={'ingredient-card selected'}>
                {i.name}
              </button> :
              <button
                onClick={() => add(dish.id, i.id)}
                className={'ingredient-card'}>
                {i.name}
              </button>}
          </li>
        ))}
      </ul>
    </>
  );
}
