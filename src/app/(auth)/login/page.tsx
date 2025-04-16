"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";
import Link from "next/link";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
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
import { BASE_URL } from "@/app/constants";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export default function Login() {
    const route = useRouter()
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [emailConfirmed, setEmailConfirmed] = useState(false);
    const [error, setError] = useState<string>("")
    


    type DecodedToken = {
        userObj: {
            id?: string,
            email: string,
            role: string,
            createdAt?: string,
            updatedAt?: string,
        }
        , iat?: number,
        exp?: number,
    };

    const formLogic = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    // Submit darah uyd : 

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            //1.FETCH
            const res = await axios.post(`${BASE_URL}/auth/login`, values);
            const token = res.data.token
            if (!token) {
                setError("Server Error")
            }
            // 2. SAVE
            localStorage.setItem("token", token);
            setError("");
            toast.success("✅ Successfully logged in");
            // 3.DECODE & CHECK 
            const userToken = localStorage.getItem("token") as string
            const decodedToken = jwtDecode<DecodedToken>(userToken);
            if (decodedToken.userObj.role === 'user'){
                route.push('/Client')
            }
        }
        catch (error: any) {
            console.log(error.message);
            const errorMessage = error?.response?.data?.message
            setError(errorMessage)
        }
    }

    return (
        <div className="flex w-full h-full items-center justify-center mx-10">
            <div className="w-150 max-w-[416px] h-auto p-6 mx-0">
                {/* Title */}
                <div className="flex items-center gap-4 mb-6">

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
                                        <FormDescription className="text-red-400">{error ? error : ""}</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Link href={'/forgotPassword'} className="text-sm text-orange-100 flex">forgot your password?</Link>

                            <div className="w-full flex gap-2">
                                {emailConfirmed && <button
                                    type="button"
                                    onClick={() => {
                                        setEmailConfirmed(false)
                                    }}
                                    className="w-[10%] min-w-8 min-h-8 bg-white rounded-sm text-black flex items-center justify-center">
                                    {`<`}
                                </button>}
                                <Button type="submit" className="w-[88%]">
                                    Submit
                                </Button>
                            </div>
                        </>}
                    </form>
                </Form>

                {/* footer line */}
                <div className="flex gap-2 my-3 mx-1"> <p>Don’t have an account?</p>
                    <Link href="/register"><p className="text-rose-400">Sign up</p></Link>
                </div>
                {/* image 50% */}
            </div>
            <div className="max-w-[856px] h-auto p-6 mx-0">
                <img className="w-[856px] h-auto object-cover "
                    src="/frame.png" alt="frame" /></div>
        </div>
    )
}
