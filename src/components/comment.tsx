import { Rate } from "./rate";

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fuga id maiores architecto, recusandae inventore officiis distinctio quisquam sit tempora cumque! Vitae perferendis praesentium quos quas, iure consequuntur voluptatem debitis."

interface CommentProps {
    comment: string;
    rate: number;
    recipeName: string;
    image: string;
    user: {
        username: string;
        picture: string;
    }
}


export function Comment ({
    comment,
    rate,
    recipeName,
    user,
    image
}: CommentProps) {
    return (
        <div
            className="col-span-1 w-[368px] max-h-[500px] bg-slate-50 p-2 flex flex-col gap-2 rounded-md shadow-md hover:scale-105 hove:shadow-xl transition-all ease-in-out duration-300"
          >
            <div
              className="flex items-center gap-8"
            >
              <img
                className="bg-slate-200 rounded-full size-12 border-none"
                src={user.picture}
                alt="User photo"
              />
              <span>
                <p
                  className="text-sm lg:text-base font-medium"
                >
                  {recipeName}
                </p>
                <p
                  className="text-xs font-normal text-slate-500"
                >
                  {user.username}
                </p>
              </span>
            </div>

            <span>
              <Rate rating={rate} />
            </span>

            <div
              className="flex flex-col items-center gap-2"
            >
              <p
                className="text-xs leading-5"
              >
                {comment.length >= 220 ? comment.substring(0, 220)+"..." : comment}
              </p>
              <img 
                src={image}
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
    )
}