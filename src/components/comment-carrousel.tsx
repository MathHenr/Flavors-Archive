import { useState } from "react";

import { comments } from "../db/comments";

import { MoveLeft, MoveRight } from "lucide-react";
import { Rate } from "./rate";
import { useIsMobile } from "../hook/useIsMobile";

export function CommentCarrousel () {
    const [commentIndex, setCommentIndex] = useState(0);
    const isMobile = useIsMobile();

    let percent = 300;
    
    if (isMobile) {
        percent = 100;
    }

    function showNextComment () {
        setCommentIndex(index => {
            if (index === Math.floor((comments.length - 1)/(percent/100))) return 0;
            return index + 1;
        })
    }

    function showPrevComment () {
        setCommentIndex(index => {
            if (index === 0) return Math.floor((comments.length - 1)/(percent/100));
            return index - 1;
        })
    }
    
    return (
        <div>
            <div
                className="w-fit flex gap-3"
            >
                {comments.map(comment => (
                    // Comments
                    <div
                        key={comment.id}
                        className="col-span-1 w-[298px] lg:w-[368px] max-h-[500px] bg-slate-50 p-2 flex flex-col gap-2 rounded-md shadow-md hover:scale-105 hove:shadow-xl transition-all ease-in-out duration-300"
                        style={{ translate: `${-percent * commentIndex}%` }}
                    >
                        <div
                            className="flex items-center gap-8"
                        >
                            <img
                                className="bg-slate-200 rounded-full size-12 border-none"
                                src={comment.user.picture}
                                alt="User photo"
                            />
                            <span>
                                <p
                                    className="text-sm lg:text-base font-medium"
                                >
                                    {comment.recipeName}
                                </p>
                                <p
                                    className="text-xs font-normal text-slate-500"
                                >
                                    {comment.user.username}
                                </p>
                            </span>
                        </div>
            
                        <span>
                            <Rate rating={comment.rate} />
                        </span>
            
                        <div
                            className="flex flex-col items-center gap-2"
                        >
                        <p
                            className="text-xs leading-5"
                        >
                            {comment.comment.length >= 220 ? comment.comment.substring(0, 220)+"..." : comment.comment}
                        </p>
                        <img 
                            src={comment.image}
                            alt="Comment Image"
                            className="w-full h-72 object-cover object-center"
                        />
                        </div>
            
                        <span>
                            <a 
                                className="text-xs text-mustard/80 hover:text-mustard hover:underline font-medium"
                                href="#"
                            >
                                View comment
                            </a>
                        </span>
                    </div>
                ))}
            </div>
            <div
                className="w-full flex items-center justify-between mt-4"
            >
                <div
                    className="w-[80%] flex items-center justify-center lg:gap-3"
                >
                    {comments
                        .filter((_, index) => index<Math.ceil((comments.length-1)/3))
                        .map((_, index) => (
                            <button
                                className={`w-4 lg:w-10 h-1 rounded-lg shadow-md ${index === commentIndex ? 'bg-slate-900' : 'bg-slate-400'} hover:bg-slate-900 transition-all ease-linear`}
                                onClick={() => setCommentIndex(index)}
                            >

                            </button>
                        ))
                    }
                    
                </div>
                <div
                    className="w-[20%] flex items-center justify-center gap-4"
                >
                    <span
                        className="hover:bg-slate-900/75 hover:text-slate-50 p-0.5 rounded-md hover:shadow-sm transition-all ease-linear"
                    >
                        <MoveLeft 
                            className="cursor-pointer"
                            onClick={showPrevComment}
                        />
                    </span>
                    <span
                        className="hover:bg-slate-900/75 hover:text-slate-50 p-0.5 rounded-md hover:shadow-sm transition-all ease-linear"
                    >
                        <MoveRight 
                            className="cursor-pointer"
                            onClick={showNextComment}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}