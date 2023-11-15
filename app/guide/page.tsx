import AnimationWatering from "@/components/lottie/AnimationWatering";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="mt-20 padding-x padding-y max-width h-screen gif">
        <div className="flex flex-row flex-wrap mt-20">
          <div className="w-[550px] ">
            <AnimationWatering />
          </div>

          <div className="lg:flex-[1.5] flex flex-col my-auto ml-8 ">
            <p className=" my-3 text-2xl">
              <strong>Build on weather precipitations </strong> to water your plants!
            </p>

            <ol className="list-decimal ml-8 mt-2 text-lg">
              <li >
                {" "}
                Compose your own garden with <strong>PlantCards</strong> from the catalogue,
              </li>
              <li className="my-3">
                {" "}
                Get <strong>weekly weather precipitations</strong> in your city,
              </li>
              <li>
                Keep track of each plant's watering activity  given the weekly weather.
              </li>
            </ol>

          </div>
        </div>

        <div className="flex flex-col mt-20 ">
          <p className="mx-auto text-xl">Give it a go ! </p> 
          <p className="mx-auto mt-3">Click the link below and start adding PlantCards to the simulated garden.</p> 
          <button className="mx-auto my-5">
            <Link
              href="/catalogue?sim=true"
              className="mr-3 inline my-auto ml-auto font-semibold text-green-900 hover:text-green-600"
              scroll={false}
            >
              <span className="mx-1">🌿</span> Explore the catalogue
            </Link>{" "}
          </button>
        </div>
      </div>
    </main>
  );
}
