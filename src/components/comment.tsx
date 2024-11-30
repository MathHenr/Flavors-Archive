import { Rate } from "./rate";

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fuga id maiores architecto, recusandae inventore officiis distinctio quisquam sit tempora cumque! Vitae perferendis praesentium quos quas, iure consequuntur voluptatem debitis."

export function Comment () {
    return (
        <div
            className="bg-white p-2 flex flex-col gap-2 rounded-md shadow-md"
          >
            <div
              className="flex items-center gap-8"
            >
              <div
                className="bg-slate-200 rounded-full size-12"
              />
              <span>
                <p
                  className="text-base font-medium"
                >
                  Nome da receita
                </p>
                <p
                  className="text-xs font-normal text-slate-500"
                >
                  username
                </p>
              </span>
            </div>

            <span>
              <Rate rating={2.5} />
            </span>

            <div
              className="flex flex-col items-center gap-2"
            >
              <p
                className="text-xs leading-5"
              >
                {text.length >= 220 ? text.substring(0, 220)+"..." : text}
              </p>
              <div 
                className="w-full h-[108px] bg-slate-400"
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