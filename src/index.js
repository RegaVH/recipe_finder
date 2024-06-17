import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#81c784",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    h3: {
      fontFamily: "Roboto",
      fontSize: "1.9rem",
      fontWeight: 600,
      lineHeight: 1.98,
    },
    button: {
      fontSize: "1rem",
    },
  },
};
const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
