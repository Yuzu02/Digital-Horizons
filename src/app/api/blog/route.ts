// /app/blog/categories/[category]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getBlogbyCategory } from "@/lib/fetchers";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string } },
) {
  try {
    const categoryPosts = await getBlogbyCategory(params.category);
    return NextResponse.json(categoryPosts);
  } catch (error) {
    console.error("Error fetching category posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
