import { useState } from "react";

import { MoveLeft, MoveRight } from "lucide-react";

import { Comment } from "./comment";

interface CarrouselProps {
    comments: {
        comment: string;
        image: string;
        user: {
            username: string;
            picture: string;
        };
        rate: number;
        recipeName: string;
    }[]
}

export const Carrousel = ({ comments }: CarrouselProps) => {
    const [index, setIndex] = useState(0);
    const commentsPerPage = 4;
    
    const canGoNext: boolean = index + commentsPerPage < comments.length;

    const canGoPrevious: boolean = index - commentsPerPage >= 0;

    const visibleComments = comments.slice(index, index + commentsPerPage);
    
    function handleNextComments (): void | null {
        return canGoNext ? setIndex(index + commentsPerPage) : null;
    }

    function handlePreviousComments (): void | null {
        return canGoPrevious ? setIndex(index - commentsPerPage) : null;
    }
    
    return (
        <>
            <div
                className="w-full px-4 py-2 flex flex-row gap-5"
            >
                {/* Comment component */}
                {visibleComments
                    .map((comment) => (
                        <Comment 
                            comment={comment.comment}
                            image={comment.image}
                            rate={comment.rate}
                            recipeName={comment.recipeName}
                            user={comment.user}
                        />
                    ))
                }
            </div>

            <span
                className="flex gap-3 items-center justify-center"
            >
                <p
                    className="text-slate-800 p-0.5 rounded-md transition-all ease-linear hover:bg-slate-200 hover:cursor-pointer hover:text-slate-800/70"
                    onClick={handlePreviousComments}
                >
                    <MoveLeft />
                </p>
                <p
                    className="text-slate-800 p-0.5 rounded-md transition-all ease-linear hover:bg-slate-200 hover:cursor-pointer hover:text-slate-800/70"
                    onClick={handleNextComments}
                >
                    <MoveRight />
                </p>
            </span>
        </>
    )
}