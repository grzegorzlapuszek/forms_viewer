import React from "react";
import { createRoot } from "react-dom/client";
import Main, { loader as mainLoader } from "./routes/Main";
import Details from "./routes/Details";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "details/:detailsId",
    element: <Details />,
  },
]);

createRoot(document.getElementById("app-root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
