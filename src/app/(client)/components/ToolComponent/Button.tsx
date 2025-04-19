import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children , onClick}: ButtonProps) {

  return (
    <button 
    onClick={onClick}
    className="w-[50%] px-6 py-2 text-[15px] text-gray-600 dark:text-white hover:bg-orange-400 hover:text-white focus:bg-orange-500 focus:text-white transition-all duration-300 ease-in-out rounded-full">
      {children}
    </button>
  );
}