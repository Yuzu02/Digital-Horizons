import { NextApiRequest, NextApiResponse } from "next";
import { getCommentsForUser } from "@/lib/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { email } = req.query;
    const comments = getCommentsForUser(email as string);
    res.status(200).json(comments);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
