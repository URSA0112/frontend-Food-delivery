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
import { useEffect, useState } from "react";
import { useMenu } from "@/providers/FoodMenuProvider";
import { CLOUD_NAME, UPLOAD_PRESET } from "@/app/constants";
import axios from "axios";
import { toast } from "sonner";

type FormValues = {
  foodName: string;
  category: string;
  ingredients: string;
  price: number;
};

export default function Inputs() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<FormValues>();
  const { categories } = useMenu();

  const getCloudinaryImgURL = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const cloudRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      return cloudRes.data.secure_url;
    } catch (err: any) {
      console.log("Upload failed", err.message);
    }
  };

  const onSubmit = async (values: FormValues) => {
    if (!image) {
      toast.error("Image is required!");
      return;
    }

    const url = await getCloudinaryImgURL();
    if (!url) {
      toast.error("Image upload failed!");
      return;
    }

    const finalData = { ...values, image: url };
    console.log("Food created:", finalData); //+ NEED TO SEND DATA BASE
    toast.success("Food successfully created!");
  };

  const handleIMGonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];
    if (!selected) return;
    setImage(selected);
    setImagePreview(URL.createObjectURL(selected));
  };

  useEffect(() => {
    register("category", { required: "Category is required" });
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <div>
        <Input placeholder="Dish name" {...register("foodName", { required: "Dish name is required" })} />
        {errors.foodName && <p className="text-red-500 text-[12px] font-extralight mt-1">{errors.foodName.message}</p>}
      </div>

      <div>
        <Select onValueChange={(value) => setValue("category", value, { shouldValidate: true })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((each) => (
              <SelectItem key={each._id} value={each._id}>{each.categoryName}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && <p className="text-red-500 text-[12px] font-extralight mt-1">{errors.category.message}</p>}
      </div>

      <div>
        <Input placeholder="Ingredients" {...register("ingredients", { required: "Ingredients are required" })} />
        {errors.ingredients && <p className="text-red-500 text-[12px] font-extralight mt-1">{errors.ingredients.message}</p>}
      </div>

      <div>
        <Input placeholder="Price" type="number" {...register("price", {
          required: "Price is required",
          valueAsNumber: true
        })} />
        {errors.price && <p className="text-red-500 text-[12px] font-extralight mt-1">{errors.price.message}</p>}
      </div>

      <div className="relative w-full h-32 border border-dashed rounded-md flex items-center justify-center">
        {imagePreview ? (
          <div className="relative w-full h-full">
            <img src={imagePreview} alt="Uploaded" className="object-cover w-full h-full rounded-md" />
            <button
              onClick={() => {
                setImage(null);
                setImagePreview(null);
              }}
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
              onChange={handleIMGonChange}
            />
          </label>
        )}
      </div>
      {!image && <p className="text-red-500 text-[12px] font-extralight -mt-2">Image is required</p>}

      <button type="submit" className="bg-orange-400 px-4 py-2 text-white rounded-md">
        Submit
      </button>
    </form>
  );
}