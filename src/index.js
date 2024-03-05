import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// STYLING
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// PAGES
import Header from "./components/header.component";
import Homepage from "./components/pages/homepage.component";
import AllActivity from "./components/pages/all-activity.component";
import SignIn from "./components/pages/sign-in.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/all-activity",
    element: <AllActivity />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
