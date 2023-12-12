import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Diseñador gráfico, UI/UX`,
    jobType: `Monitoreo inteligente | Presencial`,
    jobDuration: `mar. 2017 - may. 2020`,
    timeDuraton: `Tiempo completo`,
    compnayName: "Monitoreo Inteligente",
    jobDescription: `Diseñar la papelería corporativa.
    Diseñar banners y flyers publicitarios.
    Diseñar la pagina web comercial y publicarla con con Wordpress.
    Diseñar y maquetar con CSS las aplicaciones móviles: Guardian GPS, Mintel ckecklist.
    Diseñar en Adobe XD la aplicación móvil Guardian gps driver.
    Diseñar y maquetar en React.js y CSS la aplicación Guardián gps.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Desarrollador front-end`,
    jobType: `Ariadna Communications | Remote`,
    jobDuration: `dic. 2020 - sept. 2021`,
    timeDuraton: `Tiempo completo`,
    compnayName: "Ariadna Communications Group",
    jobDescription: `Maquetar los proyectos requeridos, planteados por el área de diseño hacia el frontend.
    Implementar en el frontend funcionalidades
    requeridas para los proyectos como interacciones consumo y envío de data por medio de APIs. 
    Implementar proyectos en React y Next js.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Desarrollador de software`,
    jobType: `Neoris | Remote`,
    jobDuration: `sept. 2021 - Presente`,
    timeDuraton: `Tiempo completo`,
    compnayName: "NEORIS",
    jobDescription: `Crear el formularios conectarlos con el backend para reportar considerando las condiciones de los campos para diferentes momentos en la gestión, entiendiendo a profundidad la necesidad del negocio.
    Agregar la opción de pagos qr, implementar el lector de qr en app móvil y consumir un microftontend desde la app a través de una webview.
    Implementar y maqutear diversas funcionalidades y flujos para aplicaciones móviles usando la tecnología de miniprogram creando una superapp.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in Horriblensess",
    instituteName: "University Of Evil Doing",
  },
  {
    passingYear: "2013-2016",
    degreeTitle: "Bsc. in Computer Science",
    instituteName: "World University",
  },
  {
    passingYear: "2010-2012",
    degreeTitle: "Graphic Artist Training ",
    instituteName: "Graphic Master Institute",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experiencia.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div> */}

          {/* <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div> */}
    

            {/* <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            
          </div>
        */}
        </div> 
      </section>
    </>
  );
};

export default Resume;
