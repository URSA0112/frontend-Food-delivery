import { useEffect, useRef, useState } from "react";

export default function Categories() {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const categories = ['Pizza 🍕', 'Burgers 🍔', 'Pasta 🍝', 'Drinks 🍹', 'Desserts 🍮', 'Salads 🥗', 'Seafood 🍣', 'Asian 🍱', 'Vegan 🌱'];
    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };
    const left = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
        }
    };

    const right = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
        }
    };
    return (
        <section className="">
            <div className="relative flex justify-center items-center w-full py-5 dark:bg-black px-10 shadow-2xl">

                <button onClick={left}
                    className="h-10 w-7 absolute left-1 p-1 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    &lt;
                </button>


                <div ref={carouselRef} className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory w-full h-auto space-x-3">
                    {categories.map((category) => {
                        return (
                            <button
                                key={category}
                                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform 
                                    ${selectedCategory === category
                                        ? 'bg-orange-500 dark:bg-orange-500 text-white scale-105 shadow-xl'
                                        : 'text-black dark:text-white bg-transparent hover:bg-orange-400 hover:text-white hover:shadow-lg'}`}
                                onClick={() => handleSelectCategory(category)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <button onClick={right}
                    className="h-10 w-7 absolute right-1 p-1 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    &gt;
                </button>
            </div>

        </section >
    )
}



