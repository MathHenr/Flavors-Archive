import { ComponentProps } from "react";

export function Button (props: ComponentProps<"button">) {
    return (
        <button 
            {...props}
            className="bg-mustard/85 text-slate-50 px-5 py-4 rounded-2xl transition-all linear duration-100 hover:bg-mustard font-medium"
        />
    )
}