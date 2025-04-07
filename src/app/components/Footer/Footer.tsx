
import { useState, useEffect } from "react";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-800 text-black dark:text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="logo.png" 
            alt="Food Delivery Logo"
            className="w-12 h-12 mr-2"
          />
          <h1 className="text-xl font-semibold">Food Delivery</h1>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="/about" className="hover:text-orange-500">About Us</a>
          <a href="/menu" className="hover:text-orange-500">Menu</a>
          <a href="/contact" className="hover:text-orange-500">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://facebook.com" className="text-xl hover:text-blue-500">
            <i className="fab fa-facebook"></i> {/* You can add FontAwesome icons */}
          </a>
          <a href="https://instagram.com" className="text-xl hover:text-pink-500">
            <i className="fab fa-instagram"></i> {/* You can add FontAwesome icons */}
          </a>
          <a href="https://twitter.com" className="text-xl hover:text-blue-400">
            <i className="fab fa-twitter"></i> {/* You can add FontAwesome icons */}
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-4 md:mt-0">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 text-black dark:text-white transition-colors"
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </footer>
  );
}