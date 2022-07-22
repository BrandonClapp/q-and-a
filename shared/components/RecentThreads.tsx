import React from "react";
import styles from "./RecentThreads.module.css";
import ThreadCard from "./ThreadCard";

export default function RecentThreads() {
  return (
    <div>
      <h1>Threads</h1>
      <div className={styles.threadsContainer}>
        <ThreadCard
          title="My first thread title"
          exerpt="Some thread exerpt"
          authorName="Alex"
          tags={["help", "new"]}
        />
        <ThreadCard
          title="My second thread title"
          exerpt="Some thread exerpt"
          authorName="Brandon"
          tags={["question"]}
        />
      </div>
    </div>
  );
}
