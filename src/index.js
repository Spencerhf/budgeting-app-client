import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// STYLING
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// PAGES
import Header from "./components/header.component";
import Homepage from "./components/homepage.component";
import AllActivity from "./components/all-activity.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/all-activity",
    element: <AllActivity />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
