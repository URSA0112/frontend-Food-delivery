import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export default function ConfirmButton() {
  return (
    <DialogFooter className="flex w-full justify-between">
      {/* Cancel */}
      <DialogClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DialogClose>

      {/* Add */}
      <Button variant="default" className="w-20">
        Add
      </Button>
    </DialogFooter>
  );
}
