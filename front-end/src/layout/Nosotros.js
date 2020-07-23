import React from "react";

const Nosotros = () => {
  function changeHis() {
    const his = document.getElementById("historia");
    const nos = document.getElementById("nos");
    const rec = document.getElementById("rec");
    const cer = document.getElementById("cer");

    const nosotros = document.getElementById("quienes-vision");
    const history = document.getElementById("nuestra-his");
    const reco = document.getElementById("reconocimientos");
    const certi = document.getElementById("certificaciones");

    // Botones
    his.classList.add("active");
    nos.classList.remove("active");
    rec.classList.remove("active");
    cer.classList.remove("active");

    // Secciones
    nosotros.classList.remove("activo");
    nosotros.classList.add("inactivo");
    history.classList.remove("inactivo");
    history.classList.add("activo");
    reco.classList.remove("activo");
    reco.classList.add("inactivo");
    certi.classList.remove("activo");
    certi.classList.add("inactivo");
  }

  function changeNos() {
    const his = document.getElementById("historia");
    const nos = document.getElementById("nos");
    const rec = document.getElementById("rec");
    const cer = document.getElementById("cer");

    const nosotros = document.getElementById("quienes-vision");
    const history = document.getElementById("nuestra-his");
    const reco = document.getElementById("reconocimientos");
    const certi = document.getElementById("certificaciones");

    // Botones
    his.classList.remove("active");
    nos.classList.add("active");
    rec.classList.remove("active");
    cer.classList.remove("active");

    // Secciones
    nosotros.classList.remove("inactivo");
    nosotros.classList.add("activo");
    history.classList.remove("activo");
    history.classList.add("inactivo");
    reco.classList.remove("activo");
    reco.classList.add("inactivo");
    certi.classList.remove("activo");
    certi.classList.add("inactivo");
  }

  function changeRec() {
    const his = document.getElementById("historia");
    const nos = document.getElementById("nos");
    const rec = document.getElementById("rec");
    const cer = document.getElementById("cer");

    const nosotros = document.getElementById("quienes-vision");
    const history = document.getElementById("nuestra-his");
    const reco = document.getElementById("reconocimientos");
    const certi = document.getElementById("certificaciones");

    // Botones
    his.classList.remove("active");
    nos.classList.remove("active");
    rec.classList.add("active");
    cer.classList.remove("active");

    // Secciones
    nosotros.classList.remove("activo");
    nosotros.classList.add("inactivo");
    history.classList.remove("activo");
    history.classList.add("inactivo");
    reco.classList.remove("inactivo");
    reco.classList.add("activo");
    certi.classList.remove("activo");
    certi.classList.add("inactivo");
  }

  function changeCer() {
    const his = document.getElementById("historia");
    const nos = document.getElementById("nos");
    const rec = document.getElementById("rec");
    const cer = document.getElementById("cer");

    const nosotros = document.getElementById("quienes-vision");
    const history = document.getElementById("nuestra-his");
    const reco = document.getElementById("reconocimientos");
    const certi = document.getElementById("certificaciones");

    // Botones
    his.classList.remove("active");
    nos.classList.remove("active");
    rec.classList.remove("active");
    cer.classList.add("active");

    // Secciones
    nosotros.classList.remove("activo");
    nosotros.classList.add("inactivo");
    history.classList.remove("activo");
    history.classList.add("inactivo");
    reco.classList.remove("activo");
    reco.classList.add("inactivo");
    certi.classList.remove("inactivo");
    certi.classList.add("activo");
  }

  return (
    <div className="Nosotros">
      <div className="container">
        <div className="row text-center second-nav">
          <div className="col-3">
            <button className="active" onClick={changeNos} id="nos">
              Nosotros
            </button>
          </div>
          <div className="col-3">
            <button onClick={changeHis} id="historia">
              {" "}
              Nuestra Historia
            </button>
          </div>
          <div className="col-3">
            <button onClick={changeRec} id="rec">
              Reconocimientos{" "}
            </button>
          </div>
          <div className="col-3">
            <button onClick={changeCer} id="cer">
              Certificaciones{" "}
            </button>
          </div>
        </div>
        <div id="quienes-vision" className="activo">
          <div className="row" id="#nosotros">
            <div className="col-lg-6">
              <h1>¿Quiénes Somos?</h1>
              <p>
                DISINGMEC LTDA es una organización que tiene por objeto la
                prestación de servicio de Ingeniería a nivel de ejecución de
                proyectos de montaje y mantenimiento mecánico y obras civiles,
                dentro de los sectores público y privado. La empresa fue fundada
                en el año de 1995 con el propósito de llevar a la practica
                soluciones integrales y económicas a los complejos problemas que
                el desarrollo industrial plantea. DISINGMEC LTDA se ha
                caracterizado por su más estricta sujeción a las normas técnicas
                exigidas y al cumplimiento de los compromisos de términos de
                entrega y presupuesto.
              </p>
            </div>
            <div className="col-lg-6"></div>
          </div>
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <h1>Misión y Visión</h1>
              <p>
                Somos una empresa de ingeniería metalmecánica, especializada en
                brindar soluciones integrales para la industria en general, a
                través de actividades de diseño, fabricación, reparación,
                montajes y asesoría técnica de proyectos. Nos apoyamos en un
                talento humano competente, cuya labor es contribuir a la
                consecución de nuestro objetivo principal, que es ofertar
                productos y servicios que le den satisfacción al cliente
                respetando el medio ambiente y las disposiciones
                gubernamentales.
                <br></br>
                <br></br>
                Para el año 2019, DISINGMEC LTDA se reconocerá como una empresa
                metalmecánica líder en la Industria Nacional, que desarrolla su
                gestión apoyada en procesos eficientes y fundamentados en
                sistemas de Gestión, lo que le permitirá adaptarse a los
                constantes cambios tecnológicos y a responder a los
                requerimientos de sus clientes, con calidad y seguridad.
              </p>
            </div>
          </div>
        </div>
        <div id="nuestra-his" className="inactivo">
          <h1>Nuestra Historia</h1>
        </div>
        <div id="reconocimientos" className="inactivo">
          <h1>Reconocimientos</h1>
        </div>
        <div id="certificaciones" className="inactivo">
          <h1>Certificaciones</h1>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
