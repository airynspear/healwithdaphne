// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f0f0f",
      paper: "#1a1a1a",
    },
    primary: {
      main: "#d4af37", // Gold
    },
    text: {
      primary: "#fffaf0",
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", serif',
    h1: {
      fontWeight: 300,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 400,
      fontSize: "2rem",
    },
    body1: {
      fontWeight: 300,
      fontSize: "1.1rem",
    },
  },
});

export default theme;
