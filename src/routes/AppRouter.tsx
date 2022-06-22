import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner } from "../components/Banner/Banner";
import { SectionContent } from "../components/SectionContent/SectionContent";
import { SectionIcons } from "../components/SectionIcons/SectionIcons";
import img from "../assets/image1.jpg";
import { Footer } from "../components/Footer/Footer";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};
