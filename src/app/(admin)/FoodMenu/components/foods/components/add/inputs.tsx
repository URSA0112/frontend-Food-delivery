"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useState } from "react";
import { useMenu } from "@/providers/FoodMenuProvider";

type FormValues = {
  foodName: string;
  category: string;
  ingredients: string;
  price: number;
  image: string;
};

export default function Inputs() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const { categories } = useMenu()
  const [newFood, setNewFood] = useState<FormValues | null>(null)

  const onSubmit = (values: FormValues) => {
    setNewFood(values)
    console.log(newFood);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <Input placeholder="Dish name" {...register("foodName")} />

      <Select onValueChange={(value) => setValue("category", value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((each => <SelectItem key={each._id} value={each._id}>{each.categoryName}</SelectItem>))}
        </SelectContent>
      </Select>

      <Input placeholder="Ingredients" {...register("ingredients")} />

      <Input placeholder="Price" type="number" {...register("price", { valueAsNumber: true })} />

      <div className="relative w-full h-32 border border-dashed rounded-md flex items-center justify-center">
        {imagePreview ? (
          <div className="relative w-full h-full">
            <img src={imagePreview} alt="Uploaded" className="object-cover w-full h-full rounded-md" />
            <button
              onClick={() => setImagePreview(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-1 shadow"
              type="button"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="cursor-pointer text-sm text-gray-500 dark:text-gray-300">
            Click to upload image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              {...register("image")}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImagePreview(URL.createObjectURL(file));
              }}
            />
          </label>
        )}
      </div>

      <button type="submit" className="bg-orange-400 px-4 py-2 text-white rounded-md">
        Submit
      </button>
    </form>
  );
}