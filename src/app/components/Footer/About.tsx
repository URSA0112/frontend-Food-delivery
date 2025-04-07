import Link from "next/link";


export default function About() {
    return (
        <div>
            <p>NomNom</p>
        <div className="flex flex-col gap-2 text-start mt-2">
            {/* Home Button */}
            <Link href="/Home" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out text-start">
                    Home
                </button>
            </Link>

            {/* Contact Us Button */}
            <Link href="/contact" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out text-start">
                    Contact Us
                </button>
            </Link>

            {/* Delivery Zone Button */}
            <Link href="/delivery-zone" passHref>
                <button className="underline text-sm hover:text-orange-400 transition duration-300 ease-in-out text-start">
                    Delivery Zone
                </button>
            </Link>
        </div>
</div>

    )
}