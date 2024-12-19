import apiHandler from '@/utils/ApiHandler';
import { Dish, Ingredient } from '@/models';
import IngredientPanel from '@/components/IngredientPanel';


interface InitialData {
  dishes: Dish[];
  ingredients: Ingredient[];
}

async function getPageData(id: number) {
  // 1. if we have many rows of data, consider pagination
  const { data: dishes } = await apiHandler.getClient()
    .from('dishes')
    .select(`*, dish_ingredients!inner(*)`)
    .eq('id', id);
  const { data: ingredients } = await apiHandler.getClient()
    .from('ingredients')
    .select('*');
  return {
    dishes,
    ingredients
  } as InitialData;
}

export default async function DishDetails({ params }) {
  const { dishes, ingredients } = await getPageData(params.id);
  const dish = dishes[0];

  return (
    <>
      <div className="mb-6">
        <h3 className="mb-2 text-xl">
          <span className="font-semibold">Name:</span> <span className="italic">{dish.name}</span>
        </h3>
        <p className="text-md">
          <span className="font-semibold">Version:</span> {dish.version_number}
        </p>
      </div>
      <hr className="mb-6"/>
      <IngredientPanel dish={dish} ingredients={ingredients}/>
    </>
  );
}
