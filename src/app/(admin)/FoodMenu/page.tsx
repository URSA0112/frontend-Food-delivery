import Categories from "./components/categories/categories";
import AddNewFoodCard from "./components/foods/AddNewFoodCard";
import FoodCard from "./components/foods/foodCard";

export default function FoodMenu() {
  return (
    <>
      <div className="bg-white dark:bg-black w-full h-full p-5 space-y-15">
        <Categories></Categories>

        <div className="bg-gray-100 dark:bg-neutral-900 w-full h-auto text-black dark:text-white p-5 rounded-2xl space-y-5">
          <h2 className="text-2xl font-light font-mono font-stretch-110%">
            Foods
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <AddNewFoodCard></AddNewFoodCard>
            <FoodCard></FoodCard>
          </div>
        </div>
      </div>
    </>
  );
}
