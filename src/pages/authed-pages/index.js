import React from "react";
import { Routes, Route } from "react-router-dom";

//? PAGES
import PageDashboard from "./PageDashboard";

const AuthedPages = () => {
  return (
    <Routes>
      <Route path="/" element={<PageDashboard />} />
    </Routes>
  );
};

export default AuthedPages;
