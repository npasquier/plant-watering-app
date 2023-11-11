import { fetchDetails } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const plantId = await params.plantId;

  const detailsData = await fetchDetails(plantId);

  return NextResponse.json({ detailsData });
}
