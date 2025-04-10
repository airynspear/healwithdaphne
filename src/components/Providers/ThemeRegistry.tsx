/* File: src/components/Providers/ThemeRegistry.tsx */
"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
