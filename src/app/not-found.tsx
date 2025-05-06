// src/app/not-found.tsx
"use client";

import Image from "next/image";
import styles from "./styles/NotFound.module.scss";
import { useTheme } from "@/components/Providers/ThemeProvider";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className={styles.notFound}>
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
      <p className={styles.subtext}>
        This space is gently unfolding. Thank you for your presence.
      </p>
    </div>
  );
}
