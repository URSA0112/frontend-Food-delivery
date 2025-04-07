export default function MovingWords() {
    return (
        <div className="mt-5 relative overflow-x-hidden">
            <div className="flex overflow-x-hidden bg-amber-600 ">
                <div className=" py-3 animate-marquee whitespace-nowrap">
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                </div>

                <div className="absolute py-3 animate-moving whitespace-nowrap overflow-x-hidden">
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                    <span className="text-lg mx-4">Fresh fast delivered</span>
                </div>
            </div></div>
    )
}