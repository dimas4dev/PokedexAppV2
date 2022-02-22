import React from "react";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Error404 from "./pages/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/error404" element={<Error404 />} />
      </Routes>
    </>
  );
}
