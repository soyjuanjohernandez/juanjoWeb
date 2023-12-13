import React from "react";
// import Preview from "../views/Preview";
// import LightProfessionalAnimation from "../views/all-home-version/LightProfessionalAnimation";
// import HomeLightProfessional2 from "../views/all-home-version/HomeLightProfessional2";
// import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
// import HomeLightRtlAnimation from "../views/all-home-version/HomeLightRtlAnimation";
// import HomeDarkParticles from "../views/all-home-version/HomeDarkParticles";
import Home from "../views/home/Home";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/juanjoWeb" element={<Home />} />
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
