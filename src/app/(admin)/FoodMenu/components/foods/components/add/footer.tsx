import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
export default function Footer() {
  return (
    <DialogFooter className="flex w-full pt-4 justify-between ">
      {/* DELETE */}
      <DialogClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DialogClose>

      {/* SAVE */}
      <Button className="">Confirm Save</Button>
    </DialogFooter>
  );
}
