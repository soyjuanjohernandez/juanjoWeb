import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {

  email: " juanhernandez.code@gmail.com",
};

const sliderContent = {
  name: "Juan José",
  designation: "Frontend Developer",
  description: `Soy un desarrollador front-end con más de 3 años de
  experiencia. Soy de Medellín, Colombia. Desarrollo y creo Web sites
  para personas y compañías increíbles en todo el mundo. 
  Me gusta trabajar aprendiendo algo nuevo cada día,
  conocer nuevas personas y tener nuevas experiencias.`,
  btnText: " Donwload CV",
};

const Slider = () => {
  return (
    <>
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            {/* <a href="tel:+04 6545-9535-6515">{conctInfo.phone}</a> */}
            <a href={`mailto:mail%20to:${conctInfo.email},com`}>
              {conctInfo.email}
            </a>
          </div>
        </div>

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hola, soy 
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Frontend Developer</p>
                    <p className="loop-text lead"> UI/UX Designer</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="./JuanjoHernandezCV.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url("/juanjoWeb/img/slider/juan_jose_informal.jpg")`,
            filter: "contrast(1.1) opacity(0.7)"
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
