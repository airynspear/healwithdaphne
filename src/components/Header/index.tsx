"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import Switch from "@mui/material/Switch";
import { useTheme } from "@/components/Providers/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const logoSrc =
    theme === "light" ? "/assets/logo-text-light.png" : "/assets/logo-text.png";

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          src={logoSrc}
          alt="Heal with Daphne"
          width={180}
          height={78}
          priority
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
