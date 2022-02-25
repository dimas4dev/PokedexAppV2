import React from "react";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}
