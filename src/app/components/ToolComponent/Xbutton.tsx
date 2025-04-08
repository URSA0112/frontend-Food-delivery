


type CancelButtonProps = {
    onClick: () => void;
    className?: string;
}
export default function XButton({ onClick, className }: CancelButtonProps) {
    return (
        <button onClick={onClick} className={`... ${className}
    flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white hover:bg-orange-600 hover:text-white transform transition-all duration-300 ease-in-out active:scale-90`}>
        X
      </button>
    )
}