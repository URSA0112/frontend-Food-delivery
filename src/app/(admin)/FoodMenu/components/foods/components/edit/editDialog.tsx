import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export default function EditFoodCard() {
    return (
        <Dialog>
            <DialogTrigger className="p-2 rounded-full w-10 h-10 absolute right-5 top-[35%] dark:text-black transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-orange-400 dark:hover:bg-orange-400 bg-neutral-300">
                <img src="/edit.png" className="invert dark:invert-0" alt="" />
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Are you absolutely sure?</DialogTitle>
                    <DialogDescription className="text-sm text-gray-600 dark:text-gray-300">
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}