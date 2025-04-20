"use client";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/app/constants";
import axios from "axios";
import { set } from "zod";
import { useMenu } from "@/providers/FoodMenuProvider";


export default function CategoryList() {
  const { categories, error } = useMenu();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-rows-auto w-full h-auto gap-3 p-1">
      {error ? <div className="w-150">{error}</div> : categories.map((each) => (
        <div
          key={each._id}
          className="py-2 px-2 rounded-full min-w-30 w-auto h-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:bg-black shadow-orange-500 shadow-2xs border dark:border-gray-600 dark:text-white text-center text-nowrap text-sm font-extralight"
        >
          {each.categoryName}
        </div>
      ))}
    </div>
  );
}


