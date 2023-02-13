import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Features/AboutUs/AboutUs";
import Home from "../Features/Home/Home";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
