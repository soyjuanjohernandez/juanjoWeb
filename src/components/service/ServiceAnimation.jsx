import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Diseño web",
    descriptions: `¿Quieres un sitio web que no solo llame la atención, sino que también cuente la historia de tu marca? \n Como diseñador web, estoy aquí para transformar tus ideas en una experiencia visual cautivadora, Desde la concepción de la identidad visual hasta la implementación de un diseño responsive.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Desarrollo web",
    descriptions: `Como desarrollador web dedicado, estoy aquí para dar vida a tu visión en línea. Ofrezco servicios especializados en la creación de sitios web atractivos y funcionales. implementando las últimas tecnologías web, comprometido con construir una presencia digital única para tu negocio.`,
    delayAnimation: "200",
  },
  // {
  //   icon: "icon-target",
  //   title: "Seo Marketing",
  //   descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //   eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //   delayAnimation: "400",
  // },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
