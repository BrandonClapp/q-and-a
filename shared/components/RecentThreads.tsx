import React from "react";
import { ThreadWithRelations } from "../models/ThreadWithRelations";
import styles from "./RecentThreads.module.css";
import ThreadCard from "./ThreadCard";

interface RecentThreadsProps {
  threads: ThreadWithRelations[];
}

export default function RecentThreads(props: RecentThreadsProps) {
  const { threads } = props;

  return (
    <div>
      <h1>Threads</h1>
      <div className={styles.threadsContainer}>
        {threads.map((thread) => (
          <ThreadCard
            key={thread.id}
            title={thread.title}
            exerpt={thread.content}
            authorName={thread.author.name}
            tags={thread.tags}
          />
        ))}
      </div>
    </div>
  );
}
