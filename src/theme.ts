import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#001E3C",
      paper: "#0A1929",
    },
    text: {
      primary: "#fff",
      secondary: "#B2BAC2",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(194, 224, 255, 0.08)",
  },
});

export default theme;
