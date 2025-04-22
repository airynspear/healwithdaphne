"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useTheme } from "@/components/Providers/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={styles.hero}>
      <div className={styles.logoWrapper}>
        <Image
          src="/assets/logo.png"
          alt="Logo Dark"
          width={200}
          height={285}
          priority
          className={`${styles.logo} ${
            theme === "dark" ? styles.visible : styles.hidden
          }`}
        />
        <Image
          src="/assets/logo-light.png"
          alt="Logo Light"
          width={200}
          height={285}
          priority
          className={`${styles.logo} ${
            theme === "light" ? styles.visible : styles.hidden
          }`}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Welcome to Heal with Daphne</h1>
        <p className={styles.subtext}>
          This space is gently unfolding. Thank you for your presence.
        </p>
      </div>
    </div>
  );
}
