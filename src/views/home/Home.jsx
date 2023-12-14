import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderAnimation";
import About from "../../components/about/AboutAnimation";
import Resume from "../../components/resume/ResumeAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";

import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeOne = () => {
  useDocumentTitle(
    "Juanjo || Personal website"
  );
  return (
    <div className="main-left theme-dark">

      <Header />
      <Slider />
      <About />
      <Resume />

      <section id="work" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>Algunos proyectos.</h3>
          </div>
          <Portfolio />
        </div>
      </section>

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default HomeOne;
