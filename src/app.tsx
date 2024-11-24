import { Navigation } from "./components/navigation";

export function App() {

  return (
    <>
      <Navigation />

      {/* Primeiro banner do site */}
      <section
        className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 font-poppins"
      >
        {/* texto com botao */}
        <div
          className="col-span-1 flex flex-col items-center justify-between w-full min-h-[148px] gap-10"
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
          
        </div>

        {/* imagem */}
        <div
          className="col-span-1 bg-blue-500"
        >
        
        </div>
      </section>
      
    </>
  )
}