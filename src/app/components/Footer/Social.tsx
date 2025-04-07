import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
export default function Social() {
    return (   <div>
        <p>Follow Us</p>
    <div className="flex gap-2 text-start mt-2">
        {/* Home Button */}
        <Link href="https://facebook.com" className="text-xl hover:text-blue-600">
        <FaFacebookF />
        </Link>

        {/* Contact Us Button */}
        <Link  href="https://instagram.com" className="text-xl hover:text-pink-600">
        <FaInstagram />
        </Link>

    </div>
</div>
      
    )
} 