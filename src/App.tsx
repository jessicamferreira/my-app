import React from "react";
import GlobalStyle from "./config/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes/AppRouter";

const themes = {
  dark: {
    color: "#f5f5f5",
    bgColor: "#333",
    primary: "#19def0"
  },

  light: {
    color: "#333",
    bgColor: "#f5f5f5",
    primary: "#6747b6e9"
  }
};

function App() {
  return (
    <div>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
