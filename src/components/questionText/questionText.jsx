//create the question component to be reused in the form it should have a prop for the question and a text field for the answer

const QuestionText = ({ id, label, placeholder, value }) => {



    //props = {id, label, placeholder, value} use them to create the question dynamically

    return (

        <div className="form-group">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="text" className="form-control" id={id} placeholder={placeholder} value={value} />
        </div>

    );

    };

export default QuestionText