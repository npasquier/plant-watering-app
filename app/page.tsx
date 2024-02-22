import Hero from "@/components/index/Hero";
import InfoGifRight from "@/components/index/InfoGifRight";
import InfoGifLeft from "@/components/index/InfoGifLeft";
import AnimationWatering from "@/components/lottie/AnimationWatering";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />


      <div className="relative mt-3">


        <InfoGifLeft>
          <div className="flex flex-row  max-md:flex-col lg:mt-0 mt-8 relative">
            <div className="lg:w-[250px] lg:h-[350px] w-[60%] max-md:mx-auto  rounded-b-full rounded-tr-full overflow-hidden relative">
              <img src="/water-evening.jpeg" />
            </div>
            <div className="lg:my-auto  lg:w-[70%] lg:ml-12 mt-8 max-md:text-center relative">
              <p className="my-3 text-2xl">
                <strong> Watering </strong> your lawn for a
                <strong> every evening </strong> can have a{" "}
                <strong>detrimental effect</strong>.
              </p>

              <p className="my-3 mt-6 text-lg ">
                A small dose of water will not penetrate the soil and will stay
                in the top few millimeters of soil. The roots will not go down
                to look for the water, causing the grass to become{" "}
                <strong>weak and shallow rooted</strong>. This weak grass will
                be more susceptible to weeds and wear.
              </p>
            </div>
          </div>
        </InfoGifLeft>

        <InfoGifRight>
          <>
            <div className="flex flex-row flex-wrap-reverse">
              <div className="flex-1 flex-col lg:my-auto mt-12 lg:ml-8 lg:mr-16 max-md:text-center">
                <p className="my-3 text-2xl">
                  Your plants need{" "}
                  <strong>
                    {" "}
                    a good soak <em>maximum</em> once or twice a week
                  </strong>
                  .
                </p>

                <p className="my-8 text-lg">
                  A good soak will saturate the soil and encourage the roots to
                  go down looking for moisture. Deeper roots mean a{" "}
                  <strong>tougher healthier plant</strong>!
                </p>
              </div>
              <div>
                <img
                  src="/transpi.png"
                  className="lg:w-[280px] w-[65%] mx-auto border-solid border-green-800 border-2 rounded-b-full rounded-tl-full bg-gray-100 bg-opacity-50"
                />
              </div>
            </div>
          </>
        </InfoGifRight>

        <InfoGifLeft>
          <>
            <div className="flex flex-row flex-wrap">
              <div className="lg:w-[400px] w-[70%] max-md:mx-auto">
                <img src="/web-app.png" />
              </div>

              <div className="lg:flex-[1.5] flex flex-col my-auto lg:ml-8 max-md:text-center">
                <p className=" my-3 text-2xl">
                  <strong>The weather often naturally waters</strong> your
                  outdoor plants.
                </p>

                <p className="my-3 mt-6 ml-4 text-lg ">
                  Sign in to keep track of your garden watering activity with{" "}
                  <strong>PlantCards</strong>.
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
