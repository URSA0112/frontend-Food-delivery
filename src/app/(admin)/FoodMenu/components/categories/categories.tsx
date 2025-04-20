import AddCategory from "./components/addCategory";
import EditCategories from "./components/editCategories";

export default function Categories() {
  return (
    <div className="bg-gray-100 dark:bg-neutral-800 w-full h-auto text-black dark:text-white rounded-2xl p-5">
      <div className="flex justify-between items-center mb-8 ">
        <h1 className="text-2xl font-light font-mono">Dishes categories</h1>
        <div className="w-10 h-10">
          <EditCategories></EditCategories>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-20">
          <AddCategory></AddCategory>
        </div>
      </div>
    </div>
  );
}
