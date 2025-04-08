import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SheetTrigger } from "@/components/ui/sheet";

type OrderIconProps = {
    asChild?: boolean;
}
export default function OrderIcon({ asChild }: OrderIconProps) {
    return (
        <SheetTrigger>
            <div className="cursor-pointer ">
                <Avatar className='w-9 h-9'>
                    <AvatarImage src="order.png" alt="Food Order" />
                    <AvatarFallback className="dark:bg-black dark:text-white text-[11px]">Order</AvatarFallback>
                </Avatar>
            </div>
        </SheetTrigger>
    )
}