import { tag } from "@prisma/client";
import React from "react";
import styles from "./ThreadCard.module.css";

interface ThreadCardProps {
  title: string;
  exerpt: string;
  authorName: string;
  tags?: tag[];
}

export default function ThreadCard(props: ThreadCardProps) {
  const { title, exerpt, authorName, tags } = props;

  return (
    <div className={styles.threadCard}>
      <div>{title}</div>
      <div>{exerpt}</div>
      <div>{authorName}</div>
      {tags !== undefined && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div className={styles.tag} key={tag.id}>
              {tag.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
