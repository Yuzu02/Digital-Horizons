import { NextResponse } from "next/server";
import {
  getLikesForPost,
  addLikeToPost,
  removeLikeFromPost,
} from "@/lib/likes";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  try {
    const likes = await getLikesForPost(slug);
    return NextResponse.json(likes);
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json(
      { error: "Error fetching likes" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const { slug, email, username } = await request.json();

  try {
    await addLikeToPost(slug, email, username);
    return NextResponse.json({ message: "Like added successfully" });
  } catch (error) {
    console.error("Error adding like:", error);
    return NextResponse.json({ error: "Error adding like" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { slug, userId, email } = await request.json();

  try {
    await removeLikeFromPost(slug, userId, email);
    return NextResponse.json({ message: "Like removed successfully" });
  } catch (error) {
    console.error("Error removing like:", error);
    return NextResponse.json({ error: "Error removing like" }, { status: 500 });
  }
}
