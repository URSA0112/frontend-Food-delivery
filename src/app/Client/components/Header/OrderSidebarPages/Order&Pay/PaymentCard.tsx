import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function PaymentCard() {

    const itemsPrice = 25.98;
    const shippingPrice = 0.99;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <Card className="w-auto p-5 h-auto gap-3 ">
            <div className="flex justify-between text-sm 
             text-gray-700 dark:text-gray-300">
                <span>Items</span>
                <span>${itemsPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm
             text-gray-700 dark:text-gray-300">
                <span>Shipping</span>
                <span>${shippingPrice.toFixed(2)}</span>
            </div>

            <hr className="border-gray-300 dark:border-gray-600 " />

            <div className="flex justify-between text-sm font-semibold text-gray-800 dark:text-white ">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>

        </Card >
    )
}