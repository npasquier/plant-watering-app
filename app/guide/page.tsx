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
              <strong>Optimize the watering of your garden</strong> given the
              weekly weather.
            </p>

            <ol className="list-decimal ml-8 mt-2 text-lg">
              <li>
                {" "}
                <strong>Compose your own garden:</strong> browse the catalogue,
                find a plant and click on the green button to add it to your
                session.
              </li>
              <li>
                {" "}
                <strong>Obtain weekly weather precipitations:</strong> set the
                city of your garden, obtain the weekly weather history and the
                associated forecasted day for watering.{" "}
              </li>
              <li>
                <strong>Optimize each plant's watering level:</strong> keep
                track of the watering activity, and get real-time notifications
                to optimize your watering activity along the week.
              </li>
            </ol>
            <p className="my-3 mt-6  ">
              Sign In to access all these features: Sign In with Google is more secure
              than offering you a way to subscribe on this web app because
              Google provides more security over your password.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-row mt-20">
          <button className="mx-auto">
            <Link
              href="/catalogue?sim=true"
              className="mr-3 inline my-auto ml-auto font-semibold text-green-900 hover:text-green-600"
              scroll={false}
            >
              <span className="mx-1">🌿</span> Go to the catalogue
            </Link>{" "}
          </button>
        </div>
      </div>
    </main>
  );
}
