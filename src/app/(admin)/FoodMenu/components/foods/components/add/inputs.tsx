"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useState } from "react";

export default function Inputs() {
  const [image, setImage] = useState<string | null>(null);
  return (
    <div className="space-y-4 mt-4">
      <Input placeholder="Dish name" />

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="salads">Salads</SelectItem>
          <SelectItem value="pasta">Pasta</SelectItem>
          <SelectItem value="desserts">Desserts</SelectItem>
        </SelectContent>
      </Select>

      <Input placeholder="Ingredients" />

      <Input placeholder="Price" type="number" />

      <div className="relative w-full h-32 border border-dashed rounded-md flex items-center justify-center">
        {image ? (
          <div className="relative w-full h-full">
            <img
              src={image}
              alt="Uploaded"
              className="object-cover w-full h-full rounded-md"
            />
            <button
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
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
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImage(URL.createObjectURL(file));
              }}
            />
          </label>
        )}
      </div>
    </div>
  );
}
