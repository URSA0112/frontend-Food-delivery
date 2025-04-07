import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/themebutton"

export default function Foods() {
    return (
        <section className=" w-full h-auto">

            <h1>Category</h1>

            <div className="grid gap-5 grid-flow-col-dense">

                  <Card>
                        <CardContent className="p-0">
                            <img src="offer2.png" alt="" />
                        </CardContent>
                        <CardHeader>
                            <CardTitle>Food Name</CardTitle>
                            <CardDescription>Decribtion</CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardContent className="p-0">
                            <img src="offer2.png" alt="" />
                        </CardContent>
                        <CardHeader>
                            <CardTitle>Food Name</CardTitle>
                            <CardDescription>Decribtion</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardContent className="p-0">
                            <img src="offer2.png" alt="" />
                        </CardContent>
                        <CardHeader>
                            <CardTitle>Food Name</CardTitle>
                            <CardDescription>Decribtion</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardContent className="p-0">
                            <img src="offer2.png" alt="" />
                        </CardContent>
                        <CardHeader>
                            <CardTitle>Food Name</CardTitle>
                            <CardDescription>Decribtion</CardDescription>
                        </CardHeader>
                    </Card>
            </div>
        </section>
    )
}