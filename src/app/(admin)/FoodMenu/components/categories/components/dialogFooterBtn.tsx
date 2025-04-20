import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@radix-ui/react-dialog";

export default function ConfirmButton() {
    return (

        <div className="flex w-full justify-between">

            {/* Cancel */}
            <DialogClose>
                <Button variant="secondary">Cancel</Button>
             
            </DialogClose>

            {/* Add */}
            <Button variant="default" className="w-20">Add</Button>


        </div>
    )
}