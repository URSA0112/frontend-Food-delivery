'use client'
import { BASE_URL } from "@/app/constants";
import axios from "axios";
import { PropsWithChildren, useContext, useState, createContext, useEffect } from "react";

type InputValueType = {
    foodName: string,
    price: number,
    image: string
    ingredients: string,
    category: string,
}
type MenuContextType = {
    categories: Category[];
    error: string;
}

type Category = {
    _id: string;
    categoryName: string;
    createdAt: string;
    updatedAt: string;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export default function FoodMenuProvider({ children }: PropsWithChildren) {
    const [error, setError] = useState<string>("")
    const [categories, setCategories] = useState<Category[]>([]);


    useEffect(() => {
        const getCategories = async () => {
          try {
            const res = await axios.get(`${BASE_URL}/category`);
            setCategories(res.data.data);
          } catch (error: any) {
            if (error.response?.status === 404) {
              setError(`Oops! ${error.response.data.message} 🥲`);
            } else {
              setError("Oops! Server error");
            }
            console.error("Failed to fetch categories:", error);
          }
        };
        getCategories();
      }, []);

    return (
        <MenuContext.Provider value={{ categories, error } }>{children}</MenuContext.Provider>
    )
}

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) throw new Error("useMenu must be used within a FoodMenuProvider");
    return context;
  };