// app/api/comments/[email]/route.ts

import { NextResponse } from "next/server";
import { getCommentsForUser } from "@/lib/comments";

export async function GET(
  request: Request,
  { params }: { params: { email: string } },
) {
  const { email } = params;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const comments = getCommentsForUser(email);

  return NextResponse.json(comments, { status: 200 });
}
