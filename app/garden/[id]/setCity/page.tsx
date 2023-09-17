import ChangeCity from "@/components/ChangeCity";
import { UserModel } from "@/models/user";

export default async function page(searchParams:any) {


    const user = await UserModel.findById(searchParams.params.id);

    const city = user?.city || "";



  return (
    <main className="overflow-hidden h-screen">
      <section className="my-20 ">
        <div className="mt-20 padding-x padding-y max-width mb-auto">


            <ChangeCity city={city}/>

        </div>
      </section>
    </main>
  );
}
