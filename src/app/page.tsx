"use client";

import Image from "next/image";
import Button from "@/components/UI/Button";
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
        <h1 className={styles.heading}>
          <span>Life is full of beautiful mysteries.</span>
          <span className={styles.subHeading}>
            Your pain doesn’t need to be one of them.
          </span>
        </h1>
        <div className={styles.bookButton}>
          <Button
            href="https://book.heygoldie.com/Daphne-Mosko/checkout"
            target="_blank"
          >
            Book a Session
          </Button>
        </div>
      </div>
    </div>
  );
}
