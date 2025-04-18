'use client'
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from '../../../../components/ui/avatar';
import { useAuth } from "@/providers/authProvider";
import Link from "next/link";

export default function User() {
    const { user, logout } = useAuth()
    const [openLogin, setOpenLogin] = useState<boolean>(false);

    return (
        <div className="">
            <Avatar onClick={() => setOpenLogin((prev) => !prev)} className="cursor-pointer w-13 h-auto">
                <AvatarImage src="user.png" alt="User Login" className="w-full h-full mt-[-5px] ml-[-5]" />
                <AvatarFallback>UL</AvatarFallback>
            </Avatar>
            {openLogin && (

                <div className="absolute right-0 mt-2 w-60 h-auto bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 z-10">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Account</h2>
                    <div>
                        {user && <div className="flex my-3">{user}</div>}

                        {user ? <button type="submit" onClick={logout} className="w-full bg-orange-500 text-white py-2 rounded">
                            Log out
                        </button>
                            : <Link href={`/login`}> <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">
                                Login
                            </button></Link>}
                        <button
                            onClick={() => setOpenLogin(false)}
                            className="absolute top-3 right-2 text-red-400 w-6"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}


