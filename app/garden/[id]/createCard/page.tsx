import AddCardForm from "@/components/garden/AddCardForm";
import { UserModel } from "@/models/user";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function page(searchParams: any) {
  const user = await UserModel.findById(searchParams.params.id);

  return (
    <main className="overflow-hidden">
      <section className="my-20">
        <div className="mt-20 w-screen max-width mb-auto">
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="flex flex-row gap-2 mt-32  padding-x padding-y max-width ">
            <Image
              src="/gardener.svg"
              width={80}
              height={80}
              priority
              alt="Picture of gardener AI"
            />
            <div className="bubble-wide mx-30 p-6 bg-gray-50 text-gray-700  font-sans rounded-3xl shadow-xl bubble-bottom-left">
              <p className="font-semibold">
                Let's create a PlantCard from sractch 😃
              </p>

              <p className="my-1">Please fill in the required inputs.</p>
            </div>
          </div>
          <div className="padding-x  max-width mt-8">
          <AddCardForm />
          </div>
        </div>
      </section>
    </main>
  );
}
