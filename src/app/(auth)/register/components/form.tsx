"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { string, z } from "zod"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";



const formSchema = z.object({
    email: z.string()
        .min(4, { message: "Username must be at least 2 characters.", })
        .email({ message: "Invalid email address" }),
    password: z.string()
        .min(8, { message: "Must have at least 8 character" })
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must include at least one special character",
        }),
    confirmPassword: z.string()
})
    .refine((formSchema) => formSchema.password === formSchema.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    });



export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [emailConfirmed, setEmailConfirmed] = useState(false);

    const formLogic = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    async function handleNext() {
        const isValid = await formLogic.trigger("email");
        console.log(isValid);
        if (isValid) {
            setEmailConfirmed(true)
        }
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="max-w-[416px] h-auto p-6 mx-0">
            <div className="flex items-center gap-4 mb-6">
                <button
                    type="button"
                    onClick={() => {
                        setEmailConfirmed(false)
                    }}
                    className="min-w-8 min-h-8 bg-white rounded-sm text-black flex items-center justify-center"
                >
                    {`<`}
                </button>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                    Create your new account
                </h1>
            </div>

            <Form {...formLogic}>
                <form onSubmit={formLogic.handleSubmit(onSubmit)} className="space-y-6">


                    {!emailConfirmed ? <>
                        <FormField
                            control={formLogic.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )} />
                        <Button type="button" onClick={handleNext} className="w-full">
                            Next
                        </Button>
                    </> : <>    <FormField
                        control={formLogic.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            {...field}
                                            placeholder="Enter password"

                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                        <FormField
                            control={formLogic.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} placeholder="Re-enter password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Submit
                        </Button>

                    </>}
                </form>
            </Form>
            <div className="flex gap-2 my-3 mx-1"> <p>Already have an account?</p>
               <Link href="/login"><p>Login</p></Link> 
                </div>

        </div>
    )
}