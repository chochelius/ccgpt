import QuestionText from "../../components/questionText/questionText";
import QuestionMulti from "../../components/questionMulti/questionMulti";
import { useState } from "react";

const Form = () => {
  const [preguntasPag1, setPreguntasPag1] = useState([
    {
      id: 1,
      label: "Nombre",
      placeholder: "Ingrese su nombre",
      value: "",
      type: "text",
      className: "questionText",
    },
    {
      id: 2,
      label: "Apellido Paterno",
      placeholder: "Ingrese su apellido paterno",
      value: "",
      type: "text",
      className: "questionMulti",
    },
  ]);

  const handleChange = (event, id) => {
    const { value } = event.target;
    setPreguntasPag1((prevState) =>
      prevState.map((pregunta) =>
        pregunta.id === id ? { ...pregunta, value } : pregunta
      )
    );
  };

  return (
    <div >
      <div className="row justify-content-around">
        <div className=" pt-5 col-12 col-lg-5">
          <h2 className="text-center">Formulario</h2>
          <form>
            {preguntasPag1.map((pregunta) =>
              pregunta.className === "questionText" ? (
                <QuestionText
                  key={pregunta.id}
                  label={pregunta.label}
                  placeholder={pregunta.placeholder}
                  value={pregunta.value}
                  type={pregunta.type}
                  onChange={(event) => handleChange(event, pregunta.id)}
                />
              ) : (
                <QuestionMulti
                  key={pregunta.id}
                  label={pregunta.label}
                  placeholder={pregunta.placeholder}
                  value={pregunta.value}
                  type={pregunta.type}
                  onChange={(event) => handleChange(event, pregunta.id)}
                />
              )
            )}
          </form> 
        </div>
        <div className="col-12 col-lg-5 pt-5">
          <h2 className="text-center">Datos</h2>
          <ul className="list-group">
            {preguntasPag1.map((pregunta) => (
              <li key={pregunta.id} className="list-group-item">
                {pregunta.label}: {pregunta.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
