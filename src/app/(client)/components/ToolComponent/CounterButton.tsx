
import { useState } from "react"
type CounterButtonProps = {
    className: string
}
export default function CounterButton({ className }: CounterButtonProps) {

    const [quantity, setQuantity] = useState<number>(1)

    function addFoodQuantitiy() {
        setQuantity(quantity + 1)
    }
    function minusFoodQuantitiy() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className={`flex gap-8 w-auto justify-center items-center  ${className}`}>
            <button
                onClick={minusFoodQuantitiy}
                className="w-8 h-full rounded-full border-solid border-1 text-auto">-</button>
            <div className="text-sm">{quantity.toString()}</div>
            <button
                onClick={addFoodQuantitiy}
                className="w-8 h-full rounded-full border-solid border-1 text-auto">+</button>
        </div>

    )
}