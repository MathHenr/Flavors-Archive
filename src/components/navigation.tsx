import { useState } from "react";

import { Search, Menu } from "lucide-react";
import { twMerge as cn } from "tailwind-merge";

const routes = [
    "Home",
    "Recipe",
    "Comments",
    "About",
]

export function Navigation() {  
    const [show, setShow] = useState(false);

    function showInput(): void {
        return show ? setShow(false) : setShow(true);
    }
    
    return (
        <nav
            className="max-w-screen-2xl mx-auto w-full flex items-center justify-between px-8 py-4 font-poppins"
        >
            <span
                className="flex items-center gap-4"
            >
                <Menu 
                    className="flex lg:hidden size-8 rounded-sm transition-all ease-in duration-100 cursor-pointer hover:bg-slate-500 hover:text-slate-50"
                />

                <img 
                    className="w-40"
                    src="/logo.svg"
                    alt="Logo"
                />
            </span>
            
            
            <ul
                className="hidden lg:flex items-center gap-10 -ml-20"
            >
                {routes.map((route) => (
                    // lista para levar usuário a diferentes partes da página
                    <li
                        key={route}
                        className="px-2 rounded-sm transition-all ease-in duration-100 hover:scale-105 hover:cursor-pointer hover:shadow-[0px_10px_5px_-6px_rgba(0,0,0,0.15)]"
                    >
                        {route}
                    </li>
                ))}
            </ul>

            <div className="relative size-6 flex items-center gap-0.5">          
                <input 
                    className={cn("absolute -right-2 bg-slate-200 w-0 py-2 rounded-sm text-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 ease-in",
                        show ? "md:w-60 md:px-2 rounded-full" : "",
                    )}
                    type="text"
                    name="search" 
                    id="search"
                />
                <Search
                    className="size-6 z-10 cursor-pointer"
                    onClick={showInput}
                />
            </div>
        </nav>
    )
}