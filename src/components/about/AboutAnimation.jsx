import React from "react";
import Services from "../service/ServiceAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>¿Lo que hago?</h3>
          </div>
          <Services />
        </div>
      </section>
    </>
  );
};

export default About;
