import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import XButton from "../../../ToolComponent/Xbutton"
import CounterButton from "../../../ToolComponent/CounterButton"

export default function EachOrderedFood() {

    function deleteFoodItem(){

    }
    
    return (
        
        <Card className="relative h-30 py-2">
                       <XButton className="absolute right-3 top-1 w-10 text-sm  " onClick={deleteFoodItem}></XButton>
            <div className="flex w-full h-full">
                <CardContent className="mx-1 p-1 ">
                    <img src="offer2.png" alt="img" className="w-30 h-auto" />
                </CardContent>

                <CardHeader className="mx-1 p-0 w-full">
                    <CardTitle className="w-full p-0 text-sm ">Burger</CardTitle>
                    <CardDescription className="p-0 text-[12px]">A hamburger, or simply a burger, is a dish consisting</CardDescription>
                    <CounterButton className={""}></CounterButton>
                </CardHeader>

            </div>
 
        </Card>


    )
}