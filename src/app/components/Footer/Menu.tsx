import Link from "next/link";


export default function Menu() {
    return (
        <div>
                  <p className="justify-self-center">Menu</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            <Link href="/Home" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out text-start">
                Appetizers
                </button>
            </Link>
            <Link href="/Home" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out">
                Appetizers
                </button>
            </Link> <Link href="/Home" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out">
                Appetizers
                </button>
            </Link> <Link href="/Home" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out">
                Appetizers
                </button>
            </Link> <Link href="/Home" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out">
                Appetizers
                </button>
            </Link> <Link href="/Home" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out">
                Appetizers
                </button>
            </Link>
        </div></div>


    )
}