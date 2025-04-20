import { BASE_URL } from "@/app/constants";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

type ConfirmButtonProps = {
  newCategory: string | null;
  setOpen: (value: boolean) => void;
};

export default function ConfirmButton({
  newCategory,
  setOpen,
}: ConfirmButtonProps) {
  const addCategory = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/category`, {
        categoryName: newCategory,
      });
      toast.success(res.data.message);
      setOpen(false);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const checkCategoryName = () => {
    alert("hey");
  };
  return (
    <DialogFooter className="flex-row gap-5 justify-end-safe ">
      {/* Cancel */}
      <DialogClose asChild>
        <Button variant="secondary" className="w-20">
          Cancel
        </Button>
      </DialogClose>

      {/* Add */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="w-20"
            onClick={checkCategoryName}
          >
            Add
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle className="mx-auto mb-1">
            Confirm add new category
          </DialogTitle>
          <DialogDescription className="text-md font-extralight ">
            This will create a new food category and add it to your menu.
          </DialogDescription>
          <div className="flex gap-5 justify-end-safe">
            <DialogClose asChild>
              <Button variant="secondary" className="w-20">
                Back
              </Button>
            </DialogClose>
            <Button variant="default" className="w-20" onClick={addCategory}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </DialogFooter>
  );
}
