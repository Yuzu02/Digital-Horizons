import { NextResponse } from "next/server";
import { getLikesForUser } from "@/lib/likes";

export async function GET(
  request: Request,
  { params }: { params: { email: string } },
) {
  const { email } = params;

  try {
    const likes = await getLikesForUser(email);
    return NextResponse.json(likes);
  } catch (error) {
    console.error("Error fetching user likes:", error);
    return NextResponse.json(
      { error: "Error fetching user likes" },
      { status: 500 },
    );
  }
}
