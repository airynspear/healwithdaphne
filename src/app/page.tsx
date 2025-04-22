"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useTheme } from "@/components/Providers/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  const logoSrc =
    theme === "light" ? "/assets/logo-light.png" : "/assets/logo.png";

  return (
    <div className={styles.hero}>
      <Image
        src={logoSrc}
        alt="Heal with Daphne Logo"
        width={200}
        height={285}
        priority
      />
      <div className={styles.content}>
        <h1 className={styles.heading}>Welcome to Heal with Daphne</h1>
        <p className={styles.subtext}>
          This space is gently unfolding. Thank you for your presence.
        </p>
      </div>
    </div>
  );
}
