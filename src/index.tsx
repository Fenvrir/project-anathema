import { createRoot } from "react-dom/client";
import App from "@/app/App";
import "@/app/styles/index.scss";
import ThemeProvider from "@/app/providers/ThemeProvider/ui/ThemeProvider";

import '@/shared/config/index';

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
