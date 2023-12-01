//create a form component following the next questions and possible answers

// nombre, placeholder: "ingrese su nombre", type: "text"
// edad, avaliable options "18-24", 25-34", "35-44", "45-54", "55-64", "65+"
// email, placeholder: "ingrese su email", type: "email"
// genero, avaliable options "masculino", "femenino", "otro"
//pais text, placeholder: "ingrese su pais", type: "text"
// vivienda options: "casa", "departamento", casa rural, unifamiliar
// continuar y enviar button
// segunda pagina con los datos ingresados y un boton para volver a la pagina anterior
//
// que fuente de calefaccion usa? options: "gas", "electricidad", "leña", "otros"
// tu casa tiene aire acondicionado? options: "si", "no"
// que tipo de aire acondicionado? options: "central", "split", "ventana", "otros"
// que tipo de iluminacion usa? options: "led", "ahorradores", "incandescentes", "otros"
// como gestionas tu residuos? options: "reciclo", "tiro todo junto", "otros"
// que tipo de transporte usas? options: "auto", "moto", "bicicleta", "transporte publico", "otros"

// Path: src/pages/Form/Form.jsx

//use bootstrap classes to style the form

// Path: src/pages/Form/Form.jsx

import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("");
  const [pais, setPais] = useState("");
  const [vivienda, setVivienda] = useState("");

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleEdad = (e) => {
    setEdad(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGenero = (e) => {
    setGenero(e.target.value);
  };

  const handlePais = (e) => {
    setPais(e.target.value);
  };

  const handleVivienda = (e) => {
    setVivienda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      nombre,
      edad,
      email,
      genero,
      pais,
      vivienda,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="my-5 py-5 overflow-scroll">
      <h1 className="text-center">Encuesta</h1>
      <h2 className="text-center">Datos personales</h2>
      <div className="form-group">
        <label htmlFor="nombre" className="py-2">
          Nombre
        </label>

        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          style={{ height: "50px" }}
          onChange={handleNombre}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edad" className="py-2">
          Edad
        </label>

        <div
          className="container-fluid form-control justify-content-center "
          id="edad"
        >
          <div className=" d-flex my-2">
            <div className="col-3">
              <button
                type="button"
                className="btn btn-success"
                value="18-24"
                onClick={handleEdad}
              >
                18-24
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-success"
                value="25-34"
                onClick={handleEdad}
              >
                25-34
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-success"
                value="35-44"
                onClick={handleEdad}
              >
                35-44
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-success"
                value="45 and more"
                onClick={handleEdad}
              >
                45+
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="py-2">
          Email
        </label>

        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Ingrese su email"
          style={{ height: "50px" }}
          value={email}
          onChange={handleEmail}
        />
      </div>

      <div className="form-group">
        <label htmlFor="genero" className="py-2">
          Genero
        </label>
        {/* 
        <select
          className="form-control"
          id="genero"
          value={genero}
          onChange={handleGenero}
        >
          <option value="">Seleccione una opcion</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select> */}
        {/* create a row of buttons with the options
         */}
        <div
          className="container-fluid form-control"
          id="genero"
          value={genero}
          onChange={handleGenero}
        >
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-success"
                value="masculino"
                onClick={handleGenero}
              >
                Masculino
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-success"
                value="femenino"
                onClick={handleGenero}
              >
                Femenino
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-success"
                value="otro"
                onClick={handleGenero}
              >
                Otro
              </button>
            </div>
          </div>
        </div>
        {/* end the form */}
      </div>
      <div className="form-group">
        <label htmlFor="pais">Pais</label>

        <input
          type="text"
          className="form-control"
          id="pais"
          placeholder="Ingrese su pais"
          value={pais}
          onChange={handlePais}
        />
      </div>
      <div
        className="form-group 
      "
      >
        <label htmlFor="vivienda">Vivienda</label>

        <div className="container-fluid form-control pb-5" id="vivienda">
          <div className="row d-flex ">
            <div className="col-2">
              <button
                type="button"
                className="btn btn-success"
                value="casa"
                onClick={handleVivienda}
              >
                Casa
              </button>
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-success"
                value="departamento"
                onClick={handleVivienda}
              >
                Departamento
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-success"
                value="casa rural"
                onClick={handleVivienda}
              >
                Rural
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-success"
                value="unifamiliar"
                onClick={handleVivienda}
              >
                Unifamiliar
              </button>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-success">
        Continuar
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
