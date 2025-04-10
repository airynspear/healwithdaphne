/* File: src/components/Footer/index.tsx */
"use client";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Heal With Daphne. All rights reserved.</p>
    </footer>
  );
}
