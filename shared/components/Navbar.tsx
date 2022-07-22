import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>Forum</div>
      <div className={styles.links}>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/tags">
            <a>Tags</a>
          </Link>
        </div>
        <div>Sign In</div>
        <div>Sign Up</div>
      </div>
    </div>
  );
}
