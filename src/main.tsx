import { createRoot } from "react-dom/client";
import AppRouter from "./paginas/AppRouter";
import "./estilos/tailwind.css";

createRoot(document.getElementById("root")!).render(<AppRouter />);
