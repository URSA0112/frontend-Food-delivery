"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ConfirmButton from "./addConfirm";
import { useState } from "react";

type MyComponentProps = {
  className?: string;
};

export default function AddCategory({ className }: MyComponentProps) {
  const [newCategory, setNewCategory] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="p-1 rounded-full w-full h-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-neutral-900 justify-items-center items-center dark:bg-black shadow-orange-500 shadow-2xs border dark:border-gray-600 dark:text-white ">
          +
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-bold mx-auto">
              Add new category
            </DialogTitle>
            <DialogDescription className="text-sm font-light ">
              Make sure the name is unique and descriptive enough for your
              customers.
            </DialogDescription>
          </DialogHeader>

          <label className="ml-1 font-extralight text-sm mb-[-12]">
            Category name
          </label>
          <Input
            type="text"
            placeholder="Type category name..."
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <ConfirmButton
            newCategory={newCategory}
            setOpen={setOpen}
          ></ConfirmButton>
        </DialogContent>
      </Dialog>
    </div>
  );
}
