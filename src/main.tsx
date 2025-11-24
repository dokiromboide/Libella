import { createRoot } from "react-dom/client";
import AppRouter from "./pages/AppRouter";
import "./index.css";

createRoot(document.getElementById("root")!).render(<AppRouter />);