import { DialogHeader, DialogTitle , DialogDescription} from "@/components/ui/dialog";



export default function AddHeader(){
  return(
    <DialogHeader>
    <DialogTitle>Add New Food</DialogTitle>
    <DialogDescription>
      Here you can create a new food item and add it to your menu.
    </DialogDescription>
  </DialogHeader>

  )
}