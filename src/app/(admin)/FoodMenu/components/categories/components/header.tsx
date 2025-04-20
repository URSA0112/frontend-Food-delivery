import EditCategories from "./sub-components/editCategories";

export default function CategoryHeader() {
  return (
    <div className="flex justify-between items-center mb-8 ">
      <h1 className="text-2xl font-light font-mono font-stretch-110%">
        Dishes categories
      </h1>
      <div className="w-10 h-10">
        <EditCategories></EditCategories>
      </div>
    </div>
  );
}
