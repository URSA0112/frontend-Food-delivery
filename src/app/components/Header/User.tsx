import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/ui/avatar';
export default function User() {

    const [openLogin, setOpenLogin] = useState(false);

    return (
        <div className="">
            <Avatar onClick={() => setOpenLogin((prev) => !prev)} className="cursor-pointer w-13 h-auto">
                <AvatarImage src="user.png" alt="User Login" className="w-full h-full mt-[-5px] ml-[-5]" />
                <AvatarFallback>UL</AvatarFallback>
            </Avatar>
            {openLogin && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 z-10">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Login</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full mb-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full mb-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded"
                        />
                        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">
                            Login
                        </button>
                        <button
                            onClick={() => setOpenLogin(false)}
                            className="absolute top-3 right-2 text-red-400 w-6"
                        >
                            X
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}