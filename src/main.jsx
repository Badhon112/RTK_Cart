import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartDetails from "./components/CartDetails.jsx";
import Headers from "./components/Headers.jsx";
import Home from "./components/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Headers></Headers>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/Cart",
    element: (
      <>
        <Headers />
        <CartDetails></CartDetails>
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
