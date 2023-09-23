import Hero from "@/components/index/Hero";
import "react-toastify/dist/ReactToastify.css";

import SignInTextBtn from "@/components/index/SignInTextBtn";
import InfoGifRight from "@/components/index/InfoGifRight";
import InfoGifLeft from "@/components/index/InfoGifLeft";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <InfoGifLeft>
        <>
          <p className="my-3">
            <span className="mr-1">🚨</span> <strong> Watering </strong> your
            lawn for a couple of minutes <strong> every evening </strong> can
            have a <strong>detrimental effect</strong> .
          </p>

          <p className="my-3 ml-10 text-gray-700">
            -&gt; A small dose of water will not penetrate the soil and will
            stay in the top few millimeters of soil. The roots will not go down
            to look for the water, causing the grass to become weak and shallow
            rooted. This weak grass will be more{" "}
            <em>susceptible to weeds and wear.</em>
          </p>
        </>
      </InfoGifLeft>

      <InfoGifRight>
        <>
          <p className="font-bold">
            <span className="mr-1">✅</span> You need to give your lawn a good
            soak -- 1-inch of water -- once or twice a week.
          </p>
          <p className="mt-3 ml-10 text-gray-700">
            -&gt; A good soak once or twice a week will saturate the soil and
            encourage the roots to go down looking for moisture. Deeper roots
            mean a <em>tougher healthier plant</em>!
          </p>
          <p className="mt-3">
            <span className="mr-1">💧</span> 1-inch of water{" "}
            <strong>&#8773; 25 mm of precipitations</strong>. Outdoor plants are
            thus sometimes naturally sufficiently hydrated through the weather.
          </p>
        </>
      </InfoGifRight>

      <InfoGifLeft>
        <>
          <p className="my-3">
            <span className="mr-1">👉</span> This web app gives a quick and easy
            way to{" "}
            <strong>manage the watering activity of your outdoor plants</strong>{" "}
            given the
            <strong> weekly weather</strong>.
          </p>
          <p className="mt-3 ml-10 text-gray-700">
            -&gt;
            <strong className="ml-1">
              <SignInTextBtn />
            </strong>{" "}
            to discover its full potential: compose your own garden, access
            weekly weather precipitations, and keep track of each plant's
            watering level.
          </p>
          <p className="ml-14 text-gray-500 text-sm">
            {" "}
            Signing In with Google is secure:{" "}
            <u>Google does not share your password</u>. Your password remains a
            secret for everyone except to Google.{" "}
          </p>
        </>
      </InfoGifLeft>
    </main>
  );
}
