import AnimationWatering from "@/components/lottie/AnimationWatering";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col mt-20 padding-x padding-y max-width  gif">
        <div className="container mx-auto p-8">
          <div className="my-8">
            <h1 className="text-3xl font-bold mb-6">
              About the Plant Watering App
            </h1>
            <p>
              Welcome to the Plant Watering App, where our mission is rooted in
              promoting sustainable development through mindful gardening
              practices. I am passionate about cultivating green and healthy
              plants while addressing the growing scarcity of water.
            </p>
          </div>

          <div className="my-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

            <p>
              At the core of our mission is the drive to guide gardeners toward
              a more sustainable approach to plant care by harnessing the power
              of natural watering through weather precipitations. We envision a
              future where individuals actively engage in sustainable practices,
              building a digital community that shares knowledge, experiences,
              and best practices for nurturing plants.
            </p>
          </div>


          <div className="my-6">
            <h2 className="text-2xl font-bold mb-4">
              Features and Functionality
            </h2>
            <p>
              Our web application addresses the common dilemma of tracking
              weather precipitations and watering activities. Users can
              effortlessly maintain a history of weather patterns and plant
              watering, ensuring a seamless and efficient gardening experience.
              We introduce a unique concept called "plantCards" that allows
              users to create personalized profiles for their plants, sharing
              information and best practices. In the future, we aim to establish
              a marketplace where users can exchange plantCards, fostering a
              collaborative and community-driven approach.
            </p>
          </div>

          <div className="my-6">
            <h2 className="text-2xl font-bold mb-4">
              Building a Sustainable Community
            </h2>

            <p>
              The Plant Watering App is more than just a gardening tool; it's a
              platform that encourages users to connect with like-minded
              individuals and local florists. Through forums and chat features,
              users can exchange insights, seek advice, and collectively work
              towards sustainable plant care practices.
            </p>
          </div>

          <div className="my-6">
            <h2 className="text-2xl font-bold mb-4">Environmental Impact</h2>
            <p>
              We aspire to make a tangible difference by introducing a
              certification label for users who utilize a significant percentage
              of rainfall for watering their plants. This not only recognizes
              their commitment to sustainable practices but also creates a
              collective impact on environmental conservation.
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-2xl font-bold mb-4">
              Your Role in Our Community
            </h2>

            <p>
              As a user, you won't earn money in the short run, but the benefits
              are profound. By adopting our platform, you contribute to better
              water management, promote sustainable practices, protect the
              environment, and nurture your plants. Join us in building a
              community that shares a common goal—sustainable gardening for a
              greener tomorrow.
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-2xl font-bold mb-4">Future Collaborations</h2>
            <p>
              While we're currently forging our path independently, we eagerly
              anticipate future collaborations and partnerships that align with
              our values and contribute to the growth of sustainable practices.
            </p>
          </div>

          <div className="my-6">
            <p>
              Discover the joy of sustainable gardening with the{" "}
              <span className="text-green-500">Plant Watering App</span>
              —where every raindrop counts, and every plant thrives sustainably.
              Start your journey with us today!
            </p>
          </div>

          <div>
            Contact: 
            <a href="" className="text-blue-500 inline-flex ">
              npasquier.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
