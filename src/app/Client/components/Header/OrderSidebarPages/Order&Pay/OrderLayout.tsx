import { Card } from "@/components/ui/card";

import PaymentCard from "./PaymentCard";
import EachOrderedFood from "./EachOrederedFood";

export default function OrderLayout() {
    return (
        <>
            <Card className='grid scroll-auto overflow-auto gap-1 h-auto max-h-85 p-1'>
                <EachOrderedFood />
                <EachOrderedFood />

            </Card>

            <PaymentCard></PaymentCard>
        </>
    )
}