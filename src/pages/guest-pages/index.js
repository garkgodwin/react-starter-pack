import React from "react";
import { Routes, Route } from "react-router-dom";

//? PAGES
import PageHome from "./PageHome";
import PageLogin from "./PageLogin";

const GuestPages = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/login" element={<PageLogin />} />
    </Routes>
  );
};

export default GuestPages;
