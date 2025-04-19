
import Categories from "./CategoriesList";
import FeaturedItems from "./Featured";
import Foods from "./Foods";

export default function MainBody() {
    return (
        <main className="w-full h-auto">
            <FeaturedItems></FeaturedItems>
            <Categories></Categories>
            <Foods></Foods>
            <Foods></Foods>
        </main>
    )
}