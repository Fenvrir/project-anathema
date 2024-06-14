import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import ThemeProvider from "./theme/ThemeContextProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
