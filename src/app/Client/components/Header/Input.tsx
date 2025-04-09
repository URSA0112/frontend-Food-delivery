'use client'
import { useState } from "react";

export default function Input() {
    const [mobileSearch, setMobileSearch] = useState(false);
    return (

        <div className="">

            <input
                type="text"
                placeholder="Search..."
                className="hidden sm:block h-10 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent hover:border-orange-500 transition-all shadow-md bg-white dark:bg-gray-700 text-black dark:text-white"
            />

            {mobileSearch ? (
                <input
                    type="text"
                    placeholder="Search..."
                    className="sm:hidden h-8 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent hover:border-orange-500 transition-all shadow-md bg-white dark:bg-gray-700 text-black dark:text-white"
                    autoFocus
                    onBlur={() => setMobileSearch(false)}
                />
            ) : (
                <img src='search.png'
                    className="sm:hidden w-9 h-9 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full"
                    onClick={() => setMobileSearch(true)}
                >
                </img>
            )}
        </div>

    )
}