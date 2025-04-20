import FoodMenuProvider from "@/providers/FoodMenuProvider";
import { PropsWithChildren } from "react";

export default function FoodMenuLayout({ children }: PropsWithChildren) {

    return (
        <FoodMenuProvider>
            <main className="flex-1 p-6">
                {children}
            </main>
        </FoodMenuProvider>
    );
}