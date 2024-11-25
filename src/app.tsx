import { Button } from "./components/button";
import { Navigation } from "./components/navigation";

import { Clock4, UserRound, ChartNoAxesColumn } from "lucide-react";


export function App() {

  return (
    <>
      <Navigation />

      {/* Header */}
      <header
        className="max-w-screen-2xl mx-auto mt-12 px-4 grid grid-cols-1 lg:grid-cols-2 font-poppins overflow-hidden"
      >
        {/* texto com botao */}
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

        {/* imagem */}
        <div
          className="w-full items-center justify-center"
        >
          <img 
            className="lg:absolute flex w-[700px] lg:-ml-[128px] -z-10 -rotate-12 select-none"
            src="/png/food.png" 
            alt="Food"
          />
        </div>
      </header>
      
      {/* section discover */}
      <section
        className="mt-24 py-2"
      >
        <div
          className="max-w-screen-2xl mx-auto px-4 flex flex-col"
        >
          <div className="flex items-center justify-between">
            <span>
              <h1
                className="text-3xl font-semibold"
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

          {/* galeria de receitas */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 py-2 gap-3 place-items-center px-4 pb-[300px]"
          >
            {/* receita */}
            <div
              className="w-[368px] max-w-[400px] rounded-t-3xl overflow-hidden flex flex-col lg:items-start mt-5 transition-all linear duration-300 hover:shadow-md"
            >
              <img src="/png/food-gallery.jpg" alt="Food" className="w-full"/>
              <div
                className="bg-slate-200/95 -mt-4 w-full text-base font-medium font-poppins flex flex-col p-2"
              >
                <span
                  className="flex items-center justify-around mb-4"
                >
                  <p className="text-xs text-green-700/95 flex flex-col items-center justify-center">
                    <Clock4 className="text-green-700 size-4"/>
                    4 min
                  </p>
                  <p className="text-xs text-green-700/95 flex flex-col items-center justify-center">
                    <UserRound className="text-green-700 size-4"/>
                    3 servings
                  </p>
                  <p className="text-xs text-green-700/95 flex flex-col items-center justify-center">
                    <ChartNoAxesColumn className="text-green-700 size-4"/>
                    ease
                  </p>
                </span>
                
                <span>
                  Recipe name
                </span>
                <a 
                  className="max-w-20 text-xs text-mustard/80 hover:text-mustard hover:underline"
                  href="*"
                >
                  View recipe
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}