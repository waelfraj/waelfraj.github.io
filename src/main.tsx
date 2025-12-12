import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Defer non-critical CSS loading
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Preload critical resources
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload below-the-fold components
    import("@/components/About");
    import("@/components/Skills");
  });
}
