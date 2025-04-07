import { ToggleTheme } from "../Theme/Theme";

export default function Logo() {
    return (
        <div id="logo" className="flex items-center">
            <img src="logo.png" alt="Logo" className="w-11 h-11 object-contain" />
            <div className="ml-2">
                <p className="text-red-400  dark:text-red-400 font-bold text-lg">NomNom</p>
                <p className="text-black dark:text-gray-200 text-sm">Swift Delivery</p>
            </div>
            <div className='ml-5'><ToggleTheme></ToggleTheme></div>
        </div>

    )
}