
import {
    Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetDescription, SheetFooter,
} from '../../../components/ui/sheet';
import Button from '../ToolComponent/Button';
import { useEffect, useState } from 'react';
import OrderLayout from './OrderSidebarPages/Order&Pay/OrderLayout';
import HistoryLayout from './OrderSidebarPages/History/OrderHistory';
import OrderIcon from './OrderSidebarPages/Order&Pay/TriggerIcon';

export default function Order() {
    const [orderPage, setOrderPage] = useState<Boolean>(true);
    const togglePage = (isOrderPage: boolean) => {
        setOrderPage(isOrderPage)
    }

    return (
        <Sheet>
            {/* Trigger Icon */}
            <OrderIcon></OrderIcon>

            {/* OPENED SIDE BAR */}

            <SheetContent side="right" className="bg-white dark:bg-gray-700 p-4 w-100">

                <SheetHeader className='h-10 p-1 mb-3 mx-2'>
                    <SheetTitle className="text-gray-800 dark:text-gray-200">Your Orders</SheetTitle>
                    <SheetDescription className="text-gray-600 dark:text-gray-300 ">
                        Review your recent food orders here.
                    </SheetDescription>
                </SheetHeader>

                {/* Order & History Buttons  */}

                <div className="flex justify-center gap-2 w-full bg-white dark:bg-black rounded-full px-5 m-0 ">
                    <Button onClick={() => togglePage(true)}>Order</Button>
                    <Button onClick={() => togglePage(false)}>History</Button>
                </div>

                {orderPage ?
                    <OrderLayout></OrderLayout> : <HistoryLayout></HistoryLayout>
                }

                {/* Optional <SheetFooter className="mt-4">
                    </SheetFooter> */}

                <SheetClose className="absolute w-[90%] bottom-10 bg-orange-500 text-white px-4 py-2 rounded-full">
                    Close
                </SheetClose>

            </SheetContent>

        </Sheet>


    )
}