"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";
import Link from "next/link";
import { z } from "zod"
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
import { Eye, EyeOff } from "lucide-react";
import { handleNext } from "@/app/utils/functions/nextButtonFunc";
import { formSchema } from "@/app/utils/validation/zodSchema";

export default function Login() {
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

    // Submit darah uyd : 
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="flex w-full h-full items-center justify-center mx-10">
            <div className="w-150 max-w-[416px] h-auto p-6 mx-0">
                {/* Title */}
                <div className="flex items-center gap-4 mb-6">
                    <button
                        type="button"
                        onClick={() => {
                            setEmailConfirmed(false)
                        }}
                        className="min-w-8 min-h-8 bg-white rounded-sm text-black flex items-center justify-center">
                        {`<`}
                    </button>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                            Log in
                        </h1>
                        <p>Log in to enjoy your favorite dishes.</p>
                    </div>
                </div>

                {/* Email */}
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
                            <Button type="button"
                                onClick={() => handleNext(formLogic.trigger, setEmailConfirmed)} className="w-full">
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

                            {/* Password */}
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

                {/* footer line */}
                <div className="flex gap-2 my-3 mx-1"> <p>Don’t have an account?</p>
                    <Link href="/register"><p>Sign up</p></Link>
                </div>
                {/* image 50% */}
            </div>
            <div className="max-w-[856px] h-auto p-6 mx-0">
                <img className="w-[856px] h-auto object-cover "
                    src="/frame.png" alt="frame" /></div>
        </div>
    )
}