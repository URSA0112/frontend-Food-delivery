import AddCategory from "./sub-components/addCategory";
import EditCategories from "./sub-components/editCategories";

export default function CategoryHeader() {
  return (
    <div className="flex justify-between items-center mb-8 ">
      <h1 className="text-2xl font-light font-mono font-stretch-110%">
        Dishes categories
      </h1>
      <div className="flex gap-3">
        <AddCategory className="w-9 h-9" />
        <EditCategories className="w-9 h-9" ></EditCategories>
      </div>
    </div>
  );
}
