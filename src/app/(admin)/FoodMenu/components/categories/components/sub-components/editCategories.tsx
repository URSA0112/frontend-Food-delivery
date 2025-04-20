import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
type MyComponentProps = {
    className?: string;
};
export default function EditCategories({ className }: MyComponentProps) {
    return (
        <div className={className}>
            <Dialog>
                <DialogTrigger className="p-1 rounded-full w-full h-full dark:text-black transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-neutral-900 justify-items-center items-center dark:bg-black shadow-orange-500 shadow-2xs border dark:border-gray-600">
                    <img src="/list.png" className="invert dark:invert" alt="" />
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-lg font-bold">Are you absolutely sure?</DialogTitle>
                        <DialogDescription className="text-sm text-gray-600 dark:text-gray-300">
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>

                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}