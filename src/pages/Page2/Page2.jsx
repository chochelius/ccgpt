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
