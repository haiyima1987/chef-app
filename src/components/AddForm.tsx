'use client';

import { Dish, Ingredient } from '@/models';
import { add } from '@/app/[id]/actions';
import { useState } from 'react';


interface Props {
  dish: Dish;
  newItem: Ingredient;
}

export default function AddForm({ dish, newItem }: Props) {
  const [amount, setAmount] = useState<number>(0);

  const onValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };

  const handleCreate = async () => {
    await add(dish.id, newItem.id, amount);
    window.location.reload();
  };

  return (
    <>
      <h3 className="mb-4 font-semibold">Add ingredient: {newItem.name}</h3>
      <form
        action={handleCreate}
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
          Add
        </button>
      </form>
    </>
  );
}
