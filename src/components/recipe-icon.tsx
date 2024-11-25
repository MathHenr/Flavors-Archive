import { twMerge as cn } from "tailwind-merge";
import { Clock4, UserRound, ChartNoAxesColumn } from "lucide-react";

interface RecipeProps {
    name: string;
    timer: string;
    serves: number;
    difficulty: string;
}

export function RecipeIcon ({
    name,
    timer,
    serves,
    difficulty
}: RecipeProps) {   
    function formateTimer (timer: string): string {
        if (timer.split(' ')[1] === "minutes"){
            return `${timer.split(' ')[0]} min`;
        }
        return timer;
    }
    
    function formateServes (serves: number): string {
        if (serves > 1) {
            return "servings";
        }
        return "serving";
    }
    
    return (
        <div
            className="col-span-1 max-lg:w-[324px] rounded-2xl overflow-hidden flex flex-col lg:items-start mt-5 shadow-md"
        >
            <img src="/png/food-gallery.jpg" alt="Food" className="w-full"/>
            <div
                className="bg-slate-50/95 -mt-4 w-full text-base font-medium font-poppins flex flex-col p-2"
            >
                <span
                    className="flex items-center justify-around mb-4"
                >
                    <p className="text-xs text-green-700/95 flex flex-col items-center justify-center">
                        <Clock4 className="text-green-700 size-4"/>
                        { timer && formateTimer(timer) } 
                    </p>
                    <p className="text-xs text-green-700/95 flex flex-col items-center justify-center">
                        <UserRound className="text-green-700 size-4"/>
                        { `${serves} ${formateServes(serves)}` }
                    </p>
                    <p className={cn("text-xs text-green-700/95 flex flex-col items-center justify-center",
                        difficulty.toLowerCase() === "hard" ? "text-red-700" : difficulty.toLowerCase() === "medium" ? "text-yellow-700" : "text-green-700"
                    )}>
                        <ChartNoAxesColumn className={cn("size-4",
                            difficulty.toLowerCase() === "hard" ? "text-red-700" : difficulty.toLowerCase() === "medium" ? "text-yellow-700" : "text-green-700"
                        )}/>
                        { difficulty.toLowerCase() }
                    </p>
                </span>
            
                <span>
                    { name }
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