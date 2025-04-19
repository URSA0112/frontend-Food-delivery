"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import AddHeader from "./components/add/header";
import Inputs from "./components/add/inputs";
import Footer from "./components/add/footer";

export default function AddNewFoodCard() {

  return (
    <Dialog>

{/* Add trigger button */}

      <DialogTrigger asChild>
        <Card
          className="min-w-50 max-w-80 h-full cursor-pointer border-2 border-dashed border-gray-400 dark:border-gray-600 
                     bg-white dark:bg-neutral-800 text-gray-400 dark:text-gray-300 
                     flex flex-col items-center justify-center p-4 gap-2 hover:border-orange-400 transition-all">
          <Plus className="w-10 h-10" />
          <p className="text-sm font-medium">Add New Food</p>
        </Card>
      </DialogTrigger>


{/* Opened Add Window (Click hiisnii daraa) */}

      <DialogContent className="">

        <AddHeader></AddHeader>
        <Inputs />
        <Footer></Footer>

      </DialogContent>

    </Dialog>

  )
}