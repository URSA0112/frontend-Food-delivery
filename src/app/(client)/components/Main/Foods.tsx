import FoodCard from "./Card/foodCard";

export default function Foods() {
  return (
    <section className="bg-gray-100 dark:bg-black w-full h-auto text-black dark:text-white p-5 rounded-2xl space-y-5">
      <h1 className="text-2xl font-light font-mono font-stretch-110%">
        Category name
      </h1>
      <div className="grid gap-5 grid-rows-2 lg:grid-rows-1 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 ">
        <FoodCard></FoodCard>
      </div>
    </section>
  );
}
