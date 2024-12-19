'use client';

import { Dish, DishIngredient } from '@/models';
import { remove, update } from '@/app/[id]/actions';
import { useEffect, useState } from 'react';


interface Props {
  dish: Dish;
  updatedItem: DishIngredient;
}

export default function UpdateForm({ dish, updatedItem }: Props) {
  const [amount, setAmount] = useState<number>(updatedItem.ingredient_amount || 0);

  const onValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };

  const handleUpdate = async () => {
    await update(dish.id, updatedItem.id, amount);
    window.location.reload();
  };

  const handleRemove = async () => {
    await remove(dish.id, updatedItem.id);
    window.location.reload();
  };
  
  useEffect(() => {
    setAmount(updatedItem.ingredient_amount || 0);
  }, [updatedItem]);

  return (
    <>
      <h3 className="mb-4 font-semibold">Update ingredient</h3>
      <form
        action={handleUpdate}
        className="flex justify-start items-center">
        <input
          type="number"
          min={0}
          max={100}
          placeholder="Enter amount..."
          value={amount}
          onChange={onValueChanged}
          className="px-3 w-full h-input rounded border border-greyPale01 text-greyDark01 resize-none outline-none max-w-60"/>
        <button
          type="submit"
          className="ml-4 px-4 py-2 flex items-center justify-center transition-colors duration-300 bg-blue text-white rounded-md font-semibold">
          Update
        </button>
        <button
          type="button"
          onClick={handleRemove}
          className="ml-4 px-4 py-2 flex items-center justify-center transition-colors duration-300 bg-danger text-white rounded-md font-semibold">
          Remove
        </button>
      </form>
    </>
  );
}
