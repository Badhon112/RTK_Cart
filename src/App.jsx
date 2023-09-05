import React from "react";
import Headers from "./components/Headers";
import Home from "./components/Home";
import CartDetails from "./components/CartDetails";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </>
  );
}
