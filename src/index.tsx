import { createRoot } from "react-dom/client";
import { Counter } from "./Component/Counter";

// Render your React component instead
const root = createRoot(document.getElementById("root"));
root.render(<Counter/>);
