import React from "react";
import styles from "./Layout.module.css";

export default function Layout(props: any) {
  return (
    <div className={styles.layout}>
      <div>{props.children}</div>
    </div>
  );
}
