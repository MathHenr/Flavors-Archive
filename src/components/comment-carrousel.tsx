import { useState } from "react";

import { comments } from "../db/comments";

import { MoveLeft, MoveRight } from "lucide-react";
import { Rate } from "./rate";
import { useIsMobile } from "../hook/useMobile";

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
                className="flex items-center justify-center gap-4 mt-4"
            >
                <MoveLeft 
                    className="cursor-pointer"
                    onClick={showPrevComment}
                />
                <MoveRight
                    className="cursor-pointer"
                    onClick={showNextComment}
                />
            </div>
        </div>
    )
}