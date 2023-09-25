import Hero from "@/components/index/Hero";
import "react-toastify/dist/ReactToastify.css";

import SignInTextBtn from "@/components/index/SignInTextBtn";
import InfoGifRight from "@/components/index/InfoGifRight";
import InfoGifLeft from "@/components/index/InfoGifLeft";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <div className="relative lg:mb-0 mb-80">
        <Hero />
      </div>

      <div className="relative">
        <InfoGifLeft>
          <div className="flex flex-row">
            <img src="./water-evening.jpeg" className="flex-1 w-[300px] h-[450px] rounded-br-full" />
            <div className="flex flex-col my-auto ml-16">
              <p className="my-3 text-2xl">
                 <strong> Watering </strong>{" "}
                your lawn for a couple of minutes{" "}
                <strong> every evening </strong> can have a{" "}
                <strong>detrimental effect</strong>.
              </p>

              <p className="my-3 mt-6 text-lg ">
              A small dose of water will not penetrate the soil and will
                stay in the top few millimeters of soil. The roots will not go
                down to look for the water, causing the grass to become weak and
                shallow rooted. This weak grass will be more{" "}
                <em>susceptible to weeds and wear.</em>
              </p>
            </div>
          </div>
        </InfoGifLeft>

        <InfoGifRight>
          <>
          <div className="flex flex-row">
            <div className="flex-1 flex-col my-auto ">
              <p className="my-3 text-2xl">
              You need to give your lawn <strong> a good
              soak once or twice a week</strong>.
              </p>

              <p className="my-8 text-lg">
              A good soak will saturate the soil and
              encourage the roots to go down looking for moisture. Deeper roots
              mean a <strong>tougher healthier plant</strong>!
            
              The weather thus sometimes sufficiently hydrates the outdoor plants. 
            </p>
            </div>
            <img src="./transpi.png" className="flex-1.5 w-[350px] border-solid border-green-800 border-2 rounded-full bg-gray-100 bg-opacity-50" />

          </div>
          </>
        </InfoGifRight>

        <InfoGifLeft>
          <>
          <div className="flex flex-row">
            <img src="./web-app.png" className="flex-1 w-[400px] rounded-tr-3xl" />
            <div className="flex flex-col my-auto ml-16">
              <p className="my-3 text-2xl">
              This web app gives a quick and
              easy way to{" "}
              <strong>
                manage the watering activity of your outdoor plants
              </strong>{" "}
              given the
              <strong> weekly weather</strong>.
              </p>

              <p className="my-3 mt-6 text-lg ">
              <strong >
                <SignInTextBtn />
              </strong>{" "}
              to discover its full potential: compose your own garden, access
              weekly weather precipitations, and keep track of each plant's
              watering level.
              </p>
              <p className="my-3 mt-6 text-lg ">
              Signing In with Google is secure:{" "}
              <u>Google does not share your password</u>. Your password remains
              a secret for everyone except to Google.{" "}
              </p>
            </div>
          </div>
          </>
        </InfoGifLeft>
      </div>
    </main>
  );
}
