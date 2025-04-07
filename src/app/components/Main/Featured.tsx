import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";


export default function FeaturedItems() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
        }
    };
    return (
        <section className="flex bg-gray-100 w-full min-h-50 h-[550px] items-center ">
            <button
                onClick={scrollLeft}
                className="absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 shadow-xl rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
                <ChevronLeft size={15} className="text-black dark:text-white" />
            </button>

            <div className="flex overflow-x-scroll scroll-smooth  snap-x snap-mandatory w-full"
                ref={carouselRef}>
                <img src="offer1.png" alt="" className="w-full object-cover h-auto snap-start aspect-video" />
                <img src="offer2.png" alt="" className="w-full object-cover h-auto snap-start aspect-video " />
                <img src="offer3.png" alt="" className="w-full object-cover h-auto snap-start aspect-video " />
                <img src="offer3.png" alt="" className="w-full object-cover h-auto snap-start aspect-video " />
            </div>

            <button
                onClick={scrollRight}
                className="absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 shadow-xl rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
                <ChevronRight size={15} className="text-black dark:text-white" />
            </button>
        </section>

    )
}