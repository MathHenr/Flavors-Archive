import { Clock4, UserRound, ChartNoAxesColumn } from "lucide-react";


export function RecipeIcon () {
    return (
        <div
            className="w-[368px] max-w-[400px] rounded-t-3xl overflow-hidden flex flex-col lg:items-start mt-5 transition-all linear duration-300 hover:shadow-md"
        >
            <img src="/png/food-gallery.jpg" alt="Food" className="w-full"/>
            <div
                className="bg-slate-200/95 -mt-4 w-full text-base font-medium font-poppins flex flex-col p-2"
            >
                <span
                    className="flex items-center justify-around mb-4"
                >
                    <p className="text-xs text-green-700/95 flex flex-col items-center justify-center">
                    <Clock4 className="text-green-700 size-4"/>
                    4 min
                    </p>
                    <p className="text-xs text-green-700/95 flex flex-col items-center justify-center">
                    <UserRound className="text-green-700 size-4"/>
                    3 servings
                    </p>
                    <p className="text-xs text-green-700/95 flex flex-col items-center justify-center">
                    <ChartNoAxesColumn className="text-green-700 size-4"/>
                    ease
                    </p>
                </span>
            
                <span>
                    Recipe name
                </span>
                <a 
                    className="max-w-20 text-xs text-mustard/80 hover:text-mustard hover:underline"
                    href="*"
                >
                    View recipe
                </a>
            </div>
        </div>
    )
}