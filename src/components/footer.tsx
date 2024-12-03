import { useState } from "react";

import { Github, Instagram, Linkedin } from "lucide-react"
import { Button } from "./button"
import { FormEvent } from "react"
import { toast } from "sonner";

const menu = [
    "Home",
    "Recipe",
    "About",
    "Comments",
]
const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
]
const social = [
    {
        "social": "github",
        "link": "https://github.com/MathHenr"
    },
    {
        "social": "instagram",
        "link": "https://www.instagram.com/matheushs_mec/"
    },
    {
        "social": "linkedin",
        "link": "https://www.linkedin.com/in/matheus-henrique-sobrinho-987831188/"
    },
]

export function Footer () {
    const [email, setEmail] = useState('');

    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (email.length > 4) {
            toast.success("Email registered.");
        } else {
            toast.error("Please enter a valid email.");
        }
        return;
    }
    
    return (
        <div
            className="max-w-screen-2xl mx-auto flex flex-col p-8 bg-slate-200/45"
        >
            <img
                className="w-40"
                src="./svg/logo.svg"
                alt="Logo"
            />
            <div
                className="w-full flex max-lg:flex-col items-center mt-4"
            >
                <div
                    className="w-full lg:grid lg:grid-cols-3 flex justify-around"
                >
                    {/* Menu */}
                    <nav>
                        <h1
                            className="text-base font-semibold text-slate-900 mb-3"
                        >
                            Menu
                        </h1>
                        <ul
                            className="flex flex-col gap-1"
                        >
                            {menu.map(item => (
                                <li
                                    key={item}
                                    className="w-fit text-sm font-normal cursor-pointer hover:underline"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Categories */}
                    <nav>
                        <h1
                            className="text-base font-semibold text-slate-900 mb-3"
                        >
                            Categories
                        </h1>
                        <ul
                            className="flex flex-col gap-1"
                        >
                            {categories.map(item => (
                                <li
                                    key={item}
                                    className="w-fit text-sm font-normal cursor-pointer hover:underline"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Social */}
                    <nav>
                        <h1
                            className="text-base font-semibold text-slate-900 mb-3"
                        >
                            Social
                        </h1>
                        <ul
                            className="flex flex-col gap-1"
                        >
                            {social.map(item => (
                                <li
                                    key={item.social}
                                    className="text-sm font-normal bg-slate-200 text-slate-900 size-8 flex items-center justify-center p-0.5 rounded-full hover:bg-slate-900 hover:text-slate-200 shadow-md transition-all ease-in-out duration-100 cursor-pointer"
                                >
                                    <a 
                                        href={item.link}
                                        target="_blank"
                                    >
                                        {item.social === "github" ? (
                                            <Github />
                                        ) : item.social === "instagram" ? (
                                            <Instagram />
                                        ) : (
                                            <Linkedin />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div
                    className=" w-full lg:w-[45%] max-lg:mt-4"
                >
                    <h1
                        className="w-full lg:text-lg font-semibold"
                    >
                        Register your email in our newsletter
                    </h1>
                    <form
                        onSubmit={(event) => handleSubmit(event)}
                        className="flex flex-col gap-4"
                    >
                        <input 
                            className="p-1 bg-transparent border-b-[1px] border-b-slate-900 focus:ring-0 focus-visible:ring-offset-0 focus:outline-none placeholder:text-sm placeholder:font-medium"
                            placeholder="Enter your email here."
                            type="text" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}