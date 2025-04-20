"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { BASE_URL } from "@/app/constants";
import axios from "axios";
import { useEffect } from "react";
export default function FoodCard() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/food`);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="min-w-50 max-w-80 relative p-4 gap-2 bg-white dark:bg-neutral-800 text-black dark:text-white">
      <CardContent className="w-full h-36 bg-gray-200 dark:bg-neutral-700 rounded-2xl p-0 flex items-center justify-center">
        <img
          src={`/offer1.png`}
          className="w-full h-full object-cover rounded-2xl"
        />
      </CardContent>
      <CardTitle className="text-sm text-orange-400 font-semibold">
        Food name
      </CardTitle>
      <CardDescription className="font-light text-gray-700 dark:text-gray-300 text-sm leading-snug">
        Fruit sauces and jellies, beverages, baked goods, cured meats, oils and
        margarines, cereals, dressings, snack foods, fruits and vegetables
      </CardDescription>
      <div className=" absolute right-5 top-[35%] w-10 h-10 bg-amber-50 dark:bg-black rounded-full text-center items-center p-2 ">
        ❤️
      </div>
    </Card>
  );
}
