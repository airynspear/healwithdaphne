/* File: src/app/page.tsx */
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.hero}>
      <Image
        src="/assets/logo.png"
        alt="Heal with Daphne Logo"
        width={200}
        height={285}
        priority
      />
      <h1 className={styles.heading}>Welcome to Heal With Daphne</h1>
      <p className={styles.subtext}>
        This space is gently unfolding. Thank you for your presence.
      </p>
    </div>
  );
}
