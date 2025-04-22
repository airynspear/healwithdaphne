"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import Switch from "@mui/material/Switch";
import { useTheme } from "@/components/Providers/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          src="/assets/logo-text.png"
          alt="Logo Dark"
          width={180}
          height={78}
          priority
          className={`${styles.logo} ${
            theme === "dark" ? styles.visible : styles.hidden
          }`}
        />
        <Image
          src="/assets/logo-text-light.png"
          alt="Logo Light"
          width={180}
          height={78}
          priority
          className={`${styles.logo} ${
            theme === "light" ? styles.visible : styles.hidden
          }`}
        />
      </div>
      <div className={styles.toggle}>
        <Switch
          checked={theme === "light"}
          onChange={toggleTheme}
          color="default"
        />
      </div>
    </header>
  );
}
