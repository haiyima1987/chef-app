'use server';

import api from '@/utils/ApiHandler';
import { revalidatePath } from 'next/cache';

// IMPROVE: proper error handling should be added, can be added into ApiHandler
export async function add(dishId: number, ingredientId: number) {
  await api.getClient()
    .from('dish_ingredients')
    .insert({ dish_id: dishId, ingredient_id: ingredientId });

  revalidatePath(`/${dishId}`);
}

export async function remove(dishId: number, dishIngredientId: number) {
  await api.getClient()
    .from('dish_ingredients')
    .delete()
    .eq('id', dishIngredientId);

  revalidatePath(`/${dishId}`);
}
