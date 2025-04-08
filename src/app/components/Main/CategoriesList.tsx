import { useEffect, useRef, useState } from "react";

export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const categories = ['Pizza 🍕', 'Burgers 🍔', 'Pasta �', 'Drinks 🍹', 'Desserts 🍮', 'Salads 🥗', 'Seafood 🍣', 'Asian 🍱', 'Vegan 🌱'];

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const scroll = (direction: number) => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth * 0.8;
            carouselRef.current.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
        }
    };

    return (
        <section className="px-2 py-4 bg-gray-50 dark:bg-gray-900 ">
            <div className="relative flex items-center max-w-screen-xl mx-auto  ">
                <button 
                    onClick={() => scroll(-1)}
                    className="hidden md:block z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform"
                >
                    &lt;
                </button>

                <div 
                    ref={carouselRef} 
                    className="flex space-x-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full px-1 py-2"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                selectedCategory === category
                                    ? 'bg-orange-500 text-white shadow-md'
                                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-orange-400 hover:text-white'
                            }`}
                            onClick={() => handleSelectCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <button 
                    onClick={() => scroll(1)}
                    className="hidden md:block z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform"
                >
                    &gt;
                </button>
            </div>
        </section>
    )
}