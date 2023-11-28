import './Form.css';
import QuestionText from '../../components/questionText/questionText';

const Form = () => {

const testForm = () => {
    console.log("formulario conectado");
}

testForm();



    return (
        <div className='Form'>
            <div className='p-5'>
                <h1 className='display-3 mx-auto '>Aquí va el banner</h1>
            </div>
            <QuestionText
                label="Pregunta 1"
                placeholder="Respuesta 1"
                value=""
            />
            
        </div>
    );
}

export default Form;