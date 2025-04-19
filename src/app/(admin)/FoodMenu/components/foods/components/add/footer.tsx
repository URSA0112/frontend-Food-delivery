import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
export default function Footer() {
    return (
        <DialogFooter className="flex w-full pt-4 justify-between ">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                </DialogTrigger>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>Are you sure you want to delete?</DialogTitle>
                        <DialogDescription>This action cannot be undone.</DialogDescription>
                        <DialogFooter>
                        <DialogClose>
                        <Button variant="outline">Cancel</Button>
                        </DialogClose>
                            <Button variant="destructive">Confirm Delete</Button>
                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger asChild>
                    <Button>Save Changes</Button>
                </DialogTrigger>
                <DialogContent>
        
                    <DialogHeader>
                        <DialogTitle>Save Changes?</DialogTitle>
                        <DialogDescription>Are you ready to save this food item?</DialogDescription>
                        <DialogFooter>
                        <DialogClose>
                        <Button variant="outline">Cancel</Button>
                        </DialogClose>

                            <Button>Confirm Save</Button>
                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </DialogFooter>
    )
}