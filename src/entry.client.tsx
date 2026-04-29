import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { getRouter } from "./router";

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Root element with id 'app' not found in index.html");
}

const router = getRouter();

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
