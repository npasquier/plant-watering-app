import { UserModel } from "@/models/user";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, { params }: any) {
  const data = await request.json();

  await connectToDB();

  console.log("PATCHING CITY...:", data.cityName);

  const { id } = params;

  const user = await UserModel.findByIdAndUpdate(
    id,
    { city: data.cityName },
  );

  user?.save();
  console.log("City is updated");

  return NextResponse.json({ message: "City Updated" }, { status: 201 });
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const data = req.body

//   const id = await createItem(data)
//   console.log(data);

//   res.redirect(307, '/')
// }