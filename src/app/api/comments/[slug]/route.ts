import { authOptions } from "@/auth/authOptions";
import { addCommentToPost, getCommentsForPost } from "@/lib/comments";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const comments = await getCommentsForPost(params.slug);
  return NextResponse.json(comments);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { content } = await request.json();
  if (!content) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 });
  }

  if (content.length > 500) {
    return NextResponse.json(
      { error: "Content must be less than 500 characters" },
      { status: 400 },
    );
  }

  await addCommentToPost(params.slug, {
    content,
    author: session.user?.name ?? "Anonymous",
    authorImage: session.user?.image ?? "/default-avatar.png",
    email: session.user?.email ?? "email@example",
    postSlug: params.slug,
  });

  return NextResponse.json({ success: true });
}
