"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/UI/Button";
import CustomSwitch from "@/components/UI/Switch";
import { useTheme } from "@/components/Providers/ThemeProvider";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    setIsMounted(true); // Safe to access window after mounted

    const handleResize = () => {
      if (window.innerWidth > 850) {
        setIsDesktop(true);
        setMobileMenuOpen(false);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize(); // run once immediately
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

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
          src="/assets/logo-text-light-new.png"
          alt="Logo Light"
          width={180}
          height={78}
          priority
          className={`${styles.logo} ${
            theme === "light" ? styles.visible : styles.hidden
          }`}
        />
      </div>

      <nav className={styles.nav}>
        <div className={styles.circle}></div>
        <div className={styles.circleSmall}></div>

        <Link href="/" className={styles.navItem}>
          Home
        </Link>

        <div
          className={styles.navItem}
          onMouseEnter={() => setResourcesOpen(true)}
          onMouseLeave={() => setResourcesOpen(false)}
        >
          Resources
          {resourcesOpen && (
            <div className={styles.dropdown}>
              <Link href="/blog" className={styles.dropdownItem}>
                Blog
              </Link>
              <Link href="/affiliates" className={styles.dropdownItem}>
                Affiliates
              </Link>
              <Link href="/video-library" className={styles.dropdownItem}>
                Video Library
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact" className={styles.navItem}>
          Contact
        </Link>
        <div className={`${styles.circle} ${styles.circleRight}`}></div>
        <div className={`${styles.circleSmall} ${styles.circleRight}`}></div>
      </nav>

      <div className={styles.actions}>
        <div className={styles.bookButton}>
          <Button
            href="https://book.heygoldie.com/Daphne-Mosko/checkout"
            target="_blank"
          >
            Book a Session
          </Button>
        </div>

        <div className={styles.switch}>
          {isMounted && isDesktop && (
            <CustomSwitch checked={theme === "dark"} onChange={toggleTheme} />
          )}
        </div>

        <button
          className={styles.mobileNavToggle}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <CustomSwitch checked={theme === "dark"} onChange={toggleTheme} />
          </div>
          <Link href="/" className={styles.mobileNavItem}>
            Home
          </Link>
          <Link href="/blog" className={styles.mobileNavItem}>
            Blog
          </Link>
          <Link href="/affiliates" className={styles.mobileNavItem}>
            Affiliates
          </Link>
          <Link href="/video-library" className={styles.mobileNavItem}>
            Video Library
          </Link>
          <Link href="/contact" className={styles.mobileNavItem}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
