import CategoryList from "./components/categoryList";
import CategoryHeader from "./components/header";
import AddCategory from "./components/sub-components/addCategory";

export default function Categories() {
  return (
    <div className="bg-gray-100 dark:bg-neutral-800 w-full h-auto text-black dark:text-white rounded-2xl p-5">
      <CategoryHeader></CategoryHeader>

      <div className="flex gap-5">
        <AddCategory className="w-35 "/>
        <CategoryList></CategoryList>
      </div>
    </div>
  );
}
