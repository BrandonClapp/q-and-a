-- CreateTable
CREATE TABLE "_TagsOnThreads" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TagsOnThreads_AB_unique" ON "_TagsOnThreads"("A", "B");

-- CreateIndex
CREATE INDEX "_TagsOnThreads_B_index" ON "_TagsOnThreads"("B");

-- AddForeignKey
ALTER TABLE "_TagsOnThreads" ADD CONSTRAINT "_TagsOnThreads_A_fkey" FOREIGN KEY ("A") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagsOnThreads" ADD CONSTRAINT "_TagsOnThreads_B_fkey" FOREIGN KEY ("B") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE CASCADE;
