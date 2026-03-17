import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./index.css";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
