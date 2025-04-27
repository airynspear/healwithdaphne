"use client";

import styles from "./Button.module.scss";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
