import apiHandler from '@/utils/ApiHandler';
import { Dish } from '@/models';
import DishPanel from '@/components/DishPanel';


interface InitialData {
  dishes: Dish[];
}

async function getPageData() {
  // IMPROVE: if we have many rows of data, consider pagination
  const { data: dishes } = await apiHandler.getClient().from('dishes').select('*');
  return {
    dishes,
  } as InitialData;
}

export default async function Home() {
  const { dishes } = await getPageData();

  return (
    <div className="">
      <h2 className="mb-6 py-2 text-xl">Available dishes:</h2>
      <DishPanel dishes={dishes}/>
    </div>
  );
}
