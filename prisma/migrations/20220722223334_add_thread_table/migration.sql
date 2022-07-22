-- CreateTable
CREATE TABLE "thread" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "thread_pkey" PRIMARY KEY ("id")
);
