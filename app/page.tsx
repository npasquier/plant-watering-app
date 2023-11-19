import Hero from "@/components/index/Hero";
import InfoGifRight from "@/components/index/InfoGifRight";
import InfoGifLeft from "@/components/index/InfoGifLeft";

export default function Home() {
  return (
      <main className="overflow-hidden">
        
        <Hero />

        <div className="relative mt-3">
          <InfoGifLeft>
            <div className="flex flex-row flex-wrap lg:mt-0 mt-8 relative">
              <div className="lg:w-[250px] lg:h-[350px] rounded-b-full overflow-hidden relative">
                <img src="/water-evening.jpeg" />
              </div>
              <div className="lg:my-auto  lg:w-[70%] w-[100%] lg:ml-12 ml-8 mt-8 relative">
                <p className="my-3 text-2xl">
                  <strong> Watering </strong> your lawn for a 
                  <strong> every evening </strong> can have a{" "}
                  <strong>detrimental effect</strong>.
                </p>

                <p className="my-3 mt-6 text-lg ">
                  A small dose of water will not penetrate the soil and will
                  stay in the top few millimeters of soil. The roots will not go
                  down to look for the water, causing the grass to become{" "}
                  <strong>weak and shallow rooted</strong>. This weak grass will
                  be more susceptible to weeds and wear.
                </p>
              </div>
            </div>
          </InfoGifLeft>

          <InfoGifRight>
            <>
              <div className="flex flex-row flex-wrap-reverse">
                <div className="flex-1 flex-col lg:my-auto mt-12 ml-8 lg:mr-16">
                  <p className="my-3 text-2xl">
                    Your plants need{" "}
                    <strong> a good soak once or twice a week</strong>.
                  </p>

                  <p className="my-8 text-lg">
                    A good soak will saturate the soil and encourage the roots
                    to go down looking for moisture. Deeper roots mean a{" "}
                    <strong>tougher healthier plant</strong>! Note that the
                    weather sometimes takes naturally care of the hydratation of
                    the outdoor plants for you.
                  </p>
                </div>
                <div>
                  <img
                    src="/transpi.png"
                    className="lg:w-[300px] sm:w-[200px] mx-auto border-solid border-green-800 border-2 rounded-full bg-gray-100 bg-opacity-50"
                  />
                </div>
              </div>
            </>
          </InfoGifRight>

          <InfoGifLeft>
            <>
              <div className="flex flex-row flex-wrap">
                <div className="w-[400px] ">
                  <img src="/web-app.png" />
                </div>

                <div className="lg:flex-[1.5] flex flex-col my-auto ml-8">
                  <p className=" my-3 text-2xl">
                  <strong>Build on weather precipitations</strong> to improve{" "}
                     your watering activity.
                  </p>

                  <p className="my-3 mt-6 ml-4 text-lg ">
                    Sign in to discover its full potential: compose your garden, keep track of your watering activity with PlantCards.
                  </p>
        
                  {/* <p className="my-3 mt-6 text-sm ">
                    *Signing In with Google is more secure than offering you a
                    way to subscribe on this web app.{" "}
                  </p> */}
                </div>
              </div>
            </>
          </InfoGifLeft>
        </div>
      </main>
  );
}
