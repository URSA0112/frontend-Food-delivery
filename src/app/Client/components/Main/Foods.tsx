'use client'

import { BASE_URL } from "@/app/constants";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import axios from 'axios';
import { useEffect } from "react";

export default function Foods() {

    useEffect(()=>{ 
        const fetchData = async () => {
            try {
              const response = await axios.get(`${BASE_URL}/food`);
            console.log(response);
            console.log(BASE_URL);

            } catch (error) {
                console.log(error);
            }
          };

          fetchData();  
        }, []); 

    return (
        <section className=" w-full h-auto shadow-orange-600 shadow-lg p-5 mt-10  ">

            <h1>Category</h1>

            <div className="grid gap-5 grid-rows-2 lg:grid-rows-1 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 ">

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