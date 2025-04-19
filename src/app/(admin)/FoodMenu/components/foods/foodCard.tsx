import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import EditFoodCard from "./components/edit/editDialog";



export default function FoodCard() {
    return (
        <Card className="min-w-50 max-w-80 relative p-4 gap-2 bg-white dark:bg-neutral-800 text-black dark:text-white">
            <CardContent className="w-full h-36 bg-gray-200 dark:bg-neutral-700 rounded-2xl p-0 flex items-center justify-center">
                <img src={`/offer1.png`} className="w-full h-full object-cover rounded-2xl" />
            </CardContent>
            <CardTitle className="text-sm text-orange-400 font-semibold">Food name</CardTitle>
            <CardDescription className="font-light text-gray-700 dark:text-gray-300 text-sm leading-snug">
                Fruit sauces and jellies, beverages, baked goods, cured meats, oils and margarines, cereals, dressings, snack foods, fruits and vegetables
            </CardDescription>

          <EditFoodCard></EditFoodCard>

        </Card>
    )
}