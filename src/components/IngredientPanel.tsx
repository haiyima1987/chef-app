'use client';

import { Dish, DishIngredient, Ingredient } from '@/models';
import { useState } from 'react';
import UpdateForm from '@/components/UpdateForm';
import AddForm from '@/components/AddForm';


interface Props {
  dish: Dish;
  ingredients: Ingredient[];
}

export default function IngredientPanel({ dish, ingredients }: Props) {
  const selectedList = dish.dish_ingredients.map((di: DishIngredient) => di.ingredient_id);
  const [newItem, setNewItem] = useState<Ingredient>();
  const [updatedItem, setUpdatedItem] = useState<DishIngredient>();
  const [isUpdate, setIsUpdate] = useState(false);

  // IMPROVE: add loading for all api calls
  const handleSelect = (i: Ingredient) => {
    if (selectedList.includes(i.id)) {
      const dishIngredient = dish.dish_ingredients.find((di: DishIngredient) => di.ingredient_id === i.id);
      if (!dishIngredient) return;
      setUpdatedItem(dishIngredient);
      setIsUpdate(true);
    } else {
      setNewItem(i);
      setIsUpdate(false);
    }
  };

  return (
    <div className="relative">
      <h3 className="mb-4 font-semibold">Overview of ingredients</h3>
      <ul className="mb-6 flex justify-start items-center flex-wrap">
        {ingredients.map((i: Ingredient) => (
          <li key={i.id}>
            <button
              onClick={() => handleSelect(i)}
              className={`mb-4 ingredient-card ${!selectedList.includes(i.id) || 'selected'}`}>
              {i.name}
            </button>
          </li>
        ))}
      </ul>
      {isUpdate ? <div>
        {updatedItem && <UpdateForm dish={dish} updatedItem={updatedItem}/>}
      </div>: <div>
        {newItem && <AddForm dish={dish} newItem={newItem} />}
      </div>}
    </div>
  );
}
