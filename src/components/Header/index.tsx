/* File: src/components/Header/index.tsx */
"use client";

import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          src="/assets/logo-text.png"
          alt="Heal With Daphne Logo"
          width={180}
          height={78}
          priority
        />
      </div>
    </header>
  );
}
