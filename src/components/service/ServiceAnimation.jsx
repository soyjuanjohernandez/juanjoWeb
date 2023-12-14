import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "Desarrollo web",
    descriptions: `Como desarrollador web dedicado, estoy aquí para dar vida a tu visión en línea. Ofrezco servicios especializados en la creación de sitios web atractivos y funcionales. implementando las últimas tecnologías web, comprometido con construir una presencia digital única para tu negocio.`,
    delayAnimation: "",
  },
  {
    icon: "icon-browser",
    title: "Diseño web",
    descriptions: `¿Quieres un sitio web que no solo llame la atención, sino que también cuente la historia de tu marca? \n Como diseñador web, estoy aquí para transformar tus ideas en una experiencia visual cautivadora, Desde la concepción de la identidad visual hasta la implementación de un diseño responsive.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-linegraph",
    title: "Diseño UI/UX",
    descriptions: `
    Mi misión es transformar ideas en experiencias digitales cautivadoras. Cada pixel cuenta, y cada interacción importa.
    Investigación de usuarios.
    Diseño de wireframes.
    Diseño de alta fidelidad.
    Prototipado.
    Usabilidad
    Colaboración estrecha para lograr resultados excepcionales.
    `,
    delayAnimation: "400",
  },
  
 
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
