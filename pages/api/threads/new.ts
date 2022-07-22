import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function NewThread(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newThread = await prisma.thread.create({
    data: {
      title: "Generated Thread Title",
      content: "Generated thread content",
      createdAt: new Date(),
    },
  });

  res.status(200).json({ id: newThread.id });
}
