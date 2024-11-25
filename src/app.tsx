import { Navigation } from "./components/navigation";
import { Button } from "./components/button";
import { RecipeIcon } from "./components/recipe-icon";
import { recipes } from "./db/recipes";

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
            className="grid lg:justify-items-stretch justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-10"
          >
            {/* receitas */}
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

          {/* About section */}
          <div
            className="max-w-screen-[1980px] mx-auto bg"
          >

          </div>
          
        </div>
      </section>
    </>
  )
}