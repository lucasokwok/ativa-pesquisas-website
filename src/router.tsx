import React from "react";
import { createBrowserRouter } from "react-router-dom";

import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Applications from "./pages/Applications";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "tecnologia", element: <Technology /> },
      { path: "aplicacoes", element: <Applications /> },
      { path: "sobre", element: <About /> },
      { path: "projetos", element: <Projects /> },
      { path: "contato", element: <Contact /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
