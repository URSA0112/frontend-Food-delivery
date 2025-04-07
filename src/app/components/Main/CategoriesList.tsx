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
            <div className="relative flex justify-center items-center w-full py-5 bg-neutral-200 px-1 shadow-2xl dark:bg-black">

                <button onClick={left}
                    className="h-10 w-7 absolute left-1 p-1 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10">
                    &lt;
                </button>


                <div ref={carouselRef} className="flex bg-white dark:bg-black overflow-x-scroll scroll-smooth snap-x snap-mandatory w-full h-auto space-x-3 shadow-[#ffaf81] border-b-destructive border-solid border-white border-1
                dark:shadow-[#c64411]
                 shadow-lg rounded-2xl ">
                    {categories.map((category) => {
                        return (
                            <button
                                key={category}
                                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform 
                                    ${selectedCategory === category
                                        ? 'bg-orange-500 dark:bg-orange-500 text-white scale-105 shadow-2xl'
                                        : 'text-black dark:text-white bg-transparent hover:bg-orange-400 hover:text-white hover:shadow-2xl'}`}
                                onClick={() => handleSelectCategory(category)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <button onClick={right}
                    className="h-10 w-7 absolute right-1 p-1 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10">
                    &gt;
                </button>
            </div>

        </section >
    )
}



