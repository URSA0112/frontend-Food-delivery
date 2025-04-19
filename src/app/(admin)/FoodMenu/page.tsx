import Categories from "./components/categories/categories";
import AddNewFoodCard from "./components/foods/AddNewFoodCard";
import FoodCard from "./components/foods/foodCard";


export default function FoodMenu() {
  return (
    <>
      <div className="bg-white dark:bg-black w-full h-full p-5 space-y-20 font-sans text-[15px] tracking-tight leading-relaxed">
        <Categories></Categories>

        <div className="bg-gray-100 dark:bg-neutral-900 w-full h-auto text-black dark:text-white p-5 rounded-2xl space-y-5">
          <h2 className="text-xl font-semibold">Salads</h2>
          <div className="grid grid-cols-2 gap-5">
            <AddNewFoodCard></AddNewFoodCard>
            <FoodCard></FoodCard>
          </div>
        </div>
      </div>
    </>
  );
}