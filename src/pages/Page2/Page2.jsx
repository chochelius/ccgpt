// // // que fuente de calefaccion usa? options: "gas", "electricidad", "leña", "otros"
// // // tu casa tiene aire acondicionado? options: "si", "no"
// // // que tipo de aire acondicionado? options: "central", "split", "ventana", "otros"
// // // que tipo de iluminacion usa? options: "led", "ahorradores", "incandescentes", "otros"
// // // como gestionas tu residuos? options: "reciclo", "tiro todo junto", "otros"
// // // que tipo de transporte usas? options: "auto", "moto", "bicicleta", "transporte publico", "otros"

// // // Path: src/pages/Form/Form2.jsx
// // should use buttons on each question to select the answer and then submit the form
// // should style the form using bootstrap classes
// // should use the useState hook to manage the form state
// // should use the prop-types library to validate props
// // should use the onSubmit prop to send the form data to the parent component

// // Path: src/pages/Form/Form2.jsx

// import { useState } from "react";
// import PropTypes from "prop-types";

// const Form2 = ({ onSubmit }) => {
//   const [calefaccion, setCalefaccion] = useState("");
//   const [aireAcondicionado, setAireAcondicionado] = useState("");
//   const [tipoAireAcondicionado, setTipoAireAcondicionado] = useState("");
//   const [iluminacion, setIluminacion] = useState("");
//   const [residuos, setResiduos] = useState("");
//   const [transporte, setTransporte] = useState("");

//   const handleCalefaccion = (e) => {
//     setCalefaccion(e.target.value);
//   }

//   const handleAireAcondicionado = (e) => {
//     setAireAcondicionado(e.target.value);
//   }

//   const handleTipoAireAcondicionado = (e) => {
//     setTipoAireAcondicionado(e.target.value);
//   }

//   const handleIluminacion = (e) => {
//     setIluminacion(e.target.value);
//   }

//   const handleResiduos = (e) => {
//     setResiduos(e.target.value);
//   }

//   const handleTransporte = (e) => {
//     setTransporte(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       calefaccion,
//       aireAcondicionado,
//       tipoAireAcondicionado,
//       iluminacion,
//       residuos,
//       transporte,
//     });
//   };

//   return (

//     <form onSubmit={handleSubmit} className="my-5 py-5 overflow-scroll container">
//       <h1 className="text-center">
//         Encuesta
//       </h1>
//       <h2 className="text-center">Datos personales</h2>
//       <div>
//       <div className="pt-3">
//         <div className="col align-self-center">
//           <div className="mt-1">
// //             <div className="card text-success">
// div className="form-group
// ">
//   <label htmlFor="vivienda">Vivienda</label>

//   <div className="container-fluid form-control pb-5" id="vivienda">
//     <div className="row d-flex ">
//       <div className="col-2">
//         <button
//           type="button"
//           className="btn btn-success"
//           value="casa"
//           onClick={handleVivienda}
//         >
//           Casa
//         </button>
//       </div>
//       <div className="col-4">
//         <button
//           type="button"
//           className="btn btn-success"
//           value="departamento"
//           onClick={handleVivienda}
//         >
//           Departamento
//         </button>
//       </div>
//       <div className="col-2">
//         <button
//           type="button"
//           className="btn btn-success"
//           value="casa rural"
//           onClick={handleVivienda}
//         >
//           Rural
//         </button>
//       </div>
//       <div className="col-2">
//         <button
//           type="button"
//           className="btn btn-success"
//           value="unifamiliar"
//           onClick={handleVivienda}
//         >
//           Unifamiliar
//         </button>
//       </div>
//     </div>

//   </div>

// <div className="form-group">
// <label htmlFor="edad">Edad</label>

// <div className="container-fluid form-control justify-content-center " id="edad">
//   <div className=" d-flex ">
//     <div className="col-3">
//       <button
//         type="button"
//         className="btn btn-success"
//         value="18-24"
//         onClick={handleEdad}
//       >
//         18-24
//       </button>
//     </div>
//     <div className="col-3">
//       <button
//         type="button"
//         className="btn btn-success"
//         value="25-34"
//         onClick={handleEdad}
//       >
//         25-34
//       </button>
//     </div>
//     <div className="col-3">
//       <button
//         type="button"
//         className="btn btn-success"
//         value="35-44"
//         onClick={handleEdad}
//       >
//         35-44
//       </button>
//     </div>
//     <div className="col-3">
//       <button
//         type="button"
//         className="btn btn-success"
//         value="45 and more"
//         onClick={handleEdad}
//       >
//         45+
//       </button>
//     </div>
//   </div>
// </div>
// </div>

// start here

import { useState } from "react";
import PropTypes from "prop-types";

const Form2 = ({ onSubmit }) => {
  const [calefaccion, setCalefaccion] = useState("");
  const [aireAcondicionado, setAireAcondicionado] = useState("");
  const [tipoAireAcondicionado, setTipoAireAcondicionado] = useState("");
  const [iluminacion, setIluminacion] = useState("");
  const [residuos, setResiduos] = useState("");
  const [transporte, setTransporte] = useState("");

  const handleCalefaccion = (e) => {
    setCalefaccion(e.target.value);
  };

  const handleAireAcondicionado = (e) => {
    setAireAcondicionado(e.target.value);
  };

  const handleTipoAireAcondicionado = (e) => {
    setTipoAireAcondicionado(e.target.value);
  };

  const handleIluminacion = (e) => {
    setIluminacion(e.target.value);
  };

  const handleResiduos = (e) => {
    setResiduos(e.target.value);
  };

  const handleTransporte = (e) => {
    setTransporte(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      calefaccion,
      aireAcondicionado,
      tipoAireAcondicionado,
      iluminacion,
      residuos,
      transporte,
    });
  };

  return (
    <div>
      <div className="pt-3" id="form2" onSubmit={handleSubmit}>
        <div className="col align-self-center">
          {/* create a card for each question */}

          <div className="mt-1">
            <div className="card text-success">
              <div className="card-body">
                <h5 className="card-title">¿Qué tipo de calefacción usa?</h5>
                <div
                  className="container-fluid form-control pb-5"
                  id="calefaccion"
                >
                  <div className="row d-flex ">
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="gas"
                        onClick={handleCalefaccion}
                      >
                        Gas
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="electricidad"
                        onClick={handleCalefaccion}
                      >
                        Electricidad
                      </button>
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="leña"
                        onClick={handleCalefaccion}
                      >
                        Leña
                      </button>
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="otros"
                        onClick={handleCalefaccion}
                      >
                        Otros
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card text-success">
              <div className="card-body">
                <h5 className="card-title">
                  ¿Tu casa tiene aire acondicionado?
                </h5>
                <div
                  className="container-fluid form-control pb-5"
                  id="aireAcondicionado"
                >
                  <div className="row d-flex ">
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="si"
                        onClick={handleAireAcondicionado}
                      >
                        Si
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="no"
                        onClick={handleAireAcondicionado}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card text-success">
              <div className="card-body">
                <h5 className="card-title">¿Qué tipo de aire acondicionado?</h5>
                <div
                  className="container-fluid form-control pb-5"
                  id="tipoAireAcondicionado"
                >
                  <div className="row d-flex ">
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="central"
                        onClick={handleTipoAireAcondicionado}
                      >
                        Central
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="split"
                        onClick={handleTipoAireAcondicionado}
                      >
                        Split
                      </button>
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="ventana"
                        onClick={handleTipoAireAcondicionado}
                      >
                        Ventana
                      </button>
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-success"
                        value="otros"
                        onClick={handleTipoAireAcondicionado}
                      >
                        Otros
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card text-success">
                <div className="card-body">
                  <h5 className="card-title">¿Qué tipo de iluminación usa?</h5>
                  <div
                    className="container-fluid form-control pb-5"
                    id="iluminacion"
                  >
                    <div className="row d-flex ">
                      <div className="col-2">
                        <button
                          type="button"
                          className="btn btn-success"
                          value="led"
                          onClick={handleIluminacion}
                        >
                          Led
                        </button>
                      </div>
                      <div className="col-4">
                        <button
                          type="button"
                          className="btn btn-success"
                          value="ahorradores"
                          onClick={handleIluminacion}
                        >
                          Ahorradores
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          type="button"
                          className="btn btn-success"
                          value="incandescentes"
                          onClick={handleIluminacion}
                        >
                          Incandescentes
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          type="button"
                          className="btn btn-success"
                          value="otros"
                          onClick={handleIluminacion}
                        >
                          Otros
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card text-success">
                  <div className="card-body">
                    <h5 className="card-title">
                      ¿Cómo gestionas tus residuos?
                    </h5>
                    <div
                      className="container-fluid form-control pb-5"
                      id="residuos"
                    >
                      <div className="row d-flex ">
                        <div className="col-2">
                          <button
                            type="button"
                            className="btn btn-success"
                            value="reciclo"
                            onClick={handleResiduos}
                          >
                            Reciclo
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            type="button"
                            className="btn btn-success"
                            value="tiro todo junto"
                            onClick={handleResiduos}
                          >
                            Tiro todo junto
                          </button>
                        </div>
                        <div className="col-2">
                          <button
                            type="button"
                            className="btn btn-success"
                            value="otros"
                            onClick={handleResiduos}
                          >
                            Otros
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card text-success">
                    <div className="card-body">
                      <h5 className="card-title">
                        ¿Qué tipo de transporte usas?
                      </h5>
                      <div
                        className="container-fluid form-control pb-5"
                        id="transporte"
                      >
                        <div className="row d-flex ">
                          <div className="col-2">
                            <button
                              type="button"
                              className="btn btn-success"
                              value="auto"
                              onClick={handleTransporte}
                            >
                              Auto
                            </button>
                          </div>
                          <div className="col-4">
                            <button
                              type="button"
                              className="btn btn-success"
                              value="moto"
                              onClick={handleTransporte}
                            >
                              Moto
                            </button>
                          </div>
                          <div className="col-2">
                            <button
                              type="button"
                              className="btn btn-success"
                              value="bicicleta"
                              onClick={handleTransporte}
                            >
                              Bicicleta
                            </button>
                          </div>
                          <div className="col-2">
                            <button
                              type="button"
                              className="btn btn-success"
                              value="transporte publico"
                              onClick={handleTransporte}
                            >
                              Transporte público
                            </button>
                          </div>
                          <div className="col-2">
                            <button
                              type="button"
                              className="btn btn-success"
                              value="otros"
                              onClick={handleTransporte}
                            >
                              Otros
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Form2.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form2;
