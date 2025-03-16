import { getCommentsForUser } from "@/lib/comments";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  props: { params: Promise<{ email: string }> },
) {
  const params = await props.params;
  const { email } = params;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const comments = await getCommentsForUser(email);
  return NextResponse.json(comments, { status: 200 });
}
