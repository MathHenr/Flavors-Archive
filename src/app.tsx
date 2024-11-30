import { useState } from "react";

import { recipes } from "./db/recipes";
import { comments } from "./db/comments";

import { MoveLeft, MoveRight } from "lucide-react";

import { Navigation } from "./components/navigation";
import { Button } from "./components/button";
import { RecipeIcon } from "./components/recipe-icon";
import { Comment } from "./components/comment";

export function App() {
  const [commentMargin, setCommentMargin] = useState(0);
  

  function handleLeftArrow () {
    return commentMargin !== 0 ? (commentMargin - 1530) < 0 ? setCommentMargin(0) : setCommentMargin(commentMargin - 1530) : null;
  }
  
  function handleRightArrow () {
    return commentMargin === 4290 ? null : (commentMargin + 1530) > 4290 ? setCommentMargin(4290) : setCommentMargin(commentMargin + 1530);
  }
  
  return (
    <>
      <Navigation />

      {/* Header */}
      <header
        className="max-w-screen-2xl mx-auto mt-12 px-4 grid grid-cols-1 lg:grid-cols-2 font-poppins"
      >
        <div
          className="col-span-1 flex flex-col items-center lg:items-start justify-between w-full min-h-[148px] gap-10"
        >
          <h1
            className="text-6xl font-bold text-center lg:text-start leading-[4rem]"
          >
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h1>

          <p
            className="text-base font-normal text-center lg:text-start"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque similique et error corrupti quibusdam consequatur ab odio mollitia blanditiis. Ad eligendi tempore veniam soluta officiis quam cupiditate totam dolor itaque?
          </p>
          
          <Button>
            Explore Recipes
          </Button>
          
        </div>

        {/* Image */}
        <div
          className="w-full relative items-center justify-center"
        >
          <img 
            className="lg:absolute flex w-[700px] lg:-ml-[128px] -z-10 -rotate-12 select-none"
            src="/png/food.png" 
            alt="Food"
          />
        </div>
      </header>
      
      {/* Recipe section */}
      <section
        className="mt-24 py-2 font-poppins"
      >
        <div
          className="max-w-screen-2xl mx-auto px-4 flex flex-col"
        >
          <div className="flex items-center justify-between">
            <span>
              <h1
                className="text-3xl font-medium"
              >
                Discover, Create and Share
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </span>
            <Button>
              Create
            </Button>
          </div>

          {/* Recipe Gallery */}
          <div
            className="grid grid-cols-1 lg:grid-cols-4 py-2 gap-3 place-items-center px-4 pb-12"
          >
            {/* recipes */}
            { recipes.map((recipe) => (
              <RecipeIcon 
                key={recipe.name}
                name={recipe.name}
                difficulty={recipe.difficulty}
                timer={recipe.timer}
                serves={recipe.serves}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section
        className="w-full bg-slate-700 p-12 my-12 bg-feastTable bg-cover bg-no-repeat bg-center font-poppins"
      >
        <div
          className="max-w-screen-2xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2"
        >
          {/* quick tip */}
          <aside
            className="col-span-1 flex items-end"
          >
            <div
              className="max-w-[300px] bg-slate-50 text-green-700/90 font-medium p-3 rounded-lg shadow-md"
            >
              This is a quick tip aside html tag
            </div>
          </aside>
          {/* Ábout Project */}
          <aside
            className="col-span-1 place-items-end"
          >
            <div
              className="max-lg:max-w-[400px] max-w-[600px] max-lg:mt-2 max-lg:place-self-end p-4 bg-slate-50 rounded-2xl shadow-md space-y-4"
            >
              <h1
                className="text-3xl font-medium"
              >
                About Project
              </h1>
              <p
                className="text-sm font-normal leading-5"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laboriosam impedit maiores molestias possimus, sapiente explicabo dolorem facere repellat dolorum omnis totam recusandae. Maxime deserunt necessitatibus quidem omnis reiciendis et!
              </p>

              <Button>
                Learn More
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Comments section */}
      <section
        className="max-w-screen-2xl mx-auto mt-20 flex flex-col gap-10 font-poppins mb-20 overflow-hidden"
      >
        <h1
          className="text-3xl text-center font-medium"
        >
          Comments from our Users
        </h1>

        <div
          style={{ marginLeft: `-${commentMargin}px` }}
          className="w-[5800px] px-4 py-2 grid grid-cols-2 lg:grid-cols-4 grid-flow-col gap-5 transition-all ease-in-out duration-500"
        >
          {/* Comment component */}
          {comments.map((comment) => (
            <Comment 
              comment={comment.comment}
              image={comment.image}
              rate={comment.rate}
              recipeName={comment.recipeName}
              user={comment.user}
            />
          ))}
        </div>

        <span
          className="flex gap-3 items-center justify-center"
        >
          <p
            className="text-slate-800 p-0.5 rounded-md transition-all ease-linear hover:bg-slate-200 hover:cursor-pointer hover:text-slate-800/70"
            onClick={handleLeftArrow}
          >
            <MoveLeft />
          </p>
          <p
            className="text-slate-800 p-0.5 rounded-md transition-all ease-linear hover:bg-slate-200 hover:cursor-pointer hover:text-slate-800/70"
            onClick={handleRightArrow}
          >
            <MoveRight />
          </p>
        </span>
        
      </section>
    </>
  )
}