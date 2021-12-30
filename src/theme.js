import { createTheme } from "@mui/material/styles";
import { orange, yellow } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffba18",
    },
    text: {
      primary: "rgba(0,0,0,0.89)",
      secondary: "rgba(0,0,0,0.55)",
      disabled: "rgba(0,0,0,0.38)",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
});

export default theme;
