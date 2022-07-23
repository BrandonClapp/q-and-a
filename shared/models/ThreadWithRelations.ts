import { user, thread, TagsOnThreads, tag } from "@prisma/client";

export type ThreadWithRelations = thread & {
  author: user;
  tags: tag[];
};
