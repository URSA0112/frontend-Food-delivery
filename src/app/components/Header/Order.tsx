import {
    Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetDescription, SheetFooter,
} from '../../../components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/ui/avatar';

export default function Order() {
    return (
        <div className="">
            <Sheet>
                <SheetTrigger asChild>
                    <div className="cursor-pointer ">
                        <Avatar className='w-9 h-9'>
                            <AvatarImage src="order.png" alt="Food Order" />
                            <AvatarFallback className="dark:bg-black dark:text-white text-[11px]">Order</AvatarFallback>
                        </Avatar>
                    </div>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white dark:bg-gray-700 p-4 w-64">
                    <SheetHeader>
                        <SheetTitle className="text-gray-800 dark:text-gray-200">Your Orders</SheetTitle>
                        <SheetDescription className="text-gray-600 dark:text-gray-300">
                            Review your recent food orders here.
                        </SheetDescription>
                    </SheetHeader>
                    <ul className="mt-4 space-y-2">
                        <li className="text-gray-600 dark:text-gray-300">Order 1</li>
                        <li className="text-gray-600 dark:text-gray-300">Order 2</li>
                        <li className="text-gray-600 dark:text-gray-300">Order 3</li>
                    </ul>
                    <SheetFooter className="mt-4">
                        <SheetClose className="bg-orange-500 text-white px-4 py-2 rounded">
                            Close
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            </div>

    )
}